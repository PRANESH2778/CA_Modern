import React from 'react'
import { Link } from 'react-router-dom'
import './Blogs.css'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'

const Blogs = () => {
const bannerName = "Insights & Blogs"
  const blogPosts = [
    {
      id: 1,
      title: "Why CPA Firms Must Consider Outsourcing/Offshore Accounting",
      shortTitle: "Why CPA Must Con Virtual-",
      description: "The accounting profession is changing, and CPA firms that embrace outsourcing and offshore accounting solutions are positioning themselves for success in an increasingly competitive market.",
      category: "Accounting",
      gradient: "purple"
    },
    {
      id: 2,
      title: "Are You Losing Time and Money by Handling Accounting In-House?",
      description: "Many CPA firms spend too much time on routine accounting tasks that could be handled more efficiently by specialized offshore teams, allowing you to focus on high-value client services.",
      category: "uncategorized",
      gradient: "blue",
      hasIllustration: true
    },
    {
      id: 3,
      title: "The Future of Accounting: Digital Transformation Trends",
      description: "Explore how digital transformation is reshaping the accounting industry and what CPA firms need to know to stay competitive in the modern business landscape.",
      category: "Technology",
      gradient: "green"
    },
    {
      id: 4,
      title: "Cost-Effective Solutions for Small CPA Practices",
      description: "Discover how small CPA practices can leverage outsourcing to compete with larger firms while maintaining quality and reducing operational costs.",
      category: "Business",
      gradient: "orange"
    }
  ]

  return (
    <>
      <HeroBanner value={bannerName}/>
    <div className="blogs-container">
      <div className="blogs-header">
        {/* <h1 className="blogs-title">Blogs</h1> */}
        <p className="blogs-subtitle">Insights, tips, and industry updates from our accounting experts</p>
      </div>
      
      <div className="blogs-grid">
        {blogPosts.map((post) => (
          <Link 
            key={post.id} 
            to={
              post.id === 1 
                ? "/blogs/why-cpa-firms-must-consider-outsourcing-offshore-accounting" 
                : post.id === 2 
                ? "/blogs/are-you-losing-time-and-money-by-handling-accounting-in-house"
                : post.id === 3
                ? "/blogs/the-future-of-accounting-digital-transformation-trends"
                : post.id === 4
                ? "/blogs/cost-effective-solutions-for-small-cpa-practices"
                : "#"
            }
            className="blog-card-link"
          >
            <div className={`blog-card ${post.gradient}`}>
              {post.hasIllustration && (
                <div className="blog-illustration">
                  <div className="illustration-figures">
                    <div className="figure figure-1"></div>
                    <div className="figure figure-2"></div>
                    <div className="figure figure-3"></div>
                    <div className="lightning-bolt">⚡</div>
                  </div>
                </div>
              )}
              
              <div className="blog-content">
                {post.shortTitle && (
                  <h2 className="blog-short-title">{post.shortTitle}</h2>
                )}
                <h3 className="blog-main-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <div className="blog-category">{post.category}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Blogs
