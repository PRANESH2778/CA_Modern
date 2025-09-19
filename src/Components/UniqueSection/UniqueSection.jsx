import React from 'react'
import './UniqueSection.css'
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
const UniqueSection = () => {
    const values = [
        {icon:<HiMiniCpuChip size={70}/>,title:"Client-first Approach",description:"We act as an extension of your team, ensuring a hands-on, personalized experience with direct communication."},
        {icon:<FaUserCheck size={70}/>,title:"Tech-Driven Efficiency",description:"We implement automation, process optimization, and smart workflows to eliminate inefficiencies."},
        {icon:<IoShieldCheckmark size={70}/>,title:"Affordable",description:"Get top-tier accounting services at cost-effective rates without compromising on quality or precision."},
        {icon:<PiBagFill size={70}/>,title:"Data Security",description:"Your financial data is safeguarded with strict confidentiality measures and robust security protocols."},
        {icon:<FaMedal size={70}/>,title:"Industry Expertise",description:"From retail and healthcare to IT, franchises, and real estate, our team understands the nuances of different industries."},
        {icon:<BsHourglassSplit size={70}/>,title:"Big 4 & Fortune 500 Experience",description:"Our professionals bring top-tier expertise, ensuring high-quality financial management."},
        {icon:<FaDatabase size={70}/>,title:"Timely Delivery & Turnaround",description:"With a maximum response time of 20 minutes during working hours, we ensure swift and efficient service."},
        {icon:<FaDatabase size={70}/>,title:"Scalability & Flexibility",description:"Whether it’s day-to-day bookkeeping or CFO-level advisory, we adapt to your business’s evolving needs."},
    ]
  return (
    <div className='uniqueContainer'>
        <h2 className='uniqueTitle'>What makes us Unique?</h2>
        <p className='uniqueSubtitle'>From bookkeeping to financial management, we bring a competitive edge with precision and expertise.<br/> Outsource to us and let our offshore team elevate your accounting efficiency.</p>
        <div className='uniqueCards'>
            {values.map((item,index)=>(
                <div key={index} className='uniqueCard'>
                    <div className='uniqueIcons' >{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UniqueSection