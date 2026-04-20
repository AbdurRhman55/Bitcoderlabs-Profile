import React from 'react'
import BlogHero from '../components/Blogs/hero'
// import FeaturedBlogs from '../components/Blogs/featuredblog'
import BlogSection from '../components/Blogs/BlogSection'

function Blogs() {
  return (
    <div>
      <BlogHero />
      {/* <FeaturedBlogs /> */}
      <BlogSection />
    </div>
  )
}

export default Blogs

