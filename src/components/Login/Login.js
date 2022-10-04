import React from "react";
import { useRef } from "react";
import {LoginContainer, LoginBox, LoginForm, LoginButton, CloseLoginButton, LoginImage, LoginTitle, ErrorLoginText} from './Login.styled'

function Login({closeLogin, handleLogin, borderActive}) {
  const email = useRef();
  const password = useRef(); 

  return(
    <div>
      <LoginContainer>
        <CloseLoginButton type="button" onClick={closeLogin}>X</CloseLoginButton>
        <LoginBox>
          <LoginImage src="./images/starwars-logo-yellow.png" alt="logo-yellow"/>
          <LoginTitle>ENTER YOUR EMAIL ADRESS AND YOUR PASSWORD</LoginTitle>
            <LoginForm
              error={!borderActive ? 0 : 1}
              type='email'
              placeholder='Email Adress'
              ref={email}
              name='emailAdress'
            />
            <ErrorLoginText style={{visibility: borderActive ? 'visible' : 'hidden'}}>Please, enter your correct email adress.</ErrorLoginText>
            <LoginForm
              error={!borderActive ? 0 : 1}
              type='password'
              placeholder='Password'
              ref={password}
              name='password'
            />
            <ErrorLoginText style={{visibility: borderActive ? 'visible' : 'hidden'}}>Please, enter your correct password.</ErrorLoginText>
            <LoginButton type="submit" onClick={() => handleLogin(email, password)}>Continue</LoginButton>
        </LoginBox>
      </LoginContainer>
    </div>
  )
}

export default Login; 
