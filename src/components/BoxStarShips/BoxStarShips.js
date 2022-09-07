import React from "react";
import {BoxContainer, TextBox} from './BoxStarShips.styled'

function Box({name, model, singStarShipFunct}) {
  return(
    <BoxContainer type="button" onClick={singStarShipFunct}>
      <TextBox>{name.toUpperCase()}</TextBox>
      <TextBox>{model}</TextBox>
    </BoxContainer>
  )
}

export default Box; 