import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import Commitment from "../components/Commitment";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Commitment />
    </div>
  );
};

export default Home;
