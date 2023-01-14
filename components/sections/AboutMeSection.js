import Image from "next/image";
import React from "react";
import styles from "/styles/AboutMeSection.module.css";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <div className={styles.container} id="aboutMe">
      <Image
        className={styles.curveLine}
        src={"/images/curves/curveLine.png"}
        width={1800}
        height={100}
        alt="Curve Line Image"
      />

      <motion.div
        whileInView={{ opacity: 1, transform: "scaleY(1) " }}
        initial={{ opacity: 0, transform: "scaleY(0) " }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className={styles.left}
      >
        <Image
          className={styles.backgroundContour}
          src={"/images/curves/contourLine2.png"}
          width={800}
          height={1000}
          alt="Contour Line Background Image"
        />
        <Image
          className={styles.backgroundImage}
          src={"/images/aboutMe/photoGroup.png"}
          width={500}
          height={700}
          alt="About Image Background"
        />
        <motion.div
          whileInView={{ opacity: 1, transform: "scale(1) " }}
          initial={{ opacity: 0, transform: "scale(0.5) " }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          className={styles.aboutImageWrapper}
        >
          <Image
            className={styles.aboutImage}
            src={"/images/aboutMe/aboutImage.jpg"}
            width={500}
            height={700}
            alt="About Image"
          />
          <h1 className={styles.imageTitle}>SWAMI DHIREN</h1>
        </motion.div>
      </motion.div>
      <div className={styles.right}>
        <h1 className={styles.heading}>MYSTIC HIMALAYAN YOGI</h1>
        <p className={styles.para}>
          A practitioner yoga, meditation and cosmic energy healing for over 25
          years, <span className={styles.diff}>Swami Dhiren</span>, is
          considered by his students to be one of the leading experts on using
          one&apos;s inner powers for thriving in one’s mind, body and spirit.
          <br />
          <br />
          He has learnt these techniques from his Spiritual Master, one of
          Hinduism’s foremost spiritual leaders. His guru also taught him about
          life&apos;s greatest secrets and the ancient techniques of Yogic
          Breathing, Meditation, Kundalini, Chakra, Energy Healing.
          <br />
          <br />
          Having experienced these himself,{" "}
          <span className={styles.diff}>Swami Dhiren</span> is now working with
          a sole objective to pass these techniques{" "}
          <span className={styles.diff}>UNALTERED</span> and in its{" "}
          <span className={styles.diff}>TRUEST FORM</span> for anyone to
          righteously gain benefits.
          <br />
          <br />
          In order to accomplish his goal of reaching over 1 Billion+ people in
          this decade, he has crafted the{" "}
          <span className={styles.diff}>Chakra Kriya</span> Framework — a
          compilation of his lifetime of learning that can help anyone, no
          matter their background, tap into their hidden potential and elevate
          all areas of their life.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
