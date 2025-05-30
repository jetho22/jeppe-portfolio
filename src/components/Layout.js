import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  position: relative;
  padding-left: 400px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: 0;
  }
`;


const LeftSide = styled.div`
  position: fixed;
  top: 0;

  left: max(0px, calc(50% - 600px)); /* 1200px / 2 = 600px */

  width: 400px;
  height: 100vh;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background);
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    height: auto;
    border-right: none;
    padding: 40px 20px;
    margin-left: 2%;
  }
  
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    border-right: none;
    padding: 40px 20px;
    margin-left: 5%;
    margin-bottom: -10%;
  }
`;


const PersonalInfo = styled.div`
  margin-bottom: 40px;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  margin-right: 5%;
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
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 22px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: var(--primary);
  }

  span {
    font-size: 14px;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .arrow-icon {
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    color: var(--primary);
    margin-left: 5px;
    font-size: 14px;
  }

  &:hover .arrow-icon {
    opacity: 1;
    transform: translateX(4px);
  }
`;

const MainContent = styled.div`
  position: relative;
  flex: 1;
  margin-left: 35vw;
  padding: 60px 40px;
  margin-left: 50px;
  max-width: 100%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const Layout = ({ children, sections, activeSection, onSectionClick }) => {
  return (
    <Container>
      <LeftSide>
        <div>
          <PersonalInfo>
            <Name>Jeppe Holgaard Thomsen</Name>
            <Title>Software Engineer</Title>
            <Description>
            I craft elegant software solutions with a focus on clean architecture and efficient algorithms.
            </Description>
          </PersonalInfo>
          <Sidebar 
            sections={sections} 
            activeSection={activeSection} 
            onSectionClick={onSectionClick}
          />
        </div>
        <SocialLinks>
          <SocialLink href="https://github.com/jetho22" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>GitHub</span>
            <span className="arrow-icon">→</span>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/jeppe-holgaard-thomsen1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
            <span className="arrow-icon">→</span>
          </SocialLink>
          <SocialLink>
            <FaEnvelope />
            <span>holgaardjeppe@gmail.com</span>
          </SocialLink>
        </SocialLinks>
      </LeftSide>
      <MainContent>
        {children}
      </MainContent>
    </Container>
  );
};

export default Layout; 