'use client'

import styled from 'styled-components'
import Experience from '@/components/experience'

const Container = styled.div`
  padding: 4rem 6rem;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`

const Description = styled.p`
  margin-bottom: 2rem;
`

const experiences = [
  {
    id: 'e-2',
    title: 'Front-end Developer',
    company: 'Compass UOL',
    start: '15-08-2022',
    end: 'now',
    description:
      'As a front-end developer, I worked on developing features for a SaaS platform for universities, utilizing technologies such as Javascript, Typescript, React.js, Next.js, Material UI, Git, and Github.- As a front-end developer, I worked on developing features for a SaaS platform for universities, utilizing technologies such as Javascript, Typescript, React.js, Next.js, Material UI, Git, and Github.',
  },
  {
    id: 'e-1',
    title: 'Front-end Developer',
    company: 'M3, a Cadastra Company',
    start: '13-10-2020',
    end: '10-08-2022',
    description: `- I have worked on the development and maintenance of several e-commerce websites on the VTEX platform.
    - In the development of stores on the VTEX CMS platform, I have used technologies such as Javascript, jQuery, HTML5, CSS3, and SCSS.
    - For stores that used the VTEX IO platform, I used technologies such as Javascript, Typescript, React.js, CSS3, SCSS, and GraphQL.
    - I participated in the development of a headless e-commerce website, where I developed, tested, and documented functionalities using technologies such as Javascript, Typescript, React.js, Next.js, Material UI, Jest, React-Testing-Library, and Storybook.
    - For code versioning, I used Git on platforms such as Gitlab, Github, and Azure Repos.`,
  },
]

export default function About() {
  return (
    <Container>
      <Title>About me</Title>

      <Description>
        As a front-end developer, I have experience in e-commerce on VTEX CMS
        and VTEX IO platforms, as well as working on a headless e-commerce
        project and an education SaaS platform. My main technologies are
        Javascript and React.js and I am always learning new technologies and
        market trends to improve my development skills.
      </Description>

      <Title>Experiences</Title>

      {experiences.map(({ id, ...experience }) => (
        <Experience key={id} {...experience} />
      ))}
    </Container>
  )
}
