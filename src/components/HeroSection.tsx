import bannerStack from "../assets/banner-stack.png";
// export interface HeroSectionProps {
//     prop: string
// }

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 justify-center items-center container mx-auto my-10">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-orange-600 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p className="text-[#475569] text-xl pr-5 my-15">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <button className="bg-linear-to-r from-orange-600 to-purple-600 text-white text-bold text-xl p-2 rounded-xl hover:scale-105  duration-200 active:scale-100">
            Explore Technologies
          </button>
          <button className="text-bold text-xl p-2 rounded-xl border border-gray-700 text-gray-700 mx-10 px-10 hover:scale-105  duration-200 active:scale-100">
            Learn More
          </button>
        </div>
        <div>
          <img src={bannerStack} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}
