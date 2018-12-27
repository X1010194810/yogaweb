<template id="PersonCenter">
  <div>
    <div class="row">
      <div class="col-md-2">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div @click="ChangeTile('0')"><router-link to="/BaseInfo" v-bind:style="{'color' : Index === '0' ? '#0e90d2':'#383838'}"><img src="../assets/img/u230.png" height="40" width="40"/>基本信息</router-link></div>
              <div @click="ChangeTile('1')"><router-link to="/MyEnroll" v-bind:style="{'color' : Index === '1'  ? '#0e90d2':'#383838'}"><img src="../assets/img/u232.png" height="40" width="40"/>我的报名</router-link></div>
              <div @click="ChangeTile('2')"><router-link to="/MyCert" v-bind:style="{'color' : Index === '2'  ? '#0e90d2':'#383838'}"><img src="../assets/img/u234.png" height="40" width="40"/>我的证书</router-link></div>
              <div @click="ChangeTile('3')"><router-link to="/SafeCenter" v-bind:style="{'color' : Index === '3'  ? '#0e90d2':'#383838'}"><img src="../assets/img/u236.png" height="40" width="40"/>安全中心</router-link></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-10 col-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from '../components/Global';
  import Vue from 'vue'
  Vue.prototype.GLOBALS = Global;

  export default {
    name: "PersonCenter",

    data: function () {
      return{
        Index: 0,
      }
    },
    methods:{
      ChangeTile: function (e) {
        this.Index = e;
        sessionStorage.setItem("Index", e); //添加到sessionStorage
      }
    },

    created: function () {
      this.Index=sessionStorage.getItem('Index');
    },
    destroyed: function () {
      sessionStorage.setItem("Index", 0); //添加到sessionStorage
    },

  }
</script>

<style scoped>
  .info {
    background-color: #fff;
    border-radius: 4px;
    margin-top: 4px;
    color: #0e90d2;
  }

  .col-right {
    border: 1px solid #ccc;
    padding: 0;
  }
  .col-6 {
    padding: 0;
    height: 533px;
  }

  .col-6 > div {
    border: 0;
  }

  .table {
    font-size: 16px;
  }
  .panel-default {
    height: 100%;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    padding-left: 1%;
    line-height: 40px;
  }
  .my-panel-body-title > div{
    text-align: center;
    line-height: 60px;
  }
  .my-panel-body-title img {
    margin-right: 10px;
  }
  .my-panel-body-info {
    margin: 20px 0 20px 0;
    min-height: 216px;
    padding: 0.75rem 1rem;
    background-color: #fff;
  }
  .my-panel-body-info p {
    color: #212529;
    padding: 10px;
    font-size: 16px;
    text-indent: 2em;
  }
  .active {color: #1296db;}

  /*表单提交*/
  form {
    padding: 20px;
  }
  .col_button {
    text-align: center;
  }
  .col_button button{
    border: 1px solid #1296db;
    width: 180px;
    line-height: 24px;
  }
  .my_control_label {
    text-align: right;
    font-size: 16px;
    /*max-width: 30%;*/
    padding-top: 0;
    line-height: 40px;
  }
  .my_control_label div {
    line-height: 40px;
  }
  .col-sm-10 input, .col-sm-10 div {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .radio_inline {
    margin-left: 20px;
    padding-top: 5px;
  }
  .form_control {
    height: 40px;
    line-height: 40px;
  }

  /*我的证书*/
  .btn_default {
    color: #1296db;
    font-size: 16px;
    margin: -8px 0 0 -6px;
  }
  /*安全中心*/
  .form-center{
    display: flex;
    margin-top: 40px;
  }
  .form-center button{
    border: 1px solid #1296db;
    width: 180px;
    line-height: 24px;
  }


</style>






