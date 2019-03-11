<template>
  <section class="stocks">
    <div class="row">
      <Stock v-for="stock in stocks"/>
    </div>
  </section>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 250 },
        { id: 4, name: "Twitter", price: 80 }
      ]
    };
  },
  components: {
    Stock
  }
};
</script>