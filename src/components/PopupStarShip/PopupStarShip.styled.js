import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export const ListBox = styled.div`
  position: fixed;
  top: 7%;
  left: 22%;
  width: 55%;
  height: 100%; 
  max-height: 85vh;
  background: #212121;
  padding: 20px;
  padding-top: 0; 
  overflow: auto;
  justify-content: center;
`

export const CloseButton = styled.button`
  position: relative; 
  background-color: transparent; 
  color: #484848;
  border: none; 
  font-size: 20px; 
  width: 20%; 
  cursor: pointer;
  left: 69%; 
  top: 7%; 
  z-index: 1;
`

export const Row = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
export const ColTitle = styled.div`
  flex: 5; 
`

export const Title = styled.div`
  color: yellow; 
  font-size: 40px; 
  letter-spacing: 2px; 
  text-align: center;
  margin: 10px; 
`

export const StarWarsImage = styled.img`
  object-fit: cover;
  display: block;
  top: 50%;
  width: 100%;
  max-width: 90px;
  height: 100%;
  max-height: 80px;
  box-sizing: border-box;
  background-size: contain;
  margin-left: auto;
  margin-right: auto; 
  margin-top: 15px; 
`