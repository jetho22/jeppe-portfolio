import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

const Section = styled.section`
  margin-bottom: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 30px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 4px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Section>
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
          </motion.div>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Experience</h2>
            <Grid>
              <div>
                <h3>2023 - Present</h3>
                <p>Software Developer</p>
              </div>
              <ExperienceItem>
                <h3>Company Name</h3>
                <p>
                  Brief description of your role and responsibilities. Highlight key achievements
                  and technologies used.
                </p>
              </ExperienceItem>
            </Grid>
          </motion.div>
        </Section>

        <Section>
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
                <h3>Project 1</h3>
                <p>Description of your first project. What technologies did you use? What problems did you solve?</p>
              </ProjectCard>
              <ProjectCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Project 2</h3>
                <p>Description of your second project. Highlight the key features and your role in development.</p>
              </ProjectCard>
              <ProjectCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Project 3</h3>
                <p>Description of your third project. What makes this project unique or interesting?</p>
              </ProjectCard>
            </ProjectGrid>
          </motion.div>
        </Section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>
