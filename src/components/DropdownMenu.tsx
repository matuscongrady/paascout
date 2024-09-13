import { useRef } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useDetectOutsideClick } from '../utils/misc';
import { merge } from 'lodash';
import { box, growDownAnimation, prettyScrollBar, typographyCss } from '../styles/variables';

export function DropdownMenu({
  items,
  triggerElement,
  width,
  dropdownHorizontalPosition,
  dropdownVerticalPosition,
  maxWidth,
  rootCss = {},
  itemGroups,
  closeOnItemClick,
  hideChevron = false,
  maxHeight,
  showItemSeparator
}: {
  items?: ReactNode[];
  itemGroups?: { items: ReactNode[]; heading: string }[];
  triggerElement: ReactNode;
  width?: string;
  maxWidth?: string;
  dropdownHorizontalPosition?: number;
  dropdownVerticalPosition?: number;
  rootCss?: Css;
  closeOnItemClick?: boolean;
  hideChevron?: boolean;
  maxHeight?: Css['maxHeight'];
  showItemSeparator?: boolean;
}) {
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick([triggerRef, menuRef], false);
  const rootStyle: Css = merge({ cursor: 'pointer' }, rootCss);

  return (
    <div css={rootStyle}>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span
          aria-haspopup="true"
          css={{
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            ...typographyCss
          }}
        >
          {triggerElement}
          {(items?.length || itemGroups?.length) && !hideChevron && (
            <span css={{ marginBottom: '-5px', marginLeft: '2px' }}>
              {isOpen ? <BiChevronUp size={22} /> : <BiChevronDown size={22} />}
            </span>
          )}
        </span>
      </div>
      {(items?.length || itemGroups?.length) && (
        <div
          ref={menuRef}
          css={{
            position: 'relative',
            zIndex: 100,
            display: isOpen ? 'inherit' : 'none',
            ...growDownAnimation
          }}
        >
          <ul
            css={{
              listStyle: 'none',
              borderRadius: '6px',
              width: width || 'initial',
              maxWidth: maxWidth || 'initial',
              cursor: 'initial',
              position: 'absolute',
              right: -25 + (dropdownHorizontalPosition || 0),
              marginTop: 20 + (dropdownVerticalPosition || 0),
              padding: '3px',
              ...box,
              ...(maxHeight && { maxHeight, overflowY: 'auto', ...prettyScrollBar })
            }}
          >
            {items?.length && (
              <ItemList
                showItemSeparator={showItemSeparator}
                closeOnItemClick={closeOnItemClick}
                items={items}
                setIsOpen={setIsOpen}
              />
            )}
            {itemGroups?.length && (
              <>
                {itemGroups.map((group) => (
                  <div key={group.heading}>
                    <p
                      css={{
                        marginLeft: '11px',
                        marginTop: '10px',
                        fontSize: '0.8rem'
                      }}
                    >
                      {group.heading}
                    </p>
                    <ItemList
                      closeOnItemClick={closeOnItemClick}
                      items={group.items}
                      showItemSeparator={showItemSeparator}
                      setIsOpen={setIsOpen}
                    />
                  </div>
                ))}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function ItemList({ items, closeOnItemClick, setIsOpen, showItemSeparator }) {
  return items.map((item, idx) => {
    const isLast = idx === items.length - 1;
    return (
      <li
        css={{
          '&:hover': {
            '> div': {
              backgroundColor: '#434343'
            }
          }
        }}
        key={idx}
      >
        <div
          onClick={closeOnItemClick ? () => setIsOpen(false) : () => {}}
          css={{ margin: '2px', borderRadius: '4px' }}
          role="button"
          tabIndex={idx}
        >
          {item}
        </div>
        {!isLast && showItemSeparator && (
          <div css={{ height: '0.5px', background: '#505050 !important', margin: '0px 6px' }} />
        )}
      </li>
    );
  });
}
