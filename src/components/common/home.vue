<template>
  <div class="home">
    <v-header></v-header>
    <v-sliderbar></v-sliderbar>
  </div>
</template>
<script>
import vHeader from './Header.vue';
import bus from './Bus';
import vSliderbar from './Sliderbar.vue';
export default {
  data () {
    return {};
  },
  components: {
    vHeader, vSliderbar
  }
}
</script>