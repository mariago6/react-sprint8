import React from "react";
import { PilotBox, PilotText} from './PilotCard.styled'; 

function PilotCard({pilots}) {
  return(
    <PilotBox>
      <PilotText>Name: {pilots.name}</PilotText>
      <PilotText>Height: {pilots.height}</PilotText>
      <PilotText>Mass: {pilots.mass}</PilotText>
      <PilotText>Hair color: {pilots.hair_color}</PilotText>
      <PilotText>Skin color: {pilots.skin_color}</PilotText>
      <PilotText>Eye color: {pilots.eye_color}</PilotText>
      <PilotText>Birth year: {pilots.birth_year}</PilotText>
      <PilotText>Gender: {pilots.gender}</PilotText>
    </PilotBox>
  );
};

export default PilotCard; 