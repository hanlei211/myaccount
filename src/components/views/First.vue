<template>
  <div class="first">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>语言详情</span>
            <el-button type='text'
                       style="float: right; padding: 3px 0">删除</el-button>
          </div>
          <div v-for="i  in 4"
               :key="i">
            {{"内容"+i}}
          </div>
        </el-card>
      </el-col>
      <el-row :span="16">
        <el-tabs v-model="activeName"
                 type="card"
                 @tab-click="handleClick">
          <el-tab-pane label="用户管理"
                       name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理"
                       name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理"
                       name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿"
                       name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import bus from '../common/Bus';
export default {
  data () {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick (tab, event) {
      console.info(tab, event);
    }
  }
}
</script>