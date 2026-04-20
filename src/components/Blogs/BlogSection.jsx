import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  // ✅ NEW STATES
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  // ✅ FETCH DATA
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setCategories(data.categories);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ RESET PAGINATION
  useEffect(() => {
    setVisibleCount(4);
  }, [active, search]);

  // ✅ FILTER + SEARCH
  const filteredBlogs = blogs
    .filter((blog) =>
      active === "All" ? true : blog.tag === active
    )
    .filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );

  // ✅ PAGINATION
  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  // ✅ LOADING
  if (!blogs.length) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading blogs...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#f3e7dc] py-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our <span className="text-primary">Blogs</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Latest insights on web development, UI/UX, SEO & modern tech trends.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* 🔹 SIDEBAR */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">

            {/* Categories */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-xl mb-4">Categories</h4>

              <ul className="space-y-2 text-sm">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => setActive(cat)}
                    className={`cursor-pointer px-3 py-2 rounded-lg transition flex justify-between items-center
                      ${
                        active === cat
                          ? "bg-primary text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {cat}
                    <span className="text-xs">→</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-xl mb-4">Recent Posts</h4>

              <div className="space-y-4">
                {blogs.slice(0, 3).map((blog, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedBlog(blog)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                  >
                    <img
                      src={blog.image}
                      alt=""
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-700 leading-tight">
                      {blog.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-xl mb-2">Stay Updated</h4>

              <button className="w-full bg-primary text-white py-2 rounded text-sm hover:opacity-90 transition">
                Contact Us
              </button>

              {/* Social */}
              <div className="mt-6 pt-5 border-t">
                <h5 className="text-sm font-semibold text-gray-700 mb-3">
                  Follow Us
                </h5>

                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 flex items-center justify-center rounded-xl 
                      bg-gray-100 text-primary hover:bg-primary hover:text-white 
                      transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 🔹 BLOG CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* 🔍 SEARCH */}
          {!selectedBlog && (
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg outline-none text-sm focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          {/* DETAIL VIEW */}
          {selectedBlog ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={selectedBlog.image}
                alt=""
                className="w-full h-[350px] object-cover"
              />

              <div className="p-6">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-sm text-primary mb-4"
                >
                  ← Back to Blogs
                </button>

                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-2xl">
                  {selectedBlog.tag}
                </span>

                <h2 className="text-2xl font-semibold mt-3">
                  {selectedBlog.title}
                </h2>

                <p className="text-gray-600 mt-4">
                  {selectedBlog.desc}
                </p>

                <p className="text-xs text-gray-400 mt-4">
                  {selectedBlog.date}
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              {/* NO RESULT */}
              {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                  No blogs found 😢
                </p>
              )}

              <AnimatePresence>
                {visibleBlogs.map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    onClick={() => setSelectedBlog(blog)}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer
                      ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-[37%] h-[270px]">
                      <img
                        src={blog.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-2xl">
                        {blog.tag}
                      </span>

                      <h3 className="text-xl font-semibold mt-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 mt-2 text-sm">
                        {blog.desc}
                      </p>

                      <span className="text-xs text-gray-400 mt-4 block">
                        {blog.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* LOAD MORE */}
              {visibleCount < filteredBlogs.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 4)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}

        </div>

      </div>
    </section>
  );
}