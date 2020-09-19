import React from "react";
import styles from "./TransparentButton.module.css";

export const TransparentButton = ({ children, onClick, href }) => {
  if (onClick) {
    return <button className={`${styles.transButton}`} onClick={onClick}>{children}</button>;
  }

  return (
      <a href={href} className={`${styles.transButton}`}>{children}</a>
  );
};
