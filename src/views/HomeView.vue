<template>
  <div class="home">
    <div class="bio-section" id="bio">
      <div
        class="img"
        :style="{
          backgroundImage: 'url(' + require('@/assets/me.jpeg') + ')',
        }"
      ></div>
      <div class="img-friend">
        <h1>Hi, I'm Sam and I'm a <span>Junior Front-end Developer</span></h1>
        <div>
          I am a junior front-end developer with 1 year commercial experience. I
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

    <div class="work-section" id="work">
      <!-- <h1
        :style="{
          backgroundImage: 'url(' + require('@/assets/background.png') + ')',
        }"
      >
        Work
      </h1> -->
      <h1>Work</h1>
      <div class="description">
        Check my commercial and non-commercial projects. If you have any
        questions feel free to ask me for more information
      </div>
      <div class="work-array">
        <div
          v-for="pill in skillsArray"
          :key="pill.name"
          @click="changeSelected(pill)"
        >
          <span
            class="work-pill"
            :class="{ selected: pill.current }"
            v-if="jobs.filter((job) => job.tags.includes(pill.name)).length > 0"
          >
            {{ pill.name }} ({{
              jobs.filter((job) => job.tags.includes(pill.name)).length
            }})
          </span>
        </div>
      </div>
      <div class="jobs-array">
        <div
          class="jobs"
          v-for="job in jobs.filter((element) =>
            element.tags.includes(selectedPill.name)
          )"
          :key="job.href"
        >
          <div class="site-img" @click="openModal(job)">
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
              <button class="buttons" @click="openModal(job)">Preview</button>
              <a :href="job.github" target="_blank" rel="noopener">
                <button class="buttons white">Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="resume-section" id="resume">
      <h1>Resume</h1>
      <div class="Summary">
        I am a keen and avid coder, who has learned most of his front end
        development skills in my time at Event Engineering as an Intern
        developer. But I also have plenty of coding experience from completing
        my 4 year <span>(BEng) degree in Electronics and Computer Systems Engineering</span> .
      </div>

      <div class="subtitle"><span>Education</span></div>
      <div class="education-div">
        <div
          class="education subtitle"
          v-for="course in education"
          :key="course.src"
        >
          <a :href="course.src" target="_blank" rel="noopener">{{ course.name }}</a>
        </div>
      </div>
      <div class="subtitle"><span>Work experience</span></div>
      <div class="experience-div">
        <div class="experience" v-for="job in experience" :key="job.name">
          <div class="subtitle">{{ job.role }}</div>
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
      <a
        href="https://drive.google.com/file/d/1UN97qz68Bee-AdlqyMO5Q2ZXxdGFay60/view?usp=sharing"
        target="_blank"
        rel="noopener"
      >
        <button class="buttons">
          PDF <i class="las la-cloud-download-alt"></i>
        </button>
      </a>
    </div>
    <div class="contact-section" id="contact">
      <h1 class="contact">Contact Me</h1>
      <a href="tel:+447427476129" class="phone">
        <div class="phone"><i class="las la-phone"></i> +447427476129</div>
      </a>
      <a href="mailto:samuel.ademola43+dev@gmail.com" class="email">
        <div class="email">
          <i class="las la-at"></i> samuel.ademola43+dev@gmail.com
        </div>
      </a>
    </div>
    <Modal
      :showModal="showModal"
      @closeModal="showModal = false"
      :data="selectedJob"
    />
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
// @ is an alias to /src
import Modal from "@/components/Modal.vue";

export default {
  name: "HomeView",
  components: {
    Modal,
  },
  setup(props) {
    const showModal = ref(false);

    const skillsArray = ref([
      { name: "All", current: true },
      { name: "CSS", current: false },
      { name: "HTML", current: false },
      { name: "JAVASCRIPT", current: false },
      { name: "Vue.js", current: false },
      { name: "Python", current: false },
    ]);

    const removeAll = (tagArray) => {
      const allIndex = tagArray.indexOf("All");
      return tagArray.slice(allIndex + 1);
    };

    const changeSelected = (pill) => {
      skillsArray.value.forEach((skill) => {
        skill.current = false;
      });
      pill.current = true;
    };

    const selectedPill = computed(() => {
      return skillsArray.value.find((pill) => pill.current == true);
    });

    const openModal = (job) => {
      selectedJob.value = job;

      showModal.value = true;
    };
    const jobs = ref([
      {
        name: "Weather Dashboard",
        description: "Weather Dashboard with weather style theming",
        href: "",
        github: "https://github.com/samade123/black-and-white-portfolio",
        image: require("../assets/weather.webp"),
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: [
          "Color themeing (by weather)",
          "SASS",
          "Adaptive Design",
        ],
      },
      {
        name: "Calculator",
        description: "Basic calculator App",
        href: "https://calculator.projectsbysam.dev/",
        github: "https://github.com/samade123/calculator",
        image: require("../assets/calc.png"),
        tags: ["All", "Vue.js", "CSS", "HTML", "JAVASCRIPT"],
        otherFeatures: ["SASS", "Responsive Design"],
      },
      {
        name: "Quick Design Task",
        description:
          "Basic Design task required of me for a front end interview",
        href: "",
        github: "https://github.com/samade123/FE-developer-exercise-reach-plc",
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

      {
        name: "(BEng) in Electronics and Computer Systems Engineering at Loughborugh University",
        src: "https://www.lboro.ac.uk/study/undergraduate/courses/electronic-and-computer-systems-engineering-beng/",
        dateCompleted: "2021",
      },

    ];

    const selectedJob = ref(jobs.value[0]);

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
      {
        name: "Linux/MacOs/Windows",
      },
      {
        name: "Serverless Functions",
      },
    ];
    return {
      skillsArray,
      jobs,
      removeAll,
      education,
      experience,
      showModal,
      skills,
      selectedPill,
      changeSelected,
      selectedJob,
      openModal,
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

  .work-section {
    display: flex;
    grid-gap: 25px;
    flex-direction: column;
    justify-content: center;
    .work-array {
      display: flex;
      justify-content: center;
      grid-gap: 25px 12px;
      flex-wrap: wrap;

      .work-pill {
        background: #0001;
        padding: 7px;
        border-radius: 10px;

        &:hover {
          background: #0002;
          cursor: pointer;
        }

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
      grid-gap: 30px 20px;
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

          transition: opacity 0.3s ease-in;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
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
          grid-gap: 11px;
          .site-title {
            font-weight: bold;
          }
          .description {
            color: #000a;
          }
          .tag-array {
            display: flex;
            grid-gap: 25px 8px;

            justify-content: center;

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

              &.white {
                border: white;
              }
            }
          }
        }
      }
    }
  }

  .resume-section {
    display: flex;
    grid-gap: 20px;
    flex-direction: column;
    justify-content: center;

    span {
        // font-size: 1.6em;
        font-weight: bold;
        // color: white;
        // background: black;
        // padding: 0 5px;
      }

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

      

      .education {
        display: flex;
        grid-gap: 15px;
        flex-direction: column;
        justify-content: center;
      }
    }

    .experience-div {
      display: flex;
      grid-gap: 15px;
      flex-direction: column;
      justify-content: center;

      .experience {
        display: flex;
        grid-gap: 15px;
        flex-direction: column;
        justify-content: center;
      }
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
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.0666666667);

    i {
      color: green;
    }
  }

  a {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
