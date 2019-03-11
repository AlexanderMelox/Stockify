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
    <nav class="nav nav--right">
      <li class="nav__list-item">
        <a class="nav__links" href="#">End Day</a>
      </li>
      <li class="nav__list-item">
        <a class="nav__links nav__links--dropdown" href="#">
          <span>Save &amp; Load</span>
          <svg class="nav__dropdown-icon" width="20" height="20">
            <path
              d="M13.4 7.9c.3-.3.7-.3 1 0s.3.7 0 1l-4 3.8c-.2.2-.6.2-.9 0L5.6 8.8c-.3-.2-.3-.7 0-1s.7-.2 1 0L10 11l3.4-3.1z"
            ></path>
          </svg>
        </a>
        <ul class="nav__dropdown-menu">
          <li>
            <a href="#">Save Data</a>
          </li>
          <li>
            <a href="#">Load Data</a>
          </li>
        </ul>
      </li>
    </nav>
  </header>
</template>

<script>
import Logo from "./shared/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>