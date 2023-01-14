import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/CardSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../elements/Card";

const cardSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L120,256C240,224,480,160,720,154.7C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className={`${"mySwiper"} ${styles.swiperContainer}`}
      >
        <SwiperSlide className={styles.card0}></SwiperSlide>

        <SwiperSlide className={styles.card}>
          <Card
            imageName="card1.png"
            heading="FOOD FOUR SOUL"
            para="Around the world, 815 million people regularly go to bed hungry... which is why we made it our mission to provide meals to those in need."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <Card
            imageName="card2.png"
            heading="EDUCATION"
            para="Education is every child's birth right, but unfortunately millions around the world are deprived from it. By educating one at a time, the world becomes a better place!"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <Card
            imageName="card3.png"
            heading="ANIMAL WELFARE"
            para="Animals need love too! Which is why it is also important to regularly contribute towards animal welfare and protecting nature's residents."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.card0}></SwiperSlide>
      </Swiper>

      <Image
        src={"/images/curves/blobGroup.png"}
        className={`${styles.blobGroup} ${styles.blobGroup1}`}
        width={100}
        height={100}
        alt={"Blob Group Image"}
      />
      <Image
        src={"/images/curves/blobGroup2.png"}
        className={`${styles.blobGroup} ${styles.blobGroup2}`}
        width={300}
        height={300}
        alt={"Blob Group Image"}
      />
    </div>
  );
};

export default cardSection;
