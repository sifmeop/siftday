import { configureStore } from '@reduxjs/toolkit'
import { siftdayDB } from './api/sifdayDB'
import { cartSlice } from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [siftdayDB.reducerPath]: siftdayDB.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(siftdayDB.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
