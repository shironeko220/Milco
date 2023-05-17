import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '沐可的小站',
      cloud: {
        enable: true,
      },
    },

    // bg_image: {
    //   enable: true,
    //   url:'',
    // },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: true,
        icp: '', // 备案号
      },
      icon: {
        enable: true,
        name: 'i-ri-cloud-line',
        animated: true,
        color: 'skyblue',
        title: 'valaxy-yun',
        url: ''
      }
    },
  },

  unocss: { safelist },
})
