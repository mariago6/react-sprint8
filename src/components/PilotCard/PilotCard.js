import React from "react";
import { PilotBox, PilotText, PilotClassText} from './PilotCard.styled'; 

function PilotCard({pilots}) {
  return(
    <PilotBox>
      <PilotText><PilotClassText>Name: </PilotClassText> {pilots.name}</PilotText>
      <PilotText><PilotClassText>Height: </PilotClassText> {pilots.height}</PilotText>
      <PilotText><PilotClassText>Mass: </PilotClassText> {pilots.mass}</PilotText>
      <PilotText><PilotClassText>Hair color: </PilotClassText> {pilots.hair_color}</PilotText>
      <PilotText><PilotClassText>Skin color: </PilotClassText> {pilots.skin_color}</PilotText>
      <PilotText><PilotClassText>Eye color: </PilotClassText> {pilots.eye_color}</PilotText>
      <PilotText><PilotClassText>Birth year: </PilotClassText> {pilots.birth_year}</PilotText>
      <PilotText><PilotClassText>Gender: </PilotClassText> {pilots.gender}</PilotText>
    </PilotBox>
  );
};

export default PilotCard; 