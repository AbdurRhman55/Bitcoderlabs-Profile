const defaultImage =
  "https://via.placeholder.com/600x400?text=No+Image";


function FeaturedCard({ blog, large }) {
    console.log(blog);
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl ${
        large ? "h-[420px]" : "h-[200px]"
      } animate-fade-in`}
    >
      {/* Image */}
      <img
        src={blog.image || defaultImage}
        alt={blog.title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Hover Overlay (Primary color) */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">
          Featured
        </p>

        <h3 className={`${large ? "text-2xl" : "text-base"} font-semibold leading-snug`}>
          {blog.title}
        </h3>
      </div>
    </div>
  );
}

export default FeaturedCard;