<template>
  <div class="bio-section" id="bio">
    <div class="img" :style="{
      backgroundImage:
        'url(' + require(`@/assets/${getScreenCategory()}/me.webp`) + ')',
    }"></div>
    <div class="img-friend">
      <h1>Hi, I'm Sam and I'm a <span>Front-end Developer</span></h1>
      <div>
        Front End Engineer | Solutions Architecht
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "BioSection",
  setup() {
    const { width, setMobile, getScreenCategory } = widthFunction();

    var tl = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlTwo = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlThree = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlFour = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      setTimeout(() => {
        tl.from([".bio-section .img"], {
          // selector text, Array, or object
          scaleX: 1.2, // any properties (not limited to CSS)
          scaleY: 1.3, // any properties (not limited to CSS)
          // scaleX: 0, // any properties (not limited to CSS)
          opacity: 0,
          duration: 1.5, // seconds
          ease: "power2.inOut",
          yoyo: true,
          delay: 0.5,
          stagger: 0.1,
        });
        tl.from(
          [".bio-section .img-friend h1", ".bio-section .img-friend div"],
          {
            // selector text, Array, or object
            x: 25, // any properties (not limited to CSS)
            // scaleX: 0, // any properties (not limited to CSS)
            opacity: 0,
            duration: 1, // seconds
            ease: "power2.inOut",
            yoyo: true,
            stagger: 0.1,
          }
        );
        tlTwo.fromTo(
          [".bio-section .img-friend h1"],
          {
            lineHeight: 2.2,
          },
          {
            // selector text, Array, or object
            lineHeight: 1.7,
            duration: 0.6, // seconds
            ease: "power2.inOut",
            stagger: 0.2,
            yoyo: true,
          }
        );

        // tlThree.fromTo(
        //   [".bio-section .img-friend .buttons-div"],
        //   {
        //     gridGap: "30px",
        //   },
        //   {
        //     // selector text, Array, or object
        //     gridGap: "20px",
        //     duration: 1.2, // seconds
        //     ease: "power2.inOut",
        //     stagger: 0.3,
        //     yoyo: true,
        //   }
        // );

        tlFour.from([".work-section .jobs-array .jobs"], {
          // selector text, Array, or object
          y: 25, // any properties (not limited to CSS)
          // scaleX: 0, // any properties (not limited to CSS)
          opacity: 0,
          duration: 1, // seconds
          ease: "power2.inOut",
          yoyo: true,
          stagger: 0.3,
          once: true,
          pin: true,
          scrub: true,
        });

        tl.add(tlTwo, "-=1.5");
        // tl.add(tlThree, "-=0.4");
        ScrollTrigger.create({
          trigger: ".work-section .work-array",
          start: "center bottom",
          endTrigger: ".work-section",
          animation: tlFour,
          toggleActions: "play pause resume none",
          // once: true,
        });
      }, 50);
    });

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
  align-items: center;

  @media screen and (max-width: 600px) {
    align-items: start;
  }

  grid-gap: 10px 30px;

  margin: 0 auto;
  min-height: 90vh;

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

    &>* {
      margin: 0;
    }
  }
}
</style>