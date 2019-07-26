import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { colors } from "../../tailwind";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.png";

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
`;

const AboutHero = styled.div`
  ${tw`flex flex-col md:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white font-mono leading-tight pt-12 lg:pt-0 md:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 lg:col-count-2`}
  /* TODO figure out how to get the column plugin to work */
  @media (min-width:1024px) {
    column-count: 2;
  }
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Glenn Ryan. I'm a UI Engineer.
        </BigTitle>
        <Subtitle>
          I create web experiences using React and friends. Check out my
          projects below!
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Jiffy"
            link="https://confident-aryabhata-407d55.netlify.com/"
            bg={`linear-gradient(to right, ${colors["blue-black"]} 0%, ${
              colors["grey-darkest"]
            } 100%)`}
          >
            This project (by way of SuperHi) is a gif generator using the Giphy
            API.
          </ProjectCard>
          <ProjectCard
            title="MapBox Point of Interest Marker"
            link="https://infallible-haibt-43a809.netlify.com/"
            bg={`linear-gradient(to right, ${colors["blue-dark"]} 0%, ${
              colors["teal"]
            } 100%)`}
          >
            This project is a searchable map where you can pin locations and
            explore Earth's geography between them.
          </ProjectCard>
          <ProjectCard
            title="Catch of the Day"
            link="https://ctd.netlify.com"
            bg={`linear-gradient(to right, ${colors["indigo-dark"]} 0%, ${
              colors["red-light"]
            } 100%)`}
          >
            This project (by way of Wes Box) is a fictitious fish wholesale
            store where you can add, edit, and delete orders via a Firebase data
            store.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Glenn Ryan" />
          <AboutSub>
            I've been a Firmware Engineer and a UX Designer. Now I make UIs with
            the same focus on stability, function, usability, and presentation.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I use React and its ecosystem to create delightful, blazing-fast
          experiences your users will appreciate. I work in San Francisco and
          remotely. I specialize in front-end development as a collaboration
          between designers and backend developers. I also do full-stack
          development using GraphQL and Node.js.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:info@glennr.dev">Hi</a> or find me on other
            platforms: <a href="https://github.com/gbr">GitHub</a> &{" "}
            <a href="https://www.instagram.com/glennr_design/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          <p>&copy; 2019 Glenn Ryan</p> Special thanks to{" "}
          <a href="https://www.lekoarts.de">LekoArts</a> for the{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            starting template
          </a>
          .
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
