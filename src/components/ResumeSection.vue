<template>
  <div class="resume-section" id="resume">
    <h1>Resume</h1>
    <div class="Summary">
      I am a keen and avid coder, who has learned most of his front end
      development skills in my time at Event Engineering as an Intern developer.
      But I also have plenty of coding experience from completing my 4 year
      <span>(BEng) degree in Electronics and Computer Systems Engineering</span>
      .
    </div>

    <div class="subtitle"><span>Education</span></div>
    <div class="education-div">
      <div
        class="education subtitle"
        v-for="course in education"
        :key="course.src"
      >
        <a :href="course.src" target="_blank" rel="noopener">{{
          course.name
        }}</a>
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
</template>

<script>
import { widthFunction } from "@/composables/Mobile";

export default {
  name: "BioSection",
  setup() {
    const { width, setMobile, getScreenCategory } = widthFunction();
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
        name: "Responsive Design",
      },
      {
        name: "MacOs",
      },
      {
        name: "Linux/",
      },
      {
        name: "Windows",
      },
      {
        name: "Serverless Functions",
      },
    ];

    return { getScreenCategory, education, experience, skills };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

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
</style>