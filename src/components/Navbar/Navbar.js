import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {Nav, NavUl, NavLi, NavContainer, NavbarImage, UserDiv, ButtonRegistration} from './Navbar.styled'
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';



function Navbar({logged}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isSignupOpen, setIsSignupOpen] = useState(false); 
  const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem('usersList')) || ''); 
  const [isUserLogged, setIsUserLogged] = useState(false); 
  const [loginBorder, setLoginBorder] = useState(false); 

  const registrationSuccess = () => toast.success("Your registration was successful 👌 Enjoy the website!");
  const loginSuccess = () => toast.success(' 💫 Welcome to the Star Wars website 💫'); 
  const logoutSuccess = () => toast('Good bye, see you soon! 🤖'); 

  const handleLoginChange = () => {
    setIsLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setIsSignupOpen(prevIsSignupOpen => prevIsSignupOpen = false);  
    setLoginBorder(false);
  }

  const handleSignupChange = () => {
    setIsSignupOpen(prevIsSignupOpen => !prevIsSignupOpen); 
  };

  const handleNewUser = (user) => {
    setUsersList(prevUsersList => [...prevUsersList, user]);
    handleSignupChange(); 
    handleUserLoggedIn(); 
    registrationSuccess(); 
  }; 

  const handleLogin = (email, password) => {
    const foundUser = usersList.find(user => user.emailAdress === email.current.value && user.password === password.current.value);
    if (!foundUser) {
      setLoginBorder(true); 
      return;  
    } 
    handleLoginChange(); 
    handleUserLoggedIn(); 
    setLoginBorder(false);
    loginSuccess();
  }

  const handleUserLoggedIn = () => {
    setIsUserLogged(prevIsUserLogged => prevIsUserLogged = true);
  }; 

  const handleLogout = () => {
    setIsUserLogged(prevIsUserLogged => prevIsUserLogged = false); 
    logoutSuccess() ; 
  }

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersList)); 
  }, [usersList]); 

  useEffect(() => {
    logged(isUserLogged); 
  }, [isUserLogged]); 


  return (
    <Nav>
      <div>
        <NavbarImage src="./images/logo-starwars.jpg" alt="logo"/>
        <UserDiv>
          <ButtonRegistration type="button" onClick={() => handleLoginChange()} style={{visibility: isUserLogged ? 'hidden' : 'visible'}}>LOG IN</ButtonRegistration>
          {isLoginOpen && <Login closeLogin={() => handleLoginChange()} handleLogin={handleLogin} borderActive={loginBorder}/>}
          <ButtonRegistration type="button" onClick={handleSignupChange} style={{visibility: isUserLogged ? 'hidden' : 'visible'}}>SIGN UP</ButtonRegistration>
          {isSignupOpen && <Registration closeRegistration={handleSignupChange} handleRedirect={handleLoginChange} handleNewUser={handleNewUser}/>}
          <ButtonRegistration type="button" onClick={handleLogout} style={{visibility: isUserLogged ? 'visible' : 'hidden'}}>LOG OUT</ButtonRegistration>
        </UserDiv>
      </div>
      <NavContainer>
        <NavUl>
          <NavLi><Link className="link" to="/" style={{ textDecoration: 'none'}}> HOME </Link></NavLi>
          <NavLi><Link className="link" to="/starships" style={{ textDecoration: 'none' }} onClick={() => {!isUserLogged && handleLoginChange()}}> STARSHIPS </Link></NavLi>
        </NavUl>
      </NavContainer>
    </Nav>
  )
  
}

export default Navbar; 