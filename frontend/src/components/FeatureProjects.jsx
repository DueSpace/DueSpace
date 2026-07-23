import React from 'react'

// Asset Imports
import Mmachi from '../assets/MmachiBrand.png'
import Beacon from '../assets/BeaconAcademy.png'
import Did from '../assets/Did.png'
import Outcome from '../assets/Outcome.png'
import Team from '../assets/Team.png'
import Timeline from '../assets/Timeline.png'

/**
 * Single source of truth for project metadata and content.
 */
const PROJECTS_DATA = [
  {
    id: 'mmachi-financials',
    title: 'Mmachi Financials Brand Identity',
    badgeText: 'Brand Delivered',
    imageSrc: Mmachi,
    imageAlt: 'Mmachi Financials',
    details: [
      {
        icon: Timeline,
        label: 'Timeline',
        value: '10 Days',
      },
      {
        icon: Team,
        label: 'Team',
        value: '1 Brand Designer, 1 Graphic Designer, 1 PM',
      },
      {
        icon: Did,
        label: 'What We Did',
        value: 'Brand Strategy, Visual Identity, Logo Design',
      },
      {
        icon: Outcome,
        label: 'Outcome',
        value:
          'Delivered A Complete Visual Identity System That Positioned The Startup For Launch Across Digital And Print Platforms.',
      },
    ],
  },
  {
    id: 'beacon-academy',
    title: "The Beacon Academy's Website",
    badgeText: 'Work Delivered',
    imageSrc: Beacon,
    imageAlt: 'Beacon Academy',
    details: [
      {
        icon: Timeline,
        label: 'Timeline',
        value: '2 Weeks',
      },
      {
        icon: Team,
        label: 'Team',
        value: '2 Developers, 1 Project Manager',
      },
      {
        icon: Did,
        label: 'What We Did',
        value:
          'Designed A Responsive, User-Friendly Website With Intuitive Navigation And A Premium Visual Identity',
      },
      {
        icon: Outcome,
        label: 'Outcome',
        value:'Delivered A Professional Platform That Enhances Brand Presence, Improves User Experience, And Drives Student Engagement.',
      },
    ],
  },
]

/**
 * Sub-component to render individual detail rows cleanly.
 */
const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-start">
    {/* Left Column: Icon + Label */}
    <div className="flex w-36 shrink-0 items-center gap-1.5 text-[0.9rem] text-black/60">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-7 w-7 object-contain opacity-70"
      />
      <span>{label}</span>
    </div>

    {/* Right Column: Value Description */}
    <div className="ml-6 mt-1 text-black/60 leading-snug">
      {value}
    </div>
  </div>
)

/**
 * Reusable card wrapper for each project.
 */
const ProjectCard = ({ project }) => (
  <article className="mt-8 first:mt-0">
    {/* Project Image Header */}
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Project Card Body */}
    <div className="rounded-b-2xl bg-white p-4 shadow-sm">
      {/* Title & Badge Row */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-black">
          {project.title}
        </h3>
        {/* Restored rounded-full for card badges */}
        <span className="badge badge-outline rounded-full shrink-0 border border-[#FFC100] px-3 py-3 text-sm text-[#FFC100]">
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
)

/**
 * Main FeatureProjects Section
 */
export const FeatureProjects = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* Section Header with Restored rounded-full Pill */}
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
  )
}