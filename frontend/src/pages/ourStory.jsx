import React from "react";

const OurStory = () => {
  return (
    // Our story scection
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* Section Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          OUR STORY
        </span>
      </div>

      {/* Section Heading */}
      <h2 className="mb-6 text-[32px] w-74 font-bold text-gray-900">
        We Built the space we always needed.
      </h2>
      <p className="text-4 w-84.25 mb-5">
        DueSpace is where African tech professionals come to build real things,
        grow with real teams, and do work that actually matters to them and to
        the startups they help bring to life.
      </p>
      <hr className="w-90.25 mb-5" />

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

      <div className="w-69.5 h-49.5 border border-[#E5E5E5] mx-5">
        <p className=" text-[13px] font-bold">THE TWO-SIDED WALL</p>
      </div>
    </section>
  );
};

export default OurStory;
