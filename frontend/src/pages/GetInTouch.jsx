import { motion } from "framer-motion";
import { IoRocketOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { SEO } from "../components/SEO";

/**
 * GetInTouch Component
 * Displays system gateway options, work pipelines, ecosystem portals, and contact info.
 */
export const GetInTouch = () => {
  return (
    <>
      <SEO
        title="Get In Touch | DueSpace - Connect with Our Ecosystem"
        description="Ready to start a new project brief or join the DueSpace talent network? Connect with our team for technical execution, creative design, or ecosystem opportunities."
        keywords="Contact DueSpace, Start a Project, Join DueSpace Network, Creative Talent, Tech Consulting, Africa Tech Partner, Product Sprints"
        url="https://duespace.com/get-in-touch"
        image="/Logo.jpg"
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Get In Touch - DueSpace",
          "description": "Select your profile to initialize communication with the DueSpace ecosystem.",
          "url": "https://duespace.com/get-in-touch"
        }}
      />
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mx-auto my-10 w-[90%] max-w-2xl font-sans md:max-w-295 md:my-16"
      >
      {/* Header / System Gateway Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          SYSTEM GATEWAY
        </span>
      </div>
      <h2 className="mb-5 text-3xl w-90.25 text-gray-900 md:w-[55%] md:text-5xl">
        Connect with the DueSpace ecosystem
      </h2>
      <p className="mb-5 text-4 w-90.25 md:w-[55%] md:text-lg">
        Select your profile to initialize the correct communication routing.
      </p>

      <div className="mt-10 md:grid md:grid-cols-2 md:gap-8">
        {/* New Work Pipeline Card */}
        <div>
          <div className="mb-4">
            <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
              NEW WORK PIPELINE
            </span>
          </div>
          <div className="w-90.5 pt-2 pb-7 text-gray-900 border border-[#111111] bg-[#FFFFFF] md:flex md:min-h-64 md:w-full md:flex-col md:justify-between md:p-8">
            <div>
              <h3 className="uppercase text-[18px] font-semibold ml-2">
                <IoRocketOutline className="mr-1 inline-block size-6 text-[#7C3AED]" />
                Start a new project brief
              </h3>
              <p className="ml-3 my-1 text-[#525252]">
                Deploy a technical execution engine or launch a premium creative
                design.
              </p>
            </div>
            <a href="https://tally.so/r/ODg90k" className="ml-3 md:ml-0">
              <button className="btn border font-normal text-[15px] tracking-tight border-[#7C3AED] p-7 my-1">
                Start a project
              </button>
            </a>
          </div>
        </div>

        {/* Ecosystem Portals Section */}
        <div className="mt-7 md:mt-0">
          <div className="mb-4">
            <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
              ECOSYSTEM PORTALS
            </span>
          </div>
          <div className="w-90.5 pt-3 pb-7 text-[#7C3AED] border border-[#111111] bg-[#FFFFFF] uppercase font-manrope font-bold px-2 space-y-8 md:flex md:min-h-64 md:w-full md:flex-col md:justify-around md:space-y-0 md:p-8">
            <a
              href="https://tally.so/r/NpgNDQ"
              className="border-b border-[#7C3AED33] pb-6 md:pb-5"
            >
              <p>
                [I am a creative / developer]
                <GoArrowRight className="ml-1 mb-0.5 inline-block size-7 text-[#7C3AED]" />
              </p>
            </a>
            <a href="https://tally.so/r/LZBevO">
              <p>
                [I am a learner & I just want to grow]
                <GoArrowRight className="ml-1 mb-0.5 inline-block size-7 text-[#7C3AED]" />
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Details & Operations Info */}
      <div className="font-manrope mt-16 space-y-3 border-t border-black/15 pt-8 md:flex md:items-center md:justify-between md:space-y-0">
        <p>
          Media & Operations:{" "}
          <a
            href="mailto:info@duespace.com"
            className="text-[#706A6A] text-sm hover:underline"
          >
            info@duespace.com
          </a>
        </p>
        <p>
          Phone Number:{" "}
          <a
            href="tel:+2348102950051"
            className="text-[#706A6A] text-sm hover:underline"
          >
            +234 810 295 0051
          </a>
        </p>
        <p>
          Location:{" "}
          <span className="text-[#706A6A] text-sm">Remote Worldwide</span>
        </p>
      </div>
    </motion.section>
    </>
  );
};
