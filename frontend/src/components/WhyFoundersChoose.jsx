import React from "react";

// advantages content
const ADVANTAGES_DATA = [
  {
    id: "speed",
    title: "Speed Without The Chaos",
    description:
      "Structured sprints with clear milestones mean you always know what is being built, when it will be done, and what comes next",
  },
  {
    id: "professionals",
    title: "Vetted Professionals, Matched To Your Project",
    description:
      "You do not get whoever is available. You get a team assembled for your specific brief: developers, designers, and PMs who can actually deliver it.",
  },
  {
    id: "overhead",
    title: "No Hiring Overhead",
    description:
      "Recruiting, onboarding, payroll, equity negotiations—none of that. You brief us, we execute, you ship. Your energy stays on the product.",
  },
  {
    id: "scale",
    title: "Built To Scale With You",
    description:
      "Start with an MVP. Add a feature. Rebuild for scale. DueSpace grows with your product. You never need to restart the relationship.",
  },
];

const AdvantageItem = ({ advantage, isLast }) => (
  <div className="relative flex gap-4">
    {/* bullet point + line */}
    <div className="relative flex flex-col items-center">
      <div className="z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7C3AED] mt-1.75" />

      {!isLast && (
        <div className="absolute h-60 w-1.5 bg-[#7C3AED]/20 mt-1.75" />
      )}
    </div>

    <div className="pb-8">
      <h3 className="mb-2 text-lg font-bold text-black">{advantage.title}</h3>
      <p className="text-sm leading-relaxed text-black/60">
        {advantage.description}
      </p>
    </div>
  </div>
);

export const WhyFoundersChoose = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* header badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          WHY FOUNDERS CHOOSE DUESPACE
        </span>
      </div>

      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        The DueSpace Advantage
      </h2>

      {/* list of advantages */}
      <div className="space-y-0">
        {ADVANTAGES_DATA.map((advantage, index) => (
          <AdvantageItem
            key={advantage.id}
            advantage={advantage}
            isLast={index === ADVANTAGES_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
