<template id="ArticleInfo">
  <div>
    <div >
      <div class="col-md-12 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <a @click="BackState()" >返回上一级</a>
              <a>{{CollegeNotic.articleTitle}}</a>
              <a v-model="$route.params.aid"></a>
            </div>
            <div class="my-panel-body-info">
              <p v-html="CollegeNotic.articleContents"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleInfo",
    props:['aid', 'id'],

    data: function () {
      return{
        // 公告简介
        CollegeNotic: {}
      }
    },

    methods:{

      // 文章详情
      getArticleInfo: function () {
        var that = this;
        var apiUrl = that.GLOBALS.ARTICLEINFO_ARTICLEINFO
        $.post(apiUrl,{articleAid: that.$route.params.aid},{emulateJSON:true}).then(function(res){
          console.log(res.data)
          if (res.code == '10000') {
            that.CollegeNotic = res.data
          }
        }, function (res) {
        });
      },

      BackState: function () {

        var that = this;
        this.$router.go(-1);//返回上一层

      },

    },

    created: function () {
      this.getArticleInfo();
    }
  }
</script>

<style scoped>
  .panel-default {
    height: 100%;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    display: flex;
    padding-left: 1%;
    justify-content: space-between;
    line-height: 40px;
    color: #0E90D2;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-title > a{
    width: 33%;
  }
  .my-panel-body-title > a + a{
    text-align: center;
    color: #383838;
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
</style>
