import { BiCheck, BiX } from 'react-icons/bi';
import { colors } from '../styles/variables';
import { trackEvent } from '../utils/analytics';
import { merge } from 'lodash';

export const CheckCell = (
  <div css={{ display: 'flex', justifyContent: 'center' }}>
    <BiCheck size={20} color={colors.secondary} />
  </div>
);

export const CrossCell = (
  <div css={{ display: 'flex', justifyContent: 'center' }}>
    <BiX size={20} color="#cb6a4e" />{' '}
  </div>
);

export const TentativeCell = (
  <div css={{ display: 'flex', justifyContent: 'center' }}>
    <span css={{ fontSize: '1.75rem', color: '#f0d273' }}>~</span>
  </div>
);

export function Provider({
  showLink,
  rootCss,
  icon,
  link,
  name
}: {
  showLink?: boolean;
  rootCss?: Css;
  name: string;
  icon: string;
  link: string;
}) {
  return (
    <a
      key={link}
      href={`https://${link}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(`visit ${name}`)}
    >
      <div css={merge({ display: 'flex', alignItems: 'center', gap: '6px' }, rootCss)}>
        <img width={22} height={22} src={icon} alt={`${name} icon`} />
        <p css={{ fontWeight: 'bold' }}>{name}</p>
      </div>
      {showLink && <p css={{ fontWeight: 'normal', marginTop: '5px', color: colors.fontColorGray }}>{link}</p>}
    </a>
  );
}

export function GroupTitle({ icon, title }) {
  return (
    <div css={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '35px' }}>
      <div>{icon && icon({ size: 24, color: colors.fontColorPrimary })}</div>
      <h3 css={{}}>{title}</h3>
    </div>
  );
}
