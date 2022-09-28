import React from "react";
import {ButtonStylePages} from './ButtonPages.styled'

function ButtonPages({page, functPage, active, color}) {
  return <ButtonStylePages color={color} active={active} type="button" onClick={functPage}>{page} </ButtonStylePages>
}

export default ButtonPages; 