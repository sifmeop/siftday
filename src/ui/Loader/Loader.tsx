import styles from './Loader.module.scss'

interface Props {
  label: string
}

const Loader = ({ label }: Props) => {
  return (
    <div className='py-5 text-center'>
      <div className={styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default Loader
