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
Vue.filter('currency', function(value) {
  return '$' + value.toLocaleString();
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
