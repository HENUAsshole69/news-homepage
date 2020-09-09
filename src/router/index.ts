import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store/index'
import {StaticPageClient} from "@/client/StaticPageClient";

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
          path: 'pagesManagement',
          name: 'PagesManagement',
          component: ()=>import('../views/Management/StaticPageManagement.vue')
        },
        {
          path: '/manage/editor',
          name: 'Editor',
          component: () => import(/* webpackChunkName: "about" */ '../views/Management/NewArticle.vue')
        }
      ]
    },
    {
      path: '/edit/static/:id',
      name: 'StaticEdit',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/StaticEdit.vue')
    },
    {
      path: '/edit/:id',
      name: 'ArticleEdit',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/ArticleEdit.vue')
    },
    {
      path: '/exhibition/info',
      name: 'ExhibitionInfo',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/ExhibitionInfo/ExhibitionInfoBrowser.vue')
    },
    {
      path: '/exhibition/info/detail/:id',
      name: 'ExhibitionInfoDetail',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/ExhibitionInfo/InfoDetail.vue')
    },
    {
      path: '/category/detail/:id',
      name: 'CategoryDetail',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/Category/CategoryDetail.vue')
    },
    {
      path: '/category/:type/:subType',
      name: 'CategoryBrowser',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/Category/CategoryBrowser.vue')
    },
    {
      path: '/newsList/:type',
      name: 'NewsListBrowser',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/List/NewsListBrowser.vue')
    },
    {
      path: '/list/:type',
      name: 'ListBrowser',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/List/ListBrowser.vue')
    },
    {
      path: '/view/static/:id',
      name: 'StaticViewer',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/StaticViewer.vue')
    },
    {
      path: '/view/:id',
      name: 'Viewer',
      props:true,
      component: () => import(/* webpackChunkName: "about" */ '../views/Viewer.vue')
    },
    {
      path: '/login/:reg?',
      name: 'LogIn',
      props:true,
      component: ()=>import('../views/Login.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if(to.name !== 'LogIn' &&
      to.name !== 'Home' &&
      to.name !== 'ListBrowser' &&
      to.name !== 'CategoryBrowser' &&
      to.name !== 'CategoryDetail' &&
      to.name !== 'StaticViewer' &&
      to.name !== 'ExhibitionInfo' &&
      to.name !== 'ExhibitionInfoDetail' &&
      to.name !== 'Viewer' &&
      store.state.token === null){
    next('/login')
  }else{
    next()
  }
})

