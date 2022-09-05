import React from "react";
import { useState, useEffect } from 'react';
import BoxStarShips from '../components/BoxStarShips/BoxStarShips'; 
import Navbar from "../components/Navbar/Navbar";
import {Article} from './styled'


function StarShips() {
  const [starShips, setStarShips] = useState([]); 
  const [pages, setPages] = useState(1); 

  const newStarShips = starShips.map((starShip, index) => {
    return <BoxStarShips key={index} name={starShip.name} model={starShip.model} />
  })

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/starships/?page=${pages}`)
      .then(res => res.json())
      .then(res => setStarShips(res.results))
  }, [pages]);

  return (
    <main>
      <Navbar />
      <Article>
        {newStarShips}
      </Article>
    </main>
    
  );
}

export default StarShips; 