<template>
  <div class="container">
    <div class="content">
      <h1>About Me</h1>

      <p>
        Hello! I'm a passionate <strong>Software Engineer</strong> with a strong background in web development,
        specializing in crafting seamless user experiences. With over 2 years of professional experience in the industry,
        I have had the privilege of working on diverse projects that have honed my skills and expertise.
      </p>

      <h2>Current Role at Compass.uol</h2>

      <ul>
        <li><strong>Position:</strong> Front-end Developer</li>
        <li><strong>Employer:</strong> Compass.uol</li>
        <!-- <li><strong>Tenure:</strong> Since August 2022 (1 year and 3 months)</li> -->
        <li><strong>Location:</strong> Remote (Brazil)</li>
      </ul>

      <p>
        In my current role, I am part of a dynamic team that focuses on enhancing a Software as a Service (SaaS) platform
        designed for universities. Leveraging a suite of cutting-edge technologies including <strong>JavaScript</strong>,
        <strong>TypeScript</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Material UI</strong>,
        <strong>Git</strong>, and <strong>GitHub</strong>, I've been instrumental in developing and refining features that
        empower educational institutions.
      </p>

      <p>
        In essence, my journey as a Front-end Developer has been marked by diverse experiences across e-commerce,
        education, and software as a service. My proficiency in <strong>JavaScript</strong> and <strong>React.js</strong>
        is the cornerstone of my work, but I am committed to staying ahead of the curve by continuously learning and
        adapting to the latest industry trends and technologies.
      </p>

      <p>
        If you're looking for a dedicated and skilled Front-end Developer to collaborate on your project, please feel free
        to reach out. I'm always excited to explore new opportunities and create exceptional digital experiences.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  height: var(--screen-height);
  justify-content: center;
  margin: auto;
  padding: 6rem 1rem;
  width: calc(var(--screen-width) - 3rem);
}

.content {
  overflow-y: scroll;
  text-align: center;
}

.content::-webkit-scrollbar {
  width: 0.25rem;
}

.content::-webkit-scrollbar-track {
  background-color: transparent;
}

.content::-webkit-scrollbar-thumb {
  background-color: #ffffff50;
  border-radius: 2rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
}
</style>
