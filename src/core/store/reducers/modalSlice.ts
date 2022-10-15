import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface ModalState {
  isAuthModalOpen: boolean,
}

const initialState: ModalState = {
  isAuthModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAuthModalState(state, action: PayloadAction<boolean>) {
      state.isAuthModalOpen = action.payload;
    }
  }
});

export const {
  setAuthModalState,
} = modalSlice.actions;
export const selectAuthModalState = (state: RootState) => state.modalReducer;
export default modalSlice.reducer;