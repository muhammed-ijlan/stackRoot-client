import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginFailure: (state) => {
            state.error = true;
            state.loading = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
        }
    }
})

export const { loginFailure, loginStart, loginSuccess, logout } = userSlice.actions
export default userSlice.reducer;