import React from "react";
import styles from "./NavigationDrawerMenu.module.css";

export const NavigationDrawerMenu = ({ children }) => {
  return <ul className={styles.navigationDrawerMenu}>{children}</ul>;
};
