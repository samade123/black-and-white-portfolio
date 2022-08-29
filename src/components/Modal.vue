<template>
  <transition name="fade" appear>
    <div
      class="modal-overlay"
      ref="modal"
      @click="hideModal"
      v-if="props.showModal"
    ></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" role="dialog" v-if="props.showModal">
      <div class="site-img">
        <img :src="data.imageLarge" alt="" />
      </div>
      <div class="details">
        <div class="site-title">{{ data.name }}</div>

        <div class="subtitle">Languages Used</div>
        <div class="tag-array">
          <div class="tags" v-for="tag in removeAll(data.tags)" :key="tag">
            <span>{{ tag }}</span>
          </div>
        </div>
        <div class="subtitle">Project Description</div>
        <div class="description">{{ data.description }}</div>
        <div class="subtitle">Features shown in this project</div>
        <div class="tag-array">
          <div class="tags" v-for="tag in data.otherFeatures" :key="tag">
            <span>{{ tag }}</span>
          </div>
        </div>
        <div class="buttons-div">
          <a :href="data.href" target="_blank" rel="noopener">
            <button class="buttons">Open Site</button>
          </a>
          <a :href="data.github" target="_blank" rel="noopener">
            <button class="buttons white">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HelloWorld",
  props: ["showModal", "data"],
  setup(props, ctx) {
    // const showModal = ref(true)
    const removeAll = (tagArray) => {
      const allIndex = tagArray.indexOf("All");
      return tagArray.slice(allIndex + 1);
    };
    const modal = ref(null);

    const hideModal = (event) => {
      console.log(event.target, modal.value);
      if (event.target === modal.value) {
        ctx.emit("closeModal");
      }
    };

    return { props, removeAll, modal, hideModal };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../styles/theme.scss";

.modal,
.pop-leave-from {
  position: absolute;
  position: fixed;
  top: 0;
  right: 20;
  bottom: 0;
  left: 20;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  // max-width: 22em;
  max-height: 90vh;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;

  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;

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
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
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

.site-img {
  background: #0001;
  border-radius: 7px;
  padding: 5px;
  img {
    // max-width: 100%;
    // min-height: 185px;
    max-width: 50vw;
    max-height: 80vh;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    object-fit: cover;

    @media only screen and (max-width: 600px) {
      max-width: 80vw;
    }
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    //   rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
}
.details {
  display: flex;
  flex-direction: column;
  grid-gap: 15px;

  .site-title {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .description {
    color: #000a;
  }
  .tag-array {
    display: flex;
    grid-gap: 25px 8px;
    justify-content: center;
    margin: 0 0 8px 0;
    .tags {
      background: #0001;
      padding: 5px;
      border-radius: 10px;
      height: 100%;
      display: grid;
      place-items: center;
    }
  }
  // grid-template-rows: 1fr 1fr;

  .buttons-div {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    .buttons {
      padding: 5px 0;
    }
  }
}
</style>
