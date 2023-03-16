import { Dough, Product, Size } from './product.interface'

import { FormValues } from './form-values.interface'
import { IngredientTitle } from './Ingredient.interface'

export interface HistoryOrder {
  id: number
  details: FormValues
  order: {
    id: number
    product: Product & {
      dough: Dough
      size: Size
      ingredients: IngredientTitle
    }
    quantity: number
  }[]
  total: number
}
