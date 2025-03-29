import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
  margin-bottom: 5px;
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
  margin-bottom: 25px;
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
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
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
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 4px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 10px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
];

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [educationRef, educationInView] = useInView({ threshold: 0.5 });

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
      <GlobalStyles />
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
              I'm a passionate software developer with a focus on creating elegant and efficient solutions.
              I love building things that live on the internet and am constantly learning new technologies
              to stay at the forefront of web development.
            </p>
            <p>
              With a strong foundation in both front-end and back-end development, I specialize in creating
              responsive and user-friendly applications. My approach combines clean code principles with
              modern design practices to deliver exceptional user experiences.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
              and sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>
        </Section>

        <Section id="experience" ref={experienceRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Experience</h2>
            <Grid>
              <DateRange>
                <h3>Jan 2023 - Present</h3>
                <p>Senior Software Developer</p>
              </DateRange>
              <ExperienceItem>
                <h3>Tech Company A</h3>
                <p>
                  Lead developer for a team of 5, responsible for architecting and implementing
                  new features for the company's flagship product. Improved application performance
                  by 40% through optimization techniques.
                </p>
                <TechList>
                  <TechTag>React</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>MongoDB</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>Mar 2021 - Dec 2022</h3>
                <p>Software Developer</p>
              </DateRange>
              <ExperienceItem>
                <h3>Tech Company B</h3>
                <p>
                  Developed and maintained multiple client-facing applications. Implemented
                  new features and improved existing functionality based on user feedback.
                </p>
                <TechList>
                  <TechTag>JavaScript</TechTag>
                  <TechTag>Python</TechTag>
                  <TechTag>Django</TechTag>
                  <TechTag>PostgreSQL</TechTag>
                </TechList>
              </ExperienceItem>
            </Grid>

            <Grid>
              <DateRange>
                <h3>Jun 2019 - Feb 2021</h3>
                <p>Junior Developer</p>
              </DateRange>
              <ExperienceItem>
                <h3>Tech Company C</h3>
                <p>
                  Started my professional journey working on web applications and learning
                  best practices in software development.
                </p>
                <TechList>
                  <TechTag>HTML</TechTag>
                  <TechTag>CSS</TechTag>
                  <TechTag>JavaScript</TechTag>
                  <TechTag>PHP</TechTag>
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
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>E-commerce Platform</h3>
                <p>
                  Built a full-featured e-commerce platform with React and Node.js.
                  Implemented user authentication, product management, shopping cart,
                  and payment integration.
                </p>
                <TechList>
                  <TechTag>React</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>MongoDB</TechTag>
                  <TechTag>Stripe</TechTag>
                </TechList>
              </ProjectCard>
              <ProjectCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Task Management App</h3>
                <p>
                  Created a collaborative task management application with real-time
                  updates. Features include task assignment, progress tracking, and
                  team collaboration tools.
                </p>
                <TechList>
                  <TechTag>Vue.js</TechTag>
                  <TechTag>Firebase</TechTag>
                  <TechTag>Tailwind CSS</TechTag>
                  <TechTag>WebSocket</TechTag>
                </TechList>
              </ProjectCard>
              <ProjectCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Weather Dashboard</h3>
                <p>
                  Developed a weather dashboard that displays current weather and
                  forecasts using multiple weather APIs. Includes interactive maps
                  and detailed weather information.
                </p>
                <TechList>
                  <TechTag>React</TechTag>
                  <TechTag>OpenWeather API</TechTag>
                  <TechTag>Chart.js</TechTag>
                  <TechTag>Mapbox</TechTag>
                </TechList>
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
                <h3>Sep 2022 - Present</h3>
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

export const Head = () => <title>Home Page</title>
