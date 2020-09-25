<template>
  <div class="home">
    <Navbar/>
   <div class="global-container">
      <div class="card login-form">
      <div class="card-body">
        <h3 class="card-title text-center">Login to Newslify</h3>
        <div class="card-text">
             <div v-if="error" class="bg-danger p-2 text-white">{{error}}</div>
          <form>
            <div class="form-group">
              <label for="exampleInputUsername1">Email</label>
              <input type="email" class="form-control form-control-sm" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
             
              <input type="password" class="form-control form-control-sm" v-model="password">
            </div>
            <button type="submit" :disabled="loading === true" class="btn btn-primary btn-block" @click.prevent="login">
                <div v-if="loading">
                    <div id="loading"></div>
                </div>  
              <div v-else>Login</div>
            </button>
            <div class="sign-up">
              Don't have an account? <router-link to="/Register">Create One</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data:() => ({
    email: '',
    password:'',
    loading: false,
    error: '',
  }),
  methods: {
    login() {
      this.loading = true;
      const api_key = `AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY`
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`, {
          email: this.email,
          password: this.password,
      }).then(response => {
        this.loading = false,
        localStorage.setItem('token', response.data.idToken),
        localStorage.setItem('userId', response.data.localId)
        this.$router.push('/')
      }).catch(error => {
          this.loading = false;
          this.error = error.response.data.error.message
          setTimeout(() => {
            this.error = ''
          }, 3000)
      })
    }
  }
}
</script>
<style scoped>
  .global-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form{
    padding-top: 10px;
    font-size: 14px;
    margin-top: 30px;
  }
  .card-body {
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);  

  }
  .card-title{ 
    font-weight:300; 
  }

  .btn{
    font-size: 14px;
    margin-top:20px;
  }
  input, button {
    border-radius: 0;
  }

  .login-form{ 
    width:370px;
    margin:80px;
  }

  .sign-up{
    text-align:center;
    padding:20px 0 0;
  }
  /* spinner */
    #loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
</style>