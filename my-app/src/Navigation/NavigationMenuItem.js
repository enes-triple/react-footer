import React from "react";
import styles from "./NavigationMenuItem.module.css";

export const NavigationMenuItem = ({ children, href }) => {
  return (
    <li className={styles.item}>
      <a href={href}>{children}</a>
    </li>
  );
};
