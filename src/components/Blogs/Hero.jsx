import { FaCode, FaPaintBrush, FaChartLine, FaBolt } from "react-icons/fa";

const topics = [
  { icon: FaCode, text: "Modern Web Development" },
  { icon: FaPaintBrush, text: "UI/UX Design Trends" },
  { icon: FaChartLine, text: "SEO & Marketing" },
  { icon: FaBolt, text: "Performance Optimization" },
];

function BlogHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/blog-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Light overlay for better readability */}
        <div className="absolute inset-0 bg-blue-30/20 backdrop-blur-sm "></div>
      </div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-secondary animate-slide-in-left">
            Insights That <br />
            <span className="text-">Drive Innovation</span>
          </h1>

          <p className="text-secondary text-lg font-medium max-w-md animate-fade-in delay-200">
            Stay ahead with expert articles and strategies to grow your business.
          </p>

          <div className="flex justify-center md:justify-start gap-4 animate-fade-in delay-300">
            <button className="bg-primary font-bold text-md text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Blogs
            </button>
            <button className="border text-md font-bold text-secondary border-gray-500 px-8 py-4 rounded-md hover:bg-blue-100 hover:text-primary transition-all duration-300">
              Latest Posts
            </button>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="animate-slide-in-right delay-300">
          <div className="bg-white/50 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-gray-900 text-lg max-w-2xl font-semibold mb-4">
              Trending Topics
            </h3>

            <div className="space-y-3">
              {topics.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3  text-lg max-w-2xl bg-white/80 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <Icon className="text-primary" />
                  <span className="text-gray-800">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogHero;