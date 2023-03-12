import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Ingredient } from 'types/Ingredient.interface'

interface IngredientState {
  ingredients: Ingredient[]
}

const initialState: IngredientState = {
  ingredients: []
}

const slice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (
      state,
      action: PayloadAction<{ ingredient: Ingredient }>
    ) => {
      state.ingredients.push(action.payload.ingredient)
    },
    removeIngredient: (state, action: PayloadAction<{ id: number }>) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload.id
      )
    },
    clearIngredients: (state) => {
      state.ingredients = []
    }
  }
})

export const { reducer: ingredientSlice, actions: ingredientActions } = slice
