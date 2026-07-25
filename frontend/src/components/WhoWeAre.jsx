import { RiArrowRightLongFill } from "react-icons/ri";


export const WhoWeAre = () => {
  return (
    <section className="mx-auto my-10 w-[95%] max-w-2xl font-sans">
        <div className="mb-4">
        <span className="badge badge-outline rounded-full border border-[#7C3AED] p-5 font-space text-xs text-[#7C3AED]">
          WHO WE ARE
        </span>
      </div>
      <h2 className="text-xl font-bold text-gray-900">
        Your Partner In Building What's <br />Next
      </h2>
      <div className="my-2">
        <p className="w-[79%] mb-3">DueSpace connects startups with multidisciplinary product teams while helping the emerging african professionals gain real-world experience through client delivery</p>
        <a 
            href=""
            className="text-[#7C3AED] font-semibold"
            >
                Our Story
                <RiArrowRightLongFill className="inline-block ml-1 mb-0.5 size-4.5" />
        </a>
      </div>

        <div className="card my-20 bg-[#7C3AED] px-2 py-5 text-white">
            <div className="mx-auto w-[60%] -translate-x-4">
                <h1 className="text-3xl">
                Ready to Build Your Product?
                </h1>

                <p className="mt-2.5">
                Tell us what you're building. We'll assemble the right team to move from
                idea to launch.
                </p>

                <button className="btn mt-4 w-[90%] rounded-xl border-none bg-white text-lg text-black">
                Start a Project
                <RiArrowRightLongFill className="inline-block size-6" />
                </button>
            </div>
        </div>
    </section>
  )
}
