<template>
  <div class="home">
    <div class="bio-section">
      <img alt="Vue logo" src="../assets/me.jpeg" />
      <div class="img-friend">
        <h1>Hi, I'm Sam and I'm a <span>Junior front-end developer</span></h1>
        <p>
          I am a junior front end developer with 1 year commercial
          experience. I specailise in creating modern web apps!
        </p>
        <div class="buttons-div">
          <button class="buttons">Contact Me</button>
          <button class="buttons white">Check my work</button>
        </div>
      </div>
    </div>

    <div class="work-section">
      <h1>Work</h1>
      <p class="description">
        Check my commercial and non commercial projects. If you have any
        questions feel free to ask me for more information
      </p>
      <div class="work-array">
        <div class="work-pill" v-for="pill in workArray" :key="pill.name">
          {{ pill.name }}
        </div>
      </div>
      <div class="jobs-array">
        <div class="jobs" v-for="job in jobs" :key="job.href">
          <div class="site-img">
            <img :src="job.image" alt="" />
          </div>
          <div class="details">
            <div class="site-title">{{ job.name }}</div>
            <div class="tag-array">
              <div class="tags" v-for="tag in job.tags" :key="tag">
                {{ tag }}
              </div>
            </div>
            <div class="description">{{ job.description }}</div>
            <div class="buttons-div">
              <button class="buttons">Preview</button>
              <button class="buttons white">Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="resume"></div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  setup(props) {
    const workArray = ref([
      { name: "All" },
      { name: "CSS" },
      { name: "JS" },
      { name: "HTML" },
      { name: "JAVASCRIPT" },
      { name: "Vue.js" },
      { name: "Python" },
    ]);

    const jobs = ref([
      {
        name: "Weather Dashboard",
        description: "Weather Dashboard with weather style theming",
        href: "",
        github: "",
        image: require("../assets/weather.png"),
        tags: ["Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: [
          "Color themeing(by weather)",
          "SASS",
          "Adaptive Design",
        ],
      },
    ]);
    return { workArray, jobs };
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/theme.scss";

.home {
  display: grid;
  place-items: center;

  max-width: 95vw;
  margin: 0 auto;

  .bio-section {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;
    max-width: 1400px;
    width: 95vw;

    // width: clamp(90%, 90vw, 1400px);
    // padding: 20px;
    margin: 0 auto;
    // padding: 50px;
    height: 100%;

    img {
      width: 40vw;
      width: clamp(220px, 23vw, 400px);
      filter: grayscale(100%);
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
      .buttons-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        place-items: center;
        grid-gap: 20px;
        .buttons {
          display: grid;
          place-items: center;
          padding: 15px 0;
          font-size: 20px;
          width: 100%;
          height: 100%;
          background: black;
          color: white;
          border: none white 2px;
          border-radius: 5px;

          &.white {
            background: white;
            color: black;
            border: solid black 2px;
          }
        }
      }
    }
  }

  .work-section {
    display: flex;
    grid-gap: 15px;
    flex-direction: column;
    .work-array {
      display: flex;
      justify-content: center;
      grid-gap: 12px;
      flex-wrap: wrap;

      .work-pill {
        background: #0001;
        padding: 7px;
        border-radius: 10px;

        &.selected {
          background: black;
          color: white;
        }
      }
    }

    .jobs-array {
      border-radius: 5px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      margin: 0 auto;
      .jobs {
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 2fr 1fr;
        max-width: 300px;
        max-height: 300px;

        .site-img {
          background: #0001;
          border-radius: 7px;
          padding: 5px 0 0 0;
          img {
            // max-width: 100%;
            max-height: 185px;
            max-width: 285px;
            border-radius: 3px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            //   rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        }
        .details {
          display: grid;
          grid-gap: 5px;
          .tag-array {
            display: flex;
            grid-gap: 5px;

            .tags {
              background: #0001;
              padding: 5px;
              border-radius: 10px;
            }
          }
          // grid-template-rows: 1fr 1fr;

          .buttons-div {
            .buttons {
              padding: 5px 0;
            }
          }

        }
      }
    }
  }
}
</style>
