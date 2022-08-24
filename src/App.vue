<template>
  <div class="header">
    <div class="left">Dev by Sam</div>
    <!-- <div class="right">
      <i class="las la-lg la-bars"></i>
      <button @click="refreshApp">refresh app</button>
    </div> -->
  </div>
  <router-view />

  <PWAModal
    :showModal="showModal"
    @closeModal="showModal = false"
    @refreshApp="refreshApp"
  />
</template>

<script>
import PWAModal from "@/components/PWAModal.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";
export default {
  name: "App",
  components: {
    PWAModal,
  },
  setup(props) {
    let registration = {};
    let updateExists = false;
    let refreshing = false;
    const showModal = ref(false);

    const updateAvailable = (event) => {
      registration = event.detail;
      updateExists = true;
      showModal.value = true;
    };

    const refreshApp = () => {
      console.debug('refresh!!')
      updateExists = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!registration || !registration.waiting) return;
      // Send message to SW to skip the waiting and activate the new SW
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    };
    onBeforeMount(() => {

      console.log('beforeMounting')
      document.addEventListener("swUpdated", updateAvailable, {
        once: true,
      });

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        // We'll also need to add 'refreshing' to our data originally set to false.
        if (refreshing) return;
        refreshing = true;
        // Here the actual reload of the page occurs
        window.location.reload();
      });
    });

    return {
      refreshApp,
      showModal,
      updateExists
    };
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
