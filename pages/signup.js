import React from "react";
import styles from "../styles/Signup.module.css";

function Signup() {
  return (
    <div className={styles.cover}>
      <div className={styles.left}>
        <p>
          Building exceptional services with Back Office Support and Business
          Perfomance
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <h2 className={styles.formName}>Create Account</h2>
          <p className={styles.formSub}>Build an exceptional business</p>
          <form className={styles.form}>
            <div className="row" style={{ marginBottom: "38px" }}>
              <div className="form-group col-md-6">
                <label htmlFor="firstname" className={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Ogoluwa"
                  className={styles.formControl1}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname" className={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.formControl1}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            {/*second lines */}
            <div className={styles.formGroup2}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="text"
                className={styles.formControl2}
                placeholder="Enter your phone number"
              />
            </div>
            <div className={styles.formGroup2}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="text"
                className={styles.formControl2}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.formGroup2}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                className={styles.formControl2}
                placeholder="Enter your password"
              />
            </div>
            <div className={styles.formGroup3}>
              <div className={styles.formAction1}>
                <input type="checkbox" className={styles.check} />
                <label className={styles.label}>Remember me</label>
              </div>
              <div className={styles.formAction2}>
                <a href="#" className={styles.forgot}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className={styles.signup}>Sign Up</button>
            <p className={styles.signin}>
              Got an account ?{" "}
              <a href="#" className={styles.in}>
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
