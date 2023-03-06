import { createSlice } from '@reduxjs/toolkit'
import { Product } from 'types/product.interface'

interface CartState {
  cart: {
    product: Product
    quantity: number
  }[]
  total: number
}

const initialState: CartState = {
  cart: [],
  total: 0
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addProduct: (state, payload: PayloadAction<{}>) => {
    // }
    // removeProduct: (state, payload: PayloadAction<{}>) => {
    // }
  }
})

export const { reducer: cartSlice, actions: cartActions } = slice
