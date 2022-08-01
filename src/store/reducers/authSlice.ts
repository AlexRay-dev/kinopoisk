import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean,
}

const initialState: AuthState = {
  isAuth: false,
}

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    }
  }
})

export const {
  setAuthStatus,
} = authSlice.actions

export default authSlice.reducer