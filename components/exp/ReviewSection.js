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
        </div>
      </Swiper>
    </div>
  );
};

export default ExpReviewSection;
