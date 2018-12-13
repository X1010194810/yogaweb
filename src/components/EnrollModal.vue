<template>
  <div class="modal " id="CertLsit" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" style="width: 470px">
        <div class="modal-header">
          <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×-->
          <!--</button>-->
          <h4 class="modal-title" id="myModalLabel">
            报名详情
          </h4>
        </div>
        <div class="modal-body">
          <div class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-sm-3 control-label">班级名称</label>
              <label class="col-sm-9 control-label content">瑜伽初级【无】</label>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">班级简介</label>
              <label class="col-sm-9 control-label content">无</label>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">报名说明</label>
              <label class="col-sm-9 control-label content">初级</label>
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
          <button type="button" class="btn btn-primary">立即报名</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EnrollModal",
    // props: ['CertInfo', ''],
    data: function () {
      return {
        CertInfo: {
          name: "name",
          birth:"birth",
          start_time:"start_time",
          end_time:"end_time",
          sex:"sex",
          nation:"nation",
          ID:"ID",
          course:"course",
          teacher:"teacher",
          sign_time:"sign_time",
          code:"code",
          photo_url:"photo_url",
        },
      }
    },

    methods: {

    },

    created: function () {
      var that = this;
      // console.log(that.$route.params.CertInfo)
    }
  }
</script>

<style scoped>
  .modal {
    margin-top: 10%;
    /*opacity: 0.8;*/
  }
</style>
