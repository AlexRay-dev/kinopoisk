import React, {FC} from 'react';
import GenresSearch from "./genres-search";
import RatingSearch from "./rating-search";
import PopularitySearch from "./popularity-search";
import ResultSearch from "./result-search";
import {useAppSelector} from "../../core/hooks/redux";
import {selectSearch} from "../../core/store/reducers/searchSlice";

const Search:FC = () => {
  const {currentQuestion} = useAppSelector(selectSearch);
  const currentPage = [<GenresSearch/>, <RatingSearch/>, <PopularitySearch/>, <ResultSearch/>];

  return (
    <>
      {currentPage[currentQuestion]}
    </>
  );
};

export default Search;