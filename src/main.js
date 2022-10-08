// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/vendor/bootstrap.min.css'
import './assets/fonts/gordita-fonts.css'
import './assets/css/vendor/icofont.min.css'
// import './assets/css/plugins/lightgallery.min.css'
import './assets/css/plugins/swiper-bundle.min.css'
import './assets/css/plugins/aos.css'
import './assets/css/style.css'
// import './assets/js/vendor/modernizr-2.8.3.min.js'
// import jQuery from 'jQuery'
// window.jQuery = jQuery
// import './assets/js/vendor/jquery-migrate-3.3.0.min.js'

// import './assets/js/vendor/bootstrap.min.js'

// import './assets/js/plugins/lightgallery.min.js'

// import 'assets/js/plugins/isotope.min.js'

// import 'assets/js/plugins/masonry.min.js'

// import 'assets/js/plugins/images-loaded.min.js'

// import 'assets/js/plugins/swiper-bundle.min.js'


// import 'assets/js/plugins/aos.js'
import '@/assets/js/main.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
