import React from "react";
import { HiXMark, HiCheck } from "react-icons/hi2";

// Comparison data
const traditionalHiring = [
  "Months of recruiting",
  "High Salaries and Benefits",
  "HR & administrative work",
  "Long onboarding time",
  "Uncertain outcomes",
];

const dueSpaceBenefits = [
  "Ready to go team",
  "Lower overhead cost",
  "No HR hassle",
  "Fast onboarding",
  "Proven delivery process",
];

export const WhyHireInHouse = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* Section Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          WHY NOT HIRE IN-HOUSE?
        </span>
      </div>

      {/* Section Heading */}
      <h2 className="mb-6 text-[20px] font-bold text-gray-900">
        DueSpace Vs Traditional Hiring
      </h2>

      {/* Comparison Container */}
      <div className="flex text-sm">
        {/* Traditional Hiring Column */}
        <div className="w-full rounded-l-2xl bg-white px-2 pt-1 pb-2.5">
          <h3 className="my-3 text-[14px] font-bold">Traditional Hiring</h3>

          {traditionalHiring.map((item) => (
            <div key={item} className="my-3.5 flex items-center">
              <HiXMark className="my-0.5 size-5 text-[#F97316]" />
              <p className="text-[#0000009C] text-[11px]">{item}</p>
            </div>
          ))}
        </div>

        {/* DueSpace Column */}
        <div className="w-full rounded-r-2xl bg-[#7C3AED26] px-2 pt-1 pb-2.5">
          <h3 className="my-3 text-[14px] font-bold text-[#7C3AEDF2]">
            With DueSpace
          </h3>

          {dueSpaceBenefits.map((item) => (
            <div key={item} className="my-3.5 flex items-center">
              <HiCheck className="my-0.5 size-5 text-[#7C3AEDF2]" />
              <p className="text-[11px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
