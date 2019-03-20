<template>
  <header class="header">
    <Logo/>
    <nav class="nav nav--left">
      <router-link to="/portfolio" activeClass="active" tag="li" class="nav__list-item">
        <a class="nav__links">Portfolio</a>
      </router-link>
      <router-link to="/stocks" activeClass="active" tag="li" class="nav__list-item">
        <a class="nav__links">Stocks</a>
      </router-link>
    </nav>
    <div class="nav__funds">
      <strong>Funds: {{ funds | currency }}</strong>
    </div>
    <nav class="nav nav--right">
      <li class="nav__list-item">
        <a class="nav__links" href="#" @click="endDay">End Day</a>
      </li>
      <li class="nav__list-item" @click="isDropdownOpen = !isDropdownOpen">
        <a class="nav__links nav__links--dropdown" href="#">
          <span>Save &amp; Load</span>
          <svg
            :class="['nav__dropdown-icon', { 'flipped': isDropdownOpen }]"
            width="20"
            height="20"
          >
            <path
              d="M13.4 7.9c.3-.3.7-.3 1 0s.3.7 0 1l-4 3.8c-.2.2-.6.2-.9 0L5.6 8.8c-.3-.2-.3-.7 0-1s.7-.2 1 0L10 11l3.4-3.1z"
            ></path>
          </svg>
        </a>
        <ul :class="['nav__dropdown-menu', { 'is-open': isDropdownOpen }]">
          <li>
            <a class="nav__links" href="#" @click="saveData">Save Data</a>
          </li>
          <li>
            <a class="nav__links" href="#" @click="loadData">Load Data</a>
          </li>
        </ul>
      </li>
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

import Logo from './shared/Logo.vue';

export default {
  components: {
    Logo
  },
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>