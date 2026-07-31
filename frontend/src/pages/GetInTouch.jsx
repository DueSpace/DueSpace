import { motion } from "framer-motion";
import { IoRocketOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

/**
 * GetInTouch Component
 * Displays system gateway options, work pipelines, ecosystem portals, and contact info.
 */
export const GetInTouch = () => {
  return (
    <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mx-auto my-10 w-[90%] max-w-2xl font-sans"
    >
        {/* Header / System Gateway Badge */}
        <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          SYSTEM GATEWAY
        </span>
        </div>
        <h2 className="mb-5 text-3xl w-90.25 text-gray-900">Connect with the DueSpace ecosystem</h2>
        <p className="mb-5 text-4 w-90.25">Select your profile to initialize the correct communication routing.</p>
        
        {/* New Work Pipeline Card */}
        <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          NEW WORK PIPELINE
        </span>
        </div>
        <div className="w-90.5 pt-2 pb-7 text-gray-900 border border-[#111111] bg-[#FFFFFF]">
            <h3 className="uppercase text-[18px] font-semibold ml-2">
                <IoRocketOutline className="mr-1 inline-block size-6 text-[#7C3AED]" />
                Start a new project brief</h3>
            <p className="ml-3 my-1 text-[#525252]">Deploy a technical execution engine or launch a premium creative design.</p>
            <button className="btn border font-normal text-[15px] tracking-tight border-[#7C3AED] p-7 ml-3 my-1">Start a project</button>
        </div>

        {/* Ecosystem Portals Section */}
        <div className="mt-7">
            <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
                ECOSYSTEM PORTALS
            </span>
        </div>
        <div className="w-90.5 mt-4 pt-3 pb-7 text-[#7C3AED] border border-[#111111] bg-[#FFFFFF] uppercase font-manrope font-bold px-2 space-y-8">
            <p className="w-80">
                [I am a creative / developer]
                <GoArrowRight className="ml-1 mb-0.5 inline-block size-7 text-[#7C3AED]"/>
            </p>
            <p className="w-80">
                [I am a learner & I just want to grow]
                <GoArrowRight className="ml-1 mb-0.5 inline-block size-7 text-[#7C3AED]"/>
            </p>
        </div>

        {/* Contact Details & Operations Info */}
        <div className="font-manrope mt-16 space-y-3">
            <p>Media & Operations:{" "}
                <a 
                  href="mailto:hello@duespace.com" 
                  className="text-[#706A6A] text-sm hover:underline"
                >
                    hello@duespace.com
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
                <span className="text-[#706A6A] text-sm">
                    Remote Worldwide
                </span>
            </p>
        </div>
        
    </motion.section>
  )
}

