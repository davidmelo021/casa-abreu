import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ darkMode: boolean }>`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: ${({ darkMode }) => darkMode ? '#1a1a1a' : '#f5f5f5'};
    color: ${({ darkMode }) => darkMode ? '#f0f0f0' : '#222222'};
    transition: background 0.3s, color 0.3s;

    --bg: ${({ darkMode }) => darkMode ? '#1a1a1a' : '#f5f5f5'};
    --bg-card: ${({ darkMode }) => darkMode ? '#2a2a2a' : '#ffffff'};
    --text: ${({ darkMode }) => darkMode ? '#f0f0f0' : '#222222'};
    --text-secondary: ${({ darkMode }) => darkMode ? '#aaaaaa' : '#555555'};
    --border: ${({ darkMode }) => darkMode ? '#3a3a3a' : '#eeeeee'};
    --shadow: ${({ darkMode }) => darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'};
    --input-bg: ${({ darkMode }) => darkMode ? '#333333' : '#ffffff'};
    --header-bg: ${({ darkMode }) => darkMode ? '#242424' : '#ffffff'};
  }
`;