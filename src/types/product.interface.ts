export interface Product {
  id: string
  title: string
  image: string
  description?: string
  price: number
  note?: string
}

export type ProductCategory = 'Піца' | 'Соуси' | 'Напої'
export type ProductType = 'pizza' | 'sauce' | 'drink'

export type Dough = 'Традиційне' | 'Тонке'
export type Size = '20 см' | '30 см' | '40 см'
