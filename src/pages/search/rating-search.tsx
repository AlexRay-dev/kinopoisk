import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {selectSearch, setCurrentQuestion, setFilteredSearchList} from "../../core/store/reducers/searchSlice";
import {sortByPopularity} from "../../core/utils/sorting";
import {SORT} from "../../core/const/config";
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {SearchButton, SearchInner, SearchTitle } from './styled';

const RatingSearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion, movieList} = useAppSelector(selectSearch);

  const onClickButton = (id: number, type: string) => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
    if(type === "Высокая") {
      dispatch(setFilteredSearchList(sortByPopularity(movieList, SORT.RATING_DOWN)));
      return;
    }
    dispatch(setFilteredSearchList(sortByPopularity(movieList, SORT.RATING_UP)));
  }

  const movieRatingType = [{name: "Высокая", id: 1}, {name: "Низкая", id: 2}];

  return (
    <SearchInner>
      <SearchTitle variant="h2">Выберите оценку фильма</SearchTitle>

      <Stack justifyContent='center' flexWrap='wrap' direction="row">
        {movieRatingType.map((item) => (
          <SearchButton
            key={item.id}
            onClick={() => onClickButton(item.id, item.name)}
            variant="outlined">
            {item.name}
          </SearchButton>
        ))}
      </Stack>
    </SearchInner>
  );
};

export default RatingSearch;