// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkInfoSumLinks = require('./src/remark/code-links');

/** Consts **/
const INFOSUM_PORTAL_NAME = 'InfoSum Developer Documentation';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: INFOSUM_PORTAL_NAME,
  tagline: 'Data Collaboration Platform',
  url: 'https://infosum.github.io',
  baseUrl: process.env.BASE_URL || '/infosum-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'infosum', // Usually your GitHub org/user name.
  projectName: 'infosum-docs', // Usually your repo name.

  presets: [
    // Docusaurus defaults
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/infosum/infosum-docs/tree/main',
          beforeDefaultRemarkPlugins:[remarkInfoSumLinks]
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/infosum/infosum-docs/tree/main/blog/',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/branding.css'),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
    // OpenAPI Documentation
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/tyrael.swagger.json',
            route: '/api/v1'
          },
          {
            spec: 'static/swagger.json',
            route: '/api/v2'
          },
        ],
      },
    ],
  ],

  plugins: [
    // PWA specs
    [
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/infosum.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: INFOSUM_PORTAL_NAME,
        logo: {
          alt: 'InfoSum',
          src: '/img/infosum.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/api/v1', label: 'API V1', position: 'left' },
          { to: '/api/v2', label: 'Σ API', position: 'left' },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/infosum',
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
              {
                label: 'Help Center',
                to: 'https://support.infosum.com/',
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
                href: 'https://twitter.com/infosum',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Developer Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/infosum',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InfoSum Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
