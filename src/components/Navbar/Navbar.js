import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {Nav, NavUl, NavLi, NavContainer, NavbarImage, UserDiv, ButtonRegistration} from './Navbar.styled'
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

function Navbar({initialPage}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isSignupOpen, setIsSignupOpen] = useState(false); 
  const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem('usersList')) || ''); 
  const [isUserLogged, setIsUserLogged] = useState(false); 

  const handleLoginChange = () => {
    setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setIsSignupOpen(prevIsSignupOpen => prevIsSignupOpen = false);  
  }

  const handleSignupChange = () => {
    setIsSignupOpen(prevIsSignupOpen => !prevIsSignupOpen); 
  };

  const handleNewUser = (user) => {
    setUsersList(prevUsersList => [...prevUsersList, user]);
    handleSignupChange(); 
    handleUserLoggedIn(); 
    alert('Your registration was successful. Enjoy the website!'); 
  }

  const handleLogin = (email, password) => {
    const foundUser = usersList.find(user => user.emailAdress === email.current.value && user.password === password.current.value);
    if (!foundUser) {
      console.log('Your email and/or your password are wrong, try it again');
      return;  
    } 
    console.log(`Welcome to the Star Wars website`); 
    handleLoginChange(); 
    handleUserLoggedIn(); 
  }

  const handleUserLoggedIn = () => {
    setIsUserLogged(prevIsUserLogged => prevIsUserLogged = true)
  }; 

  const handleLogout = () => {
    setIsUserLogged(prevIsUserLogged => prevIsUserLogged = false); 
    console.log('Good bye, see you soon!')
  }

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersList)); 
  }, [usersList]); 


  return (
    <Nav>
      <div>
        <NavbarImage src="./images/logo-starwars.jpg" alt="logo"/>
        <UserDiv>
          <ButtonRegistration type="button" onClick={() => handleLoginChange()} style={{visibility: isUserLogged ? 'hidden' : 'visible'}}>LOG IN</ButtonRegistration>
          {isLoginOpen && <Login closeLogin={() => handleLoginChange()} handleLogin={handleLogin}/>}
          <ButtonRegistration type="button" onClick={handleSignupChange} style={{visibility: isUserLogged ? 'hidden' : 'visible'}}>SIGN UP</ButtonRegistration>
          {isSignupOpen && <Registration closeRegistration={handleSignupChange} handleRedirect={handleLoginChange} handleNewUser={handleNewUser}/>}
          <ButtonRegistration type="button" onClick={handleLogout} style={{visibility: isUserLogged ? 'visible' : 'hidden'}}>LOG OUT</ButtonRegistration>
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