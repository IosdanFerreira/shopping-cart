import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    currentProduct: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductsToCart: (state, action) => {

            const productInCart = state.products.find((product) => product.id === action.payload.id)

            if (productInCart) {
                productInCart.quantity++

                return
            }

            state.products = [...state.products, { ...action.payload, quantity: 1 }]
        },

        removeProductsToCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },

        increaseProductToCart: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.id)

            if (product) {
                product.quantity++
            }
        },

        decreaseProductToCart: (state, action) => {

            const product = state.products.find((product) => product.id === action.payload.id)

            if (product.quantity === 1) {
                product.quantity = 1

                return;
            }

            product.quantity--
        }
    }
})

export const {
    addProductsToCart,
    removeProductsToCart,
    decreaseProductToCart,
    increaseProductToCart,
} = cartSlice.actions

export default cartSlice.reducer