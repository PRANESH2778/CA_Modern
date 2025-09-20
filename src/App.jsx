import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import EngagementModel from './Pages/EngagementModel/EngagementModel'
import WorkMethodology from './Pages/WorkMethodology/WorkMethodology'
import Career from './Pages/Career/Career'
import Blogs from './Pages/Blogs/Blogs'
import BlogPost from './Pages/BlogPost/BlogPost'
import BlogPost2 from './Pages/BlogPost2/BlogPost2'
import BlogPost3 from './Pages/BlogPost3/BlogPost3'
import BlogPost4 from './Pages/BlogPost4/BlogPost4'
import Header from './Components/Header/Header'
import "./styles/global.css";
import "./styles/engagement.css";
import BusinessOwner from './Pages/BusinessOwner/BusinessOwner'
import BookKeeping from './Pages/BookKeeping/BookKeeping'
import Footer from './Components/Footer/Footer'
import FloatingButtons from './Components/FloatingButtons/FloatingButtons'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/business-owners" element={<BusinessOwner />} />
        <Route path="/services/cpa-bookkeeping" element={<BookKeeping />} />
        <Route path="/engagement-model" element={<EngagementModel />} />
        <Route path="/work-methodology" element={<WorkMethodology />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/why-cpa-firms-must-consider-outsourcing-offshore-accounting" element={<BlogPost />} />
        <Route path="/blogs/are-you-losing-time-and-money-by-handling-accounting-in-house" element={<BlogPost2 />} />
        <Route path="/blogs/the-future-of-accounting-digital-transformation-trends" element={<BlogPost3 />} />
        <Route path="/blogs/cost-effective-solutions-for-small-cpa-practices" element={<BlogPost4 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
