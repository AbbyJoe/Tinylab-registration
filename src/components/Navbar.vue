<template>
  <div> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Newslify</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
           <li class="nav-item" v-if="auth">
            <button type="button" @click="logOut" class="btn">Logout</button>
          </li>
          <li class="nav-item" v-if="!auth">
            <button type="button" class="btn"><router-link to="/Register" class="btn">Register</router-link></button>
          </li>
          <li class="nav-item" v-if="!auth">
            <button type="button" class="btn"><router-link to="/Login" class="btn" >Login</router-link></button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data:()=>({

  }),
  methods: {
    logOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.$router.push('/Login')
    }
  },
  computed:{
    auth() {
      return localStorage.getItem('token')
    }
  }

}
</script>

<style scoped>
  .btn{
      font-family: 'Roboto', sans-serif;
  }
</style>