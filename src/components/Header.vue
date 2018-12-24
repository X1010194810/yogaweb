<template>
    <header>
      <div class="header-body">
        <div class="header-body-button">
          <label v-if="!Index"><a @click="getImageData()" data-toggle="modal" data-target="#ModalLogin">登录 </a>|<a @click="showRegister()"> 注册</a></label>
          <label v-if="Index"><a >{{userName}} </a> | <a @click="getBaseInfo()"> 个人中心</a> | <a @click="LoginOut()">注销</a></label>
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

      <Modal v-model="modal" title="用户注册" @on-ok="SubmitRegister" ok-text= "注册">
        <!--<Form class="top" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" >-->
          <!--<FormItem label="手机号" prop="Phone">-->
            <!--<Input v-model="resquesInfo.userName"  placeholder="请输入11位手机号码1"></Input>-->
          <!--</FormItem>-->
          <!--<FormItem label="密码" prop="passwd">-->
            <!--<Input v-model="resquesInfo.loginKey" type="password"></Input>-->
          <!--</FormItem>-->
          <!--<FormItem label="确认密码" prop="Password2">-->
            <!--<Input v-model="resquesInfo.loginKey2" type="password" placeholder="确认密码"></Input>-->
          <!--</FormItem>-->
          <!--<FormItem label="验证码" prop="VCode">-->
            <!--<Input v-model="resquesInfo.imageCode" type="text" placeholder="请输入右侧图片验证码"></Input>-->
          <!--</FormItem>-->
          <!--<FormItem label="短信验证码" prop="MCode">-->
            <!--<Input v-model="resquesInfo.messageCode" placeholder="请输入短信验证码"></Input>-->
          <!--</FormItem>-->
        <!--</Form>-->
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="手机号" prop="Phone">
            <Input v-model="resquesInfo.userName" placeholder="请输入11位手机号码"></Input>
          </FormItem>
          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="resquesInfo.loginKey" placeholder="请输入由数字、字母、下划线组合的不少于8位不大于20位的密码"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck" placeholder="请保证两次输入的密码一致"></Input>
          </FormItem>
          <FormItem label="验证码" prop="VCode">
          <Input v-model="resquesInfo.imageCode" type="text" placeholder="请输入右侧图片验证码"></Input>
          </FormItem>
          <FormItem label="短信验证码" prop="MCode">
          <Input v-model="resquesInfo.messageCode" placeholder="请输入短信验证码"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
          </FormItem>
        </Form>
      </Modal>

      <!--<LoginModal  :resquesInfo="resquesInfo" :imageData="imageData" :SubmitLogin="SubmitLogin" :getImageData="getImageData" :getRegisterCode="getRegisterCode"  :SubmitRegister="SubmitRegister" :value="value"></LoginModal>-->
    </header>
</template>

