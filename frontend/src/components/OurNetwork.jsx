import React from "react";
import { FiArrowRight } from "react-icons/fi";

export const OurNetwork = () => {
  return (
    <section className="w-full bg-[#fff7ff] px-5 py-10">
      {/* Section label */}
      <div className="mb-5 inline-flex rounded-full border border-purple-500 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600">
          Our Network
        </span>
      </div>

      {/* Heading */}
      <h2 className="max-w-[300px] text-[20px] font-semibold leading-[1.25] text-black">
        You’re Joining Builders.
        <br />
        Not Just Members.
      </h2>

      {/* Description */}
      <p className="mt-8 text-[19px] leading-[2.5] text-black">
        A growing community of
        <br />
        builders with 6+ core tracks
        <br />
        collaborating inside our
        <br />
        active sprint ecosystem.
      </p>

      {/* Community link */}
      <button className="mt-5 flex items-center gap-1 text-[10px] font-medium text-purple-600">
        View our Community Members
        <FiArrowRight size={12} />
      </button>

      {/* Community feedback label */}
      <div className="mb-3 mt-8 inline-flex rounded-full border border-purple-500 px-3 py-2">
        <span className="font-mono text-[9px] uppercase tracking-wide text-purple-600">
          Community's Feedback
        </span>
      </div>

      {/* Feedback card 1 */}
      <div className="border border-gray-200 bg-white px-2 py-2">
        <p className="font-mono text-[10px] italic text-gray-700">
          [ // Duespace studio]
        </p>

        <p className="mt-2 text-[13px] leading-[1.9] text-gray-600">
          "In the Studio, there is zero friction. The product managers
          structure the backlog, the designers lock the design tokens, and
          the engineers deploy daily. It's high-velocity execution where
          every single asset delivered serves a real business objective."
        </p>
      </div>

      {/* Feedback card 2 */}
      <div className="mt-2 border border-gray-200 bg-white px-2 py-2">
        <p className="font-mono text-[10px] italic text-gray-700">
          [ // General channel]
        </p>

        <p className="mt-2 text-[13px] leading-[1.9] text-gray-600">
          "The energy in this cohort is different. You aren't just talking
          about building—you are literally shipping code on a timeline."
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-purple-600 px-8 py-6 text-white">
        <h3 className="text-[20px] font-medium leading-[1.35]">
          We are Accepting a
          <br />
          New Cohort of
          <br />
          Builders
        </h3>

        <p className="mt-2 max-w-[220px] text-[11px] leading-[1.5] text-white/90">
          Spots are limited, and projects are active. If you are ready to
          stop practicing and start shipping, this is your next move.
        </p>

        <button className="mt-3 flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[11px] font-medium text-black">
          Join the Network
          <FiArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default OurNetwork;