import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    const copied = document.getElementsByClassName(styles.copied)[0];
    copied.classList.add(styles.activeCopied);

    setTimeout(function () {
      copied.classList.remove(styles.activeCopied);
    }, 3000);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            {/* <div className={styles.logoImage}>L</div> */}
            <Image
              className={styles.logoImage}
              src={"/images/logo/logo.png"}
              width={100}
              height={100}
              alt="Logo"
            />
            <h1 className={styles.heading}>CHAKRA KRIYA</h1>
          </div>
          <p className={styles.para}>
            Groundbreaking breathwork meditation technology proven by science.
            Unleash your peak performance & unlock your inner pharmacy with
          </p>
          <div className={styles.socialWrapper}>
            <div className={styles.copied}>Copied!</div>
            <div className={styles.icon}>
              <i class="bx bxl-gmail"></i>
            </div>
            <p
              className={styles.email}
              onClick={() => handleCopy("support@chakrakriya.org")}
            >
              support@chakrakriya.org
            </p>
          </div>
          <div className={styles.socialWrapper}>
            <Link href={"/"} className={styles.icon}>
              <i class="bx bxl-instagram"></i>
            </Link>
            <Link href={"/"} className={styles.icon}>
              <i class="bx bxl-facebook-square"></i>
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.heading}>QUICK LINKS</h1>
          <Link href={"/#home"} scroll={false} className={styles.link}>
            HOME
          </Link>
          <Link href={"/#about"} scroll={false} className={styles.link}>
            ABOUT
          </Link>
          <Link href={"/#courses"} scroll={false} className={styles.link}>
            COURSES
          </Link>
          <Link href={"/#aboutMe"} scroll={false} className={styles.link}>
            ABOUT SWAMI DHIREN
          </Link>
          <Link href={"/"} scroll={false} className={styles.link}>
            JOIN NOW
          </Link>
        </div>
        <div className={styles.right}>
          <h1 className={styles.heading}>PRIVACY</h1>
          <Link href={"/"} className={styles.link}>
            TERMS OF USE
          </Link>
          <Link href={"/"} className={styles.link}>
            PRIVACY POLICY
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyrights © 2023 All Rights Reserved by Chakra Kriya</p>
      </div>
    </footer>
  );
};

export default Footer;
