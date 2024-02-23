// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** Consts **/
const INFOSUM_PORTAL_NAME = 'InfoSum API Guide';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: INFOSUM_PORTAL_NAME,
  tagline: 'The World’s Leading Data Collaboration Platform',
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
        },
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
            id: 'infosum-v1-swagger',
            spec: 'static/tyrael.swagger.json',
            route: '/api/v1'
          },
          {
            id: 'infosum-v2-swagger',
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
        logo: {
          alt: 'InfoSum',
          src: '/img/infosum-banner.svg',
          href: 'https://infosum.github.io/infosum-docs/'
        },
        items: [
          { to: '/docs/intro', label: 'Docs', position: 'left'},
          { type: 'dropdown',
          label: 'REST Reference',
          position: 'left',
          items:[
            { to: '/api/v2', label: 'v2'},
            { to: '/api/v1', label: 'v1' },
          ]},
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
            title: 'Company',
            items: [
              {
                label: 'Home',
                to: 'https://infosum.com/',
              },
              {
                label: 'InfoSum Platform',
                to: 'https://platform.infosum.com/',
              },
              {
                label: 'Help Center',
                to: 'https://support.infosum.com/',
              },
            ],
          },
          {
            title: 'Follow Us',
            items: [
              {
                  label: 'GitHub',
                  href: 'https://github.com/infosum',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/infosumhq',
                },
              ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'New to InfoSum?',
                to: 'https://www.infosum.com/company/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InfoSum. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
