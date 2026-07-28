import React from "react";
import { FaLaptopCode, FaGem, FaPlay, FaArrowRight } from "react-icons/fa";
import { PiPenNibStraightFill } from "react-icons/pi";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build scalable web applications, platforms and MVPs engineered for growth.",
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that drive adoption and engagement.",
    icon: PiPenNibStraightFill,
  },
  {
    id: 3,
    title: "Brand & Graphics",
    description:
      "Strong brands that communicate your value and stand out in the market.",
    icon: FaGem,
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Engaging motion that tells your story and elevates your product.",
    icon: FaPlay,
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Icon className="mb-6 text-4xl text-[#7C3AED]" />

      <h3 className="text-2xl font-semibold text-black">
        {service.title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        {service.description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-medium text-[#7C3AED] hover:gap-3 transition-all">
        Learn more
        <FaArrowRight className="text-sm" />
      </button>
    </article>
  );
};

export const WhatWeBuild = () => {
  return (
    <section className="mx-auto my-16 w-[95%] max-w-2xl">

      {/* Badge */}

      <span className="rounded-full border border-[#7C3AED] px-6 py-3 text-xs tracking-[0.18em] text-[#7C3AED]">
        WHAT WE BUILD
      </span>

      {/* Heading */}

      <h2 className="mt-8 text-5xl font-bold leading-tight text-black">
        Services That Bring Your Product To Life
      </h2>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        Everything you need to launch and scale your digital product.
      </p>

      {/* Cards */}

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
};