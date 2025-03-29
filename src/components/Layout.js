import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftSide = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 35vw;
  height: 100vh;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const PersonalInfo = styled.div`
  margin-bottom: 40px;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 15px;
  color: var(--text-primary);
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: var(--primary);
  margin-bottom: 25px;
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 90%;
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 40px;
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 22px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary);
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 35vw;
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto 0 35vw;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Layout = ({ children, sections, activeSection, onSectionClick }) => {
  return (
    <LayoutWrapper>
      <LeftSide>
        <div>
          <PersonalInfo>
            <Name>Jeppe Thomsen</Name>
            <Title>Software Engineer</Title>
            <Description>
              I'm a passionate software developer with a focus on creating elegant and efficient solutions.
              I love building things that live on the internet and am constantly learning new technologies.
            </Description>
          </PersonalInfo>
          <Sidebar 
            sections={sections} 
            activeSection={activeSection} 
            onSectionClick={onSectionClick}
          />
        </div>
        <SocialLinks>
          <SocialIcon href="https://github.com/jetho22" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/jeppe-holgaard-thomsen1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:holgaardjeppe@gmail.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </LeftSide>
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout; 