export interface Ingredient {
  id: number
  title: IngredientTitle
  image: string
  price: number
}

export type IngredientTitle =
  | 'Моцарелла'
  | 'Печериці'
  | 'Червона цибуля'
  | 'Солодкий перець'
