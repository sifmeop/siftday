import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  id: string | null
  email: string | null
  token: string | null
}

const initialState: UserState = {
  id: null,
  email: null,
  token: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.token = action.payload.token
    },
    removeUser: (state) => {
      state.id = null
      state.email = null
      state.token = null
    }
  }
})

export const { reducer: userReducer, actions: userActions } = user
