// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ShipperHQ Developer Platform",
  tagline: "Explore our SDK with API reference, examples, and a playground to help you start building your custom integration with ShipperHQ",
  url: 'https://dev.shipperhq.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shipperhq', // Usually your GitHub org/user name.
  projectName: 'shipperhq.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch to deploy the static files to
  trailingSlash: false,


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'current',
              badge: false
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
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
        id: 'GTM-K2FR378', // GTM Container ID
      }
    ]
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'ShipperHQ Developer Platform', content: 'Explore our SDK with API reference, examples, and a playground to help you start building your custom integration with ShipperHQ'}],
      image: 'img/shq-meta.jpg',
      navbar: {
        logo: {
          alt: 'ShipperHQ',
          src: "img/shq-devplatform-logo.svg",
          srcDark: "img/shq-devplatform-logo-dark.svg"
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Use Cases',
            items: [
              {
                label: 'Use Cases',
                to: 'docs/use-cases/overview'
              },
              {
                label: 'Blueprint: CRM',
                to: 'docs/use-cases/blueprint-crm'
              },
              {
                label: 'Blueprint: ERP',
                to: 'docs/use-cases/blueprint-erp'
              },
            ]
          },
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Quickstart',
          },
          {
            href: 'https://graphiql.shipperhq.com/',
            label: 'API Playground',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Rates',
            items: [
              {
                label: 'Overview',
                to: 'docs/rates/overview'
              },
              {
                label: 'How Rates Work',
                to: 'docs/rates/how-rates-work'
              },
              {
                label: 'Quickstart',
                to: 'docs/rates/quickstart'
              },
              {
                label: 'Examples',
                to: 'docs/rates/examples'
              },
              {
                label: 'FAQ',
                to: 'docs/rates/faq'
              },
              {
                to: 'rates-service',
                label: 'Rates API Reference',
                target: '_blank',
                className: 'external-nav-link'
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Insights',
            items: [
              {
                label: 'Overview',
                to: 'docs/insights/overview'
              },
              {
                label: 'How Insights Work',
                to: 'docs/insights/how-insights-work'
              },
              {
                label: 'Quickstart',
                to: 'docs/insights/quickstart'
              },
              {
                label: 'Examples',
                to: 'docs/insights/examples'
              },
              {
                label: 'FAQ',
                to: 'docs/insights/faq'
              },
              {
                to: 'insights-service',
                label: 'Insights API Reference',
                target: '_blank',
                className: 'external-nav-link'
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Labels',
            items: [
              {
                label: 'Overview',
                to: 'docs/labels/overview'
              },
              {
                label: 'How Labels Work',
                to: 'docs/labels/how-labels-work'
              },
              {
                label: 'Quickstart',
                to: 'docs/labels/quickstart'
              },
              {
                label: 'Place Order',
                to: 'docs/labels/place-order'
              },
              {
                label: 'Examples',
                to: 'docs/labels/examples'
              },
              {
                label: 'FAQ',
                to: 'docs/labels/faq'
              },
            ]
          },
          {
            type: 'doc',
            docId: 'sdk',
            position: 'left',
            label: 'Enhanced Checkout SDK',
          },
          {
            to: '/contact',
            label: 'Dev Support',
            position: 'right'
          }
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [/*{to: '/versions', label: 'All versions'}*/],
          //   dropdownActiveClassDisabled: true,
          // },
          // {
          //   href: 'https://github.com/shipperhq/shipperhq.github.io',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
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
              {
                label: 'Dev Support',
                to: '/contact',
              }
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
