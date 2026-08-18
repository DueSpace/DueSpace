import React from "react";
import ProjectIcon from "../assets/Projects.png";
import TeamIcon from "../assets/Team3.png";
import CalenderIcon from "../assets/Calender.png";
import BriefcaseIcon from "../assets/Briefcase.png";
import MentorshipIcon from "../assets/Mentorship.png";
import ConfidenceIcon from "../assets/Confidence.png";

export const WhatYouGain = () => {
  const benefits = [
    {
      icon: (
        <img
        src={ProjectIcon}
        alt="Project"
        className="h-6 w-6 objects-contain"
        />
      ),
      title: "Real Client Projects",
      description: "Work on products that real people use.",
    },
    {
      icon: (
        <img
        src={TeamIcon}
        alt="Team"
        className="h-6 w-6 objects-contain"
        />
      ),
      title: "Team Experience",
      description: "Collaborate with designer, developers and PMs.",
    },
    {
      icon: (
        <img
        src={CalenderIcon}
        alt="Calender"
        className="h-6 w-6 objects-contain"
        />
      ),
      title: "Sprint Delivery",
      description: "Work in structured 2-4 weeks sprint with clear goals.",
    },
    {
      icon: (
        <img
          src={BriefcaseIcon}
          alt="Briefcase"
          className="h-6 w-6 objects-contain"
        />
      ),
      title: "Professional Portfolio",
      description: "Build case studies that get you hired",
    },
    {
      icon: (
      <img
        src={MentorshipIcon}
        alt="Mentorship"
        className="h-6 w-6 object-contain"
      />
      ),
      title: "Mentorship",
      description: "Learn from experienced professionals.",
    },
    {
      icon: (
        <img
        src={ConfidenceIcon}
        alt="Confidence"
        className="h-6 w-6 object-contain"
        />
      ),
      title: "Confidence",
      description: "Gain the confidence to work in any professional team",
    },
  ];

  return (
    <section className="w-full bg-[#fdf6ff] px-6 py-8">
      {/* Section label */}
      <div className="mb-5 inline-flex rounded-full border border-purple-500 px-4 py-2">
        <span className="text-[9px] font-medium tracking-[0.14em] text-purple-600">
          WHAT YOU'LL GAIN
        </span>
      </div>

      {/* Benefit cards */}
      <div className="flex flex-col gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex min-h-[76px] items-center gap-4 rounded-lg bg-white px-4 py-3"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fcf5ff] text-[20px] text-purple-600">
              {benefit.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-black">
                {benefit.title}
              </h3>

              <p className="mt-1 text-[11px] leading-[1.15] text-[#222]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGain;