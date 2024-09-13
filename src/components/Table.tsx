import { merge } from 'lodash';
import { box, onMaxW1280, onMaxW500, onMaxW650, onMaxW750, onMaxW800, prettyScrollBar } from '../styles/variables';
import { Fragment } from 'react';

type RowData = {
  title: ReactNode;
  columns: ReactNode[];
};

export function ColumnHeader({ title = null, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%'
      }}
    >
      <p css={{ lineHeight: 1.4, fontWeight: 'bold' }}>
        <span>{title}</span>
        {children}
      </p>
    </div>
  );
}

const borderColor = 'rgb(60, 60, 60)';

export function Table({
  rowGroups,
  columnHeaders,
  cellWidth,
  rootCss,
  stickyHeader,
  leadingCellWidth,
  leadingCellWidthMaxW800,
  decreasedOpacityColumns = []
}: {
  rowGroups?: { title: ReactNode; data: RowData[] }[];
  columnHeaders: ReactNode[];
  leadingCellWidth?: Css['width'];
  leadingCellWidthMaxW800?: Css['width'];
  cellWidth?: Css['width'];
  rootCss?: Css;
  stickyHeader?: boolean;
  decreasedOpacityColumns?: number[];
}) {
  return (
    <div
      css={merge(
        {
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          marginTop: '15px',
          [onMaxW500]: {
            paddingTop: '15px',
            paddingBottom: '15px',
            display: 'initial'
          }
        },
        rootCss || {}
      )}
    >
      <div
        css={{
          ...box,
          width: '100%',
          flex: '1',
          display: 'flex',
          ...prettyScrollBar,
          flexDirection: 'column',
          alignItems: 'center',
          [onMaxW1280]: {
            // Doesn't work with sticky header, so we only use it if it's required
            overflowX: 'auto'
          }
        }}
      >
        <div
          css={{
            marginBottom: '20px',
            padding: '30px 20px',
            width: '100%',
            [onMaxW750]: {
              padding: '18px 14px'
            },
            [onMaxW650]: {
              marginBottom: '40px',
              padding: '12px 4px'
            }
          }}
        >
          <table
            css={{
              width: '100%',
              borderCollapse: 'collapse',
              position: 'relative'
            }}
          >
            <thead>
              <tr>
                <th
                  css={{
                    ...(stickyHeader && { position: 'sticky', top: 58 }),
                    ...(leadingCellWidth && {
                      width: leadingCellWidth,
                      minWidth: leadingCellWidth,
                      maxWidth: leadingCellWidth
                    }),
                    [onMaxW800]: {
                      width: leadingCellWidthMaxW800,
                      minWidth: leadingCellWidthMaxW800,
                      maxWidth: leadingCellWidthMaxW800
                    }
                  }}
                  key="_0"
                />
                {columnHeaders.map((header, idx) => {
                  const hasDecreasedOpacity = decreasedOpacityColumns.includes(idx);
                  return (
                    <th
                      key={idx}
                      css={{
                        height: '55px',
                        ...(cellWidth && { width: cellWidth, minWidth: cellWidth, maxWidth: cellWidth }),
                        margin: '0 auto',
                        ...(hasDecreasedOpacity && { opacity: 0.2 }),
                        ...(stickyHeader && {
                          position: 'sticky',
                          top: 58,
                          backdropFilter: 'blur(5px)'
                        })
                      }}
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rowGroups.map((group, groupIdx) => (
                <Fragment key={groupIdx}>
                  <tr>
                    <td colSpan={5}>{group.title}</td>
                  </tr>
                  {group.data.map((row, idx) => {
                    const isLastRow = idx === group.data.length - 1;
                    return (
                      <tr
                        key={idx}
                        css={{
                          height: '36px',
                          borderBottom: isLastRow ? '0px' : `1px solid ${borderColor}`,
                          width: 'auto'
                        }}
                      >
                        <td
                          css={{
                            textAlign: 'left',
                            borderRight: `1px solid ${borderColor}`,
                            padding: '4px 7px 4px 7px',
                            [onMaxW650]: {
                              padding: '2px 2px 2px 9px'
                            }
                          }}
                        >
                          {row.title}
                        </td>
                        {row.columns.map((column, columnIdx) => {
                          const isLastColumn = columnIdx === row.columns.length - 1;
                          const hasDecreasedOpacity = decreasedOpacityColumns.includes(columnIdx);
                          return (
                            <td
                              key={columnIdx}
                              css={{
                                borderRight: isLastColumn ? 'none' : `2px solid ${borderColor}`,
                                borderBottom: '0px',
                                ...(cellWidth && { width: cellWidth }),
                                ...(hasDecreasedOpacity && { opacity: 0.2 }),
                                textAlign: 'center',
                                padding: '3px 8px 2px 8px',
                                [onMaxW650]: {
                                  padding: '2px 2px 2px 11px'
                                }
                              }}
                            >
                              {column}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
