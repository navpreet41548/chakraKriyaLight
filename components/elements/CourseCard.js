import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <Image
          className={styles.cardImage}
          src={`/images/course/${props.imageName}`}
          width={300}
          height={200}
          alt="Course Image"
        />
        <h1 className={styles.heading}>{props.heading}</h1>
        <p className={styles.para}>{props.para}</p>
      </div>
      <a
        target="_blank"
        href={props.link}
        className={styles.button}
        rel="noopener noreferrer"
      >
        LEARN MORE
      </a>
    </div>
  );
};

export default CourseCard;
