<template>
  <div id="app">
    <Header/>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-12">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style lang="scss">
@import './sass/main.scss';

.fade-enter-active {
  animation: slide-in 0.2s;
}

.fade-leave-active {
  animation: slide-out 0.2s;
}

@keyframes slide-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
