<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="header">
    <div class="left">Dev by Sam</div>
    <div class="right">
      <i class="las la-lg la-bars"></i>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./../node_modules/normalize.css/normalize.css";
@import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fcfcfc;
}

.header {
  padding: 10px;
  font-weight: bold;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
