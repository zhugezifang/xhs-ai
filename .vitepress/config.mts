import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小红书AI助手",
  description: "小红书AI助手",
  lang: "zh-cmn",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon_128.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '产品介绍', link: '/change-logs' }
    ],
    socialLinks: [  
      { icon: 'twitter', link: 'https://twitter.com/zhugezifang', ariaLabel: 'X' }
    ],
    footer: {
      message: '<a href="https://bottleneck-calculators.online/" target="_blank">PC Bottleneck Calculator</a> &nbsp;|&nbsp;<a href="https://virtual-try-on.online/" target="_blank">Kolors Virtual Try On</a> &nbsp;|&nbsp;<a href="https://mnemonicgenerator.online/" target="_blank">Mnemonic-Generator</a> &nbsp;|&nbsp;<a href="https://www.chronological-age-calculator.online/" target="_blank">Chronological-Age-Calculator</a>',
      copyright: 'copywrite @ 2024'
    }
  },
  appearance: false,
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap', rel: 'stylesheet' }
    ]
  ]
})
