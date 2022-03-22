import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'cls.js',
  description: 'A JS library for make beautiful terminal outputs.',
  lastUpdated: true,

  themeConfig: {
    repo: 'hamidreza01/cls.js',
    docsDir: '',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    base: '/cls.js/',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      { text: 'Examples', link: '/examples/examples', activeMatch: '^/examples/' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Options', link: '/guide/options' }
      ]
    },
    {
      text: 'Examples',
      children: [
        { text: 'Examples', link: '/examples/examples' }
      ]
    }
  ]
}
