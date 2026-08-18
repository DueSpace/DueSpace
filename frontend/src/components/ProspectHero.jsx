import React from "react";
import Image1 from "../assets/community/Desire.png";
import Image2 from "../assets/community/David.png";
import Image3 from "../assets/community/Chizaram.png";
import Image4 from "../assets/community/Miriam.png";
import { FaArrowRight, FaCheck, FaPlus } from "react-icons/fa";

const PLACEHOLDER_SPRINT = {
  name: "Sprint 10 - Fintrack Platform",
  progress: 66,
  tasks: [
    {
      id: 1,
      title: "Design System",
      status: "Completed",
    },
    {
      id: 2,
      title: "API Integration",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Dashboard UI",
      status: "In Review",
    },
  ],
  teamMembers: [Image1, Image2, Image3, Image4],
};

const getStatusClasses = (status) => {
  switch (status) {
    case "Completed":
      return "border-green-400 text-green-600";

    case "In Progress":
      return "border-blue-400 text-blue-600";

    case "In Review":
      return "border-yellow-400 text-yellow-600";

    default:
      return "border-gray-300 text-gray-500";
  }
};

export const ProspectHero = () => {
  const sprint = PLACEHOLDER_SPRINT;

  return (
    <section className="w-full bg-[#fcf5ff] px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Section Label */}
        <div className="mb-8 inline-block rounded-full border border-[#7d3bd1] px-5 py-2">
          <span className="font-mono text-xs tracking-[0.15em] text-[#7d3bd1]">
            REAL PRODUCT EXPERIENCE
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-black md:text-6xl">
          You've Taken
          <br />
          The Courses.
          <br />
          <span className="text-[#7d3bd1]">Now Build</span>
          <br />
          <span className="text-[#7d3bd1]">Something Real.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          DueSpace puts you on real projects, with a real team, shipping real
          products. This is how you build the portfolio that actually advances
          your career and the experience that makes you sought after.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#7d3bd1] px-7 py-3 text-lg font-semibold text-white transition hover:bg-[#6c2fc0]"
          >
            Join the Network
            <FaArrowRight className="text-sm" />
          </button>

          <button
            type="button"
            className="rounded-lg border border-[#7d3bd1] px-7 py-3 text-lg font-medium text-[#7d3bd1] transition hover:bg-[#7d3bd1] hover:text-white"
          >
            How It Works
          </button>
        </div>

        {/* Sprint Dashboard */}
        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm">

          {/* Dashboard Header */}
          <div>
            <h2 className="text-lg font-semibold text-black">
              Sprint Dashboard
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              {sprint.name}
            </p>
          </div>

          {/* Progress */}
          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Progress
              </span>

              <span className="text-sm font-semibold text-[#7d3bd1]">
                {sprint.progress}%
              </span>
            </div>

            <div
              className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
              aria-label="Sprint progress"
              role="progressbar"
              aria-valuenow={sprint.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="h-full rounded-full bg-[#7d3bd1]"
                style={{ width: `${sprint.progress}%` }}
              />
            </div>
          </div>

          {/* Tasks */}
          <div className="mt-7">
            <h3 className="mb-4 text-sm font-semibold text-black">
              Tasks
            </h3>

            <div className="space-y-4">
              {sprint.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300">
                      <FaCheck className="text-[9px] text-gray-500" />
                    </div>

                    <span className="text-sm text-gray-700">
                      {task.title}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs ${getStatusClasses(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mt-7">
            <h3 className="mb-4 text-sm font-semibold text-black">
              Team
            </h3>
            <div className="flex items-center">
              {sprint.teamMembers.map((member, index) => (
                <img
                  key={index}
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}

              <button
                type="button"
                aria-label="Add team member"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#7d3bd1] text-white"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProspectHero;