import { motion } from "framer-motion";
import { RiArrowRightLongFill } from "react-icons/ri";
// assets imports
import Mmachi from "../assets/MmachiBrand.png";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mx-auto my-10 w-[90%] max-w-2xl"
    >
      {/* Section Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          REGISTRY SYSTEM
        </span>
      </div>

      {/* caption */}
      <p className="font-bold text-[32px]">
        Our Capabilities. Your Deliverables.
      </p>
      <p className="mb-4">
        An uncompromised breakdown of what DueSpace Studios and DueSpace Labs
        actually ship to production.
      </p>

      {/* duespace studios and duespace labs */}
      <div className="mb-10 flex gap-4">
        <span className="w-47 badge badge-outline  border border-[#7C3AED] p-5 font-space text-xs bg-linear-to-r from-[#7C3AED] to-[#F97316] bg-clip-text text-transparent">
          DUESPACE LABS
        </span>
        <span className="w-47 badge badge-outline  border border-[#7C3AED] p-5 font-space text-xs bg-linear-to-r from-[#7C3AED] to-[#67E8F9] bg-clip-text text-transparent">
          DUESPACE STUDIOS
        </span>
      </div>
      <img src={Mmachi} alt="Mmachi Brand" className="mb-10" />

      {/* How we measure Quality */}
      <p className="font-bold text-[20px]">How we measure Quality</p>

      <ul className="list-disc p-5 mb-10">
        <li className="mb-1 font-bold">
          Execution over everything{" "}
          <span className="font-normal">
            : We are not a discussion group. We are a team that ships
          </span>
        </li>
        <li className="mb-1 font-bold">
          Real work, Real growth:{" "}
          <span className="font-normal">
            We focus on delivering tangible results that drive real impact
          </span>
        </li>
        <li className="mb-1 font-bold">
          Africa builds for Africa:{" "}
          <span className="font-normal">
            We are committed to building solutions that are relevant and
            impactful for the African market.
          </span>
        </li>
      </ul>
      {/* start a project */}
      <button className="btn mt-4 w-63.75 h-8.25 border-none bg-[#7C3AED] text-[16px] text-white">
        Start a Project
        <RiArrowRightLongFill className="inline-block size-6" />
      </button>
    </motion.section>
  );
};
export default Services;
