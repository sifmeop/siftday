import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dough, Product, Size } from 'types/product.interface'

interface AddProduct {
  product: Product
  size?: Size
  dough?: Dough
}

export interface ProductCart {
  id: number
  product: Product
  quantity: number
  size?: Size
  dough?: Dough
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
      const id: number = Date.now()

      const { product, dough, size } = action.payload

      const productFind = state.cart.find(
        (item) => item.product.id === product.id
      )

      if (!productFind) {
        if (dough && size) {
          state.cart.push({
            id,
            product,
            dough,
            size,
            quantity: 1
          })
        } else {
          state.cart.push({
            id,
            product,
            quantity: 1
          })
        }
        state.total += product.price
        return
      }

      if (productFind.dough !== dough || productFind.size !== size) {
        state.cart.push({
          id,
          product,
          dough,
          size,
          quantity: 1
        })
        state.total += product.price
        return
      }

      productFind.quantity += 1
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
    }
  }
})

export const { reducer: cartSlice, actions: cartActions } = slice
