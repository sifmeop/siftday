import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  id: string | null
  email: string | null
  name: string | null
}

const initialState: UserState = {
  id: null,
  email: null,
  name: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { id, email, name } = action.payload

      state.id = id
      state.email = email
      state.name = name
    },
    removeUser: (state) => {
      state.id = null
      state.email = null
      state.name = null
    }
  }
})

export const { reducer: userReducer, actions: userActions } = user
