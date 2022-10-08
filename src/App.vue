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
