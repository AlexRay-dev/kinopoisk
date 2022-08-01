import React, {FC} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {movieListData} from "../../shared/data/movieListData";
import {IMAGE_URL} from "../../shared/settings/settings";
import {getGenresList} from "./utils/get-genres";

const MovieInfo: FC = () => {
  const {id} = useParams()
  const movie = movieListData.find(item => item.id === Number(id))
  // @ts-ignore
  const genresList = getGenresList(movie).join(", ");

  if (!movie) return null;

  return (
    <Box sx={{
      height: `calc(100vh - 214px)`,
      p: "50px 0 100px 0",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "rgba(41, 41, 41, 0.7)",
      backgroundBlendMode: "multiply",
      position: "relative",
      backgroundImage: `url("${IMAGE_URL + movie.backdrop_path}")`,
    }}>
      <Container sx={{display: "flex"}}>
        <Box
          sx={{
            minWidth: "300px",
            mr: "77px",
            height: "450px",
            backgroundImage: `url("${IMAGE_URL + movie.poster_path}")`
          }}/>

        <Box>
          <Typography variant={"h3"} sx={{color: "white"}}>{movie.title}</Typography>
          <Typography sx={{color: "white"}}>Рейтинг: {movie.vote_average}</Typography>
          <Typography sx={{color: "white"}}>Дата выхода: {movie.release_date}</Typography>
          <Typography sx={{color: "white"}}>Жанр: {genresList}</Typography>
          <Typography sx={{color: "white"}}>{movie.overview}</Typography>
        </Box>
      </Container>


    </Box>
  );
};

export default MovieInfo;