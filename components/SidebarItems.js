import React, { useState } from "react";
import styles from "../styles/SidebarItems.module.css";
import Link from "next/link";

function SidebarItems(props) {
  const [active, setActive] = useState(props.active);
  const [active2, setActive2] = useState();

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
      setActive2(false);
    }
  };

  const handleActive2 = () => {
    if (active2) {
      setActive2(false);
    } else {
      setActive2(true);
      setActive(false);
    }
  };

  return (
    <div className={styles.links}>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/rocket.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Welcome</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/dashboard.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Dashboard</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/wallet.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Sales</div>
        </div>
        <div className={styles.ikon}>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>
      {/*purchase viewpoint */}
      <div className={styles.item} onClick={handleActive}>
        <div
          className={`${styles.item4} ${active ? styles.active : styles.item4}`}
        >
          <div className={styles.wrapper}>
            <div className={styles.cover}>
              <div className={`${active ? styles.activeIcon : null}`}>
                <img src="/cart.png" alt="" className={styles.icon} />
              </div>
              <div className={styles.listTop}>
                <div
                  className={`${
                    active ? styles.activeLinkName : styles.linkName
                  }`}
                >
                  Purchases
                </div>
              </div>
            </div>
            <div
              className={`${styles.ikon} ${
                active ? styles.active : styles.ikon
              }`}
            >
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <div className={styles.rest}>
            <div className={`${styles.listItem} ${styles.pageLink}`}>
              <Link href="/bill">Bills</Link>
            </div>
            <div className={styles.listItem}>Vendors</div>
            <div className={styles.listItem}>Products & Services</div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/account.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Accounting</div>
        </div>
        <div className={styles.ikon}>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/bank.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Banking</div>
        </div>
        <div className={styles.ikon}>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/payroll.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Payroll</div>
        </div>
        <div className={styles.ikon}>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/report.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Reports</div>
        </div>
      </div>
      {/*analytics viewpoint */}
      <div className={styles.item} onClick={handleActive2}>
        <div
          className={`${styles.item5} ${
            active2 ? styles.active : styles.item4
          }`}
        >
          <div className={styles.wrapper}>
            <div className={styles.cover}>
              <div className={`${active2 ? styles.activeIcon : null}`}>
                <img src="/analytics.png" alt="" className={styles.icon} />
              </div>
              <div className={styles.listTop}>
                <div
                  className={`${
                    active2 ? styles.activeLinkName : styles.linkName
                  }`}
                >
                  Analytics
                </div>
              </div>
            </div>
            <div
              className={`${styles.ikon} ${
                active2 ? styles.active : styles.ikon
              }`}
            >
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <div className={styles.rest2}>
            <div className={`${styles.listItem} ${styles.pageLink}`}>
              <Link href="/report">Report</Link>
            </div>
            <div className={styles.listItem}>To-Do</div>
            <div className={styles.listItem}>Upload</div>
            <div className={styles.listItem}>Chat</div>
            <div className={styles.listItem}>Schedule</div>
            <div className={styles.listItem}>Message</div>
            <div className={styles.listItem}>Payments</div>
            <div className={styles.listItem}>Billing</div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item1}>
          <img src="/setting.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Settings</div>
        </div>
      </div>
      <div className={`${active2 ? styles.item2Active : styles.item2}`}>
        <div className={styles.item1}>
          <img src="/logout.png" alt="" className={styles.icon} />
          <div className={styles.linkName}>Logout</div>
        </div>
      </div>
      <div className={styles.item3}>
        <button>
          <img src="/card.png" alt="" className={styles.icon3} />
          Accept Payments
        </button>
      </div>
    </div>
  );
}

export default SidebarItems;
