import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "/styles/HomeSection.module.css";
import { useRouter } from "next/router";

const HomeSection = () => {
  const router = useRouter();
  useEffect(() => {
    const para1 = document.getElementsByClassName(styles.paraContainer)[0];
    para1.addEventListener("click", () => {
      console.log("CLicked");
      window.location.href = "/#courses";
    });
  }, []);

  return (
    <div className={styles.container} id="home">
      <div className={styles.homeContent}>
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
        <h2 className={styles.mainHeading2}>
          TO <span className={styles.diff}>CHAKRA KRIYA</span>
        </h2>

        <p className={styles.subHeading2}>
          ANCIENT ART OF <span className={styles.diff2}>YOGIC SCIENCE</span>
        </p>

        <p className={styles.para}>
          Groundbreaking breathwork meditation technology proven by science.
          Unleash your peak performance & unlock your inner pharmacy with
        </p>

        <div className={styles.buttonContainer}>
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
        <div className={styles.blurBox}>
          <div className={styles.blurBoxTop}>
            <motion.div
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(-50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              className={styles.blurLine}
            ></motion.div>
            <motion.div
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(-50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.5,
              }}
              className={styles.blurLine}
            ></motion.div>
          </div>
          <div className={styles.blurBoxBottom}>
            <motion.div
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              className={styles.blurLine}
            ></motion.div>
            <motion.div
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.7,
              }}
              className={styles.blurLine}
            ></motion.div>
          </div>

          <div className={styles.paraContainer}>
            <motion.p
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(-50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              className={`${styles.imagePara} ${styles.imagePara1}`}
            >
              BECOME A CERTIFIED
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, transform: "translateX(0%) " }}
              initial={{ opacity: 0, transform: "translateX(-50%) " }}
              transition={{
                duration: 0.3,
                delay: 0.6,
              }}
              className={`${styles.imagePara} ${styles.imagePara2}`}
            >
              CHAKRA KRIYA COACH
            </motion.p>
          </div>

          <motion.div
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-50%) " }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className={`${styles.line} ${styles.line2}`}
          ></motion.div>

          <motion.div
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-50%) " }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
            className={`${styles.line} ${styles.line3}`}
          ></motion.div>

          <motion.img
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-50%) " }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            width={300}
            height={500}
            alt="Home Background Image"
            src={"/images/home/homePoster1.jpg"}
            className={`${styles.homePoster1} ${styles.homePoster}`}
          />
          <motion.img
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(50%) " }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            width={300}
            height={500}
            alt="Home Background Image"
            src={"/images/home/homePoster2.jpg"}
            className={`${styles.homePoster2} ${styles.homePoster}`}
          />
        </div>
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
        src={"/images/home/homeBackground.png"}
        className={`${styles.backgroundImg2} ${styles.backgroundImg}`}
      />
    </div>
  );
};

export default HomeSection;
