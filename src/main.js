import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import axios from 'axios'
axios.defaults.baseURL = 'https://crudcrud.com/api/666324806d6a42b7834dfb7559098019/'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')