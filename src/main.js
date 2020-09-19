import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import ScrollLoader from 'vue-scroll-loader'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

Vue.use(ScrollLoader)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')