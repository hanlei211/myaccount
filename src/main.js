// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n  from 'vue-i18n'
import ElementUI from 'element-ui'
import { messages } from './components/common/i18n';
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(ElementUI,{
  size:'small'
});
const i18n = new VueI18n({

  locale:'zn',
  messages
})

router.beforeEach((to,from,next)=>{
let token = localStorage.getItem("userName");
if(!token && to.path!='/login'){
    next('/login');
}else{ 
    next();
}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
