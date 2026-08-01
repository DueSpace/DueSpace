import { RiArrowRightLongFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const WhoWeAre = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
      {/* Section Badge */}
      <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          WHO WE ARE
        </span>
      </div>

      {/* Section Heading */}
      <h2 className="text-xl font-bold text-gray-900">
        Your Partner In Building What's <br />
        Next
      </h2>

      {/* Section Description */}
      <div className="my-2">
        <p className="mb-3 w-[79%]">
          DueSpace connects startups with multidisciplinary product teams while
          helping emerging African professionals gain real-world experience
          through client delivery.
        </p>

        {/* Link to About/Story page */}
        <Link
          to="/our-story"
          aria-label="Learn more about DueSpace"
          className="font-semibold text-[#7C3AED]"
        >
          Our Story
          <RiArrowRightLongFill className="mb-0.5 ml-1 inline-block size-4.5" />
        </Link>
      </div>

      {/* Call-to-Action Card */}
      <div className="card my-20 bg-[#7C3AED] px-1.75 py-5 text-white">
        {/* Content wrapper (keeps alignment slightly left of center) */}
        <div className="mx-auto w-[60%] -translate-x-4">
          {/* CTA Heading */}
          <h3 className="text-3xl">Ready to Build Your Product?</h3>

          {/* CTA Description */}
          <p className="mt-2.5">
            Tell us what you're building. We'll assemble the right team to move
            from idea to launch.
          </p>

          {/* CTA Button */}
          <a href="https://tally.so/r/ODg90k">
            <button
              type="button"
              className="btn mt-4 w-[90%] rounded-xl border-none bg-white text-[16px] text-black"
            >
              Start a Project
              <RiArrowRightLongFill className="inline-block size-6" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
