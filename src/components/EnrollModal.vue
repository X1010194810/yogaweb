<template>
  <div>


    <div class="modal " id="EnrollModal" tabindex="-1" data-backdrop="true" role="dialog" aria-labelledby="EnrollModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="width: 470px">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">报名详情</h4>
          </div>
          <div class="modal-body">
            <div class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-3 control-label">班级名称</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseEnrollName}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">班级简介</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseTypeMemo}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">报名说明</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseEnrollMemo}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">报名价格</label>
                <label class="col-sm-9 control-label content">
                  <a href="#">点击查看</a>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="getCourseEnrollUser(aid)">立即报名</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal " id="MyEnrollModal" tabindex="-1" data-backdrop="true" role="dialog" aria-labelledby="MyEnrollModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="width: 470px">
          <div class="modal-header">
            <h4 class="modal-title">报名详情</h4>
          </div>
          <div class="modal-body">
            <div class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-3 control-label">班级名称</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseEnrollName}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">班级简介</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseTypeMemo}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">报名说明</label>
                <label class="col-sm-9 control-label content">{{EnrollInfo.courseEnrollMemo}}</label>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">报名价格</label>
                <label class="col-sm-9 control-label content">
                  <a href="#">点击查看</a>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <!--<button type="button" class="btn btn-primary">立即报名</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EnrollModal",
    props: ['EnrollInfo', 'getCourseEnrollUser', 'aid'],
    data: function () {
      return {
      }
    },

    methods: {

    },

    created: function () {
      var that = this;
      console.log(that.$route.params.EnrollInfo)
    }
  }
</script>

<style scoped>
  .modal {
    margin-top: 10%;
    /*opacity: 0.8;*/
  }
  .content {
    overflow: hidden;
  }
</style>
