import React from "react";
import ProjectImage from "../assets/DuespaceProject.png";

import Member1 from "../assets/community/Desire.png";
import Member2 from "../assets/community/Precious.png";
import Member3 from "../assets/community/David.png";
import Member4 from "../assets/community/Grace.png";

import Member6 from "../assets/community/Ebube.png";
import Member7 from "../assets/community/Uchenna.png";
import Member8 from "../assets/community/Borasky.png";

import { FiCalendar, FiArrowRight } from "react-icons/fi";

export const RealProjects = () => {
  const teamMembers = [
    Member1,
    Member2,
    Member3,
    Member4,
    null, // Member 5 - left blank
    Member6,
    Member7,
    Member8,
  ];

  return (
    <section className="w-full bg-[#fff7ff] px-5 py-10">
      {/* Section label */}
      <div className="mb-4 inline-flex rounded-full border border-purple-500 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600">
          Real Projects
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-5 text-[17px] font-semibold leading-tight text-black">
        What You’ll Build
      </h2>

      {/* Project preview */}
      <div className="overflow-hidden rounded-t-lg bg-white">
        <img
          src={ProjectImage}
          alt="DueSpace project"
          className="h-[175px] w-full object-cover"
        />
      </div>

      {/* Project information card */}
      <div className="-mt-[1px] rounded-xl border border-gray-300 bg-white p-3">
        {/* Project identity */}
        <div className="flex items-start gap-3">
          <div className="flex h-[38px] w-[70px] shrink-0 items-center justify-center rounded bg-purple-100">
            <span className="text-[9px] font-semibold text-purple-600">
              DueSpace
            </span>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-black">
              DueSpace
            </h3>

            <p className="mt-1 text-[9px] leading-[16px] text-gray-700">
              Designed and developed the digital ecosystem that connects
              startups with emerging professionals through structured
              product sprints.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-purple-200 px-2 py-1 text-[9px] text-purple-700">
            UI/UX
          </span>

          <span className="rounded-md bg-purple-200 px-2 py-1 text-[9px] text-purple-700">
            Web Design
          </span>

          <span className="rounded-md bg-purple-200 px-2 py-1 text-[9px] text-purple-700">
            Development
          </span>

          <span className="rounded-md bg-purple-200 px-2 py-1 text-[9px] text-purple-700">
            Product Strategy
          </span>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-purple-200" />

        {/* Built by */}
        <p className="mb-2 text-[10px] font-medium text-purple-600">
          Built by
        </p>

        {/* Team members */}
        <div className="mb-3 flex items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`-ml-1 flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white first:ml-0 ${
                member ? "bg-gray-200" : "bg-gray-300"
              }`}
            >
              {member && (
                <img
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Project stats */}
        <div className="grid grid-cols-2 gap-y-2 text-[10px] text-gray-700">
          <span>2 Designers</span>

          <span className="flex items-center gap-2 text-purple-600">
            <FiCalendar size={14} />
            7 weeks sprint
          </span>

          <span>5 Developers</span>
          <span />

          <span>1 Product Manager</span>
          <span />
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-purple-200" />

        {/* Case study */}
        <button className="flex items-center gap-1 text-[10px] text-purple-600">
          View Case Study
          <FiArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default RealProjects;