import React from "react";
import PerfectForYouImage from "../assets/PerfectForYou.png";
import NotForYouImage from "../assets/NotForYou.png";
import { FiCheck, FiX } from "react-icons/fi";

export const WhoThisIsFor = () => {
  const perfectFor = [
    "Brand & Graphic Designers",
    "UI/UX Designers",
    "Developers",
    "Motion Designers",
    "Product Managers",
  ];

  const notFor = [
    "Looking for free certificate",
    "Want passive learning",
    "Don't like team work",
    "Not willing to commit",
    "Only want tutorials",
  ];

  return (
    <section className="w-full bg-[#fff7ff] px-5 py-10">
      {/* Section label */}
      <div className="mb-4 inline-flex rounded-full border border-purple-500 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wide text-purple-600">
          Is This For You?
        </span>
      </div>

      {/* Heading */}
      <h2 className="mb-5 text-[17px] font-semibold leading-tight text-black">
        Who This Is For
      </h2>

      {/* Perfect For You */}
      <div className="relative mb-3 min-h-[180px] overflow-hidden rounded-md bg-white p-3">
        {/* Heading */}
        <h3 className="relative z-10 mb-2 text-[12px] font-semibold text-black">
          Perfect For You
        </h3>

        {/* List */}
        <div className="relative z-10 flex flex-col gap-2">
          {perfectFor.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <span className="flex h-[15px] w-[20px] shrink-0 items-center justify-center rounded-full bg-green-300">
                <FiCheck
                  size={9}
                  strokeWidth={3}
                  className="text-white"
                />
              </span>

              <span className="text-[9px] leading-3 text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Figma illustration */}
        <img
          src={PerfectForYouImage}
          alt=""
          className="absolute bottom-0 right-0 z-0 w-[170px] object-contain"
        />
      </div>

      {/* Not For You */}
      <div className="relative min-h-[180px] overflow-hidden rounded-md bg-[#ffe1d9] p-3">

        {/* Heading */}
        <h3 className="relative z-10 mb-2 text-[12px] font-semibold text-black">
          Not For You
        </h3>

        {/* List */}
        <div className="relative z-10 flex flex-col gap-2">
          {notFor.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <span className="flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-orange-400">
                <FiX
                  size={9}
                  strokeWidth={3}
                  className="text-white"
                />
              </span>

              <span className="text-[9px] leading-3 text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Figma illustration */}
        <img
          src={NotForYouImage}
          alt=""
          className="absolute bottom-0 right-5 z-0 w-[150px] object-contain"
        />

      </div>
    </section>
  );
};

export default WhoThisIsFor;