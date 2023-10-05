import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';
import "./header.css"
import logo from "../assets/logo.jpg"

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" {...args} color='dark' dark className='px-5'>
        <NavbarBrand href="/">Kart IPR</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='main-nav' navbar>
            <NavItem>
              <NavLink href="/components/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Join us</NavLink>
            </NavItem>
            <NavItem>
              <Button className='signup'>Sign up</Button>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;