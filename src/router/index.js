import Vue from 'vue'
import Router from 'vue-router'

// import 'bootstrap/dist/css/bootstrap.css'

import Home from '@/page/Home'
import CertList from '@/page/CertList'
import CollegeInfo from '@/page/CollegeInfo'
import ArticleInfo from '@/page/ArticleInfo'
import PersonCenter from '@/page/PersonCenter'
import BaseInfo from '@/page/BaseInfo'
import MyEnroll from '@/page/MyEnroll'
import MyCert from '@/page/MyCert'
import SafeCenter from '@/page/SafeCenter'

// import CertList from '@/page/CertList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/CollegeInfo',
      name: 'CollegeInfo',
      component: CollegeInfo,
    },{
      path: '/ArticleInfo',
      name: 'ArticleInfo',
      component: ArticleInfo,
    },{
      path: '/CertList',
      name: 'CertList',
      component: CertList,
    }, {
      path: '/PersonCenter',
      name: 'PersonCenter',
      redirect: '/BaseInfo',
      component: PersonCenter,
      children: [
        {
          path: '/BaseInfo',
          name: 'BaseInfo',
          component: BaseInfo,
        },{
          path: '/MyEnroll',
          name: 'MyEnroll',
          component: MyEnroll,
        },{
          path: '/MyCert',
          name: 'MyCert',
          component: MyCert,
        },{
          path: '/SafeCenter',
          name: 'SafeCenter',
          component: SafeCenter,
        },
      ]
    }
  ]
})
