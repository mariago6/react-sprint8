import React from 'react'
import { useState, useEffect } from 'react';
import Box from './components/Box'

function App() {
  const [starShips, setStarShips] = useState([]); 
  const [pages, setPages] = useState(1); 

  const newStarShips = starShips.map(starShip=> {
    return <Box name={starShip.name} model={starShip.model} />
  })

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/starships/?page=${pages}`)
      .then(res => res.json())
      .then(res => setStarShips(res.results))
  }, [pages]);

  return (
    <body>
      {newStarShips}
    </body>
  );
}

export default App;
