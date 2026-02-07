<template>
  <!-- <div class="header">
    <div class="left">Dev by Sam</div>
   
  </div> -->
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

html,
body {
  scroll-behavior: smooth !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-main);
  transition: background-color var(--transition-speed), color var(--transition-speed);
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

<style lang="scss">
:root {
  --primary-bg: #fcfcfc;
  --text-main: #2c3e50;
  --accent: #000000;
  --highlight-bg: #000000;
  --highlight-text: #ffffff;
  --subtitle-color: #888;
  --canvas-opacity: 0.15;
  --btn-work-text: #000000;
  --transition-speed: 0.3s;
}

body.theme-dark {
  --primary-bg: #0f172a;
  --text-main: #f1f5f9;
  --accent: #ffffff;
  --highlight-bg: #ffffff;
  --highlight-text: #0f172a;
  --subtitle-color: #94a3b8;
  --canvas-opacity: 0.3;
  --btn-work-text: #ffffff;
}

body {
  background-color: var(--primary-bg);
  color: var(--text-main);
  transition: background-color var(--transition-speed), color var(--transition-speed);
}
</style>
