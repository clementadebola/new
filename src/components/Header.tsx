import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>FocusApp</Logo>
      <Nav>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;