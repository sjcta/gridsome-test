// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add HITACHI standard CSS files
  head.link.push({
    rel: 'stylesheet',
    href: '/css/cn/r1/common.css',
    media: 'screen,print'
  },{
    rel: 'stylesheet',
    href: '/css/cn/r1/responsive.css',
    media: 'screen,print'
  },{
    rel: 'stylesheet',
    href: '/css/cn/r1/print.css',
    media: 'print'
  })

  head.script.push({src: '/js/cn/r1/jquery.1.10.2.js'})
  head.script.push({src: '/js/cn/r1/common.js'})
  head.script.push({src: '/js/cn/r1/header.js'})

}
