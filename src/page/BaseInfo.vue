<template id="BaseInfo">
  <div>
    <!--基本信息-->
    <div class="col-md-12 ">
      <router-view></router-view>
      <form class="form-horizontal" role="form" >
        <div>
          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-6">
          <div  class="panel panel-default">
            <div class="panel-body my-panel-body">
              <!--电话-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">手机号</label>
                <div class="col-sm-9">
                  <div class="phone">{{UserInfo.userPhone}}</div>
                </div>
              </div>
              <!--性别-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">性别</label>
                <div class="radio form_radio">
                  <label class="radio-inline radio_inline">
                    <input type="radio" name="optionsRadiosinline" id="optionsRadios3" @change="ChangeSex('0')" value="option1" :checked="UserInfo.userSex"> 男
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="optionsRadiosinline" id="optionsRadios4" @change="ChangeSex('1')" value="option2" :checked="!UserInfo.userSex"> 女
                  </label>
                </div>
              </div>
              <!--身份证号码-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">身份证号码</label>
                <div class="col-sm-9">
                  <label for="name"><input type="text" class="form-control form_control" maxlength="18" minlength="18" placeholder="请输入18位身份证号码" v-model="UserInfo.userId"></label>
                </div>
              </div>
              <!--国家-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">国家</label>
                <div class="col-sm-9">
                  <label>
                    <select class="form-control form_control" v-model="UserInfo.userNationAid">
                      <option v-for="item in NationList" :value="item.nationAid">{{item.nationName}}</option>
                    </select>
                  </label>
                </div>
              </div>
              <!--详细地址-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">详细地址</label>
                <div class="col-sm-9">
                  <label for="name"><input type="text" class="form-control form_control" minlength="4" maxlength="30" id="Info" v-model="UserInfo.userAddress" placeholder="请输入详细地址"></label>
                </div>
              </div>
              <!--正规照片-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">正规照片</label>
                <div class="col-sm-9">
                  <div class="upload">
                  <div class="edit">
                    <div class="avatar">
                      <div class="img">
                        <img :src="UserInfo.userPhotoFileUrl" height="150" width="300" @click="setAvatarPhoto">
                      </div>
                      <input type="file" name="avatar2" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event, 0)" ref="avatarInputPhoto">
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 col_button">
                  <button type="button" class="btn btn-default" @click="getBaseInfo()">取消</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-6">
          <div  class="panel panel-default">
            <div class="panel-body my-panel-body">
              <!--姓名-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">姓名</label>
                <div class="col-sm-9">
                  <label for="name"><input type="text" class="form-control form_control" maxlength="10" id="name" v-model="UserInfo.userName"></label>
                </div>
              </div>
              <!--邮箱-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">邮箱</label>
                <div class="col-sm-9">
                  <label for="mail"><input type="email" class="form-control form_control" maxlength="50" id="mail" v-model="UserInfo.userEmail"></label>
                </div>
              </div>
              <!--民族-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">民族</label>
                <div class="col-sm-9">
                  <label>
                    <select class="form-control form_control" v-model="UserInfo.userEthnicityAid">
                      <option v-for="item in EnthnicityList" :value="item.ethnicityAid">{{item.ethnicityName}}</option>
                    </select>
                  </label>
                </div>
              </div>
              <!--地域-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">地域</label>
                  <div class="col-sm-3 col_sm_3_left">
                    <label>
                      <select v-model="UserInfo.userProvinceRegionAid" class="form-control" >
                        <option v-for="item in RegionList" :value="item.regionAid">{{item.regionName}}</option>
                      </select>
                    </label>
                  </div>
                  <div class="col-sm-3 col_sm_3">
                    <label>
                      <select v-model="UserInfo.userCityRegionAid" class="form-control">
                        <option v-for="item in CityList" :value="item.regionAid">{{item.regionName}}</option>
                      </select>
                    </label>
                  </div>
                  <div class="col-sm-3 col_sm_3_right">
                    <label>
                      <select v-model="UserInfo.userAreaRegionAid" class="form-control">
                        <option v-for="item in AreaList" :value="item.regionAid">{{item.regionName}}</option>
                      </select>
                    </label>
                  </div>
              </div>
              <!--组织-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">所属单位</label>
                <div class="col-sm-9">
                  <select class="form-control form_control" v-model="UserInfo.userOrganizationAid">
                    <option v-for="item in OrganizationList" :value="item.organizationAid">{{item.organizationName}}</option>
                  </select>
                </div>
              </div>
              <!--单位证明-->
              <div class="form-group form_group">
                <label class="col-sm-3 control-label my_control_label">单位证明</label>
                <div class="col-sm-9">
                  <div id="accident">
                    <div class="hello">
                      <div class="upload">
                        <div class="admin">
                          <div class="admin-content">
                            <div class="edit">
                              <div class="avatar">
                                <div class="img">
                                  <img :src="UserInfo.userOrganizationFileUrl" height="150" width="300" @click="setAvatarOrgan">
                                </div>
                                <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event, 1)" ref="avatarInputOrgan">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 col_button">
                  <button class="btn btn-info popover-show" @click="setBaseInfo()">保存</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
  import Vue from 'vue';
  import * as axios from "axios";
  import util from '../components/util';

  export default {
    name: "BaseInfo",

    data: function () {
      return{
        size: 0,
        imageIndex: false,
        avatar: 'data:image/png;base64,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',
        avatar2: 'data:image/png;base64,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',
        imgInfo: {
          src: ''
        },
        errors: [],
        index: '2830',
        index2: 2,
        index3: 2,
        UserInfo: {},                      //    基本信息
        RequestUserInfo: { },             //    基本信息保存参数
        UserPhotoCode: '',
        UserOrganizationCode: '',


        NationList: [],                   //  国籍列表
        EnthnicityList: [],               //  民族列表
        RegionList: [],                   //  地域列表
        CityList: [],
        AreaList: [],
        OrganizationList: [],            //  组织列表
        unitImage: '',
      }
    },
    methods:{

      // 选择照片
      setAvatarPhoto() {
        this.$refs.avatarInputPhoto.click()
      },
      setAvatarOrgan() {
        this.$refs.avatarInputOrgan.click()
      },
      // 选择照片

      changeImage(e, id) {
        if(id === 0){
          // 上传用户照片
          let file = e.target.files[0];
          let reader = new FileReader();
          let that = this;
          console.log(file);
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            that.UserInfo.userPhotoFileUrl = this.result
          };
          if (this.$refs.avatarInputPhoto.files.length !== 0) {
            var image2 = new FormData();
            image2.append('userPhotoFile', this.$refs.avatarInputPhoto.files[0]);
            this.getImages(image2, id)
          }
        }else {
          // // 上传组织照片
          var file = e.target.files[0];
          var reader = new FileReader();
          var that = this;
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            that.UserInfo.userOrganizationFileUrl = this.result
          };
          if (this.$refs.avatarInputOrgan.files.length !== 0) {
            var image = new FormData();
            image.append('userOrganizationFile', this.$refs.avatarInputOrgan.files[0]);
            this.getImages(image, id)
          }
        }
      },

      // 上传照片
      getImages: function (e,id) {
        const that = this;
        if(id === 0){
          // 上传用户照片
          that.VuefileUpload(that.GLOBALS.BASEINFO_UPLOADUSERPHOTO,e,function(res){
            that.UserInfo.userPhotoFileCode = res.data.userPhotoCode
          },function (res) {console.log(res.message)});
        }else {
          // 上传组织照片
          console.log(e);
          that.VuefileUpload(that.GLOBALS.BASEINFO_UPLOADUSERORGANIZATION,e,function(res){
            that.UserInfo.userOrganizationFileCode = res.data.userOrganizationCode
          },function (res) {console.log(res.message)});
        }
      },

      ChangeSex: function(e){
        this.UserInfo.userSex = e === 0;
      },

      fileClick() {
        document.getElementById('upload_file').click()
      },
      fileChange(el) {
        this.fileAdd(el.target.files[0]);
      },

      fileAdd(file) {
        const that = this;
        //总大小
        // console.log(file)
        // console.log(this.imgInfo)
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') === -1) {
          file.src = 'wenjian.png';

        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.imgInfo = file;
            console.log(this.imgInfo.name);
            // console.log(this.imgInfo.src)
            that.getImages(this.imgInfo.src);
          }
        }
      },

      // 获取基本信息
      getBaseInfo: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.BASEINFO_GETUSERINFO,ResquestInfo,function(res){
          console.log(res.data);
          that.UserInfo = res.data
        },function (res) {console.log(res.message)});
      },

      // 国籍列表
      getNationList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.BASEINFO_GETNATIONLIST,ResquestInfo,function(res){
          that.NationList = res.data
        },function (res) {console.log(res.message)});
      },

      // 民族列表
      getEnthnicityList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.BASEINFO_GETENTHNICITYLIST,ResquestInfo,function(res){
          that.EnthnicityList = res.data
        },function (res) {console.log(res.message)});
      },

      // 地域列表
      getRegionList: function (e, id) {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        ResquestInfo.append("fatherRegionAid", e);
        ResquestInfo.append("regionLevelId", id);
        that.VuegetResquest(that.GLOBALS.BASEINFO_GETREGIONLIST,ResquestInfo,function(res){
          // console.log(res.data)
          if(id === '0'){
            that.RegionList = res.data
          }else if (id === '1'){
            that.CityList = res.data;
            that.UserInfo.userCityRegionAid = res.data[0].regionAid
          }else {
            that.AreaList = res.data;
            that.UserInfo.userAreaRegionAid = res.data[0].regionAid
          }

        },function (res) {console.log('地域获取'+ res.message)});
      },

      // 单位列表
      getOrganizationList: function () {
        const that = this;
        var ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.BASEINFO_GETORGANIZATIONLIST,ResquestInfo,function(res){
          that.OrganizationList = res.data
        },function (res) {console.log(res.message)});
      },

      tirggerFile : function (event) {
        var file = event.target.files; // (利用console.log输出看结构就知道如何处理档案资料)
        console.log(event)
        // do something...
      },

      // 修改基本信息
      setBaseInfo: function (e) {
        const that = this;
        // var RequestUserInfos = {
        //   userId: that.UserInfo.userId,                                   //	  身份证号
        //   userName: that.UserInfo.userName,                               //	  姓名
        //   userSex: that.UserInfo.userSex,                                 //	  性别
        //   userEmail: that.UserInfo.userEmail,                             //		邮箱
        //   userNationAid: that.UserInfo.userNationAid,                    //		国籍aid
        //   userEthnicityAid: that.UserInfo.userEthnicityAid,             //		民族aid
        //   regionAid: that.UserInfo.userId,                                 //	地域aid
        //   userAddress: that.UserInfo.userAddress,                         //	详细地址
        //   userOrganizationAid	: that.UserInfo.userOrganizationAid,      //		组织aid
        //   userPhotoFileCode: that.UserInfo.userPhotoFileCode,                          //	大头照码
        //   userOrganizationFileCode	: that.UserInfo.userOrganizationFileCode,          //	 组织文件码
        // };
        // console.log(RequestUserInfos);

        var ResquestInfo = new URLSearchParams();
        ResquestInfo.append("userId",that.UserInfo.userId);
        ResquestInfo.append("userName",that.UserInfo.userName);
        ResquestInfo.append("userSex",that.UserInfo.userSex);
        ResquestInfo.append("userEmail",that.UserInfo.userEmail);
        ResquestInfo.append("userNationAid",that.UserInfo.userNationAid);
        ResquestInfo.append("userEthnicityAid",that.UserInfo.userEthnicityAid);
        ResquestInfo.append("regionAid",that.UserInfo.userAreaRegionAid);
        ResquestInfo.append("userAddress",that.UserInfo.userAddress);
        ResquestInfo.append("userOrganizationAid",that.UserInfo.userOrganizationAid);
        ResquestInfo.append("userPhotoFileCode",that.UserInfo.userPhotoFileCode);
        ResquestInfo.append("userOrganizationFileCode",that.UserInfo.userOrganizationFileCode);
        console.log('123456');
        console.log(that.UserInfo.userAddress);
        if(!that.checkCard(that.UserInfo.userId)){
          this.$Message.warning('请输入正确的18位身份证号');
        }else if (that.UserInfo.userAddress === null){
          this.$Message.warning('请输入详细地址');
        }else if(!that.checkEmail(that.UserInfo.userEmail)){
          this.$Message.warning('请输入正确的邮箱地址');
        }else if(!that.checkName(that.UserInfo.userName)){
          this.$Message.warning('请输入正确的姓名');
        }else {
          console.log('123456');
          that.VuegetResquest(that.GLOBALS.BASEINFO_SETUSERINFO,ResquestInfo,function(res){
            console.log(res);
            that.$Message.success('保存成功');
          },function (res) {that.$Message.warning(res.message)})
        }
      },
    },

    created: function () {
      const that = this;
      that.getBaseInfo();
      that.getNationList();
      that.getRegionList('-1','0');
      that.getEnthnicityList();
      that.getOrganizationList();
    },
    computed: {
      userProvinceRegionAid(){
        return this.UserInfo.userProvinceRegionAid
      },
      userCityRegionAid(){
        return this.UserInfo.userCityRegionAid
      },
      imgInfos(){
        return this.imgInfo
      }
    },

    watch: {
      userProvinceRegionAid(newName, oldName) {
        this.getRegionList(newName,'1');
      },
      userCityRegionAid(newName, oldName) {
        this.getRegionList(newName,'2');
      },
      imgInfos(newName, oldName) {
        this.imgInfo = newName;
        console.log(this.imgInfo)
      },
    }
  }
