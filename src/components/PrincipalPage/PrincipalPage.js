import React from 'react'; 
import { ArticlePage } from './PrincipalPage.styled';
import ButtonChange from '../ButtonChange/ButtonChange';

function PrincipalPage({listStarShip, prevPage, prevPageFunct, nextPage, nextPageFunct, numPag}) {
  return(
    <ArticlePage>
      {listStarShip}
      <div>
        <ButtonChange page={prevPage} functChange={prevPageFunct} text={'Previous'}/>
          {numPag}
        <ButtonChange page={nextPage} functChange={nextPageFunct} text={'Next'}/>
      </div>
    </ArticlePage>
  )
  
}

export default PrincipalPage; 
