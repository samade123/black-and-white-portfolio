<template>
  <div class="home">
    <div class="bio-section">
      <div
        class="img"
        :style="{
          backgroundImage: 'url(' + require('@/assets/me.jpeg') + ')',
        }"
      ></div>
      <div class="img-friend">
        <h1>Hi, I'm Sam and I'm a <span>Junior front-end developer</span></h1>
        <p>
          I am a junior front end developer with 1 year commercial experience. I
          specailise in creating modern web apps!
        </p>
        <div class="buttons-div">
          <button class="buttons">Contact Me</button>
          <button class="buttons white">Check my work</button>
        </div>
      </div>
    </div>

    <div class="work-section">
      <!-- <h1
        :style="{
          backgroundImage: 'url(' + require('@/assets/background.png') + ')',
        }"
      >
        Work
      </h1> -->
      <h1>Work</h1>
      <p class="description">
        Check my commercial and non commercial projects. If you have any
        questions feel free to ask me for more information
      </p>
      <div class="work-array">
        <div class="work-pill" v-for="pill in workArray" :key="pill.name">
          {{ pill.name }} ({{
            jobs.filter((job) => job.tags.includes(pill.name)).length
          }})
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
              <div class="tags" v-for="tag in removeAll(job.tags)" :key="tag">
                <span>{{ tag }}</span>
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

    <div class="resume-section">
      <h1>Resume</h1>
      <div class="Summary">
        I am a keen and avid code, who learned most of his front end
        edevelopment skills in my time at Event Engineering as an Intern
        developer. BUt I also Have plenty of coding expereince from completing
        my 4 year (BEng) degree in Electronics and Computer Systems Engineering.
      </div>

      <div class="subtitle"><span>Education</span></div>
      <div class="education-div">
        <div class="education" v-for="course in education" :key="course.src">
          {{ course.name }}
        </div>
      </div>
      <div class="subtitle"><span>Work expereince</span></div>
      <div class="experience-div">
        <div class="education" v-for="job in experience" :key="job.name">
          <div class="">{{ job.role }}</div>
          <div class="">{{ job.name }}</div>
          <div class="">{{ job.dateCompleted }}</div>
        </div>
      </div>
      <div class="subtitle"><span>Skills and tools</span></div>
      <div class="skills-div">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <div class="">{{ skill.name }}</div>
        </div>
      </div>
      <div class="subtitle">Download my resume as a PDF File</div>
      <button class="buttons">
        PDF <i class="las la-cloud-download-alt"></i>
      </button>
    </div>
    <div class="contact-section">
      <h1 class="contact">Contact Me</h1>
      <div class="phone"><i class="las la-phone"></i> +447427476129</div>
      <div class="email">
        <i class="las la-at"></i> samuel.ademola43+dev@gmail.com
      </div>
    </div>
    <Modal :showModal="showModal" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src
import Modal from "@/components/Modal.vue";

export default {
  name: "HomeView",
  components: {
    Modal,
  },
  setup(props) {
    const workArray = ref([
      { name: "All" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "JAVASCRIPT" },
      { name: "Vue.js" },
      { name: "Python" },
    ]);

    const removeAll = (tagArray) => {
      const allIndex = tagArray.indexOf("All");
      return tagArray.slice(allIndex + 1);
    };

    const jobs = ref([
      {
        name: "Weather Dashboard",
        description: "Weather Dashboard with weather style theming",
        href: "",
        github: "",
        image: require("../assets/weather.png"),
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: [
          "Color themeing(by weather)",
          "SASS",
          "Adaptive Design",
        ],
      },
      {
        name: "Calculator",
        description: "Basic calculator App",
        href: "",
        github: "",
        image: require("../assets/calc.png"),
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["SASS", "Responsive Design"],
      },
      {
        name: "Quick Design Task",
        description:
          "Basic Design task required of me for a front end interview",
        href: "",
        github: "",
        image: require("../assets/quick-design-task.png"),
        tags: ["All", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["Responsive Design"],
      },
    ]);

    const education = [
      {
        name: "Modern JavaScript Fundamentals",
        src: "https://code.tutsplus.com/courses/javascript-fundamentals",
        dateCompleted: "2019",
      },
      {
        name: "Introduction to HTML",
        src: "https://code.tutsplus.com/courses/introduction-to-html",
        dateCompleted: "2019",
      },
      {
        name: "Introduction to Git and GitHub",
        src: "https://code.tutsplus.com/courses/introduction-to-git-and-github",
        dateCompleted: "2019",
      },
    ];

    const experience = [
      {
        name: "Event engineering",
        role: "Intern Developer",
        dateCompleted: "2019-2020",
      },
    ];

    const skills = [
      {
        name: "Vue",
      },
      {
        name: "Javascript",
      },
      {
        name: "CSS",
      },
      {
        name: "SCSS",
      },
      {
        name: "Electron",
      },
      {
        name: "Figma",
      },
      {
        name: "Git",
      },
      {
        name: "Webpack",
      },
      {
        name: "Rest API",
      },
      {
        name: "C++",
      },
      {
        name: "OOP",
      },
      {
        name: "UI/UX",
      },
    ];
    const showModal = ref(false);
    return {
      workArray,
      jobs,
      removeAll,
      education,
      experience,
      showModal,
      skills,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/theme.scss";

.home {
  display: grid;
  place-items: center;
  width: 100%;
  max-width: min(1400px, 95vw);
  margin: 20px auto;
  grid-gap: 40px;
  & > div {
    width: 100%;
  }

  .bio-section {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;

    margin: 0 auto;
    height: 100%;

    img {
      width: 40vw;
      width: clamp(220px, 23vw, 400px);
      filter: grayscale(100%);
      border-radius: 50%;
    }
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
    justify-content: center;
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
      grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      place-items: center;
      // margin: 0 auto;
      .jobs {
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 2fr 1fr;
        max-width: 300px;
        height: 350px;

        .site-img {
          background: #0001;
          border-radius: 7px;
          padding: 5px 0 0 0;
          img {
            // max-width: 100%;
            height: 185px;
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
          .site-title {
            font-weight: bold;
          }
          .description {
            color: #000a;
          }
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

  .resume-section {
    display: flex;
    grid-gap: 15px;
    flex-direction: column;
    justify-content: center;

    .subtitle {
      span {
        font-size: 1.6em;
        font-weight: bold;
        color: white;
        background: black;
        padding: 0 5px;
      }
    }

    .education-div {
      display: flex;
      grid-gap: 15px;
      flex-direction: column;
      justify-content: center;
    }

    .skills-div {
      display: grid;
      grid-gap: 15px;
      grid-template-rows: repeat(auto-fit, 1fr);
      // grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
    }

    .buttons {
      max-width: 300px;
      margin: 0 auto;
      display: flex;
      grid-gap: 15px;
      flex-direction: rows;
      justify-content: center;
    }
  }
  .contact-section {
    display: flex;
    grid-gap: 15px;
    flex-direction: column;
    justify-content: center;

    i {
      color: green;
    }
  }
}
</style>
