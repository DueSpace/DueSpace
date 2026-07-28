import { useState } from "react";
import Due from "../assets/DueSpace.png";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Main navigation header
    <header className="mx-auto mt-5 mb-10 flex w-[95%] max-w-2xl items-center justify-between bg-white py-3 pr-3 font-sans">
      {/* Company logo */}
      <img src={Due} alt="DueSpace Logo" className="w-25" />

      {/* Mobile navigation menu button */}
      <nav>
        <div>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="cursor-pointer sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`${isOpen ? "absolute right-0 top-16 z-50 flex w-full flex-col gap-4 bg-white p-5 shadow-md sm:hidden " : "hidden"}`}
        >
          <li className="py-2">Join The Network</li>
          <li className="py-2">Services</li>
          <li className="py-2">Get in Touch</li>
          <li className="py-2">Community</li>
          <li className="py-2">Our Story</li>
        </ul>
      </nav>
    </header>
  );
};
