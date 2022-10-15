import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieCard} from "../../data/movieListData";
import {RootState} from "../store";

interface SearchState {
  currentQuestion: number,
  movieList: IMovieCard[],
}

const initialState: SearchState = {
  currentQuestion: 0,
  movieList: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentQuestion(state, action: PayloadAction<number>) {
      state.currentQuestion = action.payload
    },
    setFilteredSearchList(state, action: PayloadAction<IMovieCard[]>) {
      state.movieList = action.payload
    }
  }
});

export const {
  setCurrentQuestion,
  setFilteredSearchList
} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.searchReducer;
export default searchSlice.reducer;