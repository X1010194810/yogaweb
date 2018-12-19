<template id="MyEnroll">
  <div>
      <!--我的报名-->
    <Table border :columns="columns7" :data="EnrollList" :cellClassName="cellClassName" stripe ></Table>
        <!--<table class="table">   -->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th>班级名称</th>-->
            <!--<th>报名费用</th>-->
            <!--<th>报名起止时间</th>-->
            <!--<th>班级介绍</th>-->
            <!--<th>状态</th>-->
            <!--<th>操作</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr v-for="item in EnrollList">-->
            <!--<td>{{item.courseName}}</td>-->
            <!--<td>{{item.courseEnrollPrice}}</td>-->
            <!--<td>{{item.dateStartEnd}}</td>-->
            <!--<td>{{item.courseName}}</td>-->
            <!--<td>{{item.enrollDate}}</td>-->
            <!--<button class="info"  @click="getEnrollInfo(item.courseEnrollAID)" data-toggle="modal" data-target="#MyEnrollModal">详情</button> |-->
            <!--<button v-if="item.canOkEnroll" class="info"  @click="Confirmation(item.courseEnrollAID,2)">确认报名</button>-->
            <!--<button v-if="item.canCancel" class="info"  @click="Confirmation(item.courseEnrollAID,0)">取消报名</button>-->
            <!--<button v-if="item.canOkFee" class="info"  @click="Confirmation(item.courseEnrollAID,1)">确认打款</button>-->

          <!--</tr>-->
          <!--</tbody>-->
        <!--</table>-->
    <EnrollModal :EnrollInfo="EnrollInfo" ></EnrollModal>
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

        // 报名列表
        EnrollList: [],

        // 报名详情
        EnrollInfo: '',

        stripe: 'false',
        columns7: [
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
          },
          {
            title: '状态',
            key: 'enrollDate',
            width: 120,
          },
          {
            title: '操作',
            key: 'action',
            width: 250,
            align: 'center',
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
                      this.getEnrollInfo(params)
                    }
                  }
                }, '确认报名'),
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
                      this.remove(params.index)
                    }
                  }
                }, '取消报名'),
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '确认打款')
              ]);
            }
          }
        ],
        cellClassName: [{

        }],
      }
    },
    methods:{

      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `123`
        })
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
          console.log(res.data);
          that.EnrollList = res.data;
        },function (res) {console.log(res.message)});
      },

      // 报名详情
      getEnrollInfo: function (e) {
        const that = this;
        console.log(e)
        const ResquestInfo = new URLSearchParams();
        ResquestInfo.append("courseEnrollAid",e);
        that.VuegetResquest(that.GLOBALS.COLLEGEINFO_COURSEENROLL_INFO,ResquestInfo,function(res){
          console.log(res.data);
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
          alert(res.message);
        },function (res) {console.log(res.message)});
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






