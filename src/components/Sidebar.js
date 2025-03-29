import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const NavItem = styled(motion.div)`
  padding: 8px 0;
  cursor: pointer;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-size: 14px;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 16px;
  background-color: var(--primary);
`;

const Sidebar = ({ sections, activeSection, onSectionClick }) => {
  return (
    <SidebarWrapper>
      {sections.map((section) => (
        <NavItem
          key={section.id}
          active={activeSection === section.id}
          onClick={() => onSectionClick(section.id)}
          whileHover={{ x: 5 }}
        >
          {section.title}
          {activeSection === section.id && (
            <ActiveIndicator
              layoutId="activeIndicator"
              initial={false}
            />
          )}
        </NavItem>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar; 