import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/CardElement.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image
          className={styles.cardImage}
          src={`/images/cards/${props.imageName}`}
          width={100}
          height={100}
          alt="Card Head Image"
        />
      </div>
      <div className={styles.cardTop}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>{props.heading}</h1>
        </div>
        <p className={styles.para}>{props.para}</p>
      </div>
      <a
        target="_blank"
        className={styles.button}
        href="https://learn.chakrakriya.org/order-550968551655853311404"
        rel="noopener noreferrer"
      >
        JOIN NOW
      </a>
    </div>
  );
};

export default Card;
