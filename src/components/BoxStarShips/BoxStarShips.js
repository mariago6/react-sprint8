import React from "react";
import {BoxContainer, TextBox} from './BoxStarShips.styled'

function Box({name, model}) {
  return(
    <BoxContainer>
      <TextBox>{name.toUpperCase()}</TextBox>
      <TextBox>{model}</TextBox>
    </BoxContainer>
  )
}

export default Box; 