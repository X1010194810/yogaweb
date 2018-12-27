<template id="CollegeInfo">
  <div>
    <div class="row">
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
                    <a class="my_list_info"><a @click="getCourseEnrollInfo(item.courseEnrollAid)" data-toggle="modal" data-target="#EnrollModal">详情</a><a>|</a><a @click="getCourseEnrollUser(item.courseEnrollAid)">立即报名</a></a>
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
    <EnrollModal :EnrollInfo="EnrollInfo" :getCourseEnrollUser="getCourseEnrollUser" :aid="aid" ></EnrollModal>
  </div>

</template>

<script>
  import Global from '../components/Global';
  import Vue from 'vue'
  Vue.prototype.GLOBALS = Global;
  import EnrollModal from '../components/EnrollModal';

  export default {
    name: "CollegeInfo",
    props:['aid','collegeName'],

    data: function () {
      return{

      // },

        counter: 0,
        EnrollInfo: '',
        CollegeInfo: {
          name: '河南分院'
        },

        AdmissionsList: [],        // 分院报名列表

        // 获取报名详情
        aid: '1',
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
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("departmentAid",that.$route.query.aid);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_LIST,ResquestInfo,function(res){
          // console.log(res.data);
          that.AdmissionsList = res.data
        },function (res) {console.log(res.message)});
      },

      // 获取报名详情
      getCourseEnrollInfo: function (e) {
        const that = this;
        that.aid = e;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAid", e);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_INFO,ResquestInfo,function(res){
          // console.log(res);
          that.EnrollInfo = res.data
        },function (res) {that.$Message.warning(res.message)});
      },

      // 获取分院公告列表
      getArticleList: function (e) {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("departmentAid",that.$route.query.aid);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_ARTICLE_LIST,ResquestInfo,function(res){
          that.CollegeNoticList = res.data
        },function (res) {that.$Message.warning(res.message)});
      },

      // 获取分院详情
      getCollegeInfo: function () {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("departmentAid",that.$route.query.aid);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COLLEGEINFO,ResquestInfo,function(res){
          that.CollegeNotic = res.data
        },function (res) {that.$Message.warning(res.message)});
      },

      // 用户报名
      getCourseEnrollUser: function (e) {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAid",e);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLLUSER,ResquestInfo,function(res){
          that.$Message.success('报名成功');
        },function (res) {that.$Message.warning(res.message)});
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
    },

    components:{
      EnrollModal
    },

    // 项目初始化
    created: function(){
      this.getCourseEnrollList();   // 获取分院报名列表
      this.getArticleList() ;       // 获取分院公告
      this.getCollegeInfo()        // 获取分院详情
    },
  }
</script>

<style scoped>
  .modal {
    margin-top: 7%;
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






