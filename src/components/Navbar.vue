<template>
  <div> 
      <div class="fixed-top">
        <div class="container-fluid nav-items">
          <img src="../assets/images/Bitmap.svg" class="img-fluid" alt="brand-logo">
          <div class="profile pr-5 d-flex align-items-center justify-content-strech">
            <img src="../assets/images/Rectangle.png" class="img-fluid" alt="profile"/>
            <p class="ml-2 mt-3"> Hi, Joshua <span><img src="../assets/images/Icon.jpg" class="ml-2" alt=""></span></p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container-fluid {
        background: #FFFFFF;
        border: 1px solid rgba(106, 126, 138, 0.1);
        box-sizing: border-box;
    }
    .nav-items {
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }
    .profile p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      letter-spacing: -0.251429px;
      color: #013C61;
    }
    @media only screen and (max-width: 768px) {
      .profile {
        padding-right: 10px !important;
      }
    }
</style>