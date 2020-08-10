<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-6 model__image">
          <div class="model__content">
            <p class="font-weight-bold">No Hazzles</p>
            <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod.</p>
            <img src="../assets/images/Slider Dots.svg" style="cursor:pointer" alt="dots">
          </div>
        </div>
        <div class="col-lg-6 form__container">
          <div class="conatiner form__content">
              <h3>Create your free account</h3>
              <p>Already registered? <span> Sign in</span></p>
          </div>
          <div class="form__card">
              <form>
                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <label for="firstName">First Name</label>
                    <div class="d-flex align-items-center">
                      <input type="text" v-model="firstname" name="name" class="form-control" id="name" placeholder="First Name" required/>
                      <user-icon size="1.5x" class="custom-class"></user-icon>
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="LastName">Last Name</label>
                    <div class="d-flex align-items-center">
                      <input type="text" v-model="lastname" class="form-control" name="Last Name" placeholder="Last Name" />
                      <user-icon size="1.5x" class="custom-class"></user-icon>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="Email">Email</label>
                  <div class="d-flex align-items-center">
                    <input type="email" v-model="email" class="form-control" name="email" placeholder="josh.bakery@gmail.com" required />
                    <at-sign-icon size="1.5x" class="custom-class"></at-sign-icon>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <div class="d-flex align-items-center">
                    <input type="password" v-model="password" class="form-control" name="Password" placeholder="*************" required/>
                    <eye-icon size="1.5x" class="custom-class"></eye-icon>
                  </div>
                </div>
                <div class="text-right"><button type="submit" @click.prevent="submitForm" class="continue__btn">Continue</button></div>
              </form>
            </div>
            <div class="container footer d-md-flex py-4">
            <div class="mr-md-auto text-center text-md-left">
              <div class="policy">
               <p>By siging up, you agree to our <span>Terms</span> and <span>Privacy Policy</span> </p>
              </div>
            </div>
            <div class="text-center copyright text-md-right pt-3 pt-md-0">
             <p>© 2019 Tinylabs. All rights reserved.</p> 
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
</template>
<script>
import { UserIcon, EyeIcon, AtSignIcon  } from 'vue-feather-icons'
export default {
  components: {
    UserIcon, EyeIcon, AtSignIcon 
  },
  data:()=>({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }),
  methods: {
    submitForm() {
      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }
      this.$router.push('/users', formData)
    }
  }
}
</script>

<style scoped>
  body {
    background: #FFFFFF !important;
  }
  .model__image {
    background: url("../assets/images/Model.jpg");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.1);
    min-height: 667px;
  }
  .model__content {
    display: block;
    position: absolute;
    left: calc(22% - 47px);
    top: calc(80% - 47px);
    overflow: hidden;
    color: #fff;
    text-align: center;
  }
  .model__content p {
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.578824px;
    color: #FFFFFf
  }
 .form__container {
   margin: 0 auto;
   padding-top: 35px;
 }
.form__card {
  background: #FFFFFF;
  box-shadow: 0px 20px 50px #EAEEE9;
  border-radius: 5px;
  padding: 40px;
  margin-top: 30px;
}
  .form__content h3 {
    font-weight: 500;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.4px;
    font-family: 'Roboto', sans-serif;
    color: #013C61;
  }
  .form__content p {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.102857px;
    color: #013C61;
    font-family: 'Roboto', sans-serif;
  }
  .form__content p span {
    color: #2BDA53;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
  .form-group label {
    font-size: 15px;
    line-height: 22px;
    color: #6A7E8A;
    font-family: 'Roboto', sans-serif;
    margin-left: 15px;
  }
  input::placeholder {
    font-size: 17px;
    line-height: 25px;
    letter-spacing: -0.114286px;
    color: #013C61;
    font-family: 'Roboto', sans-serif;
  }
  .form-group input {
    border: 0;
    border-bottom: 1px solid #E6E7EB;
    padding: 20px 15px;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus,
  .uneditable-input:focus {
    border-color: #2BDA53;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
    outline: 0 none;
  }
  .continue__btn {
    border: 0;
    width: 180px;
    height: 40px;
    background: #2BDA53;
    box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    transition: all 1s;
    margin-top: 20px;
  }
  .custom-class {
    position: relative;
    top: 0;
    right: 30px;
    color: #013C61;
  }
  .footer {
    margin-top: 40px;
  }
  .policy p, .copyright p{
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
    font-family: 'Roboto', sans-serif;
    color: #6A7E8A;
    margin-block-end: 0em;
  }
  .policy p span {
    color: #2BDA53;
  }
  
  @media only screen and  (max-width: 800px) {
    body {
      background: #E5E5E5;
    }
  .model__image {
    background-image: none;
  }
  .col-xl-5 {
    display: none;
  }
  .form__container {
    padding-top: 20px;
  }
  .form__card {
    padding: 20px;
  }
  .form__content {
    text-align: center;
  }
  .form__content h3 {
    font-size: 25px;
  }
  .continue__btn {
    width: 100%;
  }
  input::placeholder  {
    font-size: 17px;
  }
  .form-group label {
    font-size: 15px;
  }
}
</style>