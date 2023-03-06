import { Product } from 'types/product.interface'

interface Props {
  product: {
    product: Product
    quantity: number
  }
}

const CartProduct = ({ product }: Props) => {
  return (
    <div>
      <img src={product.product.image} alt={product.product.title} />
      <h1>{product.product.title}</h1>
    </div>
  )
}

export default CartProduct
