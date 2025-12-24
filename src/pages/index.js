import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import { Helmet } from 'react-helmet';
import Snowfall from 'react-snowfall'

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: -15%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 5px;
`;

const DateRange = styled.div`
  h3 {
    color: var(--primary);
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
    
  @media (max-width: 768px) {
    margin-bottom: -20%;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const TechTag = styled.span`
  color: var(--primary);
  font-size: 14px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  border: 1px solid var(--primary);
  padding: 2px 8px;
  border-radius: 15px;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ProjectCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 4px;
  transition: transform 0.2s ease;
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  min-height: 200px;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .arrow-icon {
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    color: var(--primary);
  }

  &:hover .arrow-icon {
    opacity: 1;
    transform: translateX(4px);
  }
  
    @media (max-width: 768px) {
      margin-right: 10%;
  }
`;

const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-size: 14px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  text-decoration: none;
  position: absolute;
  bottom: 25px;
  left: 25px;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Career' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
];

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [aboutRef, aboutInView] = useInView({
    threshold: 0,
    rootMargin: '-20% 0px -60% 0px',
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0,
    rootMargin: '-20% 0px -70% 0px',
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0,
    rootMargin: '-20% 0px -60% 0px',
  });
  const [educationRef, educationInView] = useInView({
    threshold: 0,
    rootMargin: '-20% 0px -20% 0px',
  });
  

  useEffect(() => {
    if (aboutInView) setActiveSection('about');
    if (experienceInView) setActiveSection('experience');
    if (projectsInView) setActiveSection('projects');
    if (educationInView) setActiveSection('education');
  }, [aboutInView, experienceInView, projectsInView, educationInView]);

  const handleSectionClick = (sectionId) => {
    if (sectionId === 'about') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />      
      <GlobalStyles />
      <Helmet>
        <title>Jeppe Thomsen</title>
        <meta name="keywords" content="software engineer, developer, portfolio, clean architecture, algorithms" />
      </Helmet>
      <Layout 
        sections={sections} 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick}
      >
        <Section id="about" ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>About</h2>
            <p>
              I'm a cheerful and hardworking software engineering student at the University of Southern Denmark, 
              passionate about creating elegant solutions to complex problems. My journey in software development 
              is driven by a strong work ethic and clear ambitions, allowing me to combine theoretical knowledge 
              with practical application through real-world projects.
            </p>
            <p>
              With a strong foundation in both front-end and back-end development, I specialize in creating 
              responsive and user-friendly applications. My approach combines clean code principles with 
              modern design practices to deliver exceptional user experiences. I thrive in both team 
              environments and independent work, constantly seeking opportunities to challenge myself and 
              improve my skills.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, at work or at the gym. 
              I'm particularly interested in CI/CD, software architecture and system design, 
              and I'm always excited to learn new technologies that can help me build better solutions.
            </p>
          </motion.div>
        </Section>

        <Section id="experience" ref={experienceRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Career</h2>
            <Grid>
              <DateRange>
                <h3>Oct 2025 - Present</h3>
                <p>Student Developer</p>
              </DateRange>
              <ExperienceItem>
                <h3>ABB, Middelfart</h3>
                <p>
                Contributing to industrial customer projects by building new features, improving existing functionality, and resolving software issues. 
                Supporting developers with tasks that enhance performance, stability, and workflow efficiency across enterprise-level automation systems.
                </p>
                <TechList>
                  <TechTag>C#</TechTag>
                  <TechTag>.NET</TechTag>
                  <TechTag>SQL Server</TechTag>
                  <TechTag>PowerShell</TechTag>
                  <TechTag>Azure DevOps</TechTag>
                  <TechTag>CI/CD</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>
            
            <Grid>
              <DateRange>
                <h3>Jun 2024 - Present</h3>
                <p>Student Worker & Developer</p>
              </DateRange>
              <ExperienceItem>
                <h3>Unicontrol, Odense</h3>
                <p>
                Handling warranty cases by testing and diagnosing returned hardware. 
                Developing scripts to automate internal processes, improving efficiency across warranty, service, and order workflows. 
                Contributing both technically and operationally to smoother day-to-day work for the team.
                </p>
                <TechList>
                  <TechTag>Groovy</TechTag>
                  <TechTag>Jira</TechTag>
                  <TechTag>REST</TechTag>
                  <TechTag>Python</TechTag>
                  <TechTag>Hardware Testing</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>Feb 2025 - July 2025</h3>
                <p>Software Engineer Intern</p>
              </DateRange>
              <ExperienceItem>
                <h3>ABB, Middelfart</h3>
                <p>
                Worked on real customer projects, developing and maintaining enterprise-level applications with a focus on backend development and database management. 
                Collaborated with experienced engineers to deliver robust solutions for industrial automation environments.
                </p>
                <TechList>
                  <TechTag>C#</TechTag>
                  <TechTag>.NET</TechTag>
                  <TechTag>SQL Server</TechTag>
                  <TechTag>Windows</TechTag>
                  <TechTag>Industrial Automation</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>Sep 2017 - June 2022</h3>
                <p>Guest Experience Leader</p>
              </DateRange>
              <ExperienceItem>
                <h3>McDonald's, Gjesing</h3>
                <p>
                Led customer service operations and trained new employees, ensuring high customer satisfaction. 
                Developed strong communication, teamwork, and leadership skills in a fast-paced environment.
                </p>
                <TechList>
                  <TechTag>Customer Service</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>May 2016 - May 2017</h3>
                <p>Secretary assistant</p>
              </DateRange>
              <ExperienceItem>
                <h3>Lægerne Nørregade, Esbjerg</h3>
                <p>
                Early part-time role assisting with basic administrative tasks, providing my first experience with responsibility, structure, and communication in a professional workplace.                </p>
                <TechList>
                </TechList>
              </ExperienceItem>
            </Grid>
          </motion.div>
        </Section>

        <Section id="projects" ref={projectsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Projects</h2>
            <ProjectGrid>
              <ProjectCard
                href="https://jeppeholgaard.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>
                  Personal Portfolio Website
                  <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </h3>
                <p>
                  A modern, responsive portfolio website built with React and Gatsby. Features smooth scrolling navigation, dynamic section highlighting, and elegant animations.
                </p>
                <TechList>
                  <TechTag>React</TechTag>
                  <TechTag>Gatsby</TechTag>
                  <TechTag>Styled Components</TechTag>
                  <TechTag>Framer Motion</TechTag>
                </TechList>
                <GitHubButton href="https://github.com/jetho22/jeppe-portfolio" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </GitHubButton>
              </ProjectCard>
              <ProjectCard
                as="div"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Stock & Crypto Visualization</h3>
                <p>
                  A full-stack web application that collects and visualizes stock and cryptocurrency data over time. 
                  Features a Spring Boot backend with MySQL database and a React frontend for data visualization.
                </p>
                <TechList>
                  <TechTag>Java</TechTag>
                  <TechTag>Spring Boot</TechTag>
                  <TechTag>React</TechTag>
                  <TechTag>MySQL</TechTag>
                  <TechTag>Docker</TechTag>
                </TechList>
                <GitHubButton href="https://github.com/jetho22/SCPS-portfolio" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </GitHubButton>
              </ProjectCard>
              <ProjectCard
                as="div"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Native Wheels</h3>
                <p>
                  A mobile application where users can find and loan cars. 
                  Built with React Native for cross-platform compatibility and features a Node.js backend 
                  for data management.
                </p>
                <TechList>
                  <TechTag>React Native</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>Expo</TechTag>
                </TechList>
                <GitHubButton href="https://github.com/Olsedyr/MobileDevelopment" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </GitHubButton>
              </ProjectCard>
              <ProjectCard
                as="div"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>AsteroidsFX</h3>
                <p>
                  A JavaFX implementation of the classic Asteroids arcade game. Features smooth controls, 
                  collision detection, and dynamic asteroid generation. Built with object-oriented principles 
                  and clean architecture.
                </p>
                <TechList>
                  <TechTag>Java</TechTag>
                  <TechTag>JavaFX</TechTag>
                  <TechTag>Component-based Design</TechTag>
                </TechList>
                <GitHubButton href="https://github.com/jetho22/AsteroidsFX" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </GitHubButton>
              </ProjectCard>
            </ProjectGrid>
          </motion.div>
        </Section>

        <Section id="education" ref={educationRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2>Education</h2>
            <Grid>
              <DateRange>
                <h3>Sep 2022 - Jan 2026</h3>
                <p>Bachelor of Engineering</p>
              </DateRange>
              <ExperienceItem>
                <h3>University of Southern Denmark, Odense</h3>
                <p>Software Technology</p>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>Aug 2017 - Jun 2020</h3>
                <p>STX</p>
              </DateRange>
              <ExperienceItem>
                <h3>Rybners Gymnasium, Esbjerg</h3>
                <p>Physics A, Mathematics A, Chemistry B</p>
              </ExperienceItem>
            </Grid>
          </motion.div>
        </Section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Jeppe Thomsen</title>
    <link rel="icon" type="image/svg+xml" href="static/favicon.svg" />
    <meta name="theme-color" content="#0A192F" />
  </>
);
