import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Glenn Ryan.
        </BigTitle>
        <Subtitle>I create meticulously-crafted UIs using React and friends.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Jiffy"
            link="https://confident-aryabhata-407d55.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project (by way of SuperHi) is a gif generator using the Giphy API.
          </ProjectCard>
          <ProjectCard
            title="Marmalade.fm"
            link="https://zealous-meitner-25752a.netlify.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This project (by way of SuperHi) is a curated showcase of artists via Mixcloud.
          </ProjectCard>
          <ProjectCard
            title="Mapbox PoI (Place of Interest) Marker"
            link="https://infallible-haibt-43a809.netlify.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This project is a searchable map where you can pin locations and explore Earth's geography between them.
          </ProjectCard>
          <ProjectCard
            title="Catch of the Day"
            link="https://ctd.netlify.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            This project (by way of Wes Box) is a fictitious fish wholesale store where you can add, edit, and delete orders via a Firebase datastore.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Glenn Ryan" />
          <AboutSub>
            I've been a Firmware Engineer. And I've been a UX Designer. Now I make UIs with the same focus on function,
            usability, and presentation.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I use React, Flux patterns (mostly Redux), and GraphQL (as needed) to create delightful, engaging, blazing-fast experiences
          that your users will appreciate. I also enjoy working with visualizations, particularly maps and charts. I am based in the SF
          Bay Area, but I am also open to remote work. I specialize in front-end as a collaboration between designers and backend developers,
          but I am open to full-stack work, as I am familiar with GraphQL and Node.js as well.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:info@glennr.dev">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/gbr">GitHub</a> &{' '}
            <a href="https://www.instagram.com/glennr_design/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">GitHub Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
