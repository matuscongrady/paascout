import { Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import config from '../../SITE_CONFIG';
import { globalCss } from '../styles/global';
import { Footer } from '../sections/Footer/Footer';
import { Header } from '../sections/Header/Header';

export function MetaTags({ title }) {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={config.domain} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${config.domain}/opengraph.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={config.domain} />
      <meta property="twitter:url" content={config.domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={`${config.domain}/opengraph.png`} />
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
      <link rel="prefetch" href="https://docs.stacktape.com" as="document" />
      <link rel="prefetch" href="https://console.stacktape.com" as="document" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:500,700&amp;lang=en" />
    </Helmet>
  );
}

function MainLayout({ children, title = config.siteTitle }: { children: any; title?: string }) {
  return (
    <div id="root" css={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <MetaTags title={title} />
      <Global styles={globalCss} />
      <Header />
      <main css={{ maxWidth: '98%', margin: '40px auto 0px auto', width: '100%' }}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
