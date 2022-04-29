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
            type: 'dropdown',
            position: 'left',
            label: 'Use Cases',
            items: [
              {
                type: 'doc',
                docId: 'use-cases/index',
                label: 'Use Cases',
              },
              {
                type: 'doc',
                docId: 'use-cases/use-case-crm',
                label: 'Blueprint: CRM'
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
                type: 'doc',
                docId: 'rates/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'rates/how-rates-work',
                label: 'How Rates Work'
              },
              {
                type: 'doc',
                docId: 'rates/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'rates/examples',
                label: 'Examples'
              },
              {
                type: 'doc',
                docId: 'rates/faq',
                label: 'FAQ'
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
                type: 'doc',
                docId: 'insights/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'insights/how-insights-work',
                label: 'How Insights Work'
              },
              {
                type: 'doc',
                docId: 'insights/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'insights/examples',
                label: 'Examples'
              },
              {
                type: 'doc',
                docId: 'insights/faq',
                label: 'FAQ'
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
                type: 'doc',
                docId: 'labels/overview',
                label: 'Overview'
              },
              {
                type: 'doc',
                docId: 'labels/how-labels-work',
                label: 'How Labels Work'
              },
              {
                type: 'doc',
                docId: 'labels/quickstart',
                label: 'Quickstart'
              },
              {
                type: 'doc',
                docId: 'labels/place-order',
                label: 'Place Order'
              },
              {
                type: 'doc',
                docId: 'labels/examples',
                label: 'Examples'
              },
              {
                type: 'doc',
                docId: 'labels/faq',
                label: 'FAQ'
              },
              {
                to: 'labels-service',
                label: 'Labels API Reference',
                target: '_blank',
                className: 'external-nav-link'
              },
            ]
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
