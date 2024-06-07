import React from "react";
import styled from "styled-components";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #f4ce14;
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <Logo src={littlelemon_logo} alt="Little Lemon Logo" />
      <NavMenu>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Reservations</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Order Online</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Login</NavLink>
        </NavItem>
      </NavMenu>
    </Navbar>
  );
};

export default Nav;
