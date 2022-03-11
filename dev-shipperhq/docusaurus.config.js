// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome Developers",
  tagline: "Get started exploring our SDK with API examples and playgrounds to help you start building your custom integration with ShipperHQ",
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
          editUrl: 'https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq',
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
          editUrl:
            'https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'ShipperHQ',
          src: "img/shq-devplatform-logo.svg",
          srcDark: "img/shq-devplatform-logo-dark.svg"
        },
        items: [
          {
            type: 'doc',
            docId: 'sdk-use-cases',
            position: 'left',
            label: 'SDK Use Cases',
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
                type: 'doc',
                docId: 'rate/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'rate/how-rates-work',
                label: 'How Rates Work'
              },
              {
                type: 'doc',
                docId: 'rate/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'insight/place-order',
                label: 'Place Order'
              },
              {
                type: 'doc',
                docId: 'rate/faq',
                label: 'FAQ'
              },
              {
                to: 'rate-service',
                label: 'Rates API',
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
                type: 'doc',
                docId: 'insight/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'insight/how-shipping-insights-works',
                label: 'How Insights Work'
              },
              {
                type: 'doc',
                docId: 'insight/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'insight/place-order',
                label: 'Place Order'
              },
              {
                type: 'doc',
                docId: 'insight/faq',
                label: 'FAQ'
              },
              {
                to: 'order-view-service',
                label: 'Insights API',
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
                type: 'doc',
                docId: 'label/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'label/how-label-works',
                label: 'How Labels Work'
              },
              {
                type: 'doc',
                docId: 'label/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'label/faq',
                label: 'FAQ'
              },
            ]
          },
          {
            to: '/contact',
            label: 'Contact Us',
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
                label: 'Contact Us',
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
