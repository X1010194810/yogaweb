<template id="MyEnroll">
  <div>
      <!--我的报名-->
        <table class="table">
          <thead>
          <tr>
            <th>班级名称</th>
            <th>报名费用</th>
            <th>报名起止时间</th>
            <th>班级介绍</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in CertificateList">
            <td>{{item.courseName}}</td>
            <td>{{item.courseEnrollPrice}}</td>
            <td>{{item.dateStartEnd}}</td>
            <td>{{item.courseName}}</td>
            <td>{{item.enrollDate}}</td>
            <td  @click="getCertInfo(item.courseEnrollAID)" data-toggle="modal" data-target="#myModal2">详情</td>
          </tr>
          </tbody>
        </table>
    <!--弹窗-->
    <div class="modal " id="myModal2" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" style=" max-width: 900px;">
        <div class="modal-body">
          <!--<CertInfo v-bind:CertInfo="CertInfo"></CertInfo>-->
        </div>
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios'

  // axios.defaults.withCredentials = true; //让ajax携带cookie
  // import CertInfo from '@/components/CertInfo';

  export default {
    name: "MyEnroll",
    // props:['idCode'],

    data: function () {
      return{
        Token: '',

        // 报名列表
        CertificateList: [],
      }
    },
    methods:{

      // 获取报名列表
      getEnrollList: function (e) {
        var that = this;
        axios({
          method:'post',
          url: that.GLOBALS.MYENROLL_LIST,
          headers: {
            'token': window.localStorage.getItem('Token')
          }
        }).then(function(res){
            if(res.data.code == '10000'){
              that.CertificateList = res.data.data
            }
        });
      },
    },

    created: function () {
      this.getEnrollList()
    }
  }
</script>

<style scoped>

</style>






