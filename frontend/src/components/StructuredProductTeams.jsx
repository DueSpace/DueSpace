import React from "react";
// Assets
import Hero from "../assets/hero.png";

// Icons
import { LiaToolsSolid } from "react-icons/lia";
import { FiCloud } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { LuRocket } from "react-icons/lu";
import { RiArrowRightLongFill } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";

const INDUSTRIES = [
  {
    id: 1,
    title: "MVPs",
    icon: LuRocket,
  },
  {
    id: 2,
    title: "SaaS",
    icon: FiCloud,
  },
  {
    id: 3,
    title: "FinTech",
    icon: GoGear,
  },
  {
    id: 4,
    title: "AIProducts",
    icon: LuSparkles,
  },
  {
    id: 5,
    title: "Tools",
    icon: LiaToolsSolid,
  },
];

const IndustryCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center justify-center gap-3">
    <Icon className="text-3xl text-[#7C3AED] md:text-4xl" />
    <p className="text-sm text-gray-900">{title}</p>
  </div>
);

export const StructuredProductTeams = () => {
  return (
    <section className="mx-auto w-[95%] max-w-2xl md:max-w-295">
      {/* Badge */}

      <span className="badge badge-outline mb-4 rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
        STRUCTURED PRODUCT TEAMS
      </span>

      {/* Heading */}
      <div className="md:grid md:grid-cols-[.92fr_1.08fr] md:items-center md:gap-12">
        <div>
          <h1 className="mt-4 text-4xl font-bold leading-tight w-70 md:w-full text-black md:text-5xl">
            Your Product Idea Is Ready.{"  "}
            <span className="block font-semibold text-3xl w-70 md:w-full md:text-4xl">
              Your Tech Team Should Be Too.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 text-lg leading-7 text-gray-900 lg:w-124">
            DueSpace gives you a structured, vetted team of developers and
            creatives ready to sprint from brief to shipped product. No hiring
            cycles, no overhead. Just execution.
          </p>

          {/* Buttons */}

          <div className="my-5 md:flex md:gap-3">
            <a href="https://tally.so/r/ODg90k">
              <button className="btn rounded-2xl border border-[#7C3AED] bg-[#7C3AED] px-4 py-7 text-2xl font-medium text-center text-white w-[70%] md:w-auto md:text-lg">
                Start a project
                <RiArrowRightLongFill className="mt-1.75 size-6" />
              </button>
            </a>

            <a href="#how-we-work">
              <button className="btn mt-2 rounded-2xl border border-[#7C3AED] px-4 py-7 text-2xl font-semibold text-black w-[70%] md:mt-0 md:w-auto md:text-lg">
                See How We Work
              </button>
            </a>
          </div>
        </div>
        {/* Hero Image */}

        <div className="mt-10 overflow-hidden rounded-3xl md:mt-0 md:flex">
          <img
            src={Hero}
            alt="Structured Product Teams"
            className="h-full w-[90%] mx-auto object-cover md:w-full"
          />
        </div>
      </div>
      {/* Trusted By */}

      <div className="mt-8 bg-white p-2 pb-6 shadow-sm md:mt-14 md:px-8 md:py-6">
        <h3 className="mb-6 text-center text-sm font-semibold uppercase text-gray-900">
          Trusted By Startups Building
        </h3>

        <div className="grid grid-cols-5 gap-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
