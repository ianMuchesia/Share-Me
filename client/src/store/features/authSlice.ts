import { UserMeType } from "@/@types/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userSliceType = {
  user: UserMeType | null;
  isAuthenticated: boolean | null;
  loading: boolean;
};
const initialUserState: userSliceType = {
  user: null,
  isAuthenticated: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    login(state, action: PayloadAction<UserMeType>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    loading(state) {
      state.loading = true;
      state.user = null;
      state.isAuthenticated = null;
    },
  },
});

export const { login, logout, loading } = authSlice.actions;

export default authSlice.reducer;
