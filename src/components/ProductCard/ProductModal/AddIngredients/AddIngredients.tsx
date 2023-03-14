import Cheese from 'assets/icons/cheese.jpg'
import Mushrooms from 'assets/icons/mushrooms.jpg'
import Onion from 'assets/icons/onion.jpg'
import Pepper from 'assets/icons/pepper.jpg'
import { Ingredient } from 'types/Ingredient.interface'
import styles from './AddIngredients.module.scss'
import AddIngredientsItem from './AddIngredientsItem/AddIngredientsItem'

const ingredients: Ingredient[] = [
  { id: 1, title: 'Моцарелла', image: Cheese, price: 30 },
  { id: 2, title: 'Печериці', image: Mushrooms, price: 20 },
  { id: 3, title: 'Червона цибуля', image: Onion, price: 15 },
  { id: 4, title: 'Солодкий перець', image: Pepper, price: 25 }
]

const AddIngredients = () => {
  return (
    <div className={styles.ingredients}>
      {ingredients.map((ingredient) => (
        <AddIngredientsItem key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  )
}

export default AddIngredients
