// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/vendor/bootstrap.min.css'
// import './assets/fonts/gordita-fonts.css'
import './assets/css/vendor/icofont.min.css'
// import './assets/css/plugins/lightgallery.min.css'
import './assets/css/plugins/swiper-bundle.min.css'
import './assets/css/plugins/aos.css'
import './assets/css/style.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
