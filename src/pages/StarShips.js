import React from "react";
import { useState, useEffect } from 'react';
import BoxStarShips from '../components/BoxStarShips/BoxStarShips'; 
import Navbar from "../components/Navbar/Navbar";
import ButtonPages from "../components/ButtonPages/ButtonPages";
import ButtonChange from "../components/ButtonChange/ButtonChange";
import {Article} from './StarShips.styled';


function StarShips() {
  const INITIAL_API = 'https://swapi.py4e.com/api/starships/'; 
  const [starShips, setStarShips] = useState([]); 
  const [totalElements, setTotalElements] = useState(); 
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState(); 

  const newStarShips = starShips.map((starShip, index) => {
    return <BoxStarShips key={index} name={starShip.name} model={starShip.model} />
  })

  const numberPages = Array.from({length: Math.ceil(totalElements / 10)}, (_, i) => i + 1).map((numPage) => {
    return (<ButtonPages key={numPage} page={numPage} functPage={() => callApi(`https://swapi.py4e.com/api/starships/?page=${numPage}`)}/>)
  })

  const callApi = (currentPage) => {
    fetch(currentPage)
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

  useEffect(() => callApi(INITIAL_API), []);

  return (
    <main>
      <Navbar />
      <Article>
        {newStarShips}
        <div>
          <ButtonChange page={previousPage} functChange={handleBeforePage} text={'Previous'}/>
            {numberPages}
          <ButtonChange page={nextPage} functChange={handleNextPage} text={'Next'}/>
        </div>
      </Article>
    </main>
  );
}

export default StarShips; 