import React from 'react'
import styles from './NavigationMenu.module.css'

export const NavigationMenu = ({children}) => {
  return <ul className={styles.navigationMenu}>{children}</ul>
}

