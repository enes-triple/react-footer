import React from "react";
import styles from "./NavigationBarSection.module.css";

export const NavigationBarSection = ({ children }) => {
  return (
    <div className={styles.navigationBarSection}>
      {children}
    </div>
  );
};
