import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardUser from "../components/DashboardUser";
import styles from "../styles/Bill.module.css";

function bill() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <DashboardLayout active={true} />
      </div>
      <main className={styles.main}>
        {/*dashboard user details */}
        <DashboardUser />
        <div className={styles.content}>
          <div className={styles.title}>Add bill</div>
          <form className={styles.form}>
            {/*form row 1 */}
            <div className={styles.form1}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Vendor</label>
                <br />
                <select className={styles.select}>
                  <option>Choose</option>
                  <option>Vendor 1</option>
                  <option>Vendor 2</option>
                  <option>Vendor 3</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Currency</label>
                <br />
                <select className={styles.select}>
                  <option>USD - U.S dollar</option>
                  <option>GBP</option>
                  <option>Naira</option>
                  <option>Euro</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Vendor</label>
                <br />
                <input type="file" className={styles.file} />
              </div>
            </div>
            {/*form row 2 */}
            <div className={styles.form2}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Date</label>
                <br />
                <input
                  type="date"
                  value="2021-03-25"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Due Date</label>
                <br />
                <input
                  type="date"
                  value="2021-03-25"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>P.O./S/O</label>
                <br />
                <input type="text" className={styles.input} />
              </div>
            </div>
            {/*form row 3 */}
            <div className={styles.form3}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Bill #</label>
                <br />
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Notes</label>
                <br />
                <textarea cols="25" rows="6" className={styles.area}></textarea>
              </div>
            </div>
          </form>
          {/*table section */}
          <div className={styles.table}>
            <table className="table">
              <thead>
                <tr className={styles.tHead}>
                  <th scope="col">item</th>
                  <th scope="col">Expense Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select className={styles.item}>
                      <option>Choose</option>
                      <option>Item 1</option>
                      <option>Item 2</option>
                    </select>
                  </td>
                  <td>
                    <select className={styles.item2}>
                      <option>Choose</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                    </select>
                  </td>
                  <td className={styles.desc}>
                    <input type="text" />
                  </td>
                  <td className={styles.qty}>
                    <input type="text" defaultValue={1} />
                  </td>
                  <td className={styles.price}>
                    <input type="text" defaultValue={0} />
                  </td>
                  <td className={styles.tax}>
                    <input type="text" />
                    <img src="/edit.png" alt="" />
                  </td>
                  <td className={styles.amount}>N0.00</td>
                  <td className={styles.delete}>
                    <img src="/delete.png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.totalAmount}>
              <div className={styles.subtotal}>
                Subtotal: <span>N0.00</span>
              </div>
              <div className={styles.total}>
                Total (NGN): <span>N0.00</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.save}>Save</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default bill;
