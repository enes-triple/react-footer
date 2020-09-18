import React from "react";
import styles from "./NavigationDrawerMenuItem.module.css";

export const NavigationDrawerMenuItem = ({ children, href }) => {
  return (
    <li className={styles.item}>
      <a href={href}>{children}</a>
    </li>
  );
};
