import React from "react";
import { Link } from "react-router-dom";
import { WelcomeButton, ButtonContainer, ImageContainer, QuoteContainer, ReferenceContainer } from "./Home.styled.";

function Home({isUserLogged}) {
  return (
    <div>
      <QuoteContainer>"May the Force be with you" -</QuoteContainer> 
      <ReferenceContainer>Yoda</ReferenceContainer>
      <ImageContainer>
        <img alt="yoda" src="https://c.tenor.com/zuJSh0ddQZEAAAAC/yoda-the-force.gif" />
      </ImageContainer>
      <ButtonContainer>
        <WelcomeButton type="button" onClick={() => {!isUserLogged && alert('🤖 You should log in to start 🤖')}}><Link className="link" to="/starships" style={{ textDecoration: 'none' }}>Click here to start</Link></WelcomeButton>
      </ButtonContainer>  
    </div>
  );
}

export default Home; 