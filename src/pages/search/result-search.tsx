import React, {FC, useState} from 'react';
import {Button, CardMedia, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {IMAGE_URL} from "../../core/const/config";
import {selectSearch, setCurrentQuestion} from "../../core/store/reducers/searchSlice";
import EmptySearch from "./empty-search";
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {SearchCard, SearchInner, SearchTitle} from './styled';

const ResultSearch: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {movieList} = useAppSelector(selectSearch);
  const [currentMovie, setCurrentMovie] = useState(0);
  const currentMovieId = movieList[currentMovie].id;
  const {title, poster_path, overview} = movieList[currentMovie];
  const isEmpty = currentMovie + 1 === movieList.length;

  const onAgree = () => {
    navigate(`/movie/${currentMovieId}`);
    dispatch(setCurrentQuestion(0));
  };

  if (isEmpty) return <EmptySearch/>;

  return (
    <SearchInner>
      <SearchTitle variant="h2">Ваш фильм</SearchTitle>

      <SearchCard>
        <CardMedia component="img" sx={{maxWidth: 200}} image={IMAGE_URL + poster_path}/>

        <Stack flexBasis='100%' p="10px 20px">
          <Typography sx={{fontWeight: 500, pb: "10px"}}>{title}</Typography>
          <Typography sx={{fontSize: "14px"}}>{overview}</Typography>
        </Stack>
      </SearchCard>

      <Stack direction="row" spacing={3} justifyContent="center" mt="40px">
        <Button onClick={onAgree} variant="outlined">Подходит</Button>
        <Button onClick={() => setCurrentMovie(currentMovie + 1)} variant="outlined">Не подходит</Button>
      </Stack>
    </SearchInner>
  );
};

export default ResultSearch;