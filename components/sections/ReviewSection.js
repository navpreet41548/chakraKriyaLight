import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "/styles/ReviewSection.module.css";
import { motion } from "framer-motion";

const ReviewSection = () => {
  var count = 0;
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 3) {
        count = 0;
      } else {
        count = count + 1;
      }
      setIndex(count);
      console.log(count);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const handleClick = (i) => {
    count = i;
    setIndex(i);
  };

  return (
    <div className={styles.container} id="review">
      <Image
        className={styles.rocket}
        src="/images/curves/rocket.png"
        width={100}
        height={200}
        alt="Rocket Image"
      />
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L120,165.3C240,139,480,85,720,69.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div
        whileInView={{ opacity: 1, transform: "scale(1) " }}
        initial={{ opacity: 0, transform: "scale(0.7) " }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className={styles.cardContainer}
      >
        {index == 0 && (
          <div className={`${styles.card} ${styles.cardVisible}`}>
            <i className={`bx bxs-quote-left ${styles.quotes}`}></i>
            <h3 className={styles.heading}>
              RAJIV <br /> <span className={styles.diff}>NEW YORK</span>
            </h3>

            <div className={styles.cardImage}></div>
            <p className={styles.cardPara}>
              Truly one of the most amazing experiences I have ever had in my
              years of practicing meditation. Went above and beyond what I
              expected. Would definitely recommend
            </p>
          </div>
        )}
        {index == 1 && (
          <div className={`${styles.card} ${styles.cardVisible}`}>
            <i className={`bx bxs-quote-left ${styles.quotes}`}></i>
            <h3 className={styles.heading}>
              JOHN <br /> <span className={styles.diff}>FLORIDA</span>
            </h3>

            <div className={styles.cardImage}></div>
            <p className={styles.cardPara}>
              What Swami Dhiren and the team at Chakra Kriya are doing for the
              world is simply amazing, there are not too many people today who
              render the services he and his team does.
            </p>
          </div>
        )}
        {index == 2 && (
          <div className={`${styles.card} ${styles.cardVisible}`}>
            <i className={`bx bxs-quote-left ${styles.quotes}`}></i>
            <h3 className={styles.heading}>
              JANE <br /> <span className={styles.diff}>UNITED KINGDOM</span>
            </h3>

            <div className={styles.cardImage}></div>
            <p className={styles.cardPara}>
              I enjoyed my experience with Chakra Kriya, it helped me reprogram
              my subconscious mind&apos;s negative chatter with positive
              programming. I am glad to have come across this framework.
            </p>
          </div>
        )}
        {index == 3 && (
          <div className={`${styles.card} ${styles.cardVisible}`}>
            <i className={`bx bxs-quote-left ${styles.quotes}`}></i>
            <h3 className={styles.heading}>
              DR. IND <br /> <span className={styles.diff}>CANADA</span>
            </h3>

            <div className={styles.cardImage}></div>
            <p className={styles.cardPara}>
              Started practicing the Chakra Kriya almost two years ago, and my
              life has never been the same. I am happier than ever, healthier
              than ever and more fulfilled than ever.
            </p>
          </div>
        )}

        <div className={styles.circleContainer}>
          {index == 0 && (
            <>
              <div
                onClick={() => handleClick(0)}
                className={`${styles.circle} ${styles.circleActive}`}
              ></div>
              <div
                onClick={() => handleClick(1)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(2)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(3)}
                className={styles.circle}
              ></div>
            </>
          )}
          {index == 1 && (
            <>
              <div
                onClick={() => handleClick(0)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(1)}
                className={`${styles.circle} ${styles.circleActive}`}
              ></div>
              <div
                onClick={() => handleClick(2)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(3)}
                className={styles.circle}
              ></div>
            </>
          )}
          {index == 2 && (
            <>
              <div
                onClick={() => handleClick(0)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(1)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(2)}
                className={`${styles.circle} ${styles.circleActive}`}
              ></div>
              <div
                onClick={() => handleClick(3)}
                className={styles.circle}
              ></div>
            </>
          )}
          {index == 3 && (
            <>
              <div
                onClick={() => handleClick(0)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(1)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(2)}
                className={styles.circle}
              ></div>
              <div
                onClick={() => handleClick(3)}
                className={`${styles.circle} ${styles.circleActive}`}
              ></div>
            </>
          )}
        </div>
      </motion.div>

      <Image
        className={styles.blobGroup}
        src="/images/curves/blobGroup2.png"
        width={100}
        height={200}
        alt="Blob Group Image"
      />
    </div>
  );
};

export default ReviewSection;
