// 向外暴露接口
module.exports = checkCard;

function checkCard(str) {
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
