import React from "react";
import { FaCode, FaPaintBrush, FaChartLine, FaBolt } from "react-icons/fa";
import Button from "../common/Button";

const topics = [
  { icon: FaCode, text: "Modern Web Development" },
  { icon: FaPaintBrush, text: "UI/UX Design Trends" },
  { icon: FaChartLine, text: "SEO & Marketing" },
  { icon: FaBolt, text: "Performance Optimization" },
];

function BlogHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden pt-22">
      
      {/* VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/blog-hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-30/20 backdrop-blur-sm"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-secondary">
            Insights That <br />
            <span>Drive Innovation</span>
          </h1>

          <p className="text-secondary text-lg font-medium max-w-md">
            Stay ahead with expert articles and strategies.
          </p>

          <div className="flex justify-center md:justify-start gap-4">

            {/* ✅ FIXED BUTTON */}
            <Button
              rounded="rounded-2xl"
              size="hero"
              onClick={() =>
                document
                  .getElementById("blog-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Blogs
            </Button>

            <Button
              variant="outline"
              size="hero"
              rounded="rounded-2xl"
            >
              Latest Posts
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white/50 backdrop-blur-xl p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Trending Topics</h3>

            <div className="space-y-3">
              {topics.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white/80 rounded-xl"
                >
                  <Icon className="text-primary" />
                  <span>{text}</span>
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