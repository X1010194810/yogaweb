<template>
  <div>


    <!--我的证书-->
    <!--<table class="table">-->
        <!--<thead>-->
          <!--<tr>-->
            <!--<th>证书名称</th>-->
            <!--<th>证书编号</th>-->
            <!--<th>获得时间</th>-->
            <!--<th>操作</th>-->
          <!--</tr>-->
        <!--</thead>-->

        <!--<tbody>-->
          <!--<tr v-for="item in CertList">-->
            <!--<td>{{item.courseCertUserName}}</td>-->
            <!--<td>{{item.courseCertUserCode}}</td>-->
            <!--<td>{{item.certTime}}</td>-->
            <!--<button class="info" @click="getCertInfo(item.courseCertUserAid)" data-toggle="modal" data-target="#CertInfoModal">详情</button>-->
          <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->

    <!--我的报名-->
    <Table border :columns="Table" :data="EnrollList" :cellClassName="cellClassName" stripe ></Table>


    <Modal v-model="modal" @on-cancel="getCourseEnrollUser(aid)" >
      <div class="cert">
        <img src="../assets/img/CertModel.jpg" class="cert-img">
        <div class="cert-info-name">{{CertInfo.courseCertUserName}}</div>
        <div class="cert-info-name2">{{CertInfo.userName}}</div>
        <div class="cert-info-birth">{{CertInfo.userBirth}}</div>
        <div class="cert-info-sex">{{CertInfo.userSex}}</div>
        <div class="cert-info-nation">{{CertInfo.userNation}}</div>
        <div class="cert-info-id">{{CertInfo.userId}}</div>
        <div class="cert-info-time-start">{{CertInfo.courseCertUserStartDate}}</div>
        <div class="cert-info-time-end">{{CertInfo.courseCertUserEndDate}}</div>
        <div class="cert-info-course">{{CertInfo.courseCertUserCode}}</div>
        <div class="cert-info-teacher">{{CertInfo.certDean}}</div>
        <div class="cert-info-sign">{{CertInfo.courseCertUserSignDate}}</div>
        <div class="cert-info-image">
          <img :src="CertInfo.userPhotoFile">
        </div>
        <div class="cert-info-code">
          {{CertInfo.code}}
        </div>
      </div>
    </Modal>
      <!--<CertInfoModal :CertInfo="CertInfo"></CertInfoModal>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios'
  import CertInfoModal from '../components/CertInfoModal';

    export default {
      name: "MyCert",
      modal: false,

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

          Table: [
            {
              title: '班级名称',
              key: 'courseCertUserName',
              width: 150,
              tooltip: true,
            },
            {
              title: '证书编号',
              key: 'courseCertUserCode',
              // width: 100,
            },
            {
              title: '获得时间',
              key: 'certTime'
            },
            {
              title: '操作',
              key: 'courseName',
              tooltip: true,
              // width:  120,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.getEnrollInfo(params.row.courseCertUserAid)
                      }
                    }
                  }, '详情'),
                ]);
              }
            },
          ],
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
            console.log(res.data);
            that.modal = true;
            that.CertInfo = res.data;
          });
        },
      },
      components: {
        CertInfoModal,
      },

      created: function () {
        this.getCertList();
        this.getCertInfo()
      }
    }
</script>

<style scoped>
.info {
   background-color: #fff;
   border-radius: 4px;
   margin-top: 4px;
   color: #0e90d2;
 }
</style>
