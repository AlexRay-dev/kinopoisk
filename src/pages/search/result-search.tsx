import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Box, Button, Card, CardMedia, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {IMAGE_URL} from "../../shared/settings/settings";
import {setCurrentQuestion} from "../../store/reducers/searchSlice";
import EmptySearch from "./empty-search";

const ResultSearch: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {movieList} = useAppSelector(state => state.searchReducer)
  const [currentMovie, setCurrentMovie] = useState(0);
  const currentMovieId = movieList[currentMovie].id
  const {title, poster_path, overview} = movieList[currentMovie]
  const isEmpty = currentMovie + 1 === movieList.length

  function onAgree() {
    navigate(`/movie/${currentMovieId}`)
    dispatch(setCurrentQuestion(0))
  }

  function onNotAgree() {
    setCurrentMovie(currentMovie + 1);
  }

  if (isEmpty) return <EmptySearch/>

  return (
    <Box sx={{maxWidth: "700px", width: "100%", m: "20px auto 0"}}>
      <Typography variant={"h2"} component={"h2"} sx={{
        textAlign: "center",
        mb: "20px",
      }}>Ваш фильм</Typography>

      <Card
        sx={{
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
          minHeight: '320px',
          border: '1px solid #d9d9d9',
          display: 'flex',
          m: '0 auto',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: 200,
          }}
          image={IMAGE_URL + poster_path}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            p: "10px 20px"
          }}
        >
          <Typography sx={{fontWeight: 500, pb: "10px"}}>{title}</Typography>
          <Typography sx={{fontSize: "14px"}}>{overview}</Typography>
        </Box>
      </Card>

      <Stack direction="row" spacing={3} sx={{justifyContent: "center", mt: "40px"}}>
        <Button onClick={onAgree} variant={"outlined"}>Подходит</Button>
        <Button onClick={onNotAgree} variant={"outlined"}>Не подходит</Button>
      </Stack>
    </Box>
  );
};

export default ResultSearch;