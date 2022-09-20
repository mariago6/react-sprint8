import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { WelcomeButton, ButtonContainer, ImageContainer, QuoteContainer, ReferenceContainer } from "./Home.styled.";

function Home() {
  return (
    <div>
      <Navbar />
      <QuoteContainer>"May the Force be with you" -</QuoteContainer> 
      <ReferenceContainer>Jedi Obi-Wan Kenobi</ReferenceContainer>
      <ImageContainer>
        <img alt="yoda" src="https://c.tenor.com/zuJSh0ddQZEAAAAC/yoda-the-force.gif"/>
      </ImageContainer>
      <ButtonContainer>
        <WelcomeButton type="button" onClick=''><Link className="link" to="/starships" style={{ textDecoration: 'none' }}>Click here to start</Link></WelcomeButton>
      </ButtonContainer>  
    </div>
  );
}

export default Home; 