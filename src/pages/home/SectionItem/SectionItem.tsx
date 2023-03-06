import ProductCard from 'components/ProductCard/ProductCard'
import { memo } from 'react'
import { useGetProductsQuery } from 'store/api/sifdayDB'
import Loader from 'ui/Loader/Loader'
import { labelForLoader } from 'utils/labelForLoader'
import styles from './SectionItem.module.scss'

interface Props {
  title: string
  type: 'pizza' | 'sauce' | 'drink'
}

const SectionItem = ({ title, type }: Props) => {
  const { data: products, isLoading, isError } = useGetProductsQuery({ type })

  if (isLoading) {
    return <Loader label={labelForLoader(type)} />
  }

  if (isError) {
    return
  }

    return products ? (
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.products}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    ) : null
}

export default memo(SectionItem)
