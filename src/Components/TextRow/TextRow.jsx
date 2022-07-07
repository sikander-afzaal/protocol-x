import React from "react";
import styles from "./TextRow.module.css";
function TextRow({ title, desc }) {
  return (
    <div className={styles.textRow}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default TextRow;
