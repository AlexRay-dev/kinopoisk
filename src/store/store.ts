import {combineReducers, configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesSlice"
import paginationReducer from "./reducers/paginationSlice"
import authReducer from "./reducers/authSlice"
import modalReducer from "./reducers/modalSlice"
import searchReducer from "./reducers/searchSlice"

const rootReducer = combineReducers({
  moviesReducer,
  paginationReducer,
  authReducer,
  modalReducer,
  searchReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]