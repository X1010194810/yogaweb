<template>
    <header>
      <div class="header-body">
        <div class="header-body-button">
          <label v-if="!Index"><a data-toggle="modal" @click="getImageData()" data-target="#myModal">登录 </a>|<a> 注册</a></label>
          <label v-if="Index"><a >{{userName}} </a>|<a @click="getBaseInfo()"> 个人中心</a></label>
        </div>
        <div class="header-title">OSS信息管理平台</div>
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

      <div class="modal" id="myModal" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
              </button>
              <h4 class="modal-title" id="myModalLabel">
                用户登录
              </h4>
            </div>
            <div class="modal-body">
              <div class="form-horizontal" role="form">
                <div class="form-group">
                  <label for="firstname" class="col-sm-2 control-label">用户名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="firstname" v-model="resquesInfo.userName" placeholder="请输入11位手机号码">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">密 码</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" v-model="resquesInfo.loginKey" placeholder="请输入6至12位手机密码">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">验证码</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" v-model="resquesInfo.imageCode" placeholder="请输入右侧图片验证码">
                  </div>
                  <div class="col-sm-4">
                    <img :src="imageData" height="34">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="SubmitLogin()" class="btn btn-primary col-md-10 col-md-offset-2">
                登录
              </button>
            </div>
          </div>
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
    </header>
</template>

<script>
    export default {
      name: "Header",
      data: function () {
        return{
          Index: false,
          userName: '',
          idCode: '123',
          imageData: '',
          imageKey: '',
          staffAid: '',
          staffName: '',
          resquesInfo: {
            userName: '18487166238',
            loginKey: '454545',
            imageCode: ''
          }
        }
      },

      methods:{
        // 跳转个人中心
        getBaseInfo: function () {
          var that = this;
          that.$router.push({
            // 你要跳转的地址
            name: 'BaseInfo',

          })
        },

        // 查询证书
        getCertList: function (e) {
          var that = this;
          that.$router.push({
            // 你要跳转的地址
            name: 'ListCert',
            params: {
              idCode: e,
            },
          })
        },

        // 获取图片验证码
        getImageData: function () {
          let that = this;
          let url = that.GLOBAL.HTTP_URL + '/login/getImageCode';
          $.post(url,{},{emulateJSON:true}).then(function(res){
            if(res.code == '10000'){
              that.imageData = res.data.imageData,
              that.imageKey = res.data.imageKey
            }
          }, function (res) {
          });
        },

        // 登陆
        SubmitLogin: function () {
          var that = this;
          let url = that.GLOBAL.HTTP_URL + '/login/userLogin';
          $.post(url,{userName: this.resquesInfo.userName,loginKey: this.resquesInfo.loginKey,imageCode: that.resquesInfo.imageCode,imageKey: that.imageKey},{emulateJSON:true}).then(function(res){
            // console.log(res)
            if (res.code == '10000') {
              window.location.reload();
              window.localStorage.setItem('Token', res.data.token)
              window.localStorage.setItem('userName', res.data.userName)
              $('#myModal').modal('hide')
              that.$router.push({
                // 跳转地址
                name: 'BaseInfo',
              })
            }
          }, function (res) {
          });
        }


      },
      created: function () {
        let userName = window.localStorage.getItem('userName')

        if(userName == null) {
          this.Index = false
          this.userName = window.localStorage.getItem('userName')
        }else {
          this.Index = true
          this.userName = window.localStorage.getItem('userName')
        }

        // this.Token = window.localStorage.getItem('Token')
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
    background-image: url("../assets/img/bg.png");
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
