import styled from "styled-components";

export const ArticleCard = styled.article`
  display: flex; 
  flex-flow: column;
  align-items: center;  
`

export const CardChild = styled.div`
  border: solid; 
  border-color: black;  
  background-color: #333;
  width: 50%; 
  padding-left: 50px; 
`

export const Col = styled.div`
  flex: 1 1 initial; 
`

export const ButtonOpenInfo = styled.button`
  margin: 5px; 
  border: transparent;
  border-radius: 50%;  
  background-color: black; 
  width: 50px;
  height: 20px;
  cursor: pointer;
  font-size: 11;
  color: yellow;
  text-align: center;
  font-weight: bold;  
`

export const EmtyBoxText = styled.p`
  font-size: 30px; 
  position: absolute;
  top: 35%; 
  left: 23%; 
`

export const ButtonDiv = styled.div`
  position: absolute;
  top: 55%; 
  left: 42%; 
`
