<template>
  <div class="header">
    <div class="collapse-btn"
         @click="collapseChange">
      <i v-if="!collapse"
         class="el-icon-s-fold"></i>
      <i v-else
         class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">记账管理系统</div>
    <div class="header_right">
      <div class="header-user-con">
        <div class="btn-message">
          <el-tooltip effect="dark"
                      :content="message?'有${message}条未读消息':'消息中心'"
                      placement="bottom"></el-tooltip>
        </div>
        <!--用户-->
        <div class="header-user-avator">
          <img src="../../assets/logo.png" />
        </div>
        <!--下拉菜单-->
        <el-dropdown class="user-name"
                     trigger="click">
          <span class="el-dropdown-link">{{userName}}<i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>换肤</el-dropdown-item>
            <el-dropdown-item command="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../common/Bus';
export default {
  data () {
    return {
      collapse: false,
      message: 2,
      userName: hl
    };
  },
  methods: {
    handleCommand (command) {
      if (command = 'loginOut') {
        localStorage.removeItem('ms_username');
        this.$router.path('/login');
      }
    },
    collapseChange () {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    }
  }
}
</script>
<style scoped>
</style>