import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba3caf8c = () => interopDefault(import('..\\pages\\releases.vue' /* webpackChunkName: "pages/releases" */))
const _6c7d8fd4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ed55c43e = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/releases",
    component: _ba3caf8c,
    name: "releases___en"
  }, {
    path: "/",
    component: _6c7d8fd4,
    name: "index___en"
  }, {
    path: "/*",
    component: _ed55c43e,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
