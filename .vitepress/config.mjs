import { defineConfig } from 'vitepress'
import {set_sidebar} from './util/sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/vitepress-demo/',
  head:[['link',{rel:'icon',href:'/vitepress-demo/public/logo.png'}]],
  title: "玄今男在线文档",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    outlineTitle: '目录',
    outline: "deep",
    logo: '/public/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', items :[
        {text: '主页',link: '/' },
        {text: 'markdown 实例',link: 'markdown-examples'}
      ]},
      { text: '示例', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples2',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {'/backend/rabbitmq/': set_sidebar('/backend/rabbitmq/')},

    socialLinks: [
      { icon: 'github', link: 'https://www.cybersmartai.com/' }
    ],
    footer: {
      copyright: "Copyright@ 2024-12-19 JinnanXuan"
    }
  }
})
