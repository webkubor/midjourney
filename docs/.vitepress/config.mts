import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/midjourney/',
  title: "midjourney",
  description: "基于vitepress 的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/introduce' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '简介', link: '/introduce' },
          { text: '指令规则', link: '/instruction-rules' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webkubor/midjourney' }
    ]
  }
})
