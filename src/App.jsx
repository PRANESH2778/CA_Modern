import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import EngagementModel from './Pages/EngagementModel/EngagementModel'
import WorkMethodology from './Pages/WorkMethodology/WorkMethodology'
import Career from './Pages/Career/Career'
import Blogs from './Pages/Blogs/Blogs'
import Header from './Components/Header/Header'
import "./styles/global.css";
import "./styles/engagement.css";
import BusinessOwner from './Pages/BusinessOwner/BusinessOwner'
import BookKeeping from './Pages/BookKeeping/BookKeeping'
// import Footer from './Components/Footer/Footer'

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
