import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f8f9fa',
  surface: '#ffffff',
  primary: '#2563eb',
  secondary: '#64748b',
  text: '#1e293b',
  border: '#e2e8f0',
  hover: '#3b82f6',
  shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
};

export const darkTheme = {
  background: '#0f172a',
  surface: '#1e293b',
  primary: '#3b82f6',
  secondary: '#94a3b8',
  text: '#f8fafc',
  border: '#334155',
  hover: '#60a5fa',
  shadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;