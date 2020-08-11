import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'

axios.defaults.baseURL = 'https://crudcrud.com/api/799d2f839b104207bbd012ba7be4df75'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')