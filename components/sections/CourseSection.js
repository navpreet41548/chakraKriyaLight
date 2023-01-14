import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import CourseCard from "../elements/CourseCard";
import styles from "/styles/CourseSection.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CourseSection = () => {
  return (
    <div className={styles.container} id="courses">
      <Image
        className={styles.curveLine}
        src={"/images/curves/curveLine2.png"}
        width={1800}
        height={100}
        alt="Curve Line Image"
      />

      <Image
        className={styles.backgroundImage}
        src="/images/curves/contourLine1.png"
        width={1000}
        height={700}
        alt="Contour Background Image"
      />
      <Image
        className={styles.blobGroup}
        src="/images/curves/blobGroup.png"
        width={200}
        height={200}
        alt="Blob Group Image"
      />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          300: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        // modules={[Pagination]}
        className={`${"mySwiper"} ${styles.swiperContainer}`}
      >
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course1.webp"
            heading="Wealth (Third) Eye Secret Training"
            para="Awaken your third eye and channel the divine energy of the universe to turn it into your wealth eye and attract abundance into your life effortlessly."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course2.webp"
            heading="Become a Certified Chakra Kriya Coach"
            para="To succeed as a coach now, you need to have something that sets you apart. The Chakra Kriya method is designed to help you awaken your unique gifts using ancient principles and help you become a coach who gets a flood of clients."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course3.webp"
            heading="Become a Breathwork Coach"
            para="Help people overcome some of the most common health challenges faced today using the power of their own breath."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course4.webp"
            heading="Chakra Army Training"
            para="Discover how to awaken your chakras and become one with the universe."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course5.webp"
            heading="5 Hour Energy Consultation"
            para="Experience the Himalayan knowledge and develop a personalized spiritual growth plan with Swami Dhiren live in a one-on-one setting."
          />
        </SwiperSlide>
        <SwiperSlide className={styles.cardd}>
          <CourseCard
            imageName="course6.webp"
            heading="Secrets of Vitality"
            para="It’s common to train in diet & exercise, but almost no one trains their breath... this is a big miss out for health seekers!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CourseSection;
