<template>
  <div class="home">
   <Navbar/>
   <Sidebar/>
   <div class="text-center">
     <h5>PAYMENT PAGE</h5>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '../components/Sidebar'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
<style scoped>
    .text-center {
        margin-top: 10rem;
    }
</style>