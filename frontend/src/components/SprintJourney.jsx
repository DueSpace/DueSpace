import React from "react";
import ApplyIcon from "../assets/Rocket.png";
import InterviewIcon from "../assets/Potrait.png";
import TeamIcon from "../assets/Team2.png";
import KickoffIcon from "../assets/Flag.png";
import CollaborationIcon from "../assets/Calender.png";
import ReviewIcon from "../assets/Note.png";
import DemoIcon from "../assets/Demo.png";
import PortfolioIcon from "../assets/Briefcase.png";
import RepeatIcon from "../assets/Repeat.png";

const sprintSteps = [
  {
    number: 1,
    icon:ApplyIcon,
    title: "Apply",
    description: "Submit your application.",
  },
  {
    number: 2,
    icon: InterviewIcon,
    title: "Interview",
    description: "We get to know you better.",
  },
  {
    number: 3,
    icon: TeamIcon,
    title: "Sprint Team",
    description: "You’re matched with a team.",
  },
  {
    number: 4,
    icon: KickoffIcon,
    title: "Kickoff",
    description: "We plan and align on goals.",
  },
  {
    number: 5,
    icon: CollaborationIcon,
    title: "Daily Collaboration",
    description: "Build, iterate & solve together.",
  },
  {
    number: 6,
    icon: ReviewIcon,
    title: "Review",
    description: "Get feedback and improve.",
  },
  {
    number: 7,
    icon: DemoIcon,
    title: "Demo day",
    description: "Present your work to the client.",
  },
  {
    number: 8,
    icon: PortfolioIcon,
    title: "Portfolio",
    description: "Add to your real project portfolio.",
  },
  {
    number: 9,
    icon: RepeatIcon,
    title: "Repeat",
    description: "Level up to the next sprint.",
  },
];

export const SprintJourney = () => {
  return (
    <section className="w-full bg-[#fff7ff] px-5 py-10">
      {/* Section label */}
      <div className="mb-4 inline-flex rounded-full border border-purple-500 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600">
          Sprint Journey
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-7 text-[17px] font-semibold leading-tight text-black">
        Inside a DueSpace Sprint
      </h2>

      {/* Journey */}
      <div className="relative">
        {sprintSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === sprintSteps.length - 1;

          return (
            <div
              key={step.number}
              className="relative flex min-h-[73px] items-start"
            >
              {/* Connecting line */}
              {!isLast && (
                <div className="absolute left-[9px] top-[25px] h-[58px] border-l border-dashed border-purple-300" />
              )}

              {/* Number */}
              <div className="relative z-10 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white">
                {step.number}
              </div>

              {/* Icon */}
              <div className="ml-5 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-white">
                <img
                  src={step.icon}
                  alt=""
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Text */}
              <div className="ml-3 pt-[1px]">
                <h3 className="text-[14px] font-semibold leading-5 text-black">
                  {step.title}
                </h3>

                <p className="mt-[1px] text-[12px] leading-[17px] text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SprintJourney;