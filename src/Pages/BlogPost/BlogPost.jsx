import React from 'react'
import './BlogPost.css'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'

const BlogPost = () => {
  const blogData = {
    title: "Why CPA Firms Must Consider Outsourcing/Offshore Accounting",
    introduction: "The accounting profession is changing, and CPA firms that embrace contemporary solutions become competitive. Virtual accounting is one such solution that is revolutionizing how firms approach financial management. But why must CPA firms look to outsource their accounting tasks? Here's why virtual accounting can be a game-changer for your company.",
    sections: [
      {
        number: "1",
        title: "Lower Operating Costs",
        content: "Recruitment of full-time, in-house accountants may be costly... Virtual accounting enables CPA firms to save tremendous amounts of money by sourcing activities to highly trained professionals at much lower costs. This enables the firms to shift resources to more important business segments."
      },
      {
        number: "2", 
        title: "Improved Efficiency & Productivity",
        content: "Online accountants are skilled at performing job functions like accounting, tax preparing, and money reporting with the utmost accuracy. Outsourcing all these tasks leaves CPA firms more time to plan strategically and provide customer service better, resulting in enhanced overall performance."
      },
      {
        number: "3",
        title: "Access to Accountant Experts", 
        content: "One of the major advantages of virtual accounting is that it makes it possible to work with extremely experienced professionals who are familiar with industry-specific compliance rules, compliance requirements, and financial strategies. Rather than invest time in training in-house employees, companies can take advantage of the experience of professionals who are already skilled in the required skills."
      },
      {
        number: "4",
        title: "Scalability & Flexibility",
        content: "Whether you're a small CPA firm or a large enterprise, virtual accounting offers flexibility. During peak seasons, firms can scale up their accounting needs without hiring additional employees. Conversely, during slow periods, they can reduce services without financial strain."
      },
      {
        number: "5",
        title: "Enhanced Data Security & Compliance",
        content: "As technology in cloud-based accounting evolves, virtual accounting services offer top-grade security controls to safeguard financial information. Established outsourcing companies strictly comply with regulations for compliance, maintaining sensitive client information secure."
      }
    ],
    conclusion: "Virtual accounting is more than a fad; it's an intelligent business strategy that enables CPA firms to reduce expenses, streamline efficiency, and concentrate on relationships with clients. By accepting outsourcing, firms are able to stay ahead of the game in today's increasingly competitive environment.",
    callToAction: "Is your CPA practice prepared to adopt virtual accounting? The future of accounting is virtual don't get left behind."
  }

  return (
    <>
      <HeroBanner value={blogData.title} />
      <div className="blog-post-container">
        <div className="blog-post-content">
          <div className="blog-intro">
            <p>{blogData.introduction}</p>
          </div>

          {blogData.sections.map((section) => (
            <div key={section.number} className="blog-section">
              <h2 className="section-title">
                {section.number}. {section.title}
              </h2>
              <p className="section-content">{section.content}</p>
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
              
              <button type="submit" className="submit-btn">Post Comment</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
