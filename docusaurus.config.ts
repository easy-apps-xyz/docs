import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasyApps',
  tagline: 'Discord application management made easy.',
  favicon: 'img/favicon.png',

  url: 'https://docs.easy-apps.xyz',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'EasyApps',
      logo: {
        alt: 'EasyApps Logo',
        src: 'img/favicon.png',
        srcDark: 'img/favicon.png',
      },
      items: [
        {
          href: 'https://status.easy-apps.xyz',
          label: 'Status',
          position: 'right',
        },
        {
          href: 'https://go.easy-apps.xyz/discord',
          label: 'Discord Server',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© Copyright ${new Date().getFullYear()}. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
