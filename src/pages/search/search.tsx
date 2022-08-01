import React, {FC} from 'react';
import GenresSearch from "./genres-search";
import RatingSearch from "./rating-search";
import {useAppSelector} from "../../hooks/redux";
import PopularitySearch from "./popularity-search";
import ResultSearch from "./result-search";

const Search:FC = () => {
  const {currentQuestion} = useAppSelector(state => state.searchReducer)
  const currentPage = [<GenresSearch/>, <RatingSearch/>, <PopularitySearch/>, <ResultSearch/>]

  return (
    <>
      {currentPage[currentQuestion]}
    </>
  );
};

export default Search;