<template>
  <section class="stocks">
    <div class="row">
      <Stock v-for="stock in stocks" :stock="stock" :key="stock.id"/>
    </div>
  </section>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>