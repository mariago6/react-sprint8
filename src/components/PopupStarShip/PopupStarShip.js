import React from "react";
import {Container, CloseButton, ListBox, Row, StarWarsImage, ColTitle, Title} from './PopupStarShip.styled'

function PopupStarShip({listInformation, closeView, title}) {
  return(
    <Container>
      <CloseButton type="button" onClick={closeView}> X </CloseButton>
      <ListBox>
        <Row>
          <StarWarsImage src="./images/starwars-logo-yellow.png" alt="logo-yellow"/>
        </Row>
        <Row>
          <ColTitle>
            <Title>{title}</Title>
          </ColTitle>
        </Row>
        <Row>
            {listInformation}
        </Row>
      </ListBox>
    </Container>
  );
}; 

export default PopupStarShip; 