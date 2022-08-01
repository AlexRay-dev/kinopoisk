import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
  isAuthModalOpen: boolean,
}

const initialState: ModalState = {
  isAuthModalOpen: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAuthModalState(state, action: PayloadAction<boolean>) {
      state.isAuthModalOpen = action.payload;
    }
  }
})

export const {
  setAuthModalState,
} = modalSlice.actions;

export default modalSlice.reducer;