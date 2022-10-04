import React from "react";
import { Link } from "react-router-dom";
import { WelcomeButton, ButtonContainer, ImageContainer, QuoteContainer, ReferenceContainer } from "./Home.styled.";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Home({isUserLogged}) {
  const startButtonAlert = () => toast.warning("You should log in to start 🤖⚔️");

  return (
    <div>
      <QuoteContainer>"May the Force be with you" -</QuoteContainer> 
      <ReferenceContainer>Yoda</ReferenceContainer>
      <ImageContainer>
        <img alt="yoda" src="https://c.tenor.com/zuJSh0ddQZEAAAAC/yoda-the-force.gif" />
      </ImageContainer>
      <ButtonContainer>
        <WelcomeButton type="button" onClick={() => {!isUserLogged && startButtonAlert()}}><Link className="link" to="/starships" style={{ textDecoration: 'none' }}>Click here to start</Link></WelcomeButton>
      </ButtonContainer>  
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{backgroundColor: 'black'}}
        />
    </div>
  );
}

export default Home; 