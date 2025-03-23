import React, { useState } from 'react';
import styled from 'styled-components';
import { Shield, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1000;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled.div<NavLinkProps>`
  position: relative;
  color: ${({ theme, active }) => active ? theme.primary : theme.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.surface};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 0.5rem;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform-origin: top;
  transition: all 0.3s ease;

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0.5rem);
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateX(0.25rem);
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.05);
  }
`;

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('home');

  return (
    <NavContainer>
      <Logo onClick={() => setActiveLink('home')}>
        <Shield size={24} />
        PrivacyPro
      </Logo>
      <NavLinks>
        <NavLink active={activeLink === 'home'} onClick={() => setActiveLink('home')}>
          Home
        </NavLink>
        
        <DropdownContainer>
          <NavLink active={activeLink === 'solutions'} onClick={() => setActiveLink('solutions')}>
            Solutions
            <ChevronDown size={16} />
          </NavLink>
          <DropdownContent>
            <DropdownItem href="#privacy-audit">Privacy Audit</DropdownItem>
            <DropdownItem href="#compliance">Compliance Management</DropdownItem>
            <DropdownItem href="#data-mapping">Data Mapping</DropdownItem>
          </DropdownContent>
        </DropdownContainer>

        <DropdownContainer>
          <NavLink active={activeLink === 'platforms'} onClick={() => setActiveLink('platforms')}>
            Platforms
            <ChevronDown size={16} />
          </NavLink>
          <DropdownContent>
            <DropdownItem href="#enterprise">Enterprise</DropdownItem>
            <DropdownItem href="#small-business">Small Business</DropdownItem>
            <DropdownItem href="#startup">Startup</DropdownItem>
          </DropdownContent>
        </DropdownContainer>

        <DropdownContainer>
          <NavLink active={activeLink === 'resources'} onClick={() => setActiveLink('resources')}>
            Resources
            <ChevronDown size={16} />
          </NavLink>
          <DropdownContent>
            <DropdownItem href="#blog">Blog</DropdownItem>
            <DropdownItem href="#guides">Guides</DropdownItem>
            <DropdownItem href="#webinars">Webinars</DropdownItem>
          </DropdownContent>
        </DropdownContainer>

        <DropdownContainer>
          <NavLink active={activeLink === 'companies'} onClick={() => setActiveLink('companies')}>
            Companies
            <ChevronDown size={16} />
          </NavLink>
          <DropdownContent>
            <DropdownItem href="#about">About Us</DropdownItem>
            <DropdownItem href="#careers">Careers</DropdownItem>
            <DropdownItem href="#contact">Contact</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
      </NavLinks>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </ThemeToggle>
    </NavContainer>
  );
};