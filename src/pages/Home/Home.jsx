import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import HomePageCarousel from "../../components/Carousels/HomePageCarousel/HomePageCarousel";
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo";

const Home = () => {
  return (
    <div className="min-h-dvh">
      <HomePageCarousel />
      <HeroSection />
      <GeneralInfo />
      <Testimonials />
    </div>
  );
};

export default Home;
