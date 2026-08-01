import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../assets/hero.png'
import Due2 from '../assets/DueSpace.png'
import { FaCode } from "react-icons/fa6"
import { FaChevronRight, FaChevronLeft, FaSearch } from "react-icons/fa"
import { LiaPenNibSolid } from "react-icons/lia"
import { BsBoxSeam } from "react-icons/bs"
import { RiLightbulbFlashFill } from "react-icons/ri"

// ─── Member Data ────────────────────────────────────────────────────────────

const developers = [
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
]

const designers = [
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
]

const product = [
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
]

const marketing = [
  {
    img: Hero,
    name: "Desire Levi",
    role: <><span className="font-bold">Founder; </span>Software Engineer, Network Engineer, IT Consultant</>,
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Due2,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS", "Developer", "Next.js"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
]

// ─── Reusable Member Card ────────────────────────────────────────────────────

const MemberCard = ({ member }) => (
  <div className='rounded-2xl bg-[linear-gradient(to_bottom,#0000004D_0%,#BA68C866_50%,#0000004D_100%)] p-px'>
    <div className="card rounded-2xl bg-[linear-gradient(to_bottom,#E2BCE8_0%,#E2BCE8_5%,#FFFFFF_13%,#FFFFFF_100%)] p-4 pb-5">

      {/* Avatar */}
      <img src={member.img} alt={member.name} className='size-20 rounded-full mb-1' />

      {/* Name & role */}
      <h1 className='font-bold text-xl'>{member.name}</h1>
      <p className='w-80 leading-7'>{member.role}</p>

      {/* Bio */}
      <p className='text-sm leading-loose mt-2'>{member.bio}</p>

      <hr className='text-[#7C3AED33] my-4' />

      {/* Skill tags */}
      <div className='flex flex-wrap gap-2'>
        {member.tags.map((tag, i) => (
          <div key={i} className='py-1.25 px-4 bg-[#7C3AED33] rounded-xl text-[#7C3AED] font-semibold'>
            {tag}
          </div>
        ))}
      </div>

      <hr className='text-[#7C3AED33] mt-5 mb-2' />

      {/* Projects */}
      <h1 className='font-bold'>Project(s)</h1>
      <div className='flex gap-4 mt-2 flex-wrap'>
        {member.projects.map((proj, i) => (
          <div key={i} className='font-semibold border text-center pt-2 px-2.5 rounded-xl leading-loose'>
            <p>{proj.name}</p>
            <p className='text-sm'>{proj.role}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
)

// ─── Section Header ──────────────────────────────────────────────────────────

const SectionHeader = ({ icon, label, showViewAll, onViewAll, isViewingAll }) => (
  <div className='flex justify-between items-center my-8 font-semibold text-lg'>
    <div className='flex items-center gap-2'>
      {icon}
      <p>{label}</p>
    </div>
    {/* Back chevron when viewing all; "View All" button otherwise */}
    {isViewingAll ? (
      <div
        className='text-[#7C3AED] flex items-center cursor-pointer'
        onClick={onViewAll}
      >
        <FaChevronLeft className='size-5' />
      </div>
    ) : showViewAll && (
      <div
        className='text-[#7C3AED] flex items-center gap-1 cursor-pointer'
        onClick={onViewAll}
      >
        <p>View All</p>
        <FaChevronRight />
      </div>
    )}
  </div>
)

// ─── Category filter tabs ────────────────────────────────────────────────────

const FILTERS = ["All", "Design", "Development", "Product", "Marketing"]

// ─── Main Component ──────────────────────────────────────────────────────────

export const Community = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  // Tracks which category's "View All" was clicked; null means normal preview mode
  const [viewAllCategory, setViewAllCategory] = useState(null)

  /**
   * Filters a members array by search query (name, bio, tags, projects).
   * When viewingAll is true the 3-card cap is lifted so every member is shown.
   */
  const filterMembers = (members, viewingAll = false) => {
    const q = search.toLowerCase().trim()
    const filtered = q
      ? members.filter(m => {
          const nameMatch = m.name.toLowerCase().includes(q)
          const bioMatch = m.bio.toLowerCase().includes(q)
          const tagMatch = m.tags.some(t => t.toLowerCase().includes(q))
          const projMatch = m.projects.some(p => p.name.toLowerCase().includes(q))
          return nameMatch || bioMatch || tagMatch || projMatch
        })
      : members
    // Only cap at 3 when we are NOT in view-all mode for this section
    return viewingAll ? filtered : filtered.slice(0, 3)
  }

  // When viewing all of a category, only that section is shown.
  // Otherwise the active filter tab controls visibility.
  const showSection = (category) =>
    viewAllCategory
      ? viewAllCategory === category
      : activeFilter === "All" || activeFilter === category

  const devCards      = filterMembers(developers,  viewAllCategory === "Development")
  const designCards   = filterMembers(designers,   viewAllCategory === "Design")
  const productCards  = filterMembers(product,     viewAllCategory === "Product")
  const marketCards   = filterMembers(marketing,   viewAllCategory === "Marketing")

  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mx-auto my-10 w-[90%] max-w-2xl font-manrope"
    >

      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          OUR BUILDERS
        </span>
      </div>
      {/* ── Page Header — hidden when viewing all of a category ── */}
      {!viewAllCategory && (
        <>
          <h2 className="mb-4 text-[32px] w-80 font-bold text-[#525252] font-manrope">
            Meet the people building inside DueSpace
          </h2>
          <p className="text-4 w-84.25 mb-5">
            Designers, developers, product managers and creatives collaborating on real products through structured sprints.
          </p>
        </>
      )}

      {/* ── Search Bar ── */}
      <div className='relative mb-4'>
        {/* Search icon inside the input on the left */}
        <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none' />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search builder..."
          className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors'
        />
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className='flex gap-2 flex-wrap mb-2'>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`py-1.5 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer
              ${activeFilter === f
                ? 'bg-[#7C3AED] text-white'
                : 'bg-[#7C3AED1A] text-[#7C3AED] hover:bg-[#7C3AED33]'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Developers Section ── */}
      {showSection("Development") && (
        <>
          <SectionHeader
            icon={<FaCode className="text-[#7C3AED] size-8" />}
            label="Developers"
            showViewAll={developers.length >= 3}
            isViewingAll={viewAllCategory === "Development"}
            onViewAll={() => setViewAllCategory(
              viewAllCategory === "Development" ? null : "Development"
            )}
          />
          <div className='space-y-4'>
            {devCards.length > 0
              ? devCards.map((m, i) => <MemberCard key={i} member={m} />)
              : <p className='text-sm text-gray-400'>No developers match your search.</p>
            }
          </div>
        </>
      )}

      {/* ── Designers Section ── */}
      {showSection("Design") && (
        <>
          <SectionHeader
            icon={<LiaPenNibSolid className="text-[#7C3AED] size-11" />}
            label="Designers"
            showViewAll={designers.length >= 3}
            isViewingAll={viewAllCategory === "Design"}
            onViewAll={() => setViewAllCategory(
              viewAllCategory === "Design" ? null : "Design"
            )}
          />
          <div className='space-y-4'>
            {designCards.length > 0
              ? designCards.map((m, i) => <MemberCard key={i} member={m} />)
              : <p className='text-sm text-gray-400'>No designers match your search.</p>
            }
          </div>
        </>
      )}

      {/* ── Product Section ── */}
      {showSection("Product") && (
        <>
          <SectionHeader
            icon={<BsBoxSeam className="text-[#7C3AED] size-8" />}
            label="Product"
            showViewAll={product.length >= 3}
            isViewingAll={viewAllCategory === "Product"}
            onViewAll={() => setViewAllCategory(
              viewAllCategory === "Product" ? null : "Product"
            )}
          />
          <div className='space-y-4'>
            {productCards.length > 0
              ? productCards.map((m, i) => <MemberCard key={i} member={m} />)
              : <p className='text-sm text-gray-400'>No product members match your search.</p>
            }
          </div>
        </>
      )}

      {/* ── Marketing Section ── */}
      {showSection("Marketing") && (
        <>
          <SectionHeader
            icon={<RiLightbulbFlashFill className="text-[#7C3AED] size-9" />}
            label="Marketing"
            showViewAll={marketing.length >= 3}
            isViewingAll={viewAllCategory === "Marketing"}
            onViewAll={() => setViewAllCategory(
              viewAllCategory === "Marketing" ? null : "Marketing"
            )}
          />
          <div className='space-y-4'>
            {marketCards.length > 0
              ? marketCards.map((m, i) => <MemberCard key={i} member={m} />)
              : <p className='text-sm text-gray-400'>No marketing members match your search.</p>
            }
          </div>
        </>
      )}

    </motion.section>
  )
}
