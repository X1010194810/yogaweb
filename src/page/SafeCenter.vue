<template>
    <div>
      <!--安全中心-->
      <div class="panel-body my-panel-body">
        <form class="form-horizontal" role="form">
          <div class="form-group form_group">
          <label for="firstname" class="col-sm-2 control-label my_control_label">原密码</label>
          <div class="col-sm-10">
          <input type="text" class="form-control form_control" id="firstname" placeholder="请输入11位手机号码">
          </div>
          </div>
          <div class="form-group form_group">
          <label for="lastname" class="col-sm-2 control-label my_control_label">新密码</label>
          <div class="col-sm-10">
          <input  type="text" class="form-control form_control" id="code" placeholder="请输入11位手机号码">
          </div>
          </div>
          <div class="form-group form_group">
          <label for="lastname" class="col-sm-2 control-label my_control_label">确认密码</label>
          <div class="col-sm-10">
          <input  type="text" class="form-control form_control" id="code" placeholder="请输入11位手机号码">
          </div>
          </div>
          <div class="form-group form-center form_center">
            <div class="col-sm-6">
              <button type="button" class="btn btn-info">取消</button>
            </div>
            <div class="col-sm-6">
              <button type="button" class="btn btn-info">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SafeCenter"
    }
</script>

<style scoped>
  .form_center > div{
    text-align: center;
  }
</style>
