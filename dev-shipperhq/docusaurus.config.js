// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShipperHQ',
  tagline: 'dev portal',
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
          editUrl: 'https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/shipperhq/shipperhq.github.io/tree/main/dev-shipperhq/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@edno/docusaurus2-graphql-doc-generator',
      {
        rootPath: "./docs",
        linkRoot: "../../",
        loaders: {
          UrlLoader: "@graphql-tools/url-loader"
        }
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'ShipperHQ',
          src: 'img/shq-mark-3c.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'API',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'rate-service/rate-service',
                label: 'Rate Service GraphQL'
              },
              {
                type: 'doc',
                docId: 'rate-manager-service/rate-manager-service',
                label: 'Rate Manager Service GraphQL'
              },
              {
                type: 'doc',
                docId: 'order-view-service/order-view-service',
                label: 'Order View Service GraphQL'
              }
            ]
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [/*{to: '/versions', label: 'All versions'}*/],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/shipperhq/shipperhq.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shipperhq/shipperhq.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
