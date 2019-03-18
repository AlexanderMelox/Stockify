<template>
  <div class="home">
    <h1 class="home__title">Trade or View your Portfolio</h1>
    <p class="home__funds">Your Funds: ${{ funds | numberWithCommas }}</p>
    <h6 class="home__subtitle">You may Save &amp; Load your Data</h6>
    <h6 class="home__subtitle">Click on 'End Day' to beging a New Day!</h6>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>