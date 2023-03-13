import { configureStore } from '@reduxjs/toolkit'
import { siftdayDB } from './api/sifdayDB'
import { cartSlice } from './slices/cartSlice'
import { ingredientSlice } from './slices/ingredientSlice'
import { userReducer } from './slices/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    ingredients: ingredientSlice,
    user: userReducer,
    [siftdayDB.reducerPath]: siftdayDB.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(siftdayDB.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
