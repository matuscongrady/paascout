import config from '../../../SITE_CONFIG';

export function Footer() {
  return (
    <footer css={{ margin: '30px 0px 30px 0px' }}>
      <p css={{ textAlign: 'center' }}>
        Last updated: <b>{config.lastUpdated}</b>
      </p>
    </footer>
  );
}
