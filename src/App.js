import React from 'react';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import StarShips from './pages/StarShips/StarShips';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isLogIn, setIsLogIn] = useState(); 

  const logged = (logIn) => {
    setIsLogIn(prevIsLogIn => prevIsLogIn = logIn); 
    
  }

  return(
    <BrowserRouter>
    <Navbar logged={logged}/>
    <Routes>   
        <Route path="/" element={<Home isUserLogged={isLogIn}/>} />
        <Route element={<PrivateRoute isLogged={isLogIn}/>}>
          <Route path="/starships" element={<StarShips />} />
        </Route>
        <Route path="*" element={<div>404</div> } />
    </Routes>
  </BrowserRouter>
  )
  
};

export default App;
