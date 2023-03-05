import {
  useGetAllDrinksQuery,
  useGetAllPizzasQuery,
  useGetAllSaucesQuery
} from 'store/api/sifdayDB'

import Loader from 'ui/Loader/Loader'
import SectionItem from './SectionItem/SectionItem'

const Home = () => {
  const { data: pizzas, isLoading: isLoadingPizzas } = useGetAllPizzasQuery()
  const { data: sauces, isLoading: isLoadingSauces } = useGetAllSaucesQuery()
  const { data: drinks, isLoading: isLoadingDrinks } = useGetAllDrinksQuery()

  return (
    <div>
      {isLoadingPizzas && <Loader label='Завантаження піци...' />}
      <SectionItem title='Піца' products={pizzas} />
      {isLoadingSauces && <Loader label='Завантаження соусів...' />}
      <SectionItem title='Соуси' products={sauces} />
      {isLoadingDrinks && <Loader label='Завантаження напоїв...' />}
      <SectionItem title='Напої' products={drinks} />
    </div>
  )
}

export default Home
