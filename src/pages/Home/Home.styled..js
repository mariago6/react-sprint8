import styled from "styled-components";

export const QuoteContainer = styled.h2`
text-align: center;
`

export const ReferenceContainer = styled.h4`
  text-align: center;
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%); 
`

export const WelcomeButton = styled.button`
  position: relative;
  background: #000;
  border: 0;
  padding: 14px 42px;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  letter-spacing: .2em;
  box-shadow: 0 8px 32px rgba(#000,.2);
  transition: all .2s ease;

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

export const ButtonContainer = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);  
`