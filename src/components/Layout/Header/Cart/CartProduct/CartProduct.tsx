import { Product } from 'types/product.interface'

interface Props {
  product: Product
}

const CartProduct = ({ product }: Props) => {
  return (
    <div>
      <img src='' alt='' />
    </div>
  )
}

export default CartProduct
