import React from "react";
import { ArticleCard } from "./CardStarShips.styled";


// function CardStarShips({name, model, manufacturer, cost, length, atmosphering, crew, passengers, capacity, consumables, rating, MGLT, class_starship, pilots, films}) {
//   return(
//     <div>
//       <h2>{name}</h2>
//       <img />
//       <div>
//         <p>Model: {model}</p>
//         <p>Manufacturer: {manufacturer}</p>
//         <p>Cost: {cost}</p>
//         <p>Length: {length}</p>
//         <p>Max atmosphering speed: {atmosphering}</p>
//         <p>Crew: {crew}</p>
//         <p>Passengers: {passengers}</p>
//         <p>Capacity: {capacity}</p>
//         <p>Consumables: {consumables}</p>
//         <p>Hyperdrive rating: {rating}</p>
//         <p>MGLT: {MGLT}</p>
//         <p>Class: {class_starship}</p>
//         <p>Pilots: {pilots}</p>
//         <p>Films: {films}</p>
//       </div>
//     </div>
//   )
  
// }

function CardStarShips({result, backFunct}) {
  return(
    <ArticleCard>
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
        <p>Pilots: {result.pilots}</p>
        <p>Films: {result.films}</p>
      </div>
      <button type="button" onClick={backFunct}>Back</button>
    </ArticleCard>
  )
  
}

export default CardStarShips; 