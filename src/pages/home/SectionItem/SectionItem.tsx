import { ProductCategory, ProductType } from 'types/product.interface'

import ProductCard from 'components/ProductCard/ProductCard'
import { memo } from 'react'
import { Element } from 'react-scroll'
import { useGetProductsQuery } from 'store/api/sifdayDB'
import Loader from 'ui/Loader/Loader'
import { labelForLoader } from 'utils/labelForLoader'
import CategoryError from './CategoryError/CategoryError'
import styles from './SectionItem.module.scss'

interface Props {
  category: ProductCategory
  type: ProductType
}

const SectionItem = ({ category, type }: Props) => {
  const { data: products, isLoading, isError } = useGetProductsQuery({ type })

  if (isLoading) {
    return <Loader label={labelForLoader(type)} />
  }

  if (isError) {
    return <CategoryError category={category} />
  }

  return products ? (
    <Element name={type} className={styles.section}>
      <h1 className={styles.category}>{category}</h1>
      <div className={styles.products}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} type={type} />
          ))}
      </div>
    </Element>
  ) : null
}

export default memo(SectionItem)
