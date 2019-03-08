// main.js 是主要入口，在此导入全局使用的CSS及JS等。
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 导入主模板
import DefaultLayout from '~/layouts/Default.vue'
import $ from 'jquery'

export default function (Vue, { router, head, isClient }) {

  // 设置主模板为全局组件（component）
  Vue.component('Layout', DefaultLayout)

  // 设置页面语种（HTML的Lang属性）
  head.htmlAttrs = { lang: 'zh' }
  // Add atributes to BODY tag
  head.bodyAttrs = {  }

  // 引入日立标准CSS
  head.link.push({ href: '/css/cn/r1/common.css', rel: 'stylesheet', media: 'screen,print' })
  head.link.push({ href: '/css/cn/r1/responsive.css', rel: 'stylesheet', media: 'screen,print' })
  head.link.push({ href: '/css/cn/r1/print.css', rel: 'stylesheet', media: 'print' })

  // 引入日立标准JS
  head.script.push({ src: '/js/cn/r1/common.js', type: "text/javacsript" })
  head.script.push({ src: '/js/cn/r1/responsive.js', type: "text/javacsript" })
  head.script.push({ src: '/js/cn/r1/header.js', type: "text/javacsript" })

}
