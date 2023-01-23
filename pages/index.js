import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/HomeSection.module.css";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import Script from "next/script";
import ReviewSection from "../components/sections/ReviewSection";
import CardSection from "../components/sections/CardSection";
import CourseSection from "../components/sections/CourseSection";
import DetailSection from "../components/sections/DetailSection";
import Contact from "../components/sections/Contact";
import MasterClassImage from "../components/sections/MasterClassImage";
import ExpReviewSection from "../components/exp/ReviewSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Chakra Kriya</title>
        <meta name="description" content="Chakra Kriya" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <HomeSection />
      <AboutSection />
      <ReviewSection />
      <ExpReviewSection />
      <AboutMeSection />
      <CardSection />
      <MasterClassImage />
      <DetailSection />
      <CourseSection />
      <Contact />
      <Script src="/js/main.js"></Script>
    </Layout>
  );
}
