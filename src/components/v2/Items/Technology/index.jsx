import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { inter } from '@/utils/fonts'

export default function TechItem({icon, name}) {
  return (
    <div className={classNames(styles.root, inter.className)}>
      <span>
        <img src={icon} alt="icon" className={classNames(styles.techIcon)} />
        
      </span>
      <div className={classNames(styles.techName)}>
        {name}
      </div>
    </div>
  )
}
