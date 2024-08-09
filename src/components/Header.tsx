import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    transition: max-height 0.3s ease-in-out;
    max-height: ${({ open }) => (open ? '200px' : '0')};
    overflow: hidden;
    z-index: 1;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>FocusApp</Logo>
      <MenuButton onClick={toggleMenu}>
        <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuButton>
      <Nav open={menuOpen}>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
