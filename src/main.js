import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router';
// import App from 'components/app.vue';    // 路由挂载
// import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// 引用校验函数
import util from './components/util';
Vue.use(util);
Vue.use(VueRouter);
Vue.use(iView);

// 引用全局请求地址
import global_ from './components/Global'
Vue.prototype.GLOBAL = global_;

// Vue.config.productionTip = false;

Vue.prototype.VuegetResquest= function (apiUrl, RequestInfo, toSuccess,toFail) {
  axios({
    method:'post',
    url: apiUrl,
    headers: {
      'token': window.localStorage.getItem('Token')
    },
    data: RequestInfo

  }).then(function(res){
    if(res.data.code === 10000){
      toSuccess(res.data)
    }else if(res.data.code === 40003){
      window.localStorage.setItem('Token', '');
      window.localStorage.setItem('userName', '-1')
    }else {
      toFail(res.data)
    }
  });
},

Vue.prototype.VuefileUpload= function (apiUrl, RequestInfo, toSuccess,toFail) {
    axios({
      method:'post',
      url: apiUrl,
      headers: {
        'token': window.localStorage.getItem('Token'),
        "Content-Type": "multipart/form-data"
      },
      data: RequestInfo

    }).then(function(res){
      if(res.data.code == '10000'){
        toSuccess(res.data)
      }else {
        toFail(res.data)
      }
    });
  },

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

