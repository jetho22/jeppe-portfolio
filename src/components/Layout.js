import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
  color: #8892b0;
  font-size: 14px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Jeppe Thomsen</h1>
          <h2>Software Developer</h2>
        </motion.div>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© {new Date().getFullYear()} Jeppe Thomsen. All rights reserved.</p>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout; 