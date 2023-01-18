import Image from "next/image";
import React from "react";
import MasterClassBlurBox from "../elements/MasterClassBlurBox";
import styles from "/styles/DetailSection.module.css";

const DetailSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.curve}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#232323"
            fill-opacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,64C640,107,800,213,960,250.7C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,218.7C640,203,800,149,960,154.7C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h1 className={styles.mainHeading}>MASTER CLASS</h1>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/curves/contourLine3.png"
          className={styles.backgroundLine}
          alt="Contour Lines Background"
          width={1800}
          height={1000}
        />
        <Image
          src={"/images/detail/photoGroup.png"}
          width={500}
          height={700}
          alt="Group Photo Image"
          className={styles.groupPhoto}
        />
        <Image
          src={"/images/detail/masterClass.png"}
          width={400}
          height={500}
          alt="Master Class Image"
          className={styles.masterClass}
        />
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardImage}>
            <i class="bx bx-bar-chart-alt"></i>
          </div>
          <h1 className={styles.heading}>Get Your Clients Amazing Results</h1>
          <p className={styles.para}>
            I learned the <span className={styles.diff}>Chakra Kriya</span>{" "}
            Method during my time in the Himalayas and have since used it to
            impact the lives of <span className={styles.diff}>10,927+</span>{" "}
            people! But I can only reach so many people... Which is why I&apos;m
            introducing it for the first time (in history) to the public through
            this certification program. It can help you get your clients results
            that has them wanting to give you endless referrals.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardImage}>
            <i class="bx bx-time-five"></i>
          </div>
          <h1 className={styles.heading}>20 Week Program</h1>
          <p className={styles.para}>
            You will get instant access to our exclusive online training
            platform, with new training being opened up weekly. Additionally,
            you&apos;ll get a success coach to help you stay committed along
            with q&a sessions throughout your intensive{" "}
            <span className={styles.diff}>20 week</span> journey with us. This
            means you can go through the content at your own pace and revisit to
            see updated materials!
          </p>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardImage}>
            <i class="bx bx-book-open"></i>
          </div>
          <h1 className={styles.heading}>Ancient Science of Success</h1>
          <p className={styles.para}>
            The techniques taught to you in this certification program are what
            I learned from yogis in the Himalayas who had been practicing and
            perfecting for{" "}
            <span className={styles.diff}>thousands of years!</span>{" "}
            They&apos;ll help you develop your own unique gifts, allowing you to
            stand out from other coaches in the market, command a premium price
            and be respected and appreciated!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
