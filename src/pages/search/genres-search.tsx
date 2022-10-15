import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {selectSearch, setCurrentQuestion, setFilteredSearchList} from "../../core/store/reducers/searchSlice";
import {filterByGenre} from "../../core/utils/sorting";
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {movieListData} from "../../core/data/movieListData";
import {genreListData} from "../../core/data/genreListData";
import {SearchButton, SearchInner, SearchTitle} from "./styled";

const GenresSearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion} = useAppSelector(selectSearch);

  const onClickButton = (id: number) => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
    dispatch(setFilteredSearchList(filterByGenre(movieListData, [id])));
  };

  return (
    <SearchInner>
      <SearchTitle variant="h2">Выберите жанр</SearchTitle>

      <Stack justifyContent='center' flexWrap='wrap' direction="row">
        {genreListData.map((item) => (
          <SearchButton
            key={item.id}
            onClick={() => onClickButton(item.id)}
            variant="outlined">
            {item.name}
          </SearchButton>
        ))}
      </Stack>
    </SearchInner>
  );
};

export default GenresSearch;