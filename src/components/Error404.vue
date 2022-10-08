<template>
  <div class="site-wrapper-reveal">
    <div class="error-404-area">
      <div class="container">
        <div class="row ">
          <div class="col-lg-12">
            <div class="error-404-content text-center">
              <div class="banner aos-init aos-animate" data-aos="fade-up">
                <img src="@/assets/images/banners/error-404.png" alt="">
              </div>
              <div class="error-text aos-init aos-animate" data-aos="fade-up">
                <h5>This Page is Not Found.</h5>
                <h2>We are sorry for this error.
                  Can’t find this page.</h2>

                <div class="button-box mt-30 aos-init aos-animate" data-aos="fade-up">
                  <router-link to="/" class="btn-large btn-primary">
                    <i class="icofont-long-arrow-left mr-2"></i> Back
                    To Home
                  </router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="error-area-shap">
        <img src="@/assets/images/shap/error-shap.png" alt="">
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'Error404'
}
</script>