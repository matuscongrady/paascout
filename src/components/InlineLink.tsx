/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import merge from 'lodash/merge';
import { navigate } from '@reach/router';
import { colors, typographyCss } from '../styles/variables';

export function InlineLink({
  to,
  children,
  rootCss = {},
  onClick,
  linkColor = 'secondary',
  openInNewTab,
  maxWidth,
  text
}: {
  to: string;
  children?: ReactNode;
  rootCss?: Css;
  onClick?: AnyFunction;
  linkColor?: 'primary' | 'secondary' | string;
  openInNewTab?: boolean;
  maxWidth?: string;
  text?: ReactNode;
}) {
  const isMailLink = to.startsWith('mailto');
  const isInternalLink = !to.startsWith('http') && !isMailLink;
  const color = { primary: colors.fontColorPrimary, secondary: colors.secondary }[linkColor] || linkColor;

  return (
    <span
      css={merge({ display: 'inline-block', ...typographyCss, '*': { typographyCss }, padding: '0px 0.5px' }, rootCss)}
    >
      <a
        css={{
          color,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}
        {...(!isInternalLink && { target: '_blank' })}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
          if (isInternalLink && !openInNewTab) {
            e.preventDefault();
            navigate(to);
          }
        }}
        href={to.trim()}
        {...(openInNewTab && { target: '_blank', rel: 'noreferrer' })}
      >
        <span
          css={{
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            ...(maxWidth && {
              maxWidth
            })
          }}
          className="text"
        >
          {children || text}
        </span>
      </a>
    </span>
  );
}
