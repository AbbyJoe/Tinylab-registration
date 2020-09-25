<template>
  <div>
      <Navbar/>
      <div class="global-container">
        <div class="card login-form">
            <div class="card-body">
                <h3 class="card-title text-center">Sign Up to Newslify</h3>
                <div class="card-text">
                    <div v-if="error"  class="bg-danger p-2 text-white">{{error}}</div>
                    <form @submit.prevent="signup">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="text" class="form-control form-control-sm" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control form-control-sm" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control form-control-sm" v-model="password">
                        </div>
                        <button type="submit" :disabled="loading === true" class="btn btn-primary btn-block">
                            <div v-if="loading">
                                <div id="loading"></div>
                            </div>  
                        <div v-else>Sign up</div>
                        </button>
                        <div class="sign-up">
                            Already have an account? <router-link to="/Login">Login</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
export default {
    components: {
        Navbar
    },
    data:() =>({
        name: '',
        email: '',
        password: '',
        loading: false,
        error: ''
    }),
    methods: {
        signup() {
            const api_key = 'AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY';
            this.loading = true;
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`, {
                name: this.name,
                email: this.email,
                password: this.password,
            }).then(response => {
                this.loading = false;
                localStorage.setItem('token',response.data.idToken )
                localStorage.setItem('userId', response.data.localId)
                this.$router.push('/')
                console.log(response.data)
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
    html,body { 
        height: 100%; 
        background-color: #f5f5f5;
    }
   
    .card {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .global-container{
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    form{
        padding-top: 10px;
        font-size: 14px;
        margin-top: 30px;
    }
    .card-title{ font-weight:300; }
    .btn{
        font-size: 14px;
        margin-top:20px;
    }
    .login-form{ 
        width:400px;
        margin:30px;
    }
    input, button {
    border-radius: 0;
  }
    .sign-up{
        text-align:center;
        padding:30px 0 0;
    }
    .alert{
        margin-bottom:-30px;
        font-size: 13px;
        margin-top:20px;
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