</script>

<style scoped>
  label {
    display: inline;}
  .popover-title {
    display: none;
  }
  .col-right {
    border: 1px solid #ccc;
  }
  .col-6 {
    padding: 0;
    height: 533px;
  }
  .col_sm_3_left {
    padding-right: 0;
  }
  .col_sm_3 {
    padding-right: 0;
    /*padding-left: 2px;*/
  }
  .col_sm_3_right {
    padding-left: 2px;
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
  .phone {
    margin-top: 8px;
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


  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  .upload_warp_img_div {
    position: relative;
    height: 100px;
    width: 120px;
    border: 1px solid #ccc;
    margin: 0 30px 10px 0;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 14px 0 0 14px;
    overflow: hidden
  }

  .upload_warp_text {
    text-align: left;
    margin-bottom: 10px;
    padding-top: 10px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }

  .upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }

  .upload_warp_left img {
    margin-top: 32px;
  }

  .upload_warp_left {
    float: left;
    width: 100%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    cursor: pointer;
  }

  .upload_warp {
    margin: 14px;
    height: 130px;
  }

  .upload {
    border: 1px solid #ccc;
    background-color: #fff;
    /*width: 650px;*/
    box-shadow: 0 1px 0 #ccc;
    border-radius: 4px;
  }

  .hello {
    /*width: 650px;*/
    /*margin-left: 34%;*/
    text-align: center;
  }

</style>






