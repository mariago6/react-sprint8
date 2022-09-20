import React from "react";
import {ButtonStylePages} from './ButtonPages.styled'

function ButtonPages({page, functPage, active}) {
  return <ButtonStylePages active={active} type="button" onClick={functPage}>{page}</ButtonStylePages>
}

export default ButtonPages; 