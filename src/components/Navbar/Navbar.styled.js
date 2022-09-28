import styled from 'styled-components'; 

export const Nav = styled.nav`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: black;
  color: white; 
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  font-size: 12px; 
  margin: 0;
`
export const NavContainer = styled.div` 
  margin-top: 10px; 
  width: 100%;
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
  border-top-color: #333;
  border-bottom-color: #333; 
  display: flex; 
  justify-content: center;
`
export const NavUl = styled.ul`
  display: flex;
  padding: 0; 
`

export const NavLi = styled.li`
  list-style-type: none;
  margin: 0 1rem;
  cursor: pointer;  
`

export const NavbarImage = styled.img`
  object-fit: cover;
  display: block;
  top: 50%;
  width: 100%;
  max-width: 203px;
  height: 100%;
  max-height: 88px;
  box-sizing: border-box;
  background-size: contain;
`
export const UserDiv = styled.div`
  position: absolute;
  right: 5vh;
  top: 5vh;
  width: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`

export const ButtonRegistration = styled.button`
  border: none;
  background-color: transparent; 
  color: white; 
  cursor: pointer;
`
