import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tech Stack',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'https://github.com/sahihai12', 
  projectName: 'tech-stack',

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
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true, 
    },
    navbar: {
      title: 'Tech Stack',
      logo: {
        alt: 'tech-stack Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/docs/Css/css-interview-questions', label: 'CSS', position: 'left'},
        {to: '/docs/javascript/getting-started', label: 'Javascript', position: 'left'},
        {to: 'docs/react/getting-started-react', label: 'React.js', position: 'left'},
        {to: '/docs/typescript/ts-installation', label: 'TypeScript', position: 'left'},
        {to: '/docs/next-js/next-recap', label: 'Next.js', position: 'left'},
        {to: '/docs/node-express/node-installation', label: 'Node.js', position: 'left'},
        {to: 'docs/node-express/Express/express-why', label: 'Express.js', position: 'left'},
        {to: '/docs/databases/dm-recap', label: 'Databases', position: 'left'},
        {to: '/docs/Redis/redis', label: 'Redis', position: 'left'},
        {to: '/docs/ElasticSearch/elasticsearch', label: 'ElasticSearch', position: 'left'},
        {href: 'https://github.com/sahihai12',label: 'GitHub',position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
