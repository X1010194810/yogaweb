<template>
  <div class="modal fade" id="CertInfoModal" tabindex="-1" data-backdrop="true" role="dialog" aria-labelledby="ModalCertInfo" aria-hidden="true">
    <div class="modal-dialog modal_dialog">
      <div class="modal-content" style="width: 470px">
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
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CertInfoModal",
      props: ['CertInfo'],
      data: function () {
        return {

        }
      },
      methods: {
      },

      created: function () {
        var that = this;
        console.log(that.$route.params.CertInfo)
      }
    }
</script>

<style scoped>
  .modal_dialog{
    margin: 30px 0 0 30%;
  }
  .cert {
    width: 900px;
    position: relative;
  }
  .cert-img {
    width: 900px;
  }
  .cert-info-name {
    position: absolute;
    top: 105px;
    left: 430px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-name2 {
    position: absolute;
    top: 292px;
    left: 465px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-birth {
    position: absolute;
    top: 138px;
    left: 430px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-sex {
    position: absolute;
    top: 171px;
    left: 430px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-nation {
    position: absolute;
    top: 204px;
    left: 430px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-id {
    position: absolute;
    top: 237px;
    left: 430px;
    color: #333333;
    font-size: 12px;
  }

  .cert-info-time-start {
    position: absolute;
    top: 292px;
    left: 610px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-time-end {
    position: absolute;
    top: 292px;
    left: 715px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-course {
    position: absolute;
    top: 320px;
    left: 410px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-teacher {
    position: absolute;
    top: 460px;
    left: 440px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-sign {
    position: absolute;
    top: 460px;
    left: 670px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-image {
    position: absolute;
    top: 318px;
    left: 153px;
    color: #333333;
    font-size: 12px;
  }
  .cert-info-image img {
    width: 102px;
    height: 162px;
  }
  .cert-info-code {
    position: absolute;
    top: 498px;
    left: 190px;
    color: #333333;
    font-size: 12px;
  }
</style>
