import React, { useState, useEffect } from "react";
import { ArticleCard, CardChild, Col, ButtonOpenInfo, EmtyBoxText, ButtonDiv } from "./CardStarShips.styled";
import ButtonBack from "../ButtonBack/ButtonBack";
import PopupStarShip from "../PopupStarShip/PopupStarShip";
import PilotCard from "../PilotCard/PilotCard";
import FilmCard from "../FilmCard/FilmCard";

function CardStarShips({result, backFunct}) {
  const [pilots, setPilots] = useState([]);
  const [isOpenPilotsView, setIsOpenPilotsView] = useState(false);  
  const [films, setFilms] = useState([]); 
  const [isOpenFilmsView, setIsOpenFilmsView] = useState(false); 

  function openClosePilotView() {
    setIsOpenPilotsView(prevIsOpenPilotView => !prevIsOpenPilotView); 
  };

  function openCloseFilmView() {
    setIsOpenFilmsView(prevIsOpenFilmView => !prevIsOpenFilmView); 
  };

  const listInfoPilots = pilots.map((pilot, index) => {
    return <Col><PilotCard key={index} pilots={pilot} /></Col>
  }); 

  const listInfoFilms = films.map((film, index) => {
    return<Col><FilmCard key={index} films={film} /></Col>
  }); 
  
  useEffect(() => {
    result.pilots.forEach(pilotURL => 
      fetch(pilotURL)
        .then(res => res.json())
        .then(res => setPilots(prevPilots => [...prevPilots, res]))
    ); 
  }, [result.pilots]); 

  useEffect(() => {
    result.films.forEach(filmURL =>
      fetch(filmURL)
        .then(res => res.json())
        .then(res => setFilms(prevFilms => [...prevFilms, res]))
    ); 
  }, [result.films])

  return(
    <ArticleCard>
      <CardChild>
        <h2>{result.name}</h2>
        <div>
          <p>Model: {result.model}</p>
          <p>Manufacturer: {result.manufacturer}</p>
          <p>Cost: {result.cost_in_credits}</p>
          <p>Length: {result.length}</p>
          <p>Max atmosphering speed: {result.max_atmosphering_speed}</p>
          <p>Crew: {result.crew}</p>
          <p>Passengers: {result.passengers}</p>
          <p>Capacity: {result.cargo_capacity}</p>
          <p>Consumables: {result.consumables}</p>
          <p>Hyperdrive rating: {result.hyperdrive_rating}</p>
          <p>MGLT: {result.MGLT}</p>
          <p>Class: {result.starship_class}</p>
          <p>Pilots: <ButtonOpenInfo onClick={openClosePilotView}> click </ButtonOpenInfo></p>
          {isOpenPilotsView && 
            (pilots.length === 0 ? 
              <PopupStarShip 
                listInformation={<div><EmtyBoxText>This Starship doesn't have pilots</EmtyBoxText><ButtonDiv><ButtonBack buttonFunct={openClosePilotView}/></ButtonDiv></div>} 
                closeView={openClosePilotView} 
                title={'Pilots'}/> : 
              <PopupStarShip listInformation={listInfoPilots} closeView={openClosePilotView} title={'Pilots'} />
            )}
          <p>Films: <ButtonOpenInfo onClick={openCloseFilmView}> click </ButtonOpenInfo></p>
          {isOpenFilmsView &&
            (films.length === 0 ? 
              <PopupStarShip 
                listInformation={<div><EmtyBoxText>This Starship doesn't have films</EmtyBoxText><ButtonDiv><ButtonBack buttonFunct={openCloseFilmView}/></ButtonDiv></div>} 
                closeView={openCloseFilmView} 
                title={'Films'}/> :
              <PopupStarShip listInformation={listInfoFilms} closeView={openCloseFilmView} title={'Films'}/>
            )}
        </div>
      </CardChild>
      <ButtonBack buttonFunct={backFunct}/>
    </ArticleCard>
  ); 
}

export default CardStarShips; 