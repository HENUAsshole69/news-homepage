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
      path: '/manage',
      component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue'),
      children:[
        { path: '', redirect:  { name: 'ArticleManagement' } },
        {
          path: 'articleManagement',
          name: 'ArticleManagement',
          component: ()=>import('../views/Management/ArticleManagement.vue')
        },
        {
          path: '/manage/editor',
          name: 'Editor',
          component: () => import(/* webpackChunkName: "about" */ '../views/Management/NewArticle.vue')
        }
      ]
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
