<template>
  <div class="main">
    <nav>
      <router-link to="/">Список валют</router-link>
      <router-link to="/convert">Конвертер</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";

nav {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  border-bottom: 1px solid $border;

  a {
    font-size: 16px;
    font-weight: 700;
    color: $black;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: $blue;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
