<template>
  <nav class="nav">
    <router-link to="/" class="nav__brand">Stockify</router-link>
    <ul class="nav__navigation nav__navigation--left">
      <router-link to="/portfolio" activeClass="active" tag="li">
        <a class="nav__links">Portfolio</a>
      </router-link>
      <router-link to="/stocks" activeClass="active" tag="li">
        <a class="nav__links">Stocks</a>
      </router-link>
    </ul>
    <ul class="nav__navigation nav__navigation--right">
      <li class="nav__list-item">
        <a class="nav__links" href="#">End Day</a>
      </li>
      <li class="nav__list-item nav__list-item--dropdown">
        <a class="nav__links" href="#"></a>
        <ul class="nav__dropdown-menu">
          <li>
            <a href="#">Save Data</a>
          </li>
          <li>
            <a href="#">Load Data</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &__brand {
    font-family: "Lobster";
    font-size: 32px;
    text-decoration: none;
    background-image: linear-gradient(to right, $brand-02, $brand-01);
  }

  &__navigation {
  }

  &__navigation--left {
    margin-right: auto;
  }

  &__navigation--right {
  }

  &__list-item {
  }

  &__list-item--dropdown {
  }

  &__links {
  }

  &__dropdown-menu {
  }
}
</style>