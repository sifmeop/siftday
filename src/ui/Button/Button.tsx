import styles from './Button.module.scss'

interface Props {
  label: string
  padding?: string
  onClick?: () => void
}

const Button = ({ label, padding = '1.5rem', onClick }: Props) => {
  return (
    <button
      style={{ paddingLeft: padding, paddingRight: padding }}
      className={styles.button}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
