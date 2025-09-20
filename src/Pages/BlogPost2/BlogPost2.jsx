import React from 'react'
import './BlogPost2.css'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'

const BlogPost2 = () => {
  const blogData = {
    title: "Are You Losing Time and Money by Handling Accounting In-House?",
    introduction: "Many CPA firms spend too much time on routine accounting tasks, which limits their ability to focus on high-value services. Virtual accounting offers a smarter way to manage these tasks while improving efficiency and reducing costs.",
    sections: [
      {
        title: "Here's what happens when firms stick to in-house processes:",
        points: [
          {
            bold: "Wasted Time:",
            text: "Hours lost on data entry and reconciliation."
          },
          {
            bold: "Higher Costs:",
            text: "Increased overhead for maintaining an internal team."
          },
          {
            bold: "Limited Scalability:",
            text: "Difficulty managing peak workloads effectively."
          }
        ]
      },
      {
        title: "The Solution: Virtual Accounting",
        content: "Virtual accounting helps CPA firms overcome these challenges by providing faster, cost-effective solutions with greater accuracy. By outsourcing routine tasks to specialized professionals, firms can focus on strategic growth and client relationships."
      },
      {
        title: "Key Benefits of Outsourcing",
        content: "When you partner with a virtual accounting service, you gain access to experienced professionals who can handle complex accounting tasks with precision. This allows your in-house team to concentrate on high-value activities that drive business growth."
      },
      {
        title: "Cost Savings Analysis",
        content: "Studies show that firms using virtual accounting services reduce their operational costs by 40-60% while improving accuracy and turnaround times. The savings come from reduced overhead, no need for additional office space, and access to specialized expertise without full-time salaries."
      },
      {
        title: "Implementation Strategy",
        content: "The transition to virtual accounting should be gradual and well-planned. Start with routine tasks like data entry and bookkeeping, then gradually expand to more complex services as you build trust with your virtual accounting partner."
      }
    ],
    conclusion: "The question isn't whether virtual accounting is the future—it's whether your firm will adapt in time to stay competitive. Firms that embrace virtual accounting solutions today will be the industry leaders tomorrow.",
    callToAction: "Ready to transform your accounting operations? Discover how virtual accounting can save your firm time and money while improving service quality."
  }

  return (
    <>
      <HeroBanner value={blogData.title} />
      <div className="blog-post-container">
        <div className="blog-post-content">
          <div className="blog-intro">
            <p>{blogData.introduction}</p>
          </div>

          {blogData.sections.map((section, index) => (
            <div key={index} className="blog-section">
              <h2 className="section-title">{section.title}</h2>
              {section.points ? (
                <div className="points-list">
                  {section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="point-item">
                      <span className="point-bold">{point.bold}</span>
                      <span className="point-text">{point.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="section-content">{section.content}</p>
              )}
            </div>
          ))}

          <div className="blog-conclusion">
            <h2 className="conclusion-title">Conclusion</h2>
            <p className="conclusion-content">{blogData.conclusion}</p>
          </div>

          <div className="blog-cta">
            <h2 className="cta-title">{blogData.callToAction}</h2>
          </div>

          <div className="leave-reply-section">
            <h2 className="reply-title">Leave a Reply</h2>
            <p className="reply-note">Your email address will not be published. Required fields are marked *</p>
            
            <form className="comment-form">
              <div className="form-group">
                <label htmlFor="comment">Comment *</label>
                <textarea 
                  id="comment" 
                  name="comment" 
                  rows="6" 
                  required
                  placeholder="Write your comment here..."
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input 
                    type="url" 
                    id="website" 
                    name="website" 
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="save-info" 
                  name="save-info"
                />
                <label htmlFor="save-info">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              
              <button type="submit" className="submit-btn">
                <span className="mail-icon">✉</span>
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost2
