import clsx from 'clsx'
import styles from './Switch.module.scss'

interface Props {
  selection: string
  labels: string[]
  setSelection: (label: string) => void
}

const Switch = ({ selection, labels, setSelection }: Props) => {
  return (
    <div className={styles.switch}>
      {labels.map((label) => (
        <div
          key={label}
          className={clsx(styles.label, {
            [styles.active]: selection === label
          })}
          onClick={() => setSelection(label)}>
          {label}
        </div>
      ))}
    </div>
  )
}

export default Switch
