import Due from "../assets/DueSpace.png";

// Icons
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import { LuFacebook } from "react-icons/lu";

// Social media links
const socialLinks = [
  {
    href: "#",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
  {
    href: "#",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "#",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "#",
    label: "X (Twitter)",
    icon: <VscTwitter />,
  },
  {
    href: "#",
    label: "Facebook",
    icon: <LuFacebook />,
  },
];

export const Footer = () => {
  return (
    <footer className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* Top divider */}
      <hr className="border" />

      {/* Newsletter section */}
      <div className="mx-2 my-4">
        {/* Company logo */}
        <img
          src={Due}
          alt="DueSpace"
          className="ml-1 w-25"
        />

        {/* Newsletter heading */}
        <p className="font-space mt-3 ml-0">
          [GLOBAL DISPATCH]
        </p>

        {/* Newsletter description */}
        <p className="ml-1">
          Weekly logs on execution, sprint frameworks, and product delivery
        </p>

        {/* Email subscription form */}
        <form className="my-3 ml-1">
          <div className="relative w-[90%]">
            <input
              type="email"
              name="email"
              required
              aria-label="Email Address"
              placeholder="Enter your Email address"
              className="w-full border border-[#BA68C8] py-2.5 pr-12 text-sm focus:outline-none focus:border-[#7C3AED] placeholder:text-[#000000B2]"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-[#000000B2]"
              aria-label="Subscribe"
            >
              <IoArrowForwardCircleOutline size={23} />
            </button>
          </div>
        </form>
      </div>

      {/* Bottom divider */}
      <hr className="my-4 border" />

      {/* Copyright */}
      <p className="ml-2 font-manrope text-xs">
        &copy; {new Date().getFullYear()} DueSpace. All rights reserved.
      </p>

      {/* Social media links */}
      <div className="mx-5 mt-8 mb-2 flex items-center justify-between text-2xl">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
