import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieListData} from "../../data/movieListData";
import {RootState} from "../store";

interface PaginationState {
  currentPage: number,
  moviesCount: number
}

const initialState: PaginationState = {
  currentPage: 1,
  moviesCount: movieListData.length,
};

const  paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  }
});

export const {
  setCurrentPage,
} = paginationSlice.actions;
export const selectPagination = (state: RootState) => state.paginationReducer;
export default paginationSlice.reducer;