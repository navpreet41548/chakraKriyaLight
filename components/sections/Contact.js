import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L120,90.7C240,85,480,75,720,85.3C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Image
        src={"/images/contact/map.png"}
        width={1800}
        height={400}
        alt="Map Image"
        className={styles.background}
      />

      <div className={styles.left}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <p className={styles.para}>
          If you have any questions or queries a member of staff will always be
          happy to help. Feel free to contact us by this Contact us form
        </p>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label} for="name">
              NAME
            </label>
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-user"></i>
              </div>
              <input className={styles.input} type={"name"} id="name" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} for="email">
              EMAIL
            </label>
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bxl-gmail"></i>
              </div>
              <input className={styles.input} type={"name"} id="email" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} for="subject">
              SUBJECT
            </label>
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-align-left"></i>
              </div>
              <input className={styles.input} type={"name"} id="subject" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} for="name">
              MESSAGE
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                className={`${styles.textarea} ${styles.input}`}
              ></textarea>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>SEND</button>
          </div>

          <div className={styles.socialContainer}>
            <Link className={styles.socialIcon} href={"/"}>
              <i class="bx bxl-instagram"></i>
            </Link>
            <Link className={styles.socialIcon} href={"/"}>
              <i class="bx bxl-facebook-square"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
