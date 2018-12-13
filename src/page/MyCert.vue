<template>
  <div>
    <!--我的证书-->
    <table class="table">
        <thead>
          <tr>
            <th>证书名称</th>
            <th>证书编号</th>
            <th>获得时间</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in CertList">
            <td>{{item.courseCertUserName}}</td>
            <td>{{item.courseCertUserCode}}</td>
            <td>{{item.certTime}}</td>
            <td  @click="getCertInfo(item.courseCertUserAid)" data-toggle="modal" data-target="#CertLsit">详情</td>
          </tr>
        </tbody>
      </table>

      <CertListModal :CertInfo="CertInfo"></CertListModal>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios'
  import CertListModal from '../components/CertListModal';

    export default {
      name: "MyCert",

      data: function () {
        return{
          // 证书列表
          CertList: '',
          // 证书详情
          CertInfo: {
            certDean: "方院长",
            courseCertUserCode: "333",
            courseCertUserEndDate: null,
            courseCertUserName: "瑜伽初级",
            courseCertUserSignDate: "1900-01-01",
            courseCertUserStartDate: "1900-01-01",
            userBirth: "19940722",
            userId: "532926199407221518",
            userName: "王加雷",
            userNation: "中国",
            userPhotoFile: "0215541",
            userSex: "男"
          },
        }
      },
      methods:{
        // 证书列表
        getCertList: function () {
          var that = this;
          var ResquestInfo = new URLSearchParams();
          that.VuegetResquest(that.GLOBALS.MYCERT_LIST,ResquestInfo,function(res){
            that.CertList = res.data
          },function (res) {console.log(res.message)});
        },

        // 证书详情
        getCertInfo: function (e) {
          var that = this;
          var ResquestInfo = new URLSearchParams();
          ResquestInfo.append("courseCertUserAid", '1');
          that.VuegetResquest(that.GLOBALS.MYCERT_CERTINFO,ResquestInfo,function(res){
            console.log(res.data)
            that.CertInfo = res.data;
          });
        },
      },
      components: {
        CertListModal,
      },

      created: function () {
        console.log(window.localStorage.getItem('Token'))
        this.getCertList()
        this.getCertInfo()
      }
    }
</script>

<style scoped>

</style>