<script>
  import LoginModal from '../components/LoginModal';
  import Vue from 'vue'

    export default {
      name: "Header",
      data: function () {
        // const validatePhone = (rule, value, callback) => {
        //   console.log(this.resquesInfo.loginKey);
        //   console.log(this.checkPassword(this.resquesInfo.loginKey));
        //   if (this.checkPassword(this.resquesInfo.loginKey)) {
        //     callback(new Error('请输入由数字、字母、下划线组合的不少于8位不大于20位的密码'));
        //   } else {
        //     if (this.formCustom.passwdCheck !== '') {
        //       // 对第二个密码框单独验证
        //       this.$refs.formCustom.validateField('passwdCheck');
        //     }
        //     callback();
        //   }
        // };
        const validatePass = (rule, value, callback) => {
          console.log(this.resquesInfo.loginKey);
          console.log(this.checkPassword(this.resquesInfo.loginKey));
          if (this.checkPassword(this.resquesInfo.loginKey)) {
            callback(new Error('请输入由数字、字母、下划线组合的不少于8位不大于20位的密码'));
          } else {
            if (this.formCustom.passwdCheck !== '') {
              // 对第二个密码框单独验证
              this.$refs.formCustom.validateField('passwdCheck');
            }
            callback();
          }
        };
        const validatePassCheck = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please enter your password again'));
          } else if (value !== this.formCustom.passwd) {
            callback(new Error('The two input passwords do not match!'));
          } else {
            callback();
          }
        };
        const validateAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('Age cannot be empty'));
          }
          // 模拟异步验证效果
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('Please enter a numeric value'));
            } else {
              if (value < 18) {
                callback(new Error('Must be over 18 years of age'));
              } else {
                callback();
              }
            }
          }, 1000);
        };

        return{
          modal: false,
          formCustom: {
            passwd: '',
            passwdCheck: '',
            age: ''
          },
          ruleCustom: {
            passwd: [
              { validator: validatePass, trigger: 'blur' }
            ],
            passwdCheck: [
              { validator: validatePassCheck, trigger: 'blur' }
            ],
            age: [
              { validator: validateAge, trigger: 'blur' }
            ]
          },

          Index: false,
          userName: '',
          idCode: '',
          value: '获取验证码',
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
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('Success!');
            } else {
              this.$Message.error('Fail!');
            }
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields();
        },
        showRegister(){
          this.modal = true;
        },
        validateField(e){
          console.log(e)
        },

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
          // console.log(e);
          var that = this;
          that.$router.push({
            name: 'CertList',
            idCode: e,
            params: {
            },
          })
        },

        // 获取登录图片验证码
        getImageData: function () {
          let that = this;
          let url = that.GLOBALS.LOGIN_GETIMAGECODE;
          $.post(url,{},{emulateJSON:true}).then(function(res){
              if(res.code === 10000){
                console.log(res)
                Vue.set(that.imageData,0, res.data.imageData);
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
            // console.log(res)
            that.value = "已发送"
          },function (res) {this.$Message.warning('请输入正确的手机号和验证码');  console.log(res.message)});
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
            if (res.code === 10000) {
              window.location.reload();
              window.localStorage.setItem('Token', res.data.token);
              window.localStorage.setItem('userName', res.data.userName);
              $('#ModalLogin').modal('hide');
              that.$router.push({
                name: 'BaseInfo',
              })
            }
          },function (res) {
            this.$Message.error(res.message);
            // alert(res.message);
            that.getImageData();
            // console.log(res.message)
          });
        },

        // 注册
        SubmitRegister: function (e) {
          const that = this;
          console.log('注册成功');
          console.log(that.resquesInfo)
          // var ResquestInfo = new URLSearchParams();
          // ResquestInfo.append("phone", that.resquesInfo.userName);
          // ResquestInfo.append("loginKey", that.resquesInfo.loginKey);
          // ResquestInfo.append("phoneCode", e);
          // if(!that.checkPhone(that.resquesInfo.userName)){
          //   that.$Message.warning('请输入正确的11位手机号');
          //   // alert('请输入正确的11位手机号')
          // }else if(!that.checkPassword(that.resquesInfo.loginKey)){
          //   that.$Message.warning('请输入由数字、字母、下划线组合的不少于8位不大于20位的密码');
          // }else if(that.resquesInfo.loginKey !== that.resquesInfo.loginKey2){
          //   alert('请保证两次输入的密码一致')
          // }else if(!that.checkVCode(that.resquesInfo.imageCode)){
          //   alert('验证码错误')
          // }else if(!that.checkMCode(that.resquesInfo.messageCode)){
          //   alert('短信验证码错误')
          // }else {
          //   that.VuegetResquest(that.GLOBALS.LOGIN_USERREGISTER, ResquestInfo, function (res) {
          //     alert(res.message);
          //     // console.log(res);
          //     if (res.code === 10000) {
          //       $('#ModalLogin').popover('hide');
          //       $('#ModalRegister').popover('hide');
          //     }
          //   }, function (res) {
          //     alert(res.message)
          //     // console.log(res.message)
          //   });
          //   that.value = '获取验证码'
          // }
        },

        // 注销
        LoginOut: function () {
          window.localStorage.setItem('Token', -1);
          window.localStorage.setItem('userName', '未登录');
          this.Index = false;
          this.userName = '未登录';
          this.BackHome();
        }
      },

      components: {
        LoginModal,
      },

      created: function () {
        // console.log(this.resquesInfo.userName);
        let userName = window.localStorage.getItem('userName');
        if(userName == null || userName === '未登录') {
          this.Index = false;
          this.userName = '未登录'
        }else {
          this.Index = true;
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
