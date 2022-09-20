import styled from 'styled-components'; 

export const BoxContainer = styled.button`
  padding-left: 10px; 
  margin: 15px; 
  border: solid 2px; 
  border-color: black;  
  background-color: #333;
  opacity: 0.8;
  justify-content: center;
  text-align: left;
  width: 60%;
  cursor: pointer; 

  &:hover {
    animation-name: shine;
    animation-duration: 500ms;
  }

  @keyframes shine {
    0% {
      background: linear-gradient(
        30deg, 
        hsl(260, 85%, 95%) 0%, 
        hsl(0, 0%, 0%) 25%
      );
    }
  
    25% {
      background: linear-gradient(
        30deg, 
        hsl(0, 0%, 0%) 0%, 
        hsl(260, 85%, 95%) 25%, 
        hsl(0, 0%, 0%) 50%);
    }
  
    50% {
      background: linear-gradient(
        30deg,
        hsl(0, 0%, 0%) 0%, 
        hsl(260, 85%, 95%) 50%, 
        hsl(0, 0%, 0%) 75%); 
    }
  
    75% {
      background: linear-gradient(
        30deg, 
        hsl(0, 0%, 0%) 0%, 
        hsl(260, 85%, 95%) 75%, 
        hsl(0, 0%, 0%) 100%); 
    }
  
    100% {
      background: linear-gradient(
        30deg, 
        hsl(0, 0%, 0%) 0%, 
        hsl(260, 85%, 95%) 100%); 
    }
  }
`
export const TextBox = styled.p`
  background-color: transparent;
`