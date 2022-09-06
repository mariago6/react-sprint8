import React from "react";
import {Button} from '../ButtonChange/ButtonChange.styled'

function ButtonPages({page, functPage}) {
  return <Button type="button" onClick={functPage}>{page}</Button>
}

export default ButtonPages; 