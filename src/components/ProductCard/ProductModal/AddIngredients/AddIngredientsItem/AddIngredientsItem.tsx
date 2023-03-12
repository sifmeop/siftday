import { ReactComponent as Selected } from 'assets/icons/selected.svg'
import clsx from 'clsx'
import { useActionCreators } from 'hooks/useActionCreators'
import { useState } from 'react'
import { ingredientActions } from 'store/slices/ingredientSlice'
import { Ingredient } from 'types/Ingredient.interface'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './AddIngredientsItem.module.scss'

interface Props {
  ingredient: Ingredient
}

const AddIngredientsItem = ({ ingredient }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)
  const actions = useActionCreators(ingredientActions)

  const handleSelect = () => {
    setSelected((prev) => !prev)
    if (!selected) {
      actions.addIngredient({ ingredient })
    } else {
      actions.removeIngredient({ id: ingredient.id })
    }
  }

  return (
    <div className={styles.ingredient}>
      <div
        className={clsx(styles.iconWrapper, {
          [styles.active]: selected
        })}
        onClick={handleSelect}>
        <Selected
          className={clsx(styles.selected, {
            ['block']: selected,
            ['hidden']: !selected
          })}
        />
        <ingredient.image />
      </div>
      <h2>{ingredient.title}</h2>
      <p className={styles.price}>{formatCurrency(ingredient.price)}</p>
    </div>
  )
}

export default AddIngredientsItem
