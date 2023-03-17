import { CSSProperties } from 'react'
import styles from './Button.module.scss'

interface Props {
  label: string
  style?: CSSProperties
  onClick?: () => void
}

const Button = ({ label, style, onClick }: Props) => {
  return (
    <button style={style} className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
