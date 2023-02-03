// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // debug: true,

  // devServer:{
  //   port:8001,
  // },

  // modules:[
  //   "@nuxtjs/axios"
  // ],

  // 全局css
  css:[
    '@/assets/base.css',
    '@/assets/pagex.css',
  ],

  // app基本匹配
  app: {

    // 设置全局head相关信息
    head: {

      // charset: 'utf-8', //默认utf8

      // viewport: 'width=device-width, initial-scale=1', //默认等宽

      title: 'Nuxt & 大航', //默认页面标题

      // 设置默认meta
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: '大航老师的项目.' }
      ],

      // 全局script (不建议)
      // script: [
      //   { src: 'https://awesome-lib.js' }
      // ],

      // 全局样式表 (不建议)
      // link: [
      //   { rel: 'stylesheet', href: '/base.css' }
      // ],

      // 样式 (不建议)
      // style: [
      //   { children: ':root { color: red }' }
      // ],
    },
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@/assets/base.scss'
  //       }
  //     }
  //   }
    
  // }

  
})
