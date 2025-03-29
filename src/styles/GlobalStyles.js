import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #64ffda;
    --background: #0a192f;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--background);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--primary);
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--text-primary);
    }
  }

  section {
    padding: 100px 0;
  }
`;

export default GlobalStyles; 