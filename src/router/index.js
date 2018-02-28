import Vue from 'vue'
import Router from 'vue-router'

import Index from 'views/Index'
import BookIndex from 'views/books/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/books',
      component: BookIndex,
    }
  ]
})
