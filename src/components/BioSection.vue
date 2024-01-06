<template>
  <div class="bio-section section" id="bio">
    <div class="img" :style="{
      backgroundImage:
        'url(' + require(`@/assets/${getScreenCategory()}/me.webp`) + ')',
    }"></div>
    <div class="img-friend">
      <h1>Hi, I'm Sam and I'm a <span>Frontend Developer</span></h1>
      <div>
        <span class="img-friend__transition-title"> Frontend Engineer </span>| Solutions Architecht
        <!-- <br> -->
        <!-- I specialise in creating modern web apps! -->
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

    let scrollToBottom = (e) => {
      e.preventDefault();

      window.scrollTo(0, document.body.scrollHeight);

    }
    return { getScreenCategory, scrollToBottom };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

.bio-section {
  --img-width: 450px;
  display: grid;
  grid-template-columns: 3fr 4fr;
  place-items: center;


  grid-gap: 1em 2.5em;
  ;

  margin: 0 auto;
  --height-number: 80;

  height: calc(var(--height-number) * 1vh);
  height: calc(var(--height-number) * 1svh);
  padding: 0 1em;
  box-sizing: border-box;

  .img {
    // width: 40vw;
    width: clamp(220px, 100%, var(--img-width));
    aspect-ratio: 1;
    // aspect-ratio: 5/ 6;
    filter: grayscale(100%);
    // border-radius: 60%;
    border-radius: 14px;
    place-self: center end;



    background-position: center top;
    background-repeat: no-repeat;
    background-size: 150%;
    animation: scale-img 1s 0.1s;
  }

  .img-friend {
    // width: min(80vw, 500px);
    width: min(100%, calc(var(--img-width) + 40px));
    // padding: 0 1em 0 0;
    // box-sizing: border-box;

    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    justify-content: center;
    text-wrap: balance;

    &>div {
      transform: translateX(25px);
      opacity: 0;

      animation: scale-img-friend-div 1s var(--div-delay, 1.2s) forwards;

      &:nth-of-type(2) {
        --div-delay: 1.4s;
      }
    }

    h1 span {
      background: black;
      color: white;
      line-height: 1.7;
      padding: 5px 8px;
      border-radius: 6px;

    }

    // .img-friend__transition-title {
    //   animation: scale-img-friend-title 0.6s 1.6s forwards;

    // }

    &>* {
      margin: 0;
    }
  }

  @media screen and (max-width: 600px) {
    --img-width: 350px;

    grid-template-columns: 1fr;

    .img {
      place-self: center;
    }
  }

  @keyframes scale-img {

    from {
      transform: scale(1.2, 1.3);
      opacity: 0;
    }


  }

  @keyframes scale-img-friend-title {

    from {
      transform: scale(0);
      overflow: hidden;
      // opacity: 0;
    }



  }

  @keyframes scale-img-friend-div {

    from {
      transform: translateX(25px);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }

  }
}

@media screen and (max-width: 600px) {

  .bio-section {

    --img-width: 200px;
    grid-template-columns: auto;
    // grid-template-rows: var(--img-width) 1fr;
    grid-template-rows: 3fr 3fr;

    place-items: center;
    padding: 1em 2em;
    // height: 70svh;
    // height: fit-content;
    
    --height-number: 80;
   
    .img {
      height: auto;
      width: min(100%, 250px);

      place-self: end center;

    }



    .img-friend {
      width: 100%;
      place-self: end center;

      a {
        height: 100%;

        .buttons {
          box-sizing: border-box;
          padding-inline: 1em;
        }
      }

    }



  }
}
</style>