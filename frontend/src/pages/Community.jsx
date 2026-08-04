import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
// image imports
import Desire from "../assets/community/Desire.png";
import Ebube from "../assets/community/Ebube.png";
import Uchenna from "../assets/community/Uchenna.png";
import Borasky from "../assets/community/Borasky.png";
import David from "../assets/community/David.png";
import Media from "../assets/community/Media.png";
import Grace from "../assets/community/Grace.png";
import Chigozie from "../assets/community/Chigozie.png";
import Precious from "../assets/community/Precious.png";
import Chizaram from "../assets/community/Chizaram.png";
import Miriam from "../assets/community/Miriam.png";
import Evans from "../assets/community/Evans.png";
import { FaCode } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft, FaSearch } from "react-icons/fa";
import { LiaPenNibSolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";

// ─── Member Data ────────────────────────────────────────────────────────────

const developers = [
  {
    img: Desire,
    name: "Desire Levi",
    role: (
      <>
        <span className="font-bold">Founder; </span>Software Engineer, Network
        Engineer, IT Consultant
      </>
    ),
    bio: "Founder dedicated to helping startups and emerging professionals build impactful products through collaboration and innovation.",
    tags: ["PHP", "Developer", "MERN Stack"],
    projects: [
      { name: "DueSpace Platform", role: "Founder/Developer" },
      { name: "Beacon Academy", role: "Developer" },
    ],
  },
  {
    img: Ebube,
    name: "Ebube Onwukwe",
    role: "Team lead for DueSpace Labs; Full Stack Developer",
    bio: "Leading development teams while building scalable, high-performance web applications from concept to deployment.",
    tags: [
      "React",
      "Django",
      "PostgreSQL",
      "TailwindCSS",
      "Developer",
      "Next.js",
    ],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
  {
    img: Uchenna,
    name: "Uchenna Igwe",
    role: "Team lead, Full Stack Developer",
    bio: "Building scalable, end-to-end web applications that combine seamless user experiences with robust backend systems.",
    tags: [
      "Javascript",
      "HTML",
      "React",
      "MySQL",
      "Developer",
      "TailwindCSS",
      "Bootstrap",
    ],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
  {
    img: Borasky,
    name: "Borasky",
    role: "Software Developer, AI Developer",
    bio: "Building intelligent software solutions by combining modern application development with AI-powered innovation..",
    tags: ["Javascript", "HTML", "CSS", "Developer", "Github", "tailwindCSS"],
    projects: [{ name: "DueSpace Platform", role: "Developer" }],
  },
];

const designers = [
  {
    img: David,
    name: "David Uwazie",
    role: (
      <>
        Team lead of DueSpace studio; Project Manager, Visual Designer, Video
        Editor, Motion Designer
      </>
    ),
    bio: "Leading DueSpace Studio by managing creative projects and delivering impactful visual, motion, and video experiences.",
    tags: [
      "Figma",
      "Adobe Illustrator",
      "Capcut",
      "Adobe Photoshop",
      "Canva",
      "Motion Graphics",
    ],
    projects: [
      { name: "DueSpace Platform", role: "Designer" },
      { name: "Beacon Academy", role: "Designer" },
      { name: "Mmachi Financial", role: "Designer" },
    ],
  },
  {
    img: Media,
    name: "Media.Designs",
    role: <>Graphics Manager; Graphic/Brand Designer</>,
    bio: "Leading creative design initiatives while crafting distinctive brand identities and impactful visual experiences..",
    tags: ["Adobe Photoshop", "Canva", "Figma", "Corel Draw", "Graphics"],
    projects: [
      { name: "DueSpace Platform", role: "Designer" },
      { name: "Mmachi Financial", role: "Designer" },
    ],
  },
  {
    img: Grace,
    name: "Grace Chijioke",
    role: "Product Design Manager; UI/UX Designer, Product Design, Product Manager",
    bio: "Passionate about Leading product teams to design  and craft intuitive digital experiences that are user centered with a focus on accessibility and modern product design.",
    tags: ["Figma", "Canva", "UI Design", "Notion"],
    projects: [{ name: "DueSpace Platform", role: "Designer" }],
  },
  {
    img: Chigozie,
    name: "Chigozie Nze",
    role: <>Graphic/Brand Designer</>,
    bio: "Crafting distinctive brand identities and visual experiences that help businesses stand out and connect with their audience.",
    tags: ["Adobe Photoshop", "Canva", "Graphics"],
    projects: [
      { name: "DueSpace Platform", role: "Designer" },
      { name: "Mmachi Financial", role: "Designer" },
    ],
  },
  {
    img: Evans,
    name: "Ofoha Evans",
    role: <>Graphic/Brand Designer</>,
    bio: "Help brands stand out through strong and visual identity and consistent design.",
    tags: ["Adobe Photoshop", "Canva", "Corel Draw", "Graphics"],
    projects: [
      { name: "DueSpace Platform", role: "Designer" },
      { name: "Mmachi Financial", role: "Designer" },
    ],
  },
];

const product = [
  {
    img: David,
    name: "David Uwazie",
    role: (
      <>
        Team lead of DueSpace studio; Project Manager, Visual Designer, Video
        Editor, Motion Designer
      </>
    ),
    bio: "Leading DueSpace Studio by managing creative projects and delivering impactful visual, motion, and video experiences.",
    tags: [
      "Figma",
      "Adobe Illustrator",
      "Capcut",
      "Adobe Photoshop",
      "Canva",
      "Motion Graphics",
    ],
    projects: [
      { name: "DueSpace Platform", role: "Designer" },
      { name: "Beacon Academy", role: "Designer" },
      { name: "Mmachi Financial", role: "Designer" },
    ],
  },
  {
    img: Grace,
    name: "Grace Chijioke",
    role: "Product Design Manager; UI/UX Designer, Product Design, Product Manager",
    bio: "Passionate about Leading product teams to design  and craft intuitive digital experiences that are user centered with a focus on accessibility and modern product design.",
    tags: ["Figma", "Canva", "UI Design", "Notion"],
    projects: [{ name: "DueSpace Platform", role: "Designer" }],
  },
  {
    img: Precious,
    name: "Precious Ononuju",
    role: "UI/UX Designer, Product Design",
    bio: "Crafts intuitive digital experiences that are user centered and visually engaging.",
    tags: ["Figma", "Canva", "UI Design", "Corel Draw"],
    projects: [{ name: "DueSpace Platform", role: "Designer" }],
  },
];

const marketing = [
  {
    img: Chizaram,
    name: "Chizaram",
    role: "Business and Growth Analyst for DueSpace",
    bio: "Driving business  (DueSpace) growth through market research, strategic planning, and data-driven decision making.",
    tags: ["Notion", "Business Developer", "Analyst", "Marketing", "Growth"],
    projects: [{ name: "DueSpace Platform", role: "Growth Analyst" }],
  },
  {
    img: Miriam,
    name: "Miriam",
    role: "Social Media Manager",
    bio: "Building a thriving community by connecting people, managing talent, and creating engaging digital content.",
    tags: ["Notion", "Linkedin", "Social Media Marketing"],
    projects: [{ name: "DueSpace Platform", role: "Social Media Manager" }],
  },
];

// ─── Reusable Member Card ────────────────────────────────────────────────────

const MemberCard = ({ member }) => (
  <div className="h-full rounded-2xl bg-[linear-gradient(to_bottom,#0000004D_0%,#BA68C866_50%,#0000004D_100%)] p-px">
    <div className="card h-full rounded-2xl bg-[linear-gradient(to_bottom,#E2BCE8_0%,#E2BCE8_5%,#FFFFFF_13%,#FFFFFF_100%)] p-4 pb-5">
      {/* Avatar */}
      <img
        src={member.img}
        alt={member.name}
        className="size-20 rounded-full mb-1"
      />

      {/* Name & role */}
      <h1 className="font-bold text-xl">{member.name}</h1>
      <p className="w-80 max-w-full leading-7">{member.role}</p>

      {/* Bio */}
      <p className="text-sm leading-loose mt-2">{member.bio}</p>

      <hr className="text-[#7C3AED33] my-4" />

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {member.tags.map((tag, i) => (
          <div
            key={i}
            className="py-1.25 px-4 bg-[#7C3AED33] rounded-xl text-[#7C3AED] font-semibold"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-auto">
      <hr className="text-[#7C3AED33] mt-5 mb-2" />

      {/* Projects */}
      <h1 className="font-bold">Project(s)</h1>
      <div className="flex gap-2 mt-2 flex-wrap">
        {member.projects.map((proj, i) => (
          <div
            key={i}
            className="font-semibold border text-center pt-2 px-1 rounded-xl leading-loose"
          >
            <p className="text-sm">{proj.name}</p>
            <p className="text-xs">{proj.role}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
);

// ─── Section Header ──────────────────────────────────────────────────────────

const SectionHeader = ({
  icon,
  label,
  showViewAll,
  onViewAll,
  isViewingAll,
}) => (
  <div className="flex justify-between items-center my-8 font-semibold text-lg">
    <div className="flex items-center gap-2">
      {icon}
      <p>{label}</p>
    </div>
    {/* Back chevron when viewing all; "View All" button otherwise */}
    {isViewingAll ? (
      <div
        className="text-[#7C3AED] flex items-center cursor-pointer"
        onClick={onViewAll}
      >
        <FaChevronLeft className="size-5" />
      </div>
    ) : (
      showViewAll && (
        <div
          className="text-[#7C3AED] flex items-center gap-1 cursor-pointer"
          onClick={onViewAll}
        >
          <p>View All</p>
          <FaChevronRight />
        </div>
      )
    )}
  </div>
);

// ─── Category filter tabs ────────────────────────────────────────────────────

const FILTERS = ["All", "Design", "Development", "Product", "Marketing"];

// ─── Main Component ──────────────────────────────────────────────────────────

export const Community = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  // Tracks which category's "View All" was clicked; null means normal preview mode
  const [viewAllCategory, setViewAllCategory] = useState(null);

  /**
   * Filters a members array by search query (name, bio, tags, projects).
   * When viewingAll is true the 3-card cap is lifted so every member is shown.
   */
  const filterMembers = (members, viewingAll = false) => {
    const q = search.toLowerCase().trim();
    const filtered = q
      ? members.filter((m) => {
          const nameMatch = m.name.toLowerCase().includes(q);
          const bioMatch = m.bio.toLowerCase().includes(q);
          const tagMatch = m.tags.some((t) => t.toLowerCase().includes(q));
          const projMatch = m.projects.some((p) =>
            p.name.toLowerCase().includes(q),
          );
          return nameMatch || bioMatch || tagMatch || projMatch;
        })
      : members;
    // Only cap at 3 when we are NOT in view-all mode for this section
    return viewingAll ? filtered : filtered.slice(0, 3);
  };

  // When viewing all of a category, only that section is shown.
  // Otherwise the active filter tab controls visibility.
  const showSection = (category) =>
    viewAllCategory
      ? viewAllCategory === category
      : activeFilter === "All" || activeFilter === category;

  const devCards = filterMembers(developers, viewAllCategory === "Development");
  const designCards = filterMembers(designers, viewAllCategory === "Design");
  const productCards = filterMembers(product, viewAllCategory === "Product");
  const marketCards = filterMembers(marketing, viewAllCategory === "Marketing");

  return (
    <>
      <SEO
        title="Meet Our Builders | DueSpace Community"
        description="Meet the developers, UI/UX designers, product managers, and growth strategists building real-world digital products inside the DueSpace community."
        keywords="DueSpace Builders, DueSpace Community, Tech Talent Directory, African Developers, UI UX Designers, Product Managers, Growth Analysts, Software Engineers Africa"
        url="https://duespace.com/community"
        image="/Logo.jpg"
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Meet Our Builders - DueSpace Community",
          "description": "Directory of tech professionals and creative builders inside the DueSpace network.",
          "url": "https://duespace.com/community"
        }}
      />
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mx-auto my-10 w-[90%] max-w-2xl font-manrope md:max-w-295 md:my-16"
      >
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          OUR BUILDERS
        </span>
      </div>
      {/* ── Page Header — hidden when viewing all of a category ── */}
      {!viewAllCategory && (
        <>
          <h2 className="mb-4 text-[32px] w-80 font-bold text-[#0B0F1A] font-manrope md:w-[58%] md:text-5xl">
            Meet the people building inside DueSpace
          </h2>
          <p className="text-4 w-84.25 mb-5 md:w-[65%] md:text-lg">
            Designers, developers, product managers and creatives collaborating
            on real products through structured sprints.
          </p>
        </>
      )}

      {/* ── Search Bar ── */}
      <div className="relative mb-4">
        {/* Search icon inside the input on the left */}
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search builder..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
        />
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="flex gap-2 flex-wrap mb-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`py-1.5 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer
              ${
                activeFilter === f
                  ? "bg-[#7C3AED] text-white"
                  : "bg-[#7C3AED1A] text-[#7C3AED] hover:bg-[#7C3AED33]"
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
            onViewAll={() =>
              setViewAllCategory(
                viewAllCategory === "Development" ? null : "Development",
              )
            }
          />
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {devCards.length > 0 ? (
              devCards.map((m, i) => <MemberCard key={i} member={m} />)
            ) : (
              <p className="text-sm text-gray-400">
                No developers match your search.
              </p>
            )}
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
            onViewAll={() =>
              setViewAllCategory(viewAllCategory === "Design" ? null : "Design")
            }
          />
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {designCards.length > 0 ? (
              designCards.map((m, i) => <MemberCard key={i} member={m} />)
            ) : (
              <p className="text-sm text-gray-400">
                No designers match your search.
              </p>
            )}
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
            onViewAll={() =>
              setViewAllCategory(
                viewAllCategory === "Product" ? null : "Product",
              )
            }
          />
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {productCards.length > 0 ? (
              productCards.map((m, i) => <MemberCard key={i} member={m} />)
            ) : (
              <p className="text-sm text-gray-400">
                No product members match your search.
              </p>
            )}
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
            onViewAll={() =>
              setViewAllCategory(
                viewAllCategory === "Marketing" ? null : "Marketing",
              )
            }
          />
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {marketCards.length > 0 ? (
              marketCards.map((m, i) => <MemberCard key={i} member={m} />)
            ) : (
              <p className="text-sm text-gray-400">
                No marketing members match your search.
              </p>
            )}
          </div>
        </>
      )}
    </motion.section>
    </>
  );
};
