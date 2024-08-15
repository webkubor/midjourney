import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/midjourney/',
  title: " webkubor",
  description: "关于midjourney的学习文档",
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
          { text: '基本指令-Prompt', link: '/prompts' },
          { text: '指令规则-Rules', link: '/instruction-rules' },
          { text: '风格指令-Reference', link: '/reference' }
        ]
      },
      {
        text: '人像',
        items: [
          { text: '摄影棚照片', link: '/people/photographs' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webkubor/midjourney' }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present webkubor",
    },
  }
})
