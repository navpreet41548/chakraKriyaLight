import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "/styles/exp/ReviewSection.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper";

const ExpReviewSection = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={`mySwiper expContainer ${styles.swiperContainer}`}
        id="swiperContainer"
        autoplay={true}
        breakpoints={{
          300: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          600: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3.7,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        // modules={[Pagination]}
      >
        <div id="cardWrapper">
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>RAJIV</h1>
                <h3 className={styles.subHeading}>NEW YORK</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              Truly one of the most amazing experiences I have ever had in my
              years of practicing meditation. Went above and beyond what I
              expected. Would definitely recommend
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>JANE</h1>
                <h3 className={styles.subHeading}>UNITED KINGDOM</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              I enjoyed my experience with Chakra Kriya, it helped me reprogram
              my subconscious mind&apos;s negative chatter with positive
              programming. I am glad to have come across this framework.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>JOHN</h1>
                <h3 className={styles.subHeading}>FLORIDA</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              What Swami Dhiren and the team at Chakra Kriya are doing for the
              world is simply amazing, there are not too many people today who
              render the services he and his team does.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>DR. IND </h1>
                <h3 className={styles.subHeading}>CANADA</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              Started practicing the Chakra Kriya almost two years ago, and my
              life has never been the same. I am happier than ever, healthier
              than ever and more fulfilled than ever.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>SARAH</h1>
                <h3 className={styles.subHeading}>USA</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              I highly recommend Chakra Kriya, the classes led by expert
              instructors have been a game-changer for me, helping me find inner
              peace and clarity.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>RAJIV</h1>
                <h3 className={styles.subHeading}>NEW YORK</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              Truly one of the most amazing experiences I have ever had in my
              years of practicing meditation. Went above and beyond what I
              expected. Would definitely recommend
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>JAKE</h1>
                <h3 className={styles.subHeading}>AUSTRALIA</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              The serene and peaceful environment, provided by expert
              instructors, has allowed me to find inner peace and tranquility
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardImage}></div>
              <div className={styles.detail}>
                <h1 className={styles.heading}>DANIAL</h1>
                <h3 className={styles.subHeading}>HUNGARY</h3>
              </div>
            </div>
            <div className={styles.starContainer}>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p className={styles.para}>
              The expert instructors guide you through various breathing
              techniques that have helped me to find inner peace and calm. I
              highly recommend it to anyone looking for mental and physical
              well-being.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ExpReviewSection;
