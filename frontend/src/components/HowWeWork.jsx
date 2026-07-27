import React from "react";

// icons for the steps
const PhoneIcon = () => (
  <svg
    className=""
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      fill="#3DD6E8"
      stroke="#3DD6E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      ry="2"
      fill="#3DD6E8"
      stroke="#3DD6E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="16"
      y1="2"
      x2="16"
      y2="6"
      stroke="#FEF7FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="6"
      stroke="#FEF7FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="3"
      y1="10"
      x2="21"
      y2="10"
      stroke="#FEF7FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="16 18 22 12 16 6"
      stroke="#3DD6E8"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="8 6 2 12 8 18"
      stroke="#3DD6E8"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#3DD6E8"
      stroke="#3DD6E8"
      strokeWidth="2"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="#FEF7FF"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      fill="#3DD6E8"
      stroke="#3DD6E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      fill="#3DD6E8"
      stroke="#3DD6E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      stroke="#3DD6E8"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      stroke="#3DD6E8"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// work process steps data
const WORK_STEPS_DATA = [
  {
    id: "discovery",
    number: "1",
    title: "Discovery Call",
    description: "We learn about your vision, goals, user and technical needs.",
    IconComponent: PhoneIcon,
    iconBg: "#D4F4FF",
  },
  {
    id: "planning",
    number: "2",
    title: "Sprint Planning",
    description:
      "We define the scope, plan the sprint and assemble the right team for you.",
    IconComponent: CalendarIcon,
    iconBg: "#D4F4FF",
  },
  {
    id: "development",
    number: "3",
    title: "Design & Development",
    description: "We design, build and iterate with you every step of the way.",
    IconComponent: CodeIcon,
    iconBg: "#D4F4FF",
  },
  {
    id: "review",
    number: "4",
    title: "Review & QA",
    description: "We test thoroughly, gather feedback and refine the product.",
    IconComponent: CheckIcon,
    iconBg: "#D4F4FF",
  },
  {
    id: "launch",
    number: "5",
    title: "Launch",
    description: "We deploy your product and support you beyond launch",
    IconComponent: RocketIcon,
    iconBg: "#D4F4FF",
  },
];

const WorkStep = ({ step, isLast }) => {
  const IconComponent = step.IconComponent;

  return (
    <div className="relative mb-6">
      <div className="flex items-stretch gap-4">
        {/* numbered circle + connecting line */}
        <div className="relative flex flex-col items-center">
          <div className="z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-bold text-white">
            {step.number}
          </div>

          {!isLast && (
            <div className="absolute top-[30px] h-[calc(100%+1.5rem)] border-l-2 border-dashed border-[#7C3AED]/20" />
          )}
        </div>

        {/* white background card with content and icon */}
        <div className="flex flex-1 items-start gap-3 rounded-2xl bg-white/60 p-[10px] shadow-sm backdrop-blur-sm w-[19.875rem] h-[5.25rem]">
          <div className="flex-1">
            <h3 className="mb-2 text-[15px] font-bold leading-tight text-black">
              {step.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-black/60">
              {step.description}
            </p>
          </div>

          {/* icon box */}
          <div
            className="flex h-[1.875rem] w-[1.875rem] shrink-0 items-center justify-center rounded-2xl m-auto"
            style={{ backgroundColor: step.iconBg }}
          >
            <IconComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HowWeWork = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* header badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          HOW WE WORK
        </span>
      </div>

      <h2 className="mb-2 text-2xl font-semibold text-gray-900">
        From Idea To Launch
      </h2>

      <p className="mb-8 text-base text-black/70">
        A clear proven process that turns your idea into a product.
      </p>

      {/* steps list */}
      <div className="space-y-0">
        {WORK_STEPS_DATA.map((step, index) => (
          <WorkStep
            key={step.id}
            step={step}
            isLast={index === WORK_STEPS_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
