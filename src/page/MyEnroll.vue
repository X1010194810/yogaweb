<template id="MyEnroll">
  <div>
    <!--我的报名-->
    <Table border :columns="Table" :data="EnrollList" :cellClassName="cellClassName" stripe ></Table>

    <!--<EnrollModal :EnrollInfo="EnrollInfo" ></EnrollModal>-->

    <Modal v-model="modal" @on-cancel="getCourseEnrollUser(aid)" >
        <div class="modal-header">
          <h4 class="modal-title" >报名详情</h4>
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
    </Modal>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EnrollModal from '../components/EnrollModal';


  export default {
    name: "MyEnroll",
    // props:['idCode'],

    data: function () {
      return{
        Token: '',
        modal: false,

        // 报名列表
        EnrollList: [],

        // 报名详情
        EnrollInfo: '',

        stripe: 'false',
        Table: [
          {
            title: '班级名称',
            key: 'courseName',
            width: 150,
            tooltip: true,
          },
          {
            title: '报名费用',
            key: 'courseEnrollPrice',
            width: 100,
          },
          {
            title: '报名起止时间',
            key: 'dateStartEnd'
          },
          {
            title: '班级介绍',
            key: 'courseName',
            tooltip: true,
            width:  120,
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
                      this.getEnrollInfo(params.row.courseEnrollAID)
                    }
                  }
                }, '详情'),
              ]);
            }
          },
          {
            title: '状态',
            key: 'enrollDate',
            width: 120,
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.Confirmation(params.row.courseEnrollAID, '1')
                    }
                  }
                }, '确认打款'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.Confirmation(params.row.courseEnrollAID, '0')
                    }
                  }
                }, '取消报名'),
              ]);
            }
          }
        ],
      }
    },
    methods:{

      show (index) {
        this.modal1 = true;
        this.$Message.info('Clicked ok');
      },
      remove (index) {
        console.log(index)
        // this.data6.splice(index, 1);
      },

      // 获取报名列表
      getEnrollList: function (e) {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        that.VuegetResquest(that.GLOBALS.MYENROLL_LIST,ResquestInfo,function(res){
          // console.log(res.data);
          that.EnrollList = res.data;
        },function (res) {console.log(res.message)});
      },

      // 报名详情
      getEnrollInfo: function (e) {
        const that = this;
        // console.log(e);
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAid",e);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_INFO,ResquestInfo,function(res){
          console.log(res.data);
          that.modal = true;
          that.EnrollInfo = res.data
        },function (res) {console.log(res.message)});
      },

      // 修改报名状态
      Confirmation: function (aid,e) {
        const that = this;
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAID",aid);
        ResquestInfo.append("actionId",e);
        ResquestInfo.append("makeMoneyCode",e);
        that.VuegetResquest(that.GLOBALS.MYENROLL_SETENROLLSTATE,ResquestInfo,function(res){
          console.log(res.message);
          that.$Message.success('操作成功');
        },function (res) {that.$Message.warning(res.messag)});
      }
    },

    components: {
      EnrollModal,
    },

    created: function () {
      this.getEnrollList()
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






