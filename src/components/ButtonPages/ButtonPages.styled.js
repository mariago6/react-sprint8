import styled from "styled-components";

export const ButtonStylePages = styled.button`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 20px; 
  cursor: pointer;
  background-color: transparent; 
  border: solid 3px;
  border-color: ${({color}) => color ? 'yellow' : 'transparent'};
  border-radius: 5px; 
  margin: 5px; 
`