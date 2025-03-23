import styled from 'styled-components';
import { LayoutDashboard, Shield, Settings, PieChart, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.border};
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ThemeToggle = styled.button`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SidebarContainer>
      <Logo>
        <Shield size={24} />
        PrivacyPro
      </Logo>
      <NavLink href="#dashboard">
        <LayoutDashboard size={20} />
        Dashboard
      </NavLink>
      <NavLink href="#policies">
        <Shield size={20} />
        Privacy Policies
      </NavLink>
      <NavLink href="#settings">
        <Settings size={20} />
        User Settings
      </NavLink>
      <NavLink href="#reports">
        <PieChart size={20} />
        Reports
      </NavLink>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ThemeToggle>
    </SidebarContainer>
  );
};