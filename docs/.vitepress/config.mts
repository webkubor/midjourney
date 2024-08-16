import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:  '/midjourney/',
  title: " webkubor",
  description: "关于midjourney的学习文档",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
         var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?cc7c20a1cc944aa28c219467cd4def7c";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
      })();
    `,
    ],
    ["meta", { name: "baidu-site-verification", content: "codeva-phM5FSU2JM" }],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    outline: {
      level: [1, 3],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '联系我', link: '/me/contact' }
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
