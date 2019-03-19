import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

// Filters
Vue.filter('numberWithCommas', function(value) {
  if (!value) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
