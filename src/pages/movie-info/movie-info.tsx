import React, {FC} from 'react';
import {Box, Container, Stack} from "@mui/material";
import {useParams} from "react-router-dom";
import {IMAGE_URL} from "../../core/const/config";
import {getGenresList} from "../../core/utils/get-genres";
import {movieListData} from "../../core/data/movieListData";
import {MovieInfoInner, MovieInfoPoster, MovieInfoTitle} from "./styled";

const MovieInfo: FC = () => {
  const {id} = useParams();
  const currentMovie = movieListData.find(movie => movie.id === Number(id));
  // @ts-ignore
  const {backdrop_path, poster_path, title, vote_average, release_date, overview} = currentMovie;
  // @ts-ignore
  const genresList = getGenresList(currentMovie).join(", ");

  if (!currentMovie) return null;

  return (
    <MovieInfoInner sx={{backgroundImage: `url("${IMAGE_URL + backdrop_path}")`}}>
      <Container sx={{display: "flex"}}>
        <MovieInfoPoster sx={{backgroundImage: `url("${IMAGE_URL + poster_path}")`}}/>

        <Box>
          <MovieInfoTitle variant="h3">{title}</MovieInfoTitle>
          <MovieInfoTitle>Рейтинг: {vote_average}</MovieInfoTitle>
          <MovieInfoTitle>Дата выхода: {release_date}</MovieInfoTitle>
          <MovieInfoTitle>Жанр: {genresList}</MovieInfoTitle>
          <MovieInfoTitle>{overview}</MovieInfoTitle>
        </Box>
      </Container>

    </MovieInfoInner>
  );
};

export default MovieInfo;