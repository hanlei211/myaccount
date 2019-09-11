<template>
  <div class="home">
    <v-header></v-header>
    <el-row :gutter="24"
            class="home-row">
      <el-col :span="3"
              class="slider">
        <v-sliderbar></v-sliderbar>
      </el-col>
      <el-col :span="21">
        <div>
          <v-tags></v-tags>
          <div class="content">
            <transition name="move"
                        mode="out-in">
              <router-view></router-view>
            </transition>
            <el-backtop target=".content"></el-backtop>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vHeader from './Header.vue';
import bus from './Bus';
import vSliderbar from './Sliderbar.vue';
import vTags from './Tags.vue';
export default {
  data () {
    return {};
  },
  components: {
    vHeader,
    vSliderbar,
    vTags
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.home-row {
  height: 100%;
}

.home-row /deep/ .slider {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.slider {
  background-color: #424f63;
  height: 100%;
}
.content {
  height: 100%;
}
</style>
