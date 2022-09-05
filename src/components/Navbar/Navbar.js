import React from "react";
import {Link} from 'react-router-dom';
import {Nav, NavUl, NavLi, NavContainer, NavbarImage} from './Navbar.styled'

function Navbar() {
 return(
  <Nav>
    <NavbarImage src="./images/logo-starwars.jpg" alt="logo"/>
    <NavContainer>
      <NavUl>
        <NavLi><Link className="link" to="/" style={{ textDecoration: 'none'}}> HOME </Link></NavLi>
        <NavLi><Link className="link" to="/starships" style={{ textDecoration: 'none' }}> STARSHIPS </Link></NavLi>
      </NavUl>
    </NavContainer>
  </Nav>
 )
  
}

export default Navbar; 