import React from "react";
import styles from "../styles/Bill.module.css";

function DashboardUser() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.imgCover}>
          <img src="/notif.png" alt="" className={styles.notif} />
        </div>
        <div className={styles.circle}></div>
        <div className={styles.name}>Ogoluwa</div>
        <i className="fa fa-angle-down"></i>
      </div>
    </div>
  );
}

export default DashboardUser;
