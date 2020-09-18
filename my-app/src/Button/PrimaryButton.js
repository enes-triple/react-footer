import React from "react";
import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ children, onClick, href, transparent }) => {
  if (onClick) {
    return <button className={`${styles.button} ${transparent ? styles.transparent : ''}`} onClick={onClick}>{children}</button>;
  }

  return (
      <a href={href} className={`${styles.button} ${transparent ? styles.transparent : ''}`}>{children}</a>
  );
};
