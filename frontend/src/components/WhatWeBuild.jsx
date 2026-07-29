import React from "react";

// Icon imports from react-icons library
import { FaLaptopCode } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdSmartDisplay } from "react-icons/md";
import { PiPenNibLight } from "react-icons/pi";
import { Link } from "react-router-dom";

/**
 * Service offerings dataset containing title, description, and corresponding icon component.
 */
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
    icon: PiPenNibLight,
  },
  {
    id: 3,
    title: "Brand & Graphics",
    description:
      "Strong brands that communicate your value and stand out in the market.",
    icon: IoDiamondOutline,
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Engaging motion that tells your story and elevates your product.",
    icon: MdSmartDisplay,
  },
];

/**
 * ServiceCard Component
 * Renders an individual service card with icon, title, description, and action link.
 */
const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        {/* Service Icon */}
        <Icon className="mb-1 text-2xl text-[#7C3AED]" />

        {/* Service Title */}
        <h3 className="pr-17 text-base font-semibold text-black">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          {service.description}
        </p>
      </div>

      {/* Learn More Button */}
      <Link to="/services">
        <button className="mt-4 flex items-center gap-0.5 text-xs font-semibold text-[#7C3AED] transition-all hover:gap-2">
          Learn more
          <HiArrowLongRight className="mt-1 text-xl" />
        </button>
      </Link>
    </article>
  );
};

/**
 * WhatWeBuild Component
 * Section displaying company service offerings formatted in a two-column grid.
 */
export const WhatWeBuild = () => {
  return (
    <section className="mx-auto my-16 w-[95%] max-w-2xl">
      {/* Category Badge */}
      <span className="badge badge-outline mb-4 rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
        WHAT WE BUILD
      </span>

      {/* Section Heading */}
      <h2 className="mb-4 text-[20px] font-semibold text-gray-900">
        Services That Bring Your Product To Life
      </h2>

      {/* Section Subtitle */}
      <p className="mt-2 text-xs text-gray-900">
        Everything you need to launch and scale your digital product.
      </p>

      {/* Service Cards Grid (2 cards per row) */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
