import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewArticle.vue')
  },
    {
      path: '/edit/:id',
      name: 'ArticleEdit',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/ArticleEdit.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
