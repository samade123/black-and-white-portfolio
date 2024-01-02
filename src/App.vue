<template>
  <div class="header">
    <!-- <div class="left">Dev by Sam</div> -->
    <!-- <div class="right">
      <i class="las la-lg la-bars"></i>
      <button @click="refreshApp">refresh app</button>
    </div> -->
  </div>
  <router-view />

  <PWAModal />
</template>

<script>
import PWAModal from "@/components/PWAModal.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";

import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
export default {
  name: "App",
  components: {
    PWAModal,
  },
  setup() {
    reportWebVitals(sendToVercelAnalytics);
  },
};
</script>

<style lang="scss">
@import "./../node_modules/normalize.css/normalize.css";
@import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

html {
  scroll-behavior: smooth;
}

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
  place-items: center;
  // grid-template-columns: 1fr 1fr;
}
</style>
