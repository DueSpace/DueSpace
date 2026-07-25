import Due from "../assets/DueSpace.png";
import { FaBars } from "react-icons/fa6";

export const NavBar = () => {
  return (
    // Main navigation header
    <header className="mx-auto my-10 flex w-[95%] max-w-2xl items-center justify-between bg-white py-3 pr-3 font-sans">
      
      {/* Company logo */}
      <img
        src={Due}
        alt="DueSpace Logo"
        className="w-25"
      />

      {/* Mobile navigation menu button */}
      <nav>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="cursor-pointer"
        >
          <FaBars className="text-xl" />
        </button>
      </nav>
    </header>
  );
};