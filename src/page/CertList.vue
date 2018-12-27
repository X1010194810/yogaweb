<template id="CertList">
  <div>
    <div class="col-md-12 col-right">
      <table class="table">
        <thead>
        <tr>
          <th>证书名称</th>
          <th>证书编号</th>
          <th>获得时间</th>
          <th>班级介绍</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="item in CertList">
          <td>{{item.name}}</td>
          <td>{{item.emount}}</td>
          <td>{{item.time}}</td>
          <td>{{item.state}}</td>
          <td data-toggle="modal" data-target="#CertInfoModal" @click="getCertInfo(item.courseCertUserAid)">详情</td>
        </tr>
        </tbody>
      </table>
    </div>
    <CertInfoModal :CertInfo="CertInfo"></CertInfoModal>
  </div>
</template>

<script>
  import CertInfoModal from '../components/CertInfoModal';
  

  props:['idCode']
  export default {
    name: "CertList",
    data: function () {
      return{
        CertInfo: { },

        // 证书列表
        CertList: [],
      }
    },
    methods: {
      // 证书列表
      getCertList: function () {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("idCode",that.$route.params.idCode);
        that.VuegetResquest(that.GLOBALS.CERTLIST_CERTLIST,ResquestInfo,function(res){
          // console.log(res.data)
          that.CertList = res.data;
        },function (res) {console.log(res.message)});
      },

      // 证书详情
      getCertInfo: function (e) {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseCertUserAid",'1');
        that.VuegetResquest(that.GLOBALS.MYCERT_CERTINFO,ResquestInfo,function(res){
          console.log(res.data);
          that.CertInfo = res.data
        },function (res) {console.log(res.message)});
      },
    },

    components:{
      CertInfoModal
    },

    created: function () {
      const that = this;
      console.log(that.$route.params.idCode);
      that.getCertList();
    }
  }
</script>

<style scoped>

  .table {
    font-size: 16px;
  }

  /*我的证书*/
  .btn_default {
    color: #1296db;
    font-size: 16px;
    margin: -8px 0 0 -6px;
  }
</style>
