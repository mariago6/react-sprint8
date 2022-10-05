import React from "react";
import { FilmBox, FilmText, FilmClassText } from "./FilmCard.styled";

function FilmCard({films}) {
    return(
      <FilmBox>
        <FilmText><FilmClassText>Title:</FilmClassText> {films.title}</FilmText>
        <FilmText><FilmClassText>Episode Id: </FilmClassText> {films.episode_id}</FilmText>
        <FilmText><FilmClassText>Opening crawl: </FilmClassText> {films.opening_crawl}</FilmText>
        <FilmText><FilmClassText>Director: </FilmClassText> {films.director}</FilmText>
        <FilmText><FilmClassText>Producer: </FilmClassText> {films.producer}</FilmText>
        <FilmText><FilmClassText>Release date: </FilmClassText> {films.release_date}</FilmText>
      </FilmBox>
    );
  };
  
  export default FilmCard; 