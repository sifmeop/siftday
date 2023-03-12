import { ProductCategory, ProductType } from 'types/product.interface'

import { ReactComponent as DrinkIcon } from 'assets/icons/drink.svg'
import { ReactComponent as PizzaIcon } from 'assets/icons/pizza.svg'
import { ReactComponent as SauceIcon } from 'assets/icons/sauce.svg'

interface Product {
  id: number
  category: ProductCategory
  type: ProductType
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const products: Product[] = [
  { id: 1, category: 'Піца', type: 'pizza', icon: PizzaIcon },
  { id: 2, category: 'Соуси', type: 'sauce', icon: SauceIcon },
  { id: 3, category: 'Напої', type: 'drink', icon: DrinkIcon }
]
