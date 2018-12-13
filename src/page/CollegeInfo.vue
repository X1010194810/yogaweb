<template id="CollegeInfo">
  <div>
    <div class="row">
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title" @click="getEnrollList()">
              {{$route.query.collegeName}}招生列表
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院招生列表-->
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item" v-for="item in AdmissionsList">
                    <a >{{item.courseEnrollFee}}</a><a>{{item.courseEnrollName}}</a>
                    <a class="my_list_info"><a href="CollegeInfo.vue" @click="getCourseEnrollInfo(item.courseEnrollAid)" data-toggle="modal" data-target="#myModal3">详情</a><a>|</a><a @click="SignUp()">立即报名</a></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              {{CollegeInfo.name}}公告
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院公告-->
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item" @click="bindListArticle(item.articleAid)" v-for="item in CollegeNoticList">
                    <a >{{item.articleTitle}}</a><a>{{item.articleCreateTime}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              {{CollegeInfo.name}}简介
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院简介-->
              <div>
                <p class=" my_introduce">{{CollegeNotic.departmentMemo}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              联系方式
            </div>
            <div class="my-panel-body-list">
              <div >
                <ul class="list-group my_list">
                  <li class="my_list_item my_contact">
                    <a>咨询电话：<span>{{CollegeNotic.departmentPhone}}</span></a>
                  </li>
                  <li class="my_list_item my_contact">
                    <a>详细地址：<span>{{CollegeNotic.departmentAddress}}</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--弹窗-->
    <div class="modal" id="myModal3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" style=" max-width: 900px;">
        <div class="modal-body">
          <!--<ModalPopupEnrollInfo v-bind:CourseEnrollInfo="CourseEnrollInfo"></ModalPopupEnrollInfo>-->

        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Global from '../components/Global';
  import Vue from 'vue'
  Vue.prototype.GLOBALS = Global;

  export default {
    name: "CollegeInfo",
    props:['aid','collegeName'],

    data: function () {
      return{
        counter: 0,
        CollegeInfo: {
          name: '河南分院'
        },

        AdmissionsList: [],        // 分院报名列表

        // 获取报名详情
        CourseEnrollInfo: {
          courseEnrollAid: 17,
          courseEnrollPriceGroupAid: 1,
          courseEnrollName: "瑜伽初级【无】",
          courseTypeMemo: "初级",
          courseEnrollMemo: "无",
          courseEnrollDate: "2012-07-05至2019-04-01"},

        // 分院公告
        CollegeNoticList: [],

        // 郑州分院简介
        CollegeNotic:  '',
      }
    },

    methods: {

      // 获取分院招生报名列表
      getCourseEnrollList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        ResquestInfo.append("departmentAid",that.$route.query.aid);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_LIST,ResquestInfo,function(res){
          console.log(res.data)
          that.AdmissionsList = res.data
        },function (res) {console.log(res.message)});
      },

      // 获取报名详情
      getCourseEnrollInfo: function (e) {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAid", e);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_INFO,ResquestInfo,function(res){
          that.CourseEnrollInfo = res.data
        },function (res) {console.log(res.message)});
      },

      // 获取分院公告列表
      getArticleList: function (e) {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        ResquestInfo.append("departmentAid",that.$route.query.aid);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_ARTICLE_LIST,ResquestInfo,function(res){
          that.CollegeNoticList = res.data
        },function (res) {console.log(res.message)});


      },

      // 获取分院详情
      getCollegeInfo: function () {
        const that = this;
        const apiUrl = that.GLOBALS.COLLEGEINFO_COLLEGEINFO;
        $.post(apiUrl,{departmentAid: that.$route.query.aid},{emulateJSON:true}).then(function(res){
          if (res.code == '10000') {
            that.CollegeNotic = res.data
          }
        }, function (res) {
        });
      },

      // 用户报名
      getCourseEnrollUser: function () {
        var that = this;
        const apiUrl = that.GLOBALS.COLLEGEINFO_COURSEENROLLUSER;
        $.post(apiUrl,{},{emulateJSON:true}).then(function(res){
          if (res.code == '10000') {
            that.SchoolIntroduce = res.data
            that.Contact[0].title = "咨询电话："
            that.Contact[0].date = that.SchoolIntroduce.departmentPhone;
            that.Contact[1].title = "详细地址："
            that.Contact[1].date = that.SchoolIntroduce.departmentAddress;
          }
        }, function (res) {
        });
      },

      // 跳转公告详情
      bindListArticle: function (e){
        const that = this;
        that.$router.push({
          name: 'ArticleInfo',
          params: {
            aid: e,
            id: '1'
          },
        })
      },

      SignUp: function () {
        alert('报名成功')
      }
    },

    components:{
      // ModalPopupEnrollInfo
    },

    // 项目初始化
    created: function(){
      console.log(this.$route.query.collegeName)
      this.getCourseEnrollList()   // 获取分院报名列表
      this.getArticleList()        // 获取分院公告
      this.getCollegeInfo()        // 获取分院详情
    },
  }
</script>

<style scoped>
  .modal {
    margin-top: 10%;
  }
  .panel-default {
    height: 290px;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    color: #0E90D2;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-list {
    margin-bottom: 20px;
    min-height: 216px;
  }

  /*分院列表*/
  /*.my_list {*/
  /*border: 0px;*/
  /*}*/
  .my_list_item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    /*list-style-type:disc;*/
  }
  .my_list_item a {
    color: #212529;
    display:flex;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 14px;
  }
  .my_list_info a{
    color: #1296db;
    margin-right: 4px;
  }

  /*分院简介*/
  .my_introduce {
    padding: 1em;
    font-size: 16px;
    text-indent: 2em;
  }

  /*联系方式*/
  .my_contact {border-bottom: 0px;}
</style>






