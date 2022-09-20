import React from "react";
import { ButtonBackStyle } from "./ButtonBack.styled";

function ButtonBack({buttonFunct}) {
  return(<ButtonBackStyle type="button" onClick={buttonFunct}>← Back</ButtonBackStyle>); 
}

export default ButtonBack; 