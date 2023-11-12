<template>
  <div id="app">
    <HeaderNav />
  </div>
  <router-view />
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c2c2c;
  font-size: 20px;
}

@media (max-width: 850px) {
  nav a {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  nav a {
    font-size: 14px;
  }
}

nav a.router-link-exact-active {
  color: #8c30e3;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
}

img {
  width: 100px;
  height: auto;
}
</style>
