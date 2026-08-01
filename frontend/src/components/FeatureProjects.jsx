import { TbMessageForward } from "react-icons/tb";
import { LuCalendar, LuClock4 } from "react-icons/lu";
import { AiOutlineTeam } from "react-icons/ai";

// Asset Imports
import Mmachi from "../assets/MmachiBrand.png";
import Beacon from "../assets/BeaconAcademy.png";

/**
 * Single source of truth for project metadata and content.
 */
const PROJECTS_DATA = [
  {
    id: "mmachi-financials",
    title: "Mmachi Financials Brand Identity",
    badgeText: "Brand Delivered",
    imageSrc: Mmachi,
    imageAlt: "Mmachi Financials",
    details: [
      {
        icon: LuClock4,
        label: "Timeline",
        value: "10 Days",
      },
      {
        icon: AiOutlineTeam,
        label: "Team",
        value: "1 Brand Designer, 1 Graphic Designer, 1 PM",
      },
      {
        icon: LuCalendar,
        label: "What We Did",
        value: "Brand Strategy, Visual Identity, Logo Design",
      },
      {
        icon: TbMessageForward,
        label: "Outcome",
        value:
          "Delivered A Complete Visual Identity System That Positioned The Startup For Launch Across Digital And Print Platforms.",
      },
    ],
  },
  {
    id: "beacon-academy",
    title: "The Beacon Academy's Website",
    badgeText: "Work Delivered",
    imageSrc: Beacon,
    imageAlt: "Beacon Academy",
    details: [
      {
        icon: LuClock4,
        label: "Timeline",
        value: "2 Weeks",
      },
      {
        icon: AiOutlineTeam,
        label: "Team",
        value: "2 Developers, 1 Project Manager",
      },
      {
        icon: LuCalendar,
        label: "What We Did",
        value:
          "Designed A Responsive, User-Friendly Website With Intuitive Navigation And A Premium Visual Identity",
      },
      {
        icon: TbMessageForward,
        label: "Outcome",
        value:
          "Delivered A Professional Platform That Enhances Brand Presence, Improves User Experience, And Drives Student Engagement.",
      },
    ],
  },
];

/**
 * Sub-component to render individual detail rows cleanly.
 */
const DetailRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start">
    {/* Left Column: Icon + Label */}
    <div className="flex w-36 shrink-0 items-center gap-1.5 text-[0.9rem] text-black/60">
      <Icon aria-hidden="true" className="h-7 w-7 opacity-70" />
      <span>{label}</span>
    </div>

    {/* Right Column: Value Description */}
    <div className="ml-6 mt-1 leading-snug text-black/60">{value}</div>
  </div>
);

/**
 * Reusable card wrapper for each project.
 */
const ProjectCard = ({ project }) => (
  <article className="mt-8 md:grid md:grid-cols-[.96fr_1.04fr] md:items-stretch">
    {/* Project Image Header */}
    <div className="overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="h-full w-full object-cover md:min-h-full"
      />
    </div>

    {/* Project Card Body */}
    <div className="rounded-b-2xl bg-white p-4 shadow-sm md:rounded-r-2xl md:rounded-bl-none md:p-7">
      {/* Title & Badge Row */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-black">{project.title}</h3>

        <span className="badge badge-outline shrink-0 rounded-full border border-[#FFC100] px-3 py-3 text-sm text-[#FFC100]">
          {project.badgeText}
        </span>
      </div>

      {/* Detail Metadata Grid */}
      <div className="space-y-5 text-sm">
        {project.details.map((detail, index) => (
          <DetailRow
            key={`${project.id}-detail-${index}`}
            icon={detail.icon}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>
    </div>
  </article>
);

/**
 * Main FeatureProjects Section
 */
export const FeatureProjects = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans md:max-w-[1180px]">
      {/* Section Header */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          FEATURED PROJECT
        </span>
      </div>

      <h1 className="mb-6 text-xl font-semibold text-gray-900">
        Real Brands. Real Impact
      </h1>

      {/* Projects List */}
      <div className="space-y-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
