import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Assets
import Hero from "../assets/hero.png";

// Icons
import {
  FaRocket,
  FaCloud,
  FaCog,
  FaRobot,
  FaTools,
} from "react-icons/fa";

const INDUSTRIES = [
  {
    id: 1,
    title: "MVPs",
    icon: FaRocket,
  },
  {
    id: 2,
    title: "SaaS",
    icon: FaCloud,
  },
  {
    id: 3,
    title: "FinTech",
    icon: FaCog,
  },
  {
    id: 4,
    title: "AI Products",
    icon: FaRobot,
  },
  {
    id: 5,
    title: "Tools",
    icon: FaTools,
  },
];

const IndustryCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center justify-center gap-3">
    <Icon className="text-3xl text-[#7C3AED]" />
    <p className="text-sm text-gray-700">{title}</p>
  </div>
);

export const StructuredProductTeams = () => {
  return (
    <section className="mx-auto w-[95%] max-w-2xl py-12">

      {/* Badge */}

      <span className="rounded-full border border-[#7C3AED] px-6 py-3 text-xs tracking-[0.18em] text-[#7C3AED]">
        STRUCTURED PRODUCT TEAMS
      </span>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-bold leading-tight text-black">
        Your Product
        <br />
        Idea Is Ready.
        <br />
        <span className="font-semibold">
          Your Tech Team
          <br />
          Should Be Too.
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 text-lg leading-9 text-gray-600">
        DueSpace gives you a structured, vetted team of developers and
        creatives ready to sprint from brief to shipped product.
        No hiring cycles, no overhead. Just execution.
      </p>

      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-4">

        <button className="flex items-center justify-center gap-3 rounded-xl bg-[#7C3AED] py-4 text-lg font-medium text-white transition hover:bg-[#6931d8]">
          Start a project
          <FaArrowRight />
        </button>

        <button className="rounded-xl border border-[#7C3AED] py-4 text-lg font-medium text-black transition hover:bg-[#7C3AED] hover:text-white">
          See How We Work
        </button>

      </div>

      {/* Hero Image */}

      <div className="mt-10 overflow-hidden rounded-3xl">
        <img
          src={Hero}
          alt="Structured Product Teams"
          className="w-full object-cover"
        />
      </div>

      {/* Trusted By */}

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

        <h3 className="mb-6 text-center text-sm font-semibold uppercase text-gray-700">
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