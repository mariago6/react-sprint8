import React from "react";
import { useState, useEffect } from 'react';
import BoxStarShips from '../../components/BoxStarShips/BoxStarShips'; 
import Navbar from "../../components/Navbar/Navbar";
import ButtonPages from "../../components/ButtonPages/ButtonPages";
import PrincipalPage from "../../components/PrincipalPage/PrincipalPage";
import CardStarShips from "../../components/CardStarShips/CardStarShips";


function StarShips() {
  const INITIAL_API = 'https://swapi.py4e.com/api/starships/'; 
  const [starShips, setStarShips] = useState([]); 
  const [totalElements, setTotalElements] = useState(); 
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState(); 
  const [isActive, setIsActive] = useState(false); 
  const [starShipPosition, setStarShipPosition] = useState(); 

  const newStarShips = starShips.map((starShip, index) => {
    return <BoxStarShips key={index} name={starShip.name} model={starShip.model} singStarShipFunct={() => handleChange(index)}/>
  })

  const numberPages = Array.from({length: Math.ceil(totalElements / 10)}, (_, i) => i + 1).map((numPage) => {
    return (<ButtonPages key={numPage} page={numPage} functPage={() => callApi(`https://swapi.py4e.com/api/starships/?page=${numPage}`)}/>)
  })

  const callApi = (linkPage) => {
    fetch(linkPage)
      .then(res => res.json())
      .then(res => {
        setStarShips(res.results);
        setTotalElements(res.count);
        setPreviousPage(res.previous);
        setNextPage(res.next);
      });
  }

  const handleNextPage = () => callApi(nextPage); 
  
  const handleBeforePage = () => callApi(previousPage); 

  const handleChange = (position) => {
      setIsActive(prevIsActive => !prevIsActive);
      setStarShipPosition (prevStarShipPosition => prevStarShipPosition = position);
  }

  const handleIsFalse = () => setIsActive(prevIsActive => prevIsActive = false);

  useEffect(() => callApi(INITIAL_API), []);

  return (
    <main>
      <Navbar initialPage={() => handleIsFalse()}/>
        {isActive ? 
          <CardStarShips result={starShips[starShipPosition]} backFunct={() => handleChange()}/> : 
          <PrincipalPage listStarShip={newStarShips} prevPage={previousPage} prevPageFunct={handleBeforePage} 
            nextPage={nextPage} nextPageFunct={handleNextPage} numPag={numberPages}/>
        }
    </main>
  );
}

export default StarShips; 