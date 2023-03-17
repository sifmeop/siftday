import { TypeDelivery } from './product.interface'

export interface FormValues {
  name: string
  phone: string
  email: string
  delivery: TypeDelivery
  street: string
  house: string
  entrance: number
  level: number
  apartment: number
  payment: 'Готівка' | 'Картка'
  comment: string
}
