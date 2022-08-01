import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../store/store";
import {movieListData} from "../../../../shared/data/movieListData";
import {filterByGenre, filterByUserFavorite, filterByYear, sortByPopularity} from "./sorting";

export const selectSortType = (state: RootState) => state.moviesReducer.sortByPopular;
export const selectYear = (state: RootState) => state.moviesReducer.sortByYear;
export const selectGenreList = (state: RootState) => state.moviesReducer.genreList;
export const selectUserFavorite = (state: RootState) => state.moviesReducer.sortByUserFavorite

export const selectSortedMovies = createSelector([selectSortType, selectYear, selectGenreList, selectUserFavorite],
  (sortType, year, genreList, userFavoriteList) => {
    const filteredByYear = filterByYear(movieListData, year);
    const sortedByPopularity = sortByPopularity(filteredByYear, sortType);
    const filteredByGenre = filterByGenre(sortedByPopularity, genreList)
    return filterByUserFavorite(filteredByGenre, userFavoriteList)
  })