import { BiLogoGithub } from 'react-icons/bi';
import Logo from '../../../icons/paascout/white.svg';
import { Link } from 'gatsby';
import { lowerCase } from 'lodash';
import { DropdownMenu } from '../../components/DropdownMenu';
import config from '../../../SITE_CONFIG';
import { box, colors, onMaxW800 } from '../../styles/variables';
import { providers } from '../../ComparisonData';

export function Header() {
  return (
    <div
      id="nav-container"
      css={{
        ...box,
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        margin: '0 auto',
        zIndex: 50,
        maxWidth: '850px',
        backdropFilter: 'blur(5px)',
        borderTop: 'none'
      }}
    >
      <nav
        css={{
          width: '100%',
          padding: '0px 10px 0px 12px',
          height: '54px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Link to="/">
          <div css={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <img
              css={{
                margin: '0px 10px',
                width: 22,
                height: 22,
                [onMaxW800]: { width: 20, height: 20, margin: '0px 6px' }
              }}
              src={Logo}
              alt="PaaScout logo"
            />
            <h3>{config.siteTitle}</h3>
          </div>
        </Link>
        <DropdownMenu
          dropdownHorizontalPosition={0}
          dropdownVerticalPosition={0}
          closeOnItemClick
          maxHeight={440}
          width="190px"
          triggerElement={<h3>Providers</h3>}
          items={Object.entries(providers).map(([name, { icon }]) => (
            <Link to={`/providers/${lowerCase(name)}`}>
              <div css={{ display: 'flex', alignItems: 'center', gap: '8px', height: '36px', padding: '3px 15px' }}>
                <img width={22} height={22} src={icon} alt={`${name} icon`} />
                <p css={{ fontWeight: 'bold' }}>{name}</p>
              </div>
            </Link>
          ))}
        />
        <a target="_blank" rel="noopener noreferrer" href={config.gitUrl}>
          <div css={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <p css={{ fontWeight: 'bold', [onMaxW800]: { display: 'none' } }}>Github</p>
            <BiLogoGithub color={colors.fontColorPrimary} size={32} />
          </div>
        </a>
      </nav>
    </div>
  );
}
