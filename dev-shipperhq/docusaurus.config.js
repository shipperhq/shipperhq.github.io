// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ShipperHQ Developer Platform",
  tagline: "ShipperHQ documentation has moved to docs.shipperhq.com",
  url: 'https://dev.shipperhq.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'shipperhq',
  projectName: 'shipperhq.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-K2FR378',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'ShipperHQ',
          src: "img/logo-dark.png",
          srcDark: "img/logo.png"
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'ShipperHQ.com',
            href: 'https://shipperhq.com',
          },
          {
            label: 'Help Docs',
            href: 'https://docs.shipperhq.com',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ShipperHQ`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
