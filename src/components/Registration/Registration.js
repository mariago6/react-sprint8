import React from "react";
import { useState } from "react";
import {RegistrationContainer, RegistrationBox, RegistrationForm, RegistrationButton, CloseButton, LoginButton, RegistrationTitle, RegistrationImage } from './Registration.styled';

function Registration({closeRegistration, handleRedirect, handleNewUser}) {
  const [user, setUser] = useState({firstName: '', lastName: '', emailAdress: '', password: ''});

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    })
    ); 
  }; 

  return(
    <div>
      <RegistrationContainer>
        <CloseButton type="button" onClick={closeRegistration}>X</CloseButton>
        <RegistrationBox>
          <RegistrationImage src="./images/starwars-logo-yellow.png" alt="logo-yellow"/>
          <RegistrationTitle>CREATE YOUR ACCOUNT</RegistrationTitle>
          <RegistrationForm
            type='text'
            placeholder='Enter first Name'
            onChange={handleChange}
            name='firstName'
            value={user.firstName}
          />
          <RegistrationForm
            type='text'
            placeholder='Enter last Name'
            onChange={handleChange}
            name='lastName'
            value={user.lastName}
          />
          <RegistrationForm
            type='email'
            placeholder='Enter email Adress'
            onChange={handleChange}
            name='emailAdress'
            value={user.emailAdress}
          />
          <RegistrationForm
            type='password'
            placeholder='Enter password'
            onChange={handleChange}
            name='password'
            value={user.password}
          />
          <RegistrationButton type="submit" onClick={() => handleNewUser(user)}>Create Account</RegistrationButton>
          <p>Already have an account? <LoginButton type="button" onClick={handleRedirect}>Log In</LoginButton></p>
        </RegistrationBox>
      </RegistrationContainer> 
    </div>
  )
}

export default Registration; 