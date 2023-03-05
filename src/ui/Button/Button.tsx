import styles from './Button.module.scss'

interface Props {
  label: string
  padding?: string
}

const Button = ({ label, padding = '1.5rem' }: Props) => {
  return (
    <button
      style={{ paddingLeft: padding, paddingRight: padding }}
      className={styles.button}>
      {label}
    </button>
  )
}

export default Button
