<template>
    <header>
      <div class="header-body">
        <div class="header-body-button">
          <label v-if="!Index"><a @click="getImageData()" data-toggle="modal" data-target="#ModalLogin">登录 </a>|<a data-toggle="modal" data-target="#ModalRegister"> 注册</a></label>
          <label v-if="Index"><a >{{userName}} </a>|<a @click="getBaseInfo()"> 个人中心</a></label>
        </div>
        <div class="header-title" @click="BackHome()">云南民族大学中印瑜伽学院瑜伽非学历教育综合信息平台</div>
        <div class="container header-search">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="input-group">
                <input type="text" class="form-control header-search-input" v-model="idCode" placeholder="请输入18位身份证号码">
                <span class="input-group-btn">
                  <button class="btn btn-primary header-search-btn" @click="getCertList(idCode)" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal  :resquesInfo="resquesInfo" :imageData="imageData" :SubmitLogin="SubmitLogin" :getImageData="getImageData" :getRegisterCode="getRegisterCode"  :SubmitRegister="SubmitRegister" ></LoginModal>
    </header>
</template>

<script>
  import LoginModal from '../components/LoginModal';
  import Global from '../components/Global';
  import Vue from 'vue'
  Vue.prototype.GLOBALS = Global;

    export default {
      name: "Header",
      data: function () {
        return{
          Index: false,
          userName: '',
          idCode: '',
          imageData: ['0', '1'],
          resquesInfo: {
            userName: '',
            loginKey: '',
            loginKey2: '',
            imageCode: '',
            imageKey: '',
            messageCode: '',
          },
        }
      },

      methods:{

        // 跳转个人中心
        getBaseInfo: function () {
          var that = this;
          that.$router.push({
            name: 'PersonCenter',
          })
        },

        BackHome: function () {
          var that = this;
          that.$router.push({
            name: 'Home',
          })
        },

        // 查询证书
        getCertList: function (e) {
          var that = this;
          that.$router.push({
            name: 'CertList',
            params: {
              idCode: e,
            },
          })
        },

        // 获取登录图片验证码
        getImageData: function () {
          let that = this;
          let url = that.GLOBALS.LOGIN_GETIMAGECODE;
          $.post(url,{},{emulateJSON:true}).then(function(res){
            if(res.code == '10000'){
              Vue.set(that.imageData,0, res.data.imageData)
              that.resquesInfo.imageKey = res.data.imageKey
            }
          }, function (res) {
          });
        },

        // 获取注册短信验证码
        getRegisterCode: function (e) {
          const that = this;
          var ResquestInfo = new URLSearchParams();
          ResquestInfo.append("phone",that.resquesInfo.userName);
          ResquestInfo.append("imageCode",e );
          ResquestInfo.append("imageKey",that.resquesInfo.imageKey);
          that.VuegetResquest(that.GLOBALS.LOGIN_USERREGISTERSENDMESSAGE,ResquestInfo,function(res){
            console.log(res)
          },function (res) {console.log(res.message)});
        },

        // 登录
        SubmitLogin: function (e) {
          const that = this;
          var ResquestInfo = new URLSearchParams();
          ResquestInfo.append("userName",that.resquesInfo.userName);
          ResquestInfo.append("loginKey",that.resquesInfo.loginKey);
          ResquestInfo.append("imageCode",e);
          ResquestInfo.append("imageKey",that.resquesInfo.imageKey);
          that.VuegetResquest(that.GLOBALS.LOGIN_USERLOGIN,ResquestInfo,function(res){
            // console.log(res)
            if (res.code == '10000') {
              window.location.reload();
              window.localStorage.setItem('Token', res.data.token)
              window.localStorage.setItem('userName', res.data.userName)
              $('#ModalLogin').modal('hide')
              that.$router.push({
                name: 'BaseInfo',
              })
            }
          },function (res) {
            alert(res.message)
            that.getImageData();
            // console.log(res.message)
          });
        },

        // 注册
        SubmitRegister: function (e) {
          const that = this;
          var ResquestInfo = new URLSearchParams();
          ResquestInfo.append("phone", that.resquesInfo.userName);
          ResquestInfo.append("loginKey", that.resquesInfo.loginKey);
          ResquestInfo.append("phoneCode", e);
          console.log(that.resquesInfo.userName)
          if(!that.checkPhone(that.resquesInfo.userName)){
            alert('请输入正确的11位手机号')
          }else if(!that.checkPassword(that.resquesInfo.loginKey)){
            alert('请输入由数字、字母、下划线组合的不少于8位不大于20位的密码')
          }else if(!that.resquesInfo.loginKey == that.resquesInfo.loginKey2){
            alert('请保证两次输入的密码一致')
          }else {
            that.VuegetResquest(that.GLOBALS.LOGIN_USERREGISTER, ResquestInfo, function (res) {
              console.log(res)
              if (res.code == '10000') {
                $('#ModalLogin').popover('hide')
                $('#ModalRegister').modal();
              }
            }, function (res) {
              console.log(res.message)
            });
          }


        }
      },

      components: {
        LoginModal,
      },

      created: function () {
        console.log(this.resquesInfo.userName)
        let userName = window.localStorage.getItem('userName');
        if(userName == null) {
          this.Index = false
          this.userName = '未登录'
        }else {
          this.Index = true
          this.userName = window.localStorage.getItem('userName')
        }
      }
    }

</script>

<style scoped>
  .form {
    padding: 20px;
  }
  .form input {
    padding-left: 20px;
  }
  .form-group {
    line-height: 2.5em;
  }
  .close {
    position: fixed;
    right: 0;
    margin-right: 26px;
    font-size: 40px;
    padding: 0;
  }
  .btn{
    line-height: 2em;
  }
  .header-body {
    user-select: none;
    background-image: url("../assets/img/bg.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position:relative;
    height: 300px;
    padding-top: 50px;
  }
  .header-body-button {
    line-height: 50px;
    right: 40px;
    position: absolute;
    float: right;
    color: #fff;
    font-size: 18px;
    margin: -40px 0 0 0 ;
  }
  .header-body-button a {
    color: #fff;
    font-weight: 400;
    text-decoration:none
    }
  .header-body-button a:hover{
    color: #1296db;
  }
  .header-title {
    text-align: center;
    font-size: 36px;
    color: #ffffff;
  }
  .header-search {
    padding-top: 50px;
  }
  .header-search-input {
    height: 40px;
    padding: 5px 10px;
    border-radius: 0;
  }
  .header-search-btn {
    height: 40px;
    border-radius: 0;
  }
  .control-label{
    padding: 0px;
  }
</style>
