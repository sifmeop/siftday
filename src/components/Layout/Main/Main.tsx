import clsx from 'clsx'
import { memo } from 'react'
import styles from './Main.module.scss'

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className={clsx('container', styles.mainContainer)}>{children}</main>
  )
}

export default memo(Main)
