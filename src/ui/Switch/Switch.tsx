import clsx from 'clsx'
import { useState } from 'react'
import styles from './Switch.module.scss'

interface Props {
  labels: string[]
}

const Switch = ({ labels }: Props) => {
  const [currentLabel, setCurrentLabel] = useState<number>(0)

  return (
    <div className={styles.switch}>
      {labels.map((label, index) => (
        <div
          key={label}
          className={clsx(styles.label, {
            [styles.active]: currentLabel === index
          })}
          onClick={() => setCurrentLabel(index)}>
          {label}
        </div>
      ))}
    </div>
  )
}

export default Switch
