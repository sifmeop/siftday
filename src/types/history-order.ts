import { Dough, Product, Size } from './product.interface'

import { FormValues } from './form-values.interface'

export interface HistoryOrder {
  id: number
  details: FormValues
  order: {
    id: number
    product: Product & {
      dough: Dough
      size: Size
    }
    quantity: number
  }[]
  total: number
}
