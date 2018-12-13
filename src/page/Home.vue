<template id="home">
  <div>
    <div class="row">
      <!--学院公告-->
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div>学院公告</div> <div>more  »</div>
            </div>
            <div class="my-panel-body-list">
              <!--学院公告-->
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item" @click="bindListArticle(item.articleAid)" v-for="item in CollegeNotic">
                    <a><span>{{item.articleTitle}}</span></a><a>{{item.articleCreateTime}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--招生学院-->
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div>招生学院</div>
            </div>
            <div class="my-panel-body-list">
              <!--招生学院-->
              <div class="my_media">
                <div class="media" @click="bindCollegeInfo(item)" v-for="item in CollegeList">
                  <div class="media-left">
                    <img :src="item.departmentLogoFile" class="media-object"/>
                  </div>
                  <div class="media-body my_media_body">
                    <h4 class="media-heading">{{item.departmentName}}</h4>
                    <p>{{item.departmentAddress}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!--学院简介-->
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div>学院简介</div>
            </div>
            <div class="my-panel-body-list">
              <p class="my_introduce" >{{SchoolIntroduce.departmentMemo}}</p>
            </div>
          </div>
        </div>
      </div>

      <!--联系方式-->
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div>联系方式</div>
            </div>
            <div class="my-panel-body-list">
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item my_contact">
                    <a>咨询电话：<span>{{SchoolIntroduce.departmentPhone}}</span></a>
                  </li>
                  <li class="my_list_item my_contact">
                    <a>详细地址：<span>{{SchoolIntroduce.departmentAddress}}</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CollegeInfo from '../page/CollegeInfo';
  import Global from '../components/Global';

  import Vue from 'vue'
  Vue.prototype.GLOBALS = Global;
  export default {
    "/home": "Home",
    data: function () {
      return{
        Col: '234',
        // 学院公告
        CollegeNotic: [],

        // 招生学院
        CollegeList:[],

        // 总院信息
        SchoolIntroduce: '',
      }
    },
    methods:{

      // 获取公告列表
      getArticleList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.INDEX_ARTICLE_LIST,ResquestInfo,function(res){
          that.CollegeNotic = res.data
        },function (res) {console.log(res.message)});
      },

      // 获取学院列表
      getCollegeList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.INDEX_COLLEGE_LIST,ResquestInfo,function(res){
          that.CollegeList = res.data
        },function (res) {console.log(res.message)});
      },

      // 获取学院简介
      getCollegeInfo: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.INDEX_COLLEGE_INFO,ResquestInfo,function(res){
          that.SchoolIntroduce = res.data
        },function (res) {console.log(res.message)});
      },

      // 跳转公告详情
      bindListArticle: function (e){
        const that = this;
        that.$router.push({
          name: 'ArticleInfo',
          params: {
            aid: e,
            id: '0'
          },
        })
      },

      // 跳转学院详情
      bindCollegeInfo: function (e) {
        const that = this;
        that.$router.push({
          name: 'CollegeInfo',
          query: {
            aid: e.departmentAid,
            collegeName: e.departmentName
          },
        })
      },


    },

    // 项目初始化
    created: function(){
      this.getArticleList()   // 获取公告列表
      this.getCollegeList()   // 获取学院列表
      this.getCollegeInfo()   // 总院信息
    },

    components: {
      // ListCollege
    }
  }
</script>

<style scoped>
  .col-left {padding-right: 5px;}
  .col-right {padding-left: 5px;}

  /*标题框*/
  .panel_title {font-size: 18px;color: #0E90D2;border-bottom: 2px solid #cccccc;user-select: none;}

  .panel-default {
    user-select: none;
    height: 290px;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    color: #0E90D2;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-list {
    margin-bottom: 20px;
    min-height: 216px;
  }
  .my_list {
    border: 0px;
  }
  .my_list_item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
  }
  .my_list_item a {
    color: #212529;
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 14px;
    width: 100%;
  }
  .my_list_item a :hover{
    color: #1296db;
  }
  .my_list_item a span {
    margin-left: 4%;
  }

  /*招生学院*/
  .my_media {
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
  }
  .media:first-child {
    margin-top: 15px;
  }
  .my_media > view{
    width: 50%;
  }
  .my_media  img{
    width:60px;
  }
  .my_media_body {
    width: 180px;
    overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
  }

  /*学校简介*/
  .my_introduce {
    padding: 1em;
    font-size: 16px;
    display:block;
    text-indent: 2em;
    /*overflow-y:scroll;*/
  }

  /*联系方式*/
  .my_contact {
    border-bottom: 0px;
  }
</style>
