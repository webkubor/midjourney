import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/midjourney/',
  title: "webkubor",
  description: "基于vitepress 的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: 'Examples', link: '/markdown-examples' },
          { text: '图片实例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webkubor/midjourney' }
    ]
  }
})
