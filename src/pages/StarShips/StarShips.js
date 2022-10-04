import React from "react";
import { useState, useEffect } from 'react';
import BoxStarShips from '../../components/BoxStarShips/BoxStarShips'; 
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
  const [counter, setCounter] = useState(1); 

  const newStarShips = starShips.map((starShip, index) => {
    return <BoxStarShips key={index} name={starShip.name} model={starShip.model} singStarShipFunct={() => handleChange(index)}/>
  }); 

  const numberPages = Array.from({length: Math.ceil(totalElements / 10)}, (_, i) => i + 1).map((numPage) => {
    return (<ButtonPages key={numPage} color={numPage === counter ? 1 : 0} page={numPage} functPage={() => {callApi(`https://swapi.py4e.com/api/starships/?page=${numPage}`); setCounter(prevCounter => prevCounter = numPage)}}/>)
  }); 

  const callApi = (linkPage) => {
    fetch(linkPage)
      .then(res => res.json())
      .then(res => {
        setStarShips(res.results);
        setTotalElements(res.count);
        setPreviousPage(res.previous);
        setNextPage(res.next);
      });
  }; 

  const handleNextPage = () => {
    callApi(nextPage)
    setCounter(prevCounter => prevCounter > numberPages.length ? 1 : prevCounter + 1); 
  }; 
  
  const handleBeforePage = () => {
    callApi(previousPage)
    setCounter(prevCounter => prevCounter === 0 ? numberPages.length : prevCounter - 1);
  }; 

  const handleChange = (position) => {
    setIsActive(prevIsActive => !prevIsActive);
    setStarShipPosition (prevStarShipPosition => prevStarShipPosition = position);
  }; 

  useEffect(() => callApi(INITIAL_API), []);

  return (
    <main>
      {isActive ? 
        <CardStarShips result={starShips[starShipPosition]} backFunct={() => handleChange()}/> : 
        <PrincipalPage listStarShip={newStarShips} prevPage={previousPage} prevPageFunct={handleBeforePage} 
          nextPage={nextPage} nextPageFunct={handleNextPage} numPag={numberPages}/>
      }
    </main>
  );
}

export default StarShips; 