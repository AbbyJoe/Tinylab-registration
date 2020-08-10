<template>
  <div>
      <div class="sidebar-container">
        <div class="sidebar-navigation">
          <ul class="sidebar-navigation">
            <li>
              <router-link to="/home" class="link">
                <div class="stroke"></div>
                <grid-icon size="1.5x" class="custom-class"></grid-icon>
              </router-link>
            </li>
            <li>
              <router-link to="/Users" class="link">
                <div class="stroke"></div>
                <users-icon size="1.5x" class="custom-class"></users-icon>
              </router-link>
            </li>
            <li>
              <router-link to="/payment" class="link">
                <div class="stroke"></div>
                <credit-card-icon size="1.5x" class="custom-class"></credit-card-icon>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

  </div>
</template>

<script>
import { GridIcon , UsersIcon, CreditCardIcon  } from 'vue-feather-icons'
export default {
  components: {
    GridIcon, UsersIcon , CreditCardIcon 
  }
}
</script>

<style scoped>
  .sidebar-container {
    position: fixed;
    width: 80px;
    height: 100%;
    left: 0;
    top: 25px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #FFFFFF;
    border: 1px solid rgba(106, 126, 138, 0.1);
    box-sizing: border-box;
  }

  .sidebar-navigation {
    padding: 0;
    margin: 0;
    list-style-type: none;
    position: relative;
  }

  .sidebar-navigation li {
    background-color: transparent;
    position: relative;
    display: inline-block;
    width: 100%;
    line-height: 20px;
  }

  .sidebar-navigation li .link {
    padding: 10px 15px 10px 25px;
    display: block;
    color: #6A7E8A;
    margin-top: 100px;
  }
  .custom-class {
    transition: all 1s;
  }
  .custom-class:hover, .router-link-exact-active .custom-class {
    color: #2BDA53;
  }
 
  .router-link-exact-active .stroke {
    position: absolute;
    top: 95px;
    width: 5px;
    left: 0;
    height: 55px;
    background: #2BDA53;

  }

  @media only screen and (max-width: 768px) {
    .sidebar-container {
      width: 50px;
    }
    .sidebar-navigation li .link {
      padding: 10px 15px 10px 12px;
      margin-top: 90px
    }
    .router-link-exact-active .stroke {
      top: 90px;
    }
  }
</style>