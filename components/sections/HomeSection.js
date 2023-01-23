import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "/styles/HomeSection.module.css";
import { useRouter } from "next/router";
import Blurbox from "../elements/Blurbox";

const HomeSection = () => {
  const router = useRouter();
  // useEffect(() => {
  //   const para1 = document.getElementsByClassName(styles.paraContainer)[0];
  //   para1.addEventListener("click", () => {
  //     console.log("CLicked");
  //     window.location.href = "/#courses";
  //   });
  // }, []);

  return (
    <div className={styles.container} id="home">
      <div className={styles.homeContent} id="homeContent">
        <h1 id="mainHeading" className={styles.mainHeading}>
          <span className={"span"}>W</span>
          <span className={"span"}>E</span>
          <span className={"span"}>L</span>
          <span className={"span"}>C</span>
          <span className={"span"}>O</span>
          <span className={"span"}>M</span>
          <span className={"span"}>E</span>
          {/* WELCOME */}
        </h1>
        <h2 className={styles.mainHeading2} id="homeMainHeading2">
          TO <span className={styles.diff}>CHAKRA KRIYA</span>
        </h2>

        <p className={styles.subHeading2} id="homeSubHeading">
          ANCIENT ART OF <span className={styles.diff2}>YOGIC SCIENCE</span>
        </p>

        <p className={styles.para} id="homePara">
          Groundbreaking breathwork meditation technology proven by science.
          Unleash your peak performance & unlock your inner pharmacy with
        </p>

        <div className={styles.buttonContainer} id="homeButtonContainer">
          <div className={styles.buttonWrapper}>
            <Link
              className={`${styles.button} ${styles.button1}`}
              scroll={false}
              href={"/#courses"}
            >
              CHAKRA KRIYA COURSES
            </Link>
          </div>
          <div className={styles.buttonWrapper}>
            <Link className={`${styles.button} ${styles.button2}`} href={"/"}>
              TRY FOR FREE
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Blurbox />
      </div>
      <Image
        width={1000}
        height={1000}
        alt="Home Background Image 1"
        src={"/images/curves/contourLine2.png"}
        className={`${styles.backgroundImg1} ${styles.backgroundImg}`}
      />
      <Image
        width={800}
        height={500}
        alt="Home Background Image 2"
        // src={"/images/home/homeBackground.png"}
        src={"/images/home/chakra2.png"}
        className={`${styles.backgroundImg2} ${styles.backgroundImg}`}
        id="homeImage"
      />
    </div>
  );
};

export default HomeSection;
