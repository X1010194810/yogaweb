import Vue from 'vue'
import App from './App'
import router from './router'
import './components/Toast/toast.css';
import Toast from './components/Toast/index';

Vue.use(Toast);

Vue.config.productionTip = false


Vue.prototype.checkCard= function (str) {
  //15位数身份证正则表达式
  var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
  //18位数身份证正则表达式
  var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
  if (str.match(arg1) == null && str.match(arg2) == null) {
    return false;
  }
  else {
    return true;
  }
}
Vue.prototype.checkPhone= function (strPhone) {
  var phoneRegWithArea = /^[1][3,4,5,7,8][0-9]{9}$/;
  // var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
  //var prompt = "您输入的电话号码不正确!"
  if (strPhone.length > 9) {
    if (phoneRegWithArea.test(strPhone)) {
      return true;
    } else {
      //alert( prompt );
      return false;
    }
  }
}

Vue.prototype.checkEmail= function (strEmail) {
  var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  // var emailReg = /^[\w-]+(.[\w-]+)@[\w-]+(.[\w-]+)+$/;
  if( emailReg.test(strEmail) ){
    return true;
  }else{
    // alert("您输入的Email地址格式不正确！");
    return false;
  }
}

Vue.prototype.checkName= function (strName) {
  //var emailReg = /^[_a-z0-9]+@([_a-z0-9]+.)+[a-z0-9]{2,3}$/;
  var emailReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
  if( emailReg.test(strName) ){
    return true;
  }else{
    // alert("您输入的Email地址格式不正确！");
    return false;
  }
}

Vue.prototype.checkPassword= function (strName) {
  //var emailReg = /^[_a-z0-9]+@([_a-z0-9]+.)+[a-z0-9]{2,3}$/;
  var emailReg = /^(\w){6,20}$/;
  if( emailReg.test(strName) ){
    return true;
  }else{
    // alert("您输入的Email地址格式不正确！");
    return false;
  }
}

Vue.prototype.VuegetResquest= function (apiUrl, RequestInfo, toSuccess,toFail) {
  axios({
    method:'post',
    url: apiUrl,
    headers: {
      'token': window.localStorage.getItem('Token')
    },
    data: RequestInfo

  }).then(function(res){
    if(res.data.code == '10000'){
      toSuccess(res.data)
    }else if(res.data.code == '40003'){
      window.localStorage.setItem('Token', '')
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

