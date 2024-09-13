import { ReactNode, useState } from 'react';
import { merge } from 'lodash';
import { BiChevronDown } from 'react-icons/bi';
import { clickableBox, colors } from '../styles/variables';

export function ExpandableItem({
  title,
  expandedContent,
  rootCss,
  disableExpand
}: {
  title: ReactNode;
  expandedContent: ReactNode;
  rootCss?: Css;
  disableExpand?: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleClick = () => {
    setIsCollapsed(disableExpand ? true : !isCollapsed);
  };

  return (
    <div
      css={merge(
        {
          ...clickableBox,
          borderRadius: '6px',
          margin: '15px 0',
          WebkitTapHighlightColor: 'transparent'
        },
        rootCss || {}
      )}
    >
      <div
        css={{
          cursor: 'pointer',
          padding: '10px 15px 10px 25px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyUp={handleClick}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            userSelect: 'none',
            width: '100%'
          }}
        >
          <p css={{ fontWeight: 'bold', width: '100%' }}>{title}</p>
        </div>
        <div
          css={{
            width: '27px',
            height: '27px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <BiChevronDown
            size={20}
            strokeWidth={3}
            color={colors.fontColorPrimary}
            css={
              isCollapsed
                ? {
                    transform: 'rotate(0deg)',
                    WebkitTransition: 'transform 250ms ease-out',
                    MozTransition: 'transform 250ms ease-out',
                    OTransition: 'transform 250ms ease-out',
                    transition: 'transform 250ms ease-out'
                  }
                : {
                    transform: 'rotate(180deg)',
                    WebkitTransition: 'transform 250ms ease-out',
                    MozTransition: 'transform 250ms ease-out',
                    OTransition: 'transform 250ms ease-out',
                    transition: 'transform 250ms ease-out'
                  }
            }
          />
        </div>
      </div>
      {!isCollapsed && (
        <div
          css={{
            marginTop: '5px',
            width: '100%',
            userSelect: 'initial',
            cursor: 'initial',
            padding: '0px 15px 15px 25px'
          }}
        >
          {expandedContent}
        </div>
      )}
    </div>
  );
}
