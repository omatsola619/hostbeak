import React from "react";
import styles from "../styles/Layout.module.css";

function DashboardHeader() {
  return (
    <div className={styles.header}>
      <img src="/logo.png" alt="" />
      <div className={styles.name}>HostBeak</div>
      <i className="fa fa-caret-right"></i>
    </div>
  );
}

export default DashboardHeader;
