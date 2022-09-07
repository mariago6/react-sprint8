import React from "react";
import {Link} from 'react-router-dom';
import {Nav, NavUl, NavLi, NavContainer, NavbarImage, UserDiv} from './Navbar.styled'

function Navbar({initialPage}) {
 return (
  <Nav>
    <div>
      <NavbarImage src="./images/logo-starwars.jpg" alt="logo"/>
      <UserDiv>
        <p>LOG IN &nbsp; &nbsp;</p>
        <p> // </p>
        <p>&nbsp; &nbsp; SIGN UP</p>
      </UserDiv>
    </div>
    <NavContainer>
      <NavUl>
        <NavLi><Link className="link" to="/" style={{ textDecoration: 'none'}}> HOME </Link></NavLi>
        <NavLi><Link className="link" to="/starships" style={{ textDecoration: 'none' }} onClick={initialPage}> STARSHIPS </Link></NavLi>
      </NavUl>
    </NavContainer>
  </Nav>
 )
  
}

export default Navbar; 