<template>
  <div>
    <!--========  header area =========-->
    <header class="header">
      <div class="header-mid-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-2 col-5">
              <div class="logo">
                <router-link to="/">
                  <img src="@/assets/images/logo/logo.png" alt="">
                </router-link>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-md-block d-none">
              <div class="header-add-banner text-center">
                <a href="#">
                  <img src="@/assets/images/banners/header-add-banner.jpg" alt="">
                  <h6 class="header-add-text">All Food Item
                    <span>50% Off</span>
                  </h6>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-7">
              <div class="header-mid-right-side">
                <a href="javascript:void(0)" id="search-overlay-trigger" class="single-action-item">
                  <img src="@/assets/images/icons/search.png" alt="">
                </a>
                <a href="#" class="single-action-item">
                  <img src="@/assets/images/icons/notification.png" alt="">
                </a>
                <a href="#" class="single-action-item">
                  <img src="@/assets/images/icons/bookmark.png" alt="">
                </a>
                <a href="register.html" class="single-action-item">
                  <img src="@/assets/images/icons/user.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-9">
              <ul class="social-share-area mt-15 mb-15">
                <li><a href="#"><i class="icofont-facebook"></i></a></li>
                <li><a href="#"><i class="icofont-skype"></i></a></li>
                <li><a href="#"><i class="icofont-twitter"></i></a></li>
                <li><a href="#"><i class="icofont-linkedin"></i></a></li>
              </ul>
            </div>
            <div class="col-lg-8 col-3">
              <div class="main-menu-area text-end">
                <nav class="navigation-menu">
                  <ul>
                    <li>
                      <router-link to="/">Home</router-link>
                    </li>
                    <li>
                      <!-- <a href="about-us.html"><span>About</span></a> -->
                      <router-link to="/about">About</router-link>
                    </li>
                    <li class="has-children"><a href="#"><span>Category</span></a>
                      <ul class="submenu">
                        <li><a href=""><span>Category List</span></a> </li>
                        <li><a href=""><span>Category Grid</span></a> </li>
                      </ul>
                    </li>
                    <li><a href="#"><span>Write Post</span></a></li>
                  </ul>
                </nav>
              </div>
              <!-- mobile menu -->
              <div class="mobile-menu-right">
                <div class="mobile-navigation-icon d-block d-lg-none" id="mobile-menu-trigger">
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--======== End of header area  =========-->
  </div>
</template>
<script>

export default {
  name: 'Header'
}
</script>


