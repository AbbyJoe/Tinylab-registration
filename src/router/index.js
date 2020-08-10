import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import Payment from '../views/Payment'
import signup from '../views/Signup'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: signup
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router