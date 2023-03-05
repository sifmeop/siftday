import { createSlice } from '@reduxjs/toolkit'
import { Drink } from 'types/drink.interface'
import { Pizza } from 'types/pizza.interface'
import { Sauce } from 'types/sauce.inteface'

interface CartState {
  cart: Pizza[] | Drink[] | Sauce[]
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
    // addProduct
    // removeProduct
  }
})

export const { reducer: cartSlice, actions: cartActions } = slice
