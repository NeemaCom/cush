import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import ScheduleCall from "@/components/ScheduleCall";
import HowItWorks from "../components/HowItWorks";
import ContactUs from "@/components/ContactUs";
import Testimonies from "@/components/Testimonies";
import Faq from "../components/Faq";
import Help from "@/components/Help";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <ScheduleCall />
      <HowItWorks />
      <ContactUs />
      <Testimonies />
      <Faq />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
