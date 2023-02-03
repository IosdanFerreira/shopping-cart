import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    loading: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInWithGoogle: (state, action) => {
            state.user = action.payload
            state.loading = false
        },

        singOutWhitGoogle: (state, action) => {
            state.user = action.payload
            state.loading = false
        }
    }
})

export const {
    signInWithGoogle,
    singOutWhitGoogle
} = userSlice.actions

export default userSlice.reducer