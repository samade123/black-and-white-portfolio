<template>
  <div class="bio-section" id="bio">
    <div
      class="img"
      :style="{
        backgroundImage:
          'url(' + require(`@/assets/${getScreenCategory()}/me.webp`) + ')',
      }"
    ></div>
    <div class="img-friend">
      <h1>Hi, I'm Sam and I'm a <span>Junior Front-end Developer</span></h1>
      <div>
        I am a junior front-end developer with commercial experience. I
        specialise in creating modern web apps!
      </div>
      <div class="buttons-div">
        <a href="#contact">
          <button class="buttons">Contact Me</button>
        </a>
        <a href="#work">
          <button class="buttons white">Check my work</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { widthFunction } from "@/composables/Mobile";

export default {
  name: "BioSection",
  setup() {
    const { width, setMobile, getScreenCategory } = widthFunction();

    return { getScreenCategory };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

.bio-section {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 30px;

  margin: 0 auto;
  height: 100%;
  .img {
    // width: 40vw;
    width: clamp(220px, 23vw, 400px);
    aspect-ratio: 5/ 6;
    filter: grayscale(100%);
    border-radius: 60%;

    background-position: center top;
    background-repeat: no-repeat;
    background-size: 150%;
  }

  .img-friend {
    width: min(80vw, 500px);
    // height: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    justify-content: center;

    span {
      background: black;
      color: white;
      line-height: 1.7;
      padding: 5px;
    }
    & > * {
      margin: 0;
    }
  }
}
</style>