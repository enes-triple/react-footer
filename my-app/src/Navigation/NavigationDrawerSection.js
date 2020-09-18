import React from "react";
import styles from "./NavigationDrawerSection.module.css";

export const NavigationDrawerSection = ({ children }) => {
  return <div className={styles.navigationDrawerSection}>{children}</div>;
};
