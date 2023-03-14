import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dough, Product, Size } from 'types/product.interface'

import { Ingredient } from 'types/Ingredient.interface'

interface AddProduct {
  product: Product
  size?: Size
  dough?: Dough
  ingredients?: Ingredient[]
}

export interface ProductCart {
  id: number
  product: Product
  quantity: number
  size?: Size
  dough?: Dough
  ingredients?: Ingredient[]
}

interface CartState {
  cart: ProductCart[]
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
    addProduct: (state, action: PayloadAction<AddProduct>) => {
      const { product, size, dough, ingredients } = action.payload

      const productFind = state.cart.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.dough === dough &&
          JSON.stringify(item.ingredients) === JSON.stringify(ingredients)
      )

      if (productFind) {
        productFind.quantity += 1
        state.total += productFind.product.price
        return
      }

      state.cart.push({
        id: Date.now(),
        product,
        quantity: 1,
        size,
        dough,
        ingredients
      })

      state.total += product.price
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload

      const productFind = state.cart.find((item) => item.id === id)

      if (productFind) {
        state.cart = state.cart.filter((item) => item.id !== id)
        state.total -= productFind.quantity * productFind.product.price
        return
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload

      const productFind = state.cart.find((item) => item.id === id)

      if (productFind) {
        productFind.quantity += 1
        state.total += productFind.product.price
        return
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload

      const productFind = state.cart.find((item) => item.id === id)

      if (productFind) {
        if (productFind.quantity - 1 === 0) {
          state.total -= productFind.product.price
          state.cart = state.cart.filter((item) => item.id !== id)
          return
        }

        productFind.quantity -= 1
        state.total -= productFind.product.price
        return
      }
    },
    clearCart: (state) => {
      state.cart = []
      state.total = 0
    }
  }
})

export const { reducer: cartSlice, actions: cartActions } = slice
