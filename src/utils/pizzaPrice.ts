import { Size } from 'types/product.interface'

export const pizzaPrice = (size: Size, price: number): number => {
  switch (size) {
    case '20 см':
      return price - 10
    case '30 см':
      return price
    case '40 см':
      return price + 30
    default:
      return price
  }
}
