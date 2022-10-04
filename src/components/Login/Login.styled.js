import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export const LoginBox = styled.div`
  position: fixed;
  top: 30%;
  left: 35%;
  width: 30%;
  height: auto;
  max-height: 70vh;
  background: #212121;
  padding: 20px;
  overflow: auto;
  display: flex; 
  flex-flow: column;
`

export const LoginForm = styled.input`
  padding: 10px; 
  color: black; 
  width: 90%; 
  border: solid;
  border-width: ${({error}) => error ? '2px' : '1px'};
  border-color: ${({error}) => error ? 'red' : 'black'};
  border-radius: 3px; 
  align-items: center; 
`

export const LoginButton = styled.button`
  background-color: #484848; 
  width: 95%;
  border: none;
  border-radius: 3px;
  margin: 5px; 
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
`

export const CloseLoginButton = styled.button`
  position: relative; 
  background-color: transparent; 
  color: #484848;
  border: none; 
  font-size: 20px; 
  width: 20%; 
  cursor: pointer;
  left: 57%; 
  top: 30%; 
  z-index: 1;
` 

export const LoginImage = styled.img`
  object-fit: cover;
  display: block;
  top: 50%;
  width: 100%;
  max-width: 110px;
  height: 100%;
  max-height: 88px;
  box-sizing: border-box;
  background-size: contain;
  margin-left: auto;
  margin-right: auto; 
`

export const LoginTitle = styled.p`
  color: yellow; 
  font-size: 20px; 
  letter-spacing: 2px; 
  text-align: center;
`

export const ErrorLoginText = styled.p`
  color: red; 
  margin-top: 0; 
  left: 20%;  
`