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
      const { product, size, dough } = action.payload

      const productFind = state.cart.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.dough === dough
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
        dough
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
    }
  }
})

export const { reducer: cartSlice, actions: cartActions } = slice
