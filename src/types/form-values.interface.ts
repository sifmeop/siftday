import { TypeDelivery } from './product.interface'

export interface FormValues {
  name: string
  phone: string
  email: string
  delivery: TypeDelivery
  street: string
  house: string
  entrance: number
  floor: number
  apartment: number
  payment: 'cash' | 'card'
  comment: string
}
