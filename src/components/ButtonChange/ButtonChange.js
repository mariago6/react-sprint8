import React from "react";
import {Button} from './ButtonChange.styled'

function ButtonChange({text, page, functChange}) {
  return <Button style={{visibility: page === null ? 'hidden' : 'visible'}} onClick={functChange}>{text}</Button>
}

export default ButtonChange; 