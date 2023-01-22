import { createSlice } from '@reduxjs/toolkit'

// Firebase
import firebase from '../../lib/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const initialState = {
    user: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload.user;
        },

        singOut: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const {
    signIn,
    singOut
} = userSlice.actions

export default userSlice.reducer