import { createSlice } from "@reduxjs/toolkit";



const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user : user ? user : null,
    isFetching : false,
    error : false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        loginStart:(state) => {
            state.user = null
            state.isFetching = true
            state.error = false
        },

        loginSucess:(state, action) => {
            state.user = action.payload
            state.isFetching = false
            state.error = false
        },

        loginFailure:(state) => {
            state.user = null
            state.isFetching = false
            state.error = true
        },
        logOut:(state) => {
            state.user = null
            localStorage.removeItem('user')
        }

    }
})
export const {loginStart, loginSucess, loginFailure, getUser, logOut} = userSlice.actions
export default userSlice.reducer