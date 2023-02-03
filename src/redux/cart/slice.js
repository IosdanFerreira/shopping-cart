import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductsToCart: (state, action) => {
            const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)

            if (productIsAlreadyInCart) {
                state.products = state.products.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product);

                return
            }

            state.products = [...state.products, { ...action.payload, quantity: 1 }]
        },

        removeProductsToCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        }
    }
})

export const {
    addProductsToCart,
    removeProductsToCart,
} = cartSlice.actions

export default cartSlice.reducer