<template>
  <div class="home">
    <el-row>
      <h5> 记账管理系统</h5>
      <el-col :span="4">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#fff"
                 text-color="#303133"
                 active-text-color="#409EFF">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-platform">
                <span>服务大厅</span>
              </i>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">在场服务</el-menu-item>
              <el-menu-item index="1-2">历史服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-platform">
                <span>服务大厅</span>
              </i>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">在场服务</el-menu-item>
              <el-menu-item index="1-2">历史服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-platform">
                <span>服务大厅</span>
              </i>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">在场服务</el-menu-item>
              <el-menu-item index="1-2">历史服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.info(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
</style>