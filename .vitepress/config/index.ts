// @ts-expect-error ignore next line
import taskLists from 'markdown-it-task-lists'
import { withMermaid } from 'vitepress-plugin-mermaid'

import { cn, cnSearch } from './cn'

import { en } from './en'

export default withMermaid({
  base: '/easytier.github.io/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/easytier.png' }],
    ['meta', { name: 'msvalidate.01', content: 'C6CB41F1DA6096106497701D002B19AD' }],
    ['meta', { name: 'author', content: 'wx2020' }],
    ['meta', { name: 'keywords', content: 'easytier,SD-WAN,networking,self-hosted' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'wx2020 EasyTier' }],
    ['meta', { property: 'og:description', content: 'Private EasyTier build documentation' }],
    ['meta', { property: 'og:image', content: 'https://wx2020.github.io/easytier.github.io/easytier.png' }],
    ['link', { rel: 'canonical', href: 'https://wx2020.github.io/easytier.github.io/' }],
  ],
  themeConfig: {
    siteTitle: 'wx2020 EasyTier',
    logo: '/easytier.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { ...cnSearch },
        },
      },
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wx2020/EasyTier',
        ariaLabel: 'Github',
      },
      {
        icon: 'gmail',
        link: 'https://github.com/wx2020/EasyTier/issues',
        ariaLabel: 'Issues',
      },
    ],
  },
  locales: {
    root: { label: '简体中文', ...cn },
    en: { label: 'English', ...en },
  },
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
  },
  vue: {
    template: {
      compilerOptions: { isCustomElement: tag => tag === 'iconify-icon' },
    },
  },
  sitemap: {
    hostname: 'https://wx2020.github.io/easytier.github.io/',
  },
})
