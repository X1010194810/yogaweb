<template>

</template>

<script>
  //const HTTP_URL = "http://192.168.1.4:8787/";
  // const HTTP_URL = "http://49.4.78.104:8787/";
  const HTTP_URL = "http://120.79.46.224:8787/";

  export default {
    name: "Global",
    HTTP_URL,

    //--- 登录 ---
    LOGIN_GETIMAGECODE:  HTTP_URL + 'login/getImageCode',                               //  获取图片验证码
    LOGIN_USERLOGIN:  HTTP_URL + 'login/userLogin',                                      //  登录
    LOGIN_USERREGISTERSENDMESSAGE:  HTTP_URL + 'login/userRegisterSendMessage',      //  获取注册图片验证码
    LOGIN_USERREGISTER:  HTTP_URL + 'login/userRegister',                               //  注册

    //--- 首页 ---
    CERTLIST_CERTLIST:  HTTP_URL + 'certList/certList',                                 //  证书列表
    INDEX_ARTICLE_LIST:  HTTP_URL + 'index/articleList',                                //  公告列表
    INDEX_COLLEGE_LIST:  HTTP_URL + 'index/collegeList',                                //  学院列表
    INDEX_COLLEGE_INFO:  HTTP_URL + 'index/collegeInfo',                                //  学院公告

    //--- 文章详情 ---
    ARTICLEINFO_ARTICLEINFO:  HTTP_URL + 'articleInfo/articleInfo',                   //  文章详情

    //--- 学院详情 ---
    COLLEGEINFO_COURSEENROLL_LIST:  HTTP_URL + 'collegeInfo/courseEnrollList',       //  分院报名列表
    COLLEGEINFO_COURSEENROLL_INFO:  HTTP_URL + 'collegeInfo/courseEnrollInfo',       //  报名详情
    COLLEGEINFO_ARTICLE_LIST:  HTTP_URL + 'collegeInfo/articleList',                  //  分院公告
    COLLEGEINFO_COLLEGEINFO:  HTTP_URL + 'collegeInfo/collegeInfo',                   //  分院详情
    COLLEGEINFO_COURSEENROLLUSER:  HTTP_URL + 'collegeInfo/courseEnrollUser',        //  用户报名

    //--- 个人中心 ---
    // 基本信息
    BASEINFO_GETUSERINFO:  HTTP_URL + 'baseInfo/getUserInfo',                           //  获取基本信息
    BASEINFO_SETUSERINFO:  HTTP_URL + 'baseInfo/setUserInfo',                           //  修改用户信息
    BASEINFO_GETNATIONLIST:  HTTP_URL + 'baseInfo/getNationList',                      //  国家列表
    BASEINFO_GETENTHNICITYLIST:  HTTP_URL + 'baseInfo/getEnthnicityList',             //  民族列表
    BASEINFO_GETREGIONLIST:  HTTP_URL + 'baseInfo/getRegionList',                      //  地域列表
    BASEINFO_GETORGANIZATIONLIST:  HTTP_URL + 'baseInfo/getOrganizationList',        //  组织列表
    BASEINFO_UPLOADUSERPHOTO:  HTTP_URL + 'baseInfo/uploadUserPhoto',                 //  上传用户照片
    BASEINFO_UPLOADUSERORGANIZATION:  HTTP_URL + 'baseInfo/uploadUserOrganization', //  上传组织照片

    // 我的报名
    MYENROLL_LIST:  HTTP_URL + 'myEnroll/list',                                           //  报名列表
    MYENROLL_SETENROLLSTATE:  HTTP_URL + 'myEnroll/setEnrollState',                    //  修改报名

    // 我的证书
    MYCERT_LIST:  HTTP_URL + 'myCert/list',                                                //  证书列表
    MYCERT_CERTINFO:  HTTP_URL + 'myCert/certInfo',                                       //  证书详情

    // 安全中心


  }
</script>

<style scoped>

</style>
