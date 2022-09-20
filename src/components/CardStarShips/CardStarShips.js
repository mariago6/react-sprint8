import React from "react";
import { ArticleCard, CardChild } from "./CardStarShips.styled";
import ButtonBack from "../ButtonBack/ButtonBack";

function CardStarShips({result, backFunct}) {
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
          {/* <p>Pilots: {result.pilots}</p>
          <p>Films: {result.films}</p> */}
        </div>
      </CardChild>
      <ButtonBack buttonFunct={backFunct}/>
    </ArticleCard>
  )
  
}

export default CardStarShips; 