<template>
  <div class="scroll-progress">
    <nav class="scroll-progress__nav">
      <a :href="'#'.concat(tag.tag)" class="scroll-progress__link" v-for="tag in tags" :key="tag.key"
        :id="tag.tag.concat(tag.key)" >{{ tag.name }}</a>
    </nav>
    <!-- :id="tag.tag.concat(tag.key)" @click.prevent="jump(tag.tag)">{{ tag.name }}</a> -->

    <!-- <progress class="scroll-progress__bar" max="100" :value="scrollProgress">
      test
    </progress> -->

    <div class="scroll-progress__container">
      <div class="scroll-progress__progress" :style="{ '--progress-value': scrollProgress }">

      </div>
    </div>
    <!-- <div>
      {{ scrollProgress }} {{ pureProgress }}
    </div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
  name: "progressMenu",
  setup(props, ctx) {

    let tags = [{ key: 1, name: 'Bio Projects', tag: 'bio', scrollerStart: 'top+=20 top', scrollerEnd: 'bottom center',startTrigger: "#bio", endTrigger: '#bio' },
    { key: 2, name: 'Featured Projects', tag: 'featured', scrollerStart: 'bottom+=30 top', scrollerEnd: 'bottom center',startTrigger: "#bio", endTrigger: '.section--clients' },
    { key: 3, name: 'Personal Projects', tag: 'work', scrollerStart: 'top+=80 center', scrollerEnd: 'bottom center',startTrigger: "#work", endTrigger: '.project-section' },
    { key: 4, name: 'Get In touch', tag: 'contact', scrollerStart: 'top bottom', scrollerEnd: 'bottom bottom',startTrigger: "#contact", endTrigger: 'body' }
    ]
    const scrollProgress = ref(0);
    const pureProgress = ref(0);

    
    let setValues = () => {
      let nav = document.getElementsByClassName("scroll-progress__container")[0];
      let navWidth = nav.getBoundingClientRect().width;
      let tagHalfWidth = document.getElementById(tags[0].tag.concat(1)).getBoundingClientRect().width / 2;
      let tagHalfWidthAsPercent = Math.floor(tagHalfWidth / navWidth * 100);


      setTimeout(() => {

        tags.forEach((tag) => {
          let thisTagIndex = tags.indexOf(tag)
          // if (thisTagIndex < tags.length - 1) {
            let thisTag = tag;
            let nextTag = thisTagIndex == tags.length - 1 ? thisTag : tags[thisTagIndex + 1];

            tag.position = document.getElementById(tag.tag.concat(tag.key)).getBoundingClientRect().left;
            // console.log(thisTag, nextTag);
            let startTag = thisTag;
            ScrollTrigger.create({
              start: startTag.scrollerStart,
              end: startTag.scrollerEnd,
              trigger: startTag.startTrigger,
              endTrigger: startTag.endTrigger,
              // animation: tagTl,
              // snap: 0.1,
              scrub: true,
              toggleActions: "play pause resume reset",
              // markers: true,
              onUpdate: (self) => {
                let currentProgress = Math.floor(self.progress * 100);
                pureProgress.value = currentProgress
                scrollProgress.value = Math.floor(((currentProgress + tagHalfWidthAsPercent) / 3)) + (thisTagIndex * 33);
              }
            });
          // }

        })
      })
    }
    onMounted(() => {
      setValues();


      window.addEventListener("resize", () => {
        // setValues();
        ScrollTrigger.refresh();
      });

    })

    return { scrollProgress, pureProgress, tags };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../styles/theme.scss";

body {
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    // background: #000a;
    mix-blend-mode: difference;
    color: #f7f7f7;
    // a.scroll-progress__link {
    // }
    z-index: 999;
    // padding-block: 0.6em;
    box-sizing: border-box;
    opacity: 0.7;

    --child-widths: calc(100vw - 20px);
    --tag-widths: calc((100vw - 20px) / 4);
    --tag-half-widths: calc(var(--tag-widths) / 2);
    --link-padding: 0.6em;

    &:hover {
      opacity: 1;
    }

    .scroll-progress__nav {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      width: var(--child-widths);
      margin-inline: auto;
      place-items: stretch;


      // justify-content: center;

      a.scroll-progress__link {
        color: inherit;
        text-align: center;
        width: var(--tag-widths);
        padding-block: var(--link-padding);

        &:hover,
        &:active {
          text-decoration: underline;
          background: #fffc;
          isolation: isolate;
          color: black;
        }
      }
    }


    .scroll-progress__bar,
    .scroll-progress__container {
      // isolation: isolate;
      mix-blend-mode: difference;
      background: none;
      width: var(--child-widths);

      margin-inline: auto;
      appearance: none;
      position: relative;

      .scroll-progress__progress {
        position: absolute;
        --progress-value: 0;
        --progress-radius: 0.6lh;
        --section-half-widths: var(--tag-half-widths, 115px);
        --start-value: calc(var(--section-half-widths) - 10px);
        --end-value: calc(var(--child-widths) - var(--start-value)); // transition: left cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.002s;
        // top: 0;
        left: clamp(var(--start-value), calc(((var(--progress-value)) * 1%) - var(--progress-radius)), var(--end-value));
        // left: 0;
        transition: left 0.1s ease-in-out;
        height: var(--progress-radius);
        aspect-ratio: 1;
        background: #f7f7f7;
        border-radius: 50%;
        margin-block: 0.2em 0;
        box-sizing: border-box;
        animation: scale-in-out 4s linear 2s;
        // animation-iteration-count: 2;
      }


    }
  }

  @keyframes scale-in-out {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }

    30%,
    60% {
      transform: scale(0.9);
    }

    45%,
    80% {
      transform: scale(0.4);
    }

  }
}

@media only screen and (max-width: 600px) {
  body {
    .scroll-progress {
      top: 0;
      --link-padding: 0.9em;
      // bottom: 0;

    }
  }
}
</style>