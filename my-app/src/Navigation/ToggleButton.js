import React from "react";
import styles from "./ToggleButton.module.css";
import { Menu } from "./icons/menu";
import { Close } from "./icons/close";

export const MenuButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}><Menu /></button>
  );
};

export const CloseButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}><Close /></button>
  );
};
