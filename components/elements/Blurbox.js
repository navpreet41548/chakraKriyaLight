import React from "react";
import { motion } from "framer-motion";
import styles from "/styles/Blurbox.module.css";

const Blurbox = () => {
  return (
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

      {/* <div className={styles.paraContainer}>
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
          </div> */}

      <motion.div
        whileInView={{ opacity: 1, transform: "translateX(0%) " }}
        initial={{ opacity: 0, transform: "translateX(-50%) " }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        className={`${styles.line} ${styles.line1}`}
      ></motion.div>
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
  );
};

export default Blurbox;
