import React from "react";
import { useState, useEffect } from "react";
import {RegistrationContainer, RegistrationBox, RegistrationForm, RegistrationButton, CloseButton, LoginButton, RegistrationTitle, RegistrationImage, ErrorText, LoginText } from './Registration.styled';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Registration({closeRegistration, handleRedirect, handleNewUser}) {
  const [user, setUser] = useState({firstName: '', lastName: '', emailAdress: '', password: ''});
  const [formError, setFormError] = useState({firstName: false, lastName: false, emailAdress: false, password: false});
  const [initialViewError, setInitialViewError] = useState(true)
  const [emailError, setEmailError] = useState('Please enter your email address.'); 
  const [passwordError, setPasswordError] = useState('Please enter a password.');

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    })
    ); 
  }; 

  function firstNameValidation() {
    if(user.firstName === '') {
      setFormError(prevFormError => ({...prevFormError, firstName: true}));  
    } else {
      setFormError(prevFormError => ({...prevFormError, firstName: false}));
    }; 
  }; 

  function lastNameValidation() {
    if(user.lastName === '') {
      setFormError(prevFormError => ({...prevFormError, lastName: true}));
    } else {
      setFormError(prevFormError => ({...prevFormError, lastName: false})); 
    };
  };

  function emailAdressValidation() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i; 
    if(user.emailAdress === '') {
      setFormError(prevFormError => ({...prevFormError, emailAdress: true}));
      setEmailError('Please enter your email address.');
    } else if(!regex.test(user.emailAdress)) { 
      setFormError(prevFormError => ({...prevFormError, emailAdress: true}));
      setEmailError('This is not a valid email format.'); 
    } else {
      setFormError(prevFormError => ({...prevFormError, emailAdress: false})); 
    };
  };

  function passwordValidation() {
    if(user.password.length < 6) {
      setFormError(prevFormError => ({...prevFormError, password: true})); 
      setPasswordError('Password must be more than 6 characters'); 
    } else {
      setFormError(prevFormError => ({...prevFormError, password: false}));
    }; 
  }

  function totalValidation() {
    setInitialViewError(false); 
    if(Object.values(formError).filter(value => value).length === 0) {
      handleNewUser(user); 
    }
  };

  useEffect(() => {
    firstNameValidation();
    lastNameValidation();
    emailAdressValidation(); 
    passwordValidation(); 
  }, [user])

  return(
    <div>
      <RegistrationContainer>
        <CloseButton type="button" onClick={closeRegistration}>X</CloseButton>
        <RegistrationBox>
          <RegistrationImage src="./images/starwars-logo-yellow.png" alt="logo-yellow"/>
          <RegistrationTitle>CREATE YOUR ACCOUNT</RegistrationTitle>
          <RegistrationForm
            error={initialViewError ? 0 : !formError.firstName ? 0 : 1}
            type='text'
            placeholder='Enter first Name'
            onChange={handleChange}
            name='firstName'
            value={user.firstName}
            required
          />
          <ErrorText style={{visibility: initialViewError ? 'hidden' : formError.firstName ? 'visible' : 'hidden'}}>Please enter your first name.</ErrorText>
          <RegistrationForm
            error={initialViewError ? 0 : !formError.lastName ? 0 : 1}
            type='text'
            placeholder='Enter last Name'
            onChange={handleChange}
            name='lastName'
            value={user.lastName}
            required
          />
          <ErrorText style={{visibility: initialViewError ? 'hidden' : formError.lastName ? 'visible' : 'hidden'}}>Please enter your last name.</ErrorText>
          <RegistrationForm
            error={initialViewError ? 0 : !formError.emailAdress ? 0 : 1}
            type='email'
            placeholder='Enter email Adress'
            onChange={handleChange}
            name='emailAdress'
            value={user.emailAdress}
            required
          />
          <ErrorText style={{visibility: initialViewError ? 'hidden' : formError.emailAdress ? 'visible' : 'hidden'}}>{emailError}</ErrorText>
          <RegistrationForm
            error={initialViewError ? 0 : !formError.password ? 0 : 1}
            type='password'
            placeholder='Enter password'
            onChange={handleChange}
            name='password'
            value={user.password}
            required
          />
          <ErrorText style={{visibility: initialViewError ? 'hidden' : formError.password ? 'visible' : 'hidden'}}>{passwordError}</ErrorText>
          <RegistrationButton type="submit" onClick={totalValidation}>Create Account</RegistrationButton>
          <LoginText>Already have an account? <LoginButton type="button" onClick={handleRedirect}>Log In</LoginButton></LoginText>
        </RegistrationBox>
      </RegistrationContainer> 
    </div>
  )
}

export default Registration; 