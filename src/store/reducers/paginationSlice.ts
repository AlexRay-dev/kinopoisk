import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieListData} from "../../shared/data/movieListData";

interface PaginationState {
  currentPage: number,
  moviesCount: number
}

const initialState: PaginationState = {
  currentPage: 1,
  moviesCount: movieListData.length,
}

const  paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setMoviesCount(state, action: PayloadAction<number>) {
      state.moviesCount = action.payload
    }
  }
})

export const {
  setCurrentPage,
  setMoviesCount
} = paginationSlice.actions

export default paginationSlice.reducer