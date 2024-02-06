import { AccessTokenType } from "@/@types/auth";
import { createSlice } from "@reduxjs/toolkit";


type userSliceType = {
    user:AccessTokenType|null;
    isAuthenticated:boolean;
    loading:boolean;
}
const initialUserState:userSliceType = {
    user: null,
    isAuthenticated: false,
    loading:false
  
    };


const authSlice = createSlice({

    name: "auth",
    initialState: initialUserState,
    reducers: {
        login(state, action) {
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
        },
    },
});



export const {login,logout,loading} = authSlice.actions;

export default authSlice.reducer;
