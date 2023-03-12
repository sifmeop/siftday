import { configureStore } from '@reduxjs/toolkit'
import { siftdayDB } from './api/sifdayDB'
import { cartSlice } from './slices/cartSlice'
import { ingredientSlice } from './slices/ingredientSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    ingredients: ingredientSlice,
    [siftdayDB.reducerPath]: siftdayDB.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(siftdayDB.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
