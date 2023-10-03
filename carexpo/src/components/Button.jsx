import React from "react";
import styles from './Button.module.css'
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.button__button}
    >
      <div className={styles.button__transition}></div>
      <div className={styles.button__label}>{children}</div>
    </button>
  );
}

export default Button;
