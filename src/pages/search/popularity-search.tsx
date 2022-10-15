import React, {FC} from 'react';
import {selectSearch, setCurrentQuestion, setFilteredSearchList} from "../../core/store/reducers/searchSlice";
import {filterBySearchPopularity} from "../../core/utils/sorting";
import {Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {SearchButton, SearchInner, SearchTitle} from './styled';

const PopularitySearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion, movieList} = useAppSelector(selectSearch);

  const onClickButton = (id: number, type: string) => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
    dispatch(setFilteredSearchList(filterBySearchPopularity(movieList, type)));
  };

  const movieRatingType = [{name: "Популярный", id: 1}, {name: "Неизвестный", id: 2}];

  return (
    <SearchInner>
      <SearchTitle variant="h2">Популярный или неизвестный?</SearchTitle>

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
  )
};

export default PopularitySearch;