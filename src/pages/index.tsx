import { Helmet } from 'react-helmet';
import Layout from '../layout';
import config from '../../SITE_CONFIG';
import { FAQ } from '../sections/FAQ/FAQ';
import { Comparison } from '../sections/Comparison/Comparison';
import { Intro } from '../sections/Intro/Intro';

function IndexPage() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Intro />
      <Comparison />
      <FAQ />
    </Layout>
  );
}

export default IndexPage;
