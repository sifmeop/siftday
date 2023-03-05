import { Drink } from 'types/drink.interface'
import { Pizza } from 'types/pizza.interface'
import { Sauce } from 'types/sauce.interface'

interface Props {
  product: Pizza | Drink | Sauce
}

const CartProduct = ({ product }: Props) => {
  return (
    <div>
      <img src='' alt='' />
    </div>
  )
}

export default CartProduct
