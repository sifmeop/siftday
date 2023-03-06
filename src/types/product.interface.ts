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
