import React from "react";
import { FilmBox, FilmText } from "./FilmCard.styled";

function FilmCard({films}) {
    return(
      <FilmBox>
        <FilmText>Title: {films.title}</FilmText>
        <FilmText>Episode Id: {films.episode_id}</FilmText>
        <FilmText>Opening crawl: {films.opening_crawl}</FilmText>
        <FilmText>Director: {films.director}</FilmText>
        <FilmText>Producer: {films.producer}</FilmText>
        <FilmText>Release date: {films.release_date}</FilmText>
      </FilmBox>
    );
  };
  
  export default FilmCard; 