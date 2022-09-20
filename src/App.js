import React from 'react';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import StarShips from './pages/StarShips/StarShips';

const App = () => (
  <BrowserRouter>
      <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarShips />} />
          <Route path="/starships/:id" element={<StarShips />} />
          <Route path="*" element={<div>404</div> } />
      </Routes>
    </BrowserRouter>
);

export default App;
