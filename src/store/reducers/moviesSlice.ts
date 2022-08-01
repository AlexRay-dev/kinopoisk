import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toggleIdInArray} from "../../pages/home/side-menu/utils/toggleIdInArray";
import {DEFAULT_YEAR, SORT, USER_FAVORITE_TYPES} from "../../shared/settings/settings";

export interface IUserFavoriteList {
  default: string,
  favorites: number[],
  watchLater: number[],
}
interface MoviesState {
  sortByPopular: string,
  sortByYear: string,
  genreList: number[],
  sortByUserFavorite: IUserFavoriteList,
}

const initialState: MoviesState = {
  sortByPopular: SORT.POPULAR_DOWN,
  sortByYear: DEFAULT_YEAR,
  genreList: [],
  sortByUserFavorite: {
    default: USER_FAVORITE_TYPES.DEFAULT,
    favorites: [],
    watchLater: [],
  }
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortByPopular = action.payload;
    },
    setSortByYear(state, action: PayloadAction<string>) {
      state.sortByYear = action.payload;
    },
    setGenreList(state, action: PayloadAction<number[]>) {
      state.genreList = action.payload
    },
    setUserFavoriteType(state, action: PayloadAction<string>) {
      state.sortByUserFavorite.default = action.payload;
    },
    setUserFavoriteList(state, action) {
      state.sortByUserFavorite.favorites = toggleIdInArray(state.sortByUserFavorite.favorites, action.payload)
    },
    setUserWatchLaterList(state, action) {
      state.sortByUserFavorite.watchLater = toggleIdInArray(state.sortByUserFavorite.watchLater, action.payload)
    },
  }
});

export const {
  setSortBy,
  setSortByYear,
  setGenreList,
  setUserFavoriteList,
  setUserWatchLaterList,
  setUserFavoriteType,
} = moviesSlice.actions;

export default moviesSlice.reducer;