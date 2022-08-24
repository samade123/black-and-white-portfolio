<template>
  <transition name="fade" appear>
    <div
      class="modal-overlay"
      ref="modal"
      @click="hideModal"
      v-if="props.showModal"
    >
      <div class="modal" role="dialog" v-if="props.showModal">
        <p>This app has an update available. Would you like to refresh now?</p>
        <button class="buttons" @click="refresh">Yes! Update App</button>
        <button class="buttons white" @click="hideModal">No. Update Later</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HelloWorld",
  props: ["showModal"],
  setup(props, ctx) {
    const modal = ref(null);

    const hideModal = (event) => {
      console.log(event.target, modal.value);
      if (event.target === modal.value) {
        ctx.emit("closeModal");
      }
    };

    const refresh = (event) => {
      ctx.emit("refreshApp");
    };

    return { props, modal, hideModal, refresh };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../styles/theme.scss";

.modal,
.pop-leave-from {
  // position: absolute;
  // position: fixed;
  // top: 0;
  // right: 20px;
  // bottom: 0;
  // left: 20px;
  // margin: auto;
  text-align: center;
  width: 100vw;
  height: fit-content;
  // max-width: 22em;
  padding: 2rem;
  // border-radius: 1rem;
  box-shadow: #0000003d 0px 3px 8px;
  background: #fff;
  z-index: 999;
  transform: none;

  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: center;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay,
.fade-leave-from {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e5000;
  // opacity: 0.1;
  cursor: pointer;

  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: flex-end;
  align-items: center;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.buttons {
  height: fit-content;
}
</style>
