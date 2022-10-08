<template>
  <div id="app">

    <body data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
      <Header></Header>
      <div id="main-wrapper">
        <router-view></router-view>
      </div>
      <!--====================  scroll top ====================-->
      <a href="#" class="scroll-top" id="scroll-top">
        <i class="arrow-top icofont-swoosh-up"></i>
        <i class="arrow-bottom icofont-swoosh-up"></i>
      </a>
      <!--====================  End of scroll top  ====================-->

      <Footer></Footer>
      <!--====================  search overlay ====================-->
      <div class="search-overlay" id="search-overlay">

        <div class="search-overlay__header">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-12">
                <!-- search content -->
                <div class="search-content text-end">
                  <span class="mobile-navigation-close-icon" id="search-close-trigger"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-overlay__inner">
          <div class="search-overlay__body">
            <div class="search-overlay__form">
              <form action="#">
                <input type="text" placeholder="Search">
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--====================  End of search overlay  ====================-->

      <div class="mobile-menu-overlay" id="mobile-menu-overlay">
        <div class="mobile-menu-overlay__inner">
            <div class="mobile-menu-overlay__header">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-8">
                            <!-- logo -->
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" class="img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-4">
                            <!-- mobile menu content -->
                            <div class="mobile-menu-content text-end">
                                <span class="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-overlay__body">
                <nav class="offcanvas-navigation">
                    <ul>
                      <li>
                        <router-link to="/">Home</router-link>
                      </li>
                      <li>
                        <router-link to="/about">About</router-link>
                      </li>
                        <li><a href="about-us.html"><span>About</span></a></li>
                        <li class="has-children"><span class="menu-expand"><i></i></span>
                            <a href="#">Category</a>
                            <ul class="sub-menu" style="display: none;">
                                <li><a href="#"><span>Category List</span></a> </li>
                                <li><a href="#"><span>Category Grid</span></a> </li>
                            </ul>
                        </li>
                        <li><a href="#"><span>Write Post</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </body>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
