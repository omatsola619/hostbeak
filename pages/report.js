import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardUser from "../components/DashboardUser";
import styles from "../styles/Report.module.css";

function report() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <DashboardLayout active={false} />
      </div>
      <main className={styles.main}>
        {/*dashboard user details */}
        <DashboardUser />
        <div className={styles.content}>
          <div className={styles.title}>View Reports</div>
          <div className={styles.tableCover}>
            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>February Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>
            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>March 2021 Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>

            {/*table item */}
            <div className={styles.itemCover}>
              <div className={styles.itemDetails}>
                <div className={styles.itemMonth}>
                  <input type="checkbox" />
                  <div className={styles.monthName}>February Report</div>
                </div>
                <div className={styles.itemInfo}>4th, October 2021 11:20am</div>
              </div>
              <div className={styles.itemAction}>
                <button>View</button>
                <img src="/chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default report;
