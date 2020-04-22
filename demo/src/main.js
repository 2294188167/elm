// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import '@/assets/css/commponents.css'
import home from '@/components/home'
// 引入全部组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);


  

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import Mint from 'mint-ui';
Vue.use(Mint);
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
