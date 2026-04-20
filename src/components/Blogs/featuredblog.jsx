import { featuredBlogs } from "../blogdata";
import FeaturedCard from "./FeaturedCard";

function FeaturedBlogs() {
  return (
    <section className="w-full py-20 bg-[#f8fafc]">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 animate-slide-in-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured <span className="text-primary">Insights</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our most popular and trending articles
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* BIG LEFT */}
          <div className="md:col-span-2 md:row-span-2 animate-slide-in-left">
            <FeaturedCard blog={featuredBlogs[0]} large />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 flex flex-col gap-6 animate-slide-in-right">
            <FeaturedCard blog={featuredBlogs[1]} />
            <FeaturedCard blog={featuredBlogs[2]} />
          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedBlogs;