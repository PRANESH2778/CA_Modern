import React, { useState } from 'react'
import './Career.css'
import HeroBanner from '../../Components/Common/HeroBanner'
import HeroIntro from '../../Components/Common/HeroIntro'
const Career = () => {
  const bannerName = "Career"
  const heroIntroValue = "At Global Insights KPO, we don’t just offer jobs—we create careers. Our team is made up of talented professionals who are passionate about accounting, finance, and making a difference in the industry."
  "We provide an environment where you can develop your skills, take on meaningful challenges, and work alongside experienced mentors who help you reach your full potential. Whether you’re just starting out or looking for the next big opportunity, we welcome individuals who are eager to learn, grow, and contribute to our success."
  "Ready to take the next step in your career? Fill out the form below and let’s explore how you can be a part of our journey!"
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    position: '',
    resume: null,
    workExperience: '',
    noticePeriod: '',
    currentCompensation: '',
    expectedCompensation: ''
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    
    <div>
      <HeroBanner value={bannerName}/>
      <HeroIntro value={heroIntroValue}/>
      <div className="career-container">
        <div className="career-form-section">
          <h1 className="career-title">Be the Part of Global Insights KPO Team</h1>
          
          <form className="career-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Position You Are Applying For?</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="accountant">Accountant</option>
                <option value="senior-accountant">Senior Accountant</option>
                <option value="bookkeeper">Bookkeeper</option>
                <option value="tax-specialist">Tax Specialist</option>
                <option value="financial-analyst">Financial Analyst</option>
                <option value="team-lead">Team Lead</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload Your Resume?</label>
              <div className="file-upload">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  id="resume-upload"
                  style={{ display: 'none' }}
                />
                <label htmlFor="resume-upload" className="file-upload-btn">
                  Choose File
                </label>
                <span className="file-name">
                  {formData.resume ? formData.resume.name : 'No file chosen'}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label>Post-Qualification Work Experience</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="workExperience"
                    value="fresher"
                    checked={formData.workExperience === 'fresher'}
                    onChange={handleInputChange}
                  />
                  <span>Fresher</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="workExperience"
                    value="0-1"
                    checked={formData.workExperience === '0-1'}
                    onChange={handleInputChange}
                  />
                  <span>0-1 Years</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="workExperience"
                    value="1-3"
                    checked={formData.workExperience === '1-3'}
                    onChange={handleInputChange}
                  />
                  <span>1-3 Years</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="workExperience"
                    value="3-5"
                    checked={formData.workExperience === '3-5'}
                    onChange={handleInputChange}
                  />
                  <span>3-5 Years</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="workExperience"
                    value="5+"
                    checked={formData.workExperience === '5+'}
                    onChange={handleInputChange}
                  />
                  <span>5+ Years</span>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="number"
                  name="noticePeriod"
                  placeholder="What's Your Notice Period? (days)"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="currentCompensation"
                  placeholder="What Is Your Current Compensation? (Annual INR)"
                  value={formData.currentCompensation}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="expectedCompensation"
                placeholder="What Is Your Expected Compensation? (Annual INR)"
                value={formData.expectedCompensation}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Career