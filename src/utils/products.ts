import { ProductCategory, ProductType } from 'types/product.interface'

interface Product {
  id: number
  category: ProductCategory
  type: ProductType
}

export const products: Product[] = [
  { id: 1, category: 'Піца', type: 'pizza' },
  { id: 2, category: 'Соуси', type: 'sauce' },
  { id: 3, category: 'Напої', type: 'drink' }
]
