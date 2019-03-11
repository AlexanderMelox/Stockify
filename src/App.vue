<template>
  <div id="app">
    <Header/>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
