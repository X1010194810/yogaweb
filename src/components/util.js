exports.install = function (Vue, options) {

  // 校验手机号
  Vue.prototype.checkName = function (strName){
    var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return username.test(strName);
  };

  // 校验手机号
  Vue.prototype.checkPhone = function (strPhone){
    var phoneRegWithArea = /^[1][3,4,5,7,8][0-9]{9}$/;
    // var prompt = "您输入的电话号码不正确!"
    if (strPhone.length > 9) {
      return phoneRegWithArea.test(strPhone);
    }
  };

  // 校验密码
  Vue.prototype.checkPassword= function (strName) {
    var emailReg = /^(\w){6,20}$/;
    return emailReg.test(strName);
  };

  // 校验身份证号
  Vue.prototype.checkCard= function (str) {
    //15位数身份证正则表达式
    var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1 |2]\d)|3[0-1])\d{3}$/;
    //18位数身份证正则表达式
    var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
    return arg1.test(str) || arg2.test(str);
  };

  // 校验Emal
  Vue.prototype.checkEmail= function (strEmail) {
    var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return emailReg.test(strEmail);
  }

  // 校验图片验证码
  Vue.prototype.checkVCode= function (strVCode) {
    //15位数身份证正则表达式
    var VCode = /^[A-Za-z0-9]{4}$/;
    return VCode.test(strVCode);
  };

// 校验短信验证码
  Vue.prototype.checkMCode= function (strMCode) {
    //15位数身份证正则表达式
    var MCode = /^[A-Za-z0-9]+$/;
    return MCode.test(strMCode);
  };


};





