import React from "react";
import { useRef } from "react";
import {LoginContainer, LoginBox, LoginForm, LoginButton, CloseLoginButton, LoginImage, LoginTitle} from './Login.styled'

function Login({closeLogin, handleLogin}) {
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
              type='email'
              placeholder='Email Adress'
              ref={email}
              name='emailAdress'
            />
            <LoginForm
              type='password'
              placeholder='Password'
              ref={password}
              name='password'
            />
            <LoginButton type="submit" onClick={() => handleLogin(email, password)}>Continue</LoginButton>
        </LoginBox>
      </LoginContainer>
    </div>
  )
}

export default Login; 
