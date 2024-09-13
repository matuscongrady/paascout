const urlJoin = require('url-join');
const config = require('./SITE_CONFIG');
const { join } = require('path');

/** @type { import("gatsby").GatsbyConfig } */
module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: urlJoin(config.siteUrl, config.pathPrefix)
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        domain: config.domain
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: join(process.cwd(), 'static'),
        ignore: ['.gitkeep']
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: `${config.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
        stripQueryString: true
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/favicon.svg'
      }
    }
  ]
};
