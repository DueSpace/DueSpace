import React from "react";
import ExperienceFinished from "../assets/ExperienceFinished.png";
import ExperienceTutorial from "../assets/ExperienceTutorial.png";
import ExperienceJobs from "../assets/ExperienceJobs.png";
import ExperienceWorks from "../assets/ExperienceWorks.png";
import DueSpaceSymbol from "../assets/DueSpaceSymbol.png";

export const ExperienceGap = () => {
  const challenges = [
    {
      image: ExperienceFinished,
    },
    {
      image: ExperienceTutorial,
    },
    {
      image: ExperienceJobs,
    },
    {
      image: ExperienceWorks,
    },
    {
      image: DueSpaceSymbol,
    },
  ];

  return (
    <section className="w-full bg-[#fdf6ff] px-6 py-8">
      {/* Section label */}
      <div className="mb-4 inline-flex rounded-full border border-purple-500 px-4 py-2">
        <span className="text-[9px] font-medium tracking-[0.14em] text-purple-600">
          THE CHALLENGE
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-5 text-[20px] font-semibold leading-tight text-black">
        The Experience Gap
      </h2>

      {/* Timeline */}
      <div className="relative">

        {/* Dotted vertical line */}
        <div className="absolute left-[17px] top-[18px] bottom-[43px] border-l border-dashed border-purple-300" />

        {/* Challenge items */}
        <div className="flex flex-col gap-5">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative flex items-center gap-4"
            >
              {/* Same image box for all five images */}
              <div className="relative z-10 flex h-[34px] w-[250px] items-center">
                <img
                  src={challenge.image}
                  alt=""
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceGap;