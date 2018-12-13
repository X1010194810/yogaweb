<template>
  <div>
    <div class="modal" id="ModalLogin" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
              <label for="firstname" class="col-sm-3 control-label">用户名</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="firstname" v-model="resquesInfo.userName" placeholder="请输入11位手机号码">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">密 码</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="resquesInfo.loginKey" placeholder="请输入6至12位手机密码">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">验证码</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" v-model="resquesInfo.imageCode" placeholder="请输入右侧图片验证码">
              </div>
              <div class="col-sm-4">
                <img :src="imageData[0]" @click="getImageData" height="34">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="SubmitLogin(resquesInfo.imageCode)" class="btn btn-primary col-md-10 col-md-offset-1">
            登录
          </button>
          <div class="model_register">
            <div >忘记密码</div>
            <div  @click="getImageData" data-dismiss="modal" aria-hidden="true" data-toggle="modal" data-target="#ModalRegister">没有账号，立即注册？</div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="modal" id="ModalRegister" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="myModalLabels" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" >
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
          </button>
          <h4 class="modal-title" id="myModalLabels">
            用户注册
          </h4>
        </div>
        <div class="modal-body">
          <div class="form-horizontal" role="form">
            <div class="form-group">
              <label for="firstname" class="col-sm-3 control-label">手机号</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="firstnames" v-model="resquesInfo.userName" placeholder="请输入11位手机号码">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">密 码</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="resquesInfo.loginKey" placeholder="请输入6至12位手机密码">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">确认密码</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="resquesInfo.loginKey2" placeholder="请输入6至12位手机密码">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">验证码</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" v-model="resquesInfo.imageCode" placeholder="请输入右侧图片验证码">
              </div>
              <div class="col-sm-4">
                <img :src="imageData[0]" height="34">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">短信验证码</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" v-model="resquesInfo.messageCode" placeholder="请输入短信验证码">
              </div>
              <div class="col-sm-4 register_code" @click="getRegisterCode(resquesInfo.imageCode)">
                获取验证码
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="SubmitRegister(resquesInfo.messageCode)" class="btn btn-primary col-md-10 col-md-offset-1">
            确定注册
          </button>
        </div>

        <div class="model_login">
          <div @click="getImageData" data-dismiss="modal" aria-hidden="true" data-toggle="modal" data-target="#ModalLogin">已有账号，返回登录</div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
    export default {
      name: "LoginModal",
      props: ['resquesInfo', 'imageData', 'SubmitLogin',  'getImageData', 'getRegisterCode', 'SubmitRegister'],
      data: function () {
        return {
        }
      },

      methods: {
      },
      created: function () {

      }
    }
</script>

<style scoped>
  .modal {
    margin-top: 10%;
    user-select: none;
  }
  .modal-footer {
    text-align: center;
  }
  .model_login {
    margin: 0px 10% 0 10%;
    width: 80%;
    color: #2e6da4;
    text-align: right;
  }
  .model_register {
    display: flex;
    width: 80%;
    color: #2e6da4;
    margin: 8px 10% 0 10%;
    justify-content: space-between;;
  }
  .register_code {
    background-color:  #2e6da4;
    color: #fff;
    margin-left: 10px;
    line-height: 32px;
    width: 100px;
    border-radius: 10px;
  }
</style>
