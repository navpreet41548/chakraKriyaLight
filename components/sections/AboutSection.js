import Image from "next/image";
import React from "react";
import styles from "/styles/AboutSection.module.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className={styles.container} id="about">
      <Image
        src={"/images/curves/blobGroup.png"}
        width={200}
        height={200}
        alt="Blob Group"
        className={styles.blobGroup}
      />
      {/* Curve Image */}
      <Image
        src={"/images/curves/blob1.png"}
        width={300}
        height={100}
        alt="Blob Image"
        className={`${styles.blob} ${styles.blob1}`}
      />
      <Image
        src={"/images/curves/blob2.png"}
        width={300}
        height={100}
        alt="Blob Image"
        className={`${styles.blob} ${styles.blob2}`}
      />
      <Image
        src={"/images/curves/blob3.png"}
        width={300}
        height={100}
        alt="Blob Image"
        className={`${styles.blob} ${styles.blob3}`}
      />
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,96C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        {/* <svg
          width="1311"
          height="155"
          viewBox="0 0 1311 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100.009C181.247 143.383 771.752 1.13708 962 0.00936217C1152.25 -1.11836 1311 100.009 1311 100.009V154.5H0V100.009Z"
            fill="#232323"
          />
        </svg> */}
      </div>

      {/* ---- Curve Image End ---- */}

      <div className={styles.left}>
        <h1 className={styles.heading}>ABOUT US</h1>
        <h3 className={styles.subHeading}>
          A <span className={styles.diff}>Not-For-Profit</span> Organization
        </h3>

        <p className={styles.para}>
          Here at Chakra Kriya, we have one goal in mind: to positively
          transform more than 1 Billion lives over the next decade. A portion of
          our proceeds go towards providing meals, education and a better life
          to children and seniors in impoverished third-world countries.
        </p>

        <motion.div
          whileInView={{ opacity: 1, transform: "translateX(0%) " }}
          initial={{ opacity: 0, transform: "translateX(-50%) " }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={styles.card}
        >
          <h3 className={styles.cardHeading}>10,927+ lives transformed</h3>
          <p className={styles.cardPara}>
            Over the past few years, we have helped transform the lives of more
            than 10,927+ people through the Chakra Kriya framework. Helping them
            achieve their desired health, love, happiness and fulfilment.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "translateX(0%) " }}
          initial={{ opacity: 0, transform: "translateX(-50%) " }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className={styles.card}
        >
          <h3 className={styles.cardHeading}>
            Support a soul while you heal yours!
          </h3>
          <p className={styles.cardPara}>
            Through our not-for-profit initative, we direct our funds to those
            in need. So, while you transform your life through our framework,
            you can rest assured that the lives of many others in need are being
            positvely impacted as well.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "translateX(0%) " }}
          initial={{ opacity: 0, transform: "translateX(-50%) " }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className={styles.card}
        >
          <h3 className={styles.cardHeading}>25+ years of experience</h3>
          <p className={styles.cardPara}>
            The Chakra Kriya framework is based on Swami Dhiren&apos;s 25+ years
            of experience in yoga, meditation and energy healing.
          </p>
        </motion.div>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.backgroundImage}
          src="/images/curves/contourLine2.png"
          width={400}
          height={1000}
          alt="Background Image"
        />
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster1}`}
        >
          <Image
            src={"/images/about/1.jpg"}
            className={`${styles.poster} `}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster2}`}
        >
          <Image
            src={"/images/about/2.jpg"}
            className={`${styles.poster} `}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster3}`}
        >
          <Image
            src={"/images/about/3.jpg"}
            className={`${styles.poster} `}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster4}`}
        >
          <Image
            src={"/images/about/4.jpg"}
            className={`${styles.poster}`}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster5}`}
        >
          <Image
            src={"/images/about/5.jpg"}
            className={`${styles.poster} `}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, transform: "scaleY(1) " }}
          initial={{ opacity: 0, transform: "scaleY(0) " }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={`${styles.aboutImageWrapper} ${styles.poster6}`}
        >
          <Image
            src={"/images/about/6.jpg"}
            className={`${styles.poster} `}
            alt="Poster Image"
            width={200}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
