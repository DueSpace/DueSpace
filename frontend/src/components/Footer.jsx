import Due from "../assets/DueSpace.png";

// Icons
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
// import { LuFacebook } from "react-icons/lu";

// Social media links
const socialLinks = [
  {
    href: "https://wa.me/2348102950051",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
  },
  {
    href: "https://www.linkedin.com/company/duespace/?viewAsMember=true",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
  {
    href: "https://www.instagram.com/the_due_space?igsh=MWhzMDljM2J0YWFxcw==",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://github.com/DueSpace",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "https://x.com/the_due_network?s=21&t=PjKx8CGWUy106A5w9upkVA",
    label: "X (Twitter)",
    icon: <VscTwitter />,
  },
  // {
  //   href: "#",
  //   label: "Facebook",
  //   icon: <LuFacebook />,
  // },
];

export const Footer = () => {
 return (
  <footer className="mx-auto my-10 w-[95%] max-w-2xl font-sans md:my-16 md:max-w-295">
    {/* Top divider */}
    <hr className="border border-black/30" />

    {/* ================= Newsletter ================= */}
    <div className="mx-2 my-8 md:grid md:grid-cols-[330px_1fr] md:items-center md:gap-16 lg:block">
      {/* Logo */}
      <div className="md:flex md:items-center md:h-full">
        <img
          src={Due}
          alt="DueSpace"
          className="w-26 md:w-72 lg:mb-12"
        />
      </div>

      {/* Right Content */}
      <div>
        <p className="mt-4 font-space md:mt-0">
          [GLOBAL DISPATCH]
        </p>

        <p className="mt-3 max-w-xl text-lg leading-relaxed">
          Weekly logs on execution, sprint frameworks, and product delivery
        </p>

        <form className="mt-6 lg:mb-20">
          <div className="relative max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your Email address"
              className="w-full border border-[#BA68C8] py-2 pr-12 text-sm outline-none focus:border-[#7C3AED]"
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
            >
              <IoArrowForwardCircleOutline size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>

    {/* Bottom divider */}
    <hr className="border border-black/30" />

    {/* ================= Bottom ================= */}
    <div className="mx-2 mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      {/* Copyright */}
      <p className="font-manrope text-xs md:text-sm">
        &copy; {new Date().getFullYear()} DueSpace. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-between text-2xl md:gap-10 md:justify-end">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors hover:text-[#7C3AED]"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
};
