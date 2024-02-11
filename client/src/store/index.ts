import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalSlice from "./features/modalSlice";
import { postApi } from "./services/postApi";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,

    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(authApi.middleware, postApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
