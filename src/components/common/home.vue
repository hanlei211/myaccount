<template>
<div class="home">
    <v-header></v-header>
    <el-row :gutter="24" class="home-row">
        <el-col :span="3" class="slider">
            <v-sliderbar></v-sliderbar>
        </el-col>
        <el-col :span="21">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import vHeader from './Header.vue';
import bus from './Bus';
import vSliderbar from './Sliderbar.vue';
export default {
    data() {
        return {};
    },
    components: {
        vHeader,
        vSliderbar
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
</style>
