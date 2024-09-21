import React from "react";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import Carousel from "../components/Carousel";
import Location from "../components/LocationSection";
import Problems from "../components/Problems";
import { Service } from "../components/Service";

const Home: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <Carousel />
      <AboutSection />
      <Service />
      <Problems />
      <Location />
    </div>
  );
};

export default Home;
