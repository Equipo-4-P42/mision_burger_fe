<template>
  <div id="app" class="app">
    <div class="global_container">
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",

  data: function () {
    return {};
  },
  components: {
    Header,
    Footer,
    Cards,
  },

  methods: {},
};
</script>

<style>
  @import './css/Styles.css';
  .global_container{
    max-width: 1920px;
  }
</style>
