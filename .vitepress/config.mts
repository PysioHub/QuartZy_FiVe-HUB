import { HeadConfig, defineConfig } from 'vitepress'


//追踪代码
const umamiScript: HeadConfig = ["script", {
  defer: "true",
  src: "https://umami.pysio.online/script.js",
  "data-website-id": "9bdfb189-b22d-4399-a891-bfea5a386b46"
}]

const baseHeaders: HeadConfig[] = []

const headers = process.env.NODE_ENV === "production" ?
  [...baseHeaders, umamiScript] :
  baseHeaders

//结束

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "伍英华",
  description: "伍英华和群友的梗图",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {                       //搜索
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PysioHub/QuartZy_FiVe-HUB' }
    ]
  },
  head: headers    //追踪代码
})
