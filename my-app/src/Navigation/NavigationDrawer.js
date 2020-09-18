import React from "react";
import styles from "./NavigationDrawer.module.css";
import { CloseButton } from "./ToggleButton";
import { Logo } from "./Logo";

export const NavigationDrawer = ({ children, isOpen, onClose }) => {
  return (
    <nav className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <CloseButton onClick={onClose}>close</CloseButton>
      </div>
      <div className={styles.main}>{children}</div>
    </nav>
  );
};
