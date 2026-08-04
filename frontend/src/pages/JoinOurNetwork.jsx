import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { WhyFoundersChoose } from "../components/WhyFoundersChoose";
import { HowWeWork } from "../components/HowWeWork";
import { FeatureProjects } from "../components/FeatureProjects";
import { WhatWeBuild } from "../components/WhatWeBuild";
import { StructuredProductTeams } from "../components/StructuredProductTeams";
import { WhyHireInHouse } from "../components/WhyHireInHouse";
import { WhoWeAre } from "../components/WhoWeAre";

export const JoinOurNetwork = () => {
  return (
    <>
      <SEO
        title="DueSpace - Structured Product Teams & Execution Engine for Startups"
        description="Connect with high-performing African tech & creative talent. DueSpace builds structured product teams in Labs & Studios to turn startup ideas into production-ready digital products."
        keywords="DueSpace, African Tech Talent, Startup Execution Engine, Product Teams, Web Development, UI UX Design, Software Engineering, MVP Building, DueSpace Labs, DueSpace Studios"
        url="https://duespace.com/"
        image="/Logo.jpg"
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DueSpace",
          "url": "https://duespace.com",
          "logo": "https://duespace.com/Logo.jpg",
          "description": "Ecosystem connecting African tech and creative talent with founders to build high-impact digital products.",
          "sameAs": []
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full"
      >
        <StructuredProductTeams />
        <WhatWeBuild />
        <WhyFoundersChoose />
        <HowWeWork />
        <FeatureProjects />
        <WhyHireInHouse />
        <WhoWeAre />
      </motion.div>
    </>
  );
};

export default JoinOurNetwork;
