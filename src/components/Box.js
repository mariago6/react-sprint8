import React from "react";

function Box({name, model}) {
  return(
    <div>
      <p>{name.toUpperCase()}</p>
      <p>{model}</p>
      <br/>
    </div>
  )
}

export default Box; 