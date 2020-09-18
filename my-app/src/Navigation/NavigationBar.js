import React, { useState, useEffect } from "react";
import styles from "./NavigationBar.module.css";

export const NavigationBar = ({ children, scrollOffset }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollOffset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollOffset]);

  return (
    <>
      <nav className={`${styles.navigationBar} ${isScrolled ? styles.scrolled : ""}`}>{children}</nav>
    </>
  );
};
