import React from "react";
import { motion } from "framer-motion";
import { WhyFoundersChoose } from "../components/WhyFoundersChoose";
import { HowWeWork } from "../components/HowWeWork";
import { FeatureProjects } from "../components/FeatureProjects";
import { WhyHireInHouse } from "../components/WhyHireInHouse";
import { WhoWeAre } from "../components/WhoWeAre";
import { Footer } from "../components/Footer";

export const HomeClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full"
    >
      <WhyFoundersChoose />
      <HowWeWork />
      <FeatureProjects />
      <WhyHireInHouse />
      <WhoWeAre />
      <Footer />
    </motion.div>
  );
};

export default HomeClient;
