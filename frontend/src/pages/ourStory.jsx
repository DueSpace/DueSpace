import { RiArrowRightLongFill } from "react-icons/ri";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    // Our story scection
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mx-auto my-10 w-[90%] max-w-2xl font-sans"
    >
      {/* Section Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          OUR STORY
        </span>
      </div>
      {/* Section Heading */}

      <p className="text-4 w-84.25 mb-5">
        DueSpace is where African tech professionals come to build real things,
        grow with real teams, and do work that actually matters to them and to
        the startups they help bring to life.
      </p>
      <hr className="w-90.25 mb-5 border-[#E5E5E5]" />
      {/* Our Origin section */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          THE ORIGIN
        </span>
      </div>
      <h3>Where it all started</h3>
      <p className="mb-5">
        Talented developers, designers, and creatives were finishing courses and
        coming out the other side with skills but nothing to show for them. No
        portfolio or team experience. No proof.
      </p>
      {/* Two sided wall container */}
      <div className="w-69.5 h-49.5 border border-[#E5E5E5] mb-5">
        <p className=" text-[13px] font-bold mb-2">THE TWO-SIDED WALL</p>
        <div className="w-63.75 h-38.75 pl-1">
          <p className="font-bold text-4">
            [X] THE TALENT PROFILE{"  "}
            <RiArrowRightLongFill className="inline-block size-6" />
          </p>
          <p className="text-4 mb-4">
            No real-world portfolio or structure team experience.
          </p>

          <p className="font-bold text-4">
            [X] THE FOUNDER PROFILE{"  "}
            <RiArrowRightLongFill className="inline-block size-6" />
          </p>
          <p className="text-4">
            Building products with potential but no reliable team to execute.
          </p>
        </div>
      </div>
      <p className="text-[20px] italic leading-7 mb-4">
        "There were talented people everywhere and startups that needed them.
        The missing piece was the structure." — Desire Levi (Founder of
        DueSpace)
      </p>
      <p className="text-[16px] mb-4">
        DueSpace was founded to close that gap as an ecosystem where
        professionals grow through real work, and startups find the execution
        partner they actually need.
      </p>
      <hr className="w-90.25 mb-5 border-[#E5E5E5]" />
      {/* our mission */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          MISSION & VISION
        </span>
      </div>
      <h3 className="font-bold">What we're here to do</h3>
      <span className="font-bold mb-5">
        Our vision is simple:
        <span className="font-normal">
          talent and opportunity should not miss each other. The next generation
          of great digital products will be built right here.
        </span>
      </span>
      {/* Founders and startups container*/}
      <div className="w-74 h-27.5 border border-[#E5E5E5] mb-5 mt-4 p-1">
        <p className=" text-[13px] font-bold mb-1">FOR STARTUPS & FOUNDERS</p>
        <p className=" text-[14px]">
          Get the team your product deserves: Brief us, and we assemble
          developers, designers, and creatives around your project, working in
          structured sprints toward your deadline.
        </p>
      </div>
      {/* talent container */}
      <div className="w-74 h-27.5 border border-[#E5E5E5] mb-5 mt-4 p-1">
        <p className=" text-[13px] font-bold mb-1">FOR PROFESSIONALS</p>
        <p className=" text-[14px]">
          Build the career you came here for: Real sprint projects. A real team.
          Products in your portfolio that prove what you can do.
        </p>
      </div>
      {/* The two teams */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          THE TWO TEAMS
        </span>
      </div>
      <h3 className="font-bold">Two teams, one ecosystem</h3>
      {/* DUESPACE LABS*/}
      <div className="w-79.75 h-45.75 border border-[#E5E5E5] mb-5 mt-4 p-1">
        <p className=" text-[13px] font-bold mb-1">
          DUESPACE LABS: your product engine
        </p>
        <p className=" text-[16px]">
          Developers and engineers. Web applications, product MVPs, frontend and
          backend. If it needs to run, Labs ships it. Both teams work inside the
          same sprint structure, to the same standard, on the same projects.
        </p>
      </div>
      {/* DUESPACE STUDIOS */}
      <div className="w-79.75 h-45.75 border border-[#E5E5E5] mb-5 mt-4 p-1">
        <p className=" text-[13px] font-bold mb-4">
          DUESPACE STUDIOS: your visual engine
        </p>
        <p className=" text-[16px]">
          Designers, motion artists, video editors, and creative professionals.
          Brand identity, UI/UX, motion graphics, and content. If it needs to be
          seen, Studios builds it.
        </p>
      </div>
      {/* Core Beliefs */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          CORE BELIEFS
        </span>
      </div>
      {/* What we will not compromise on */}
      <h3 className="font-bold">What we will not compromise on.</h3>
      <ul className="list-disc pl-5 leading-7 text-[16px] mb-5">
        <li>Execution over everything. </li>
        <li>Real work, real growth. </li>
        <li>People before product. </li>
        <li>Africa builds for Africa. </li>
      </ul>
      {/* join the Ecosystem */}
      <h3 className="text-[32px]">Join the Ecosystem</h3>
      <p className="text-[20px]">
        Ready to stop practicing and start building? Apply to join DueSpace and
        get matched to a real project
      </p>
      <a href="https://tally.so/r/NpgNDQ">
        <button className="btn mt-4 w-63.75 h-8.25 border-none bg-[#7C3AED] text-[16px] text-white">
          Apply to Join
          <RiArrowRightLongFill className="inline-block size-6" />
        </button>
      </a>
    </motion.section>
  );
};

export default OurStory;
