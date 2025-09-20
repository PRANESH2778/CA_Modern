import React from 'react'
import './UniqueSection.css'
import badge from "../../assets/badge.png"
import affordable from "../../assets/affordable.png"
import Client from "../../assets/Client.png"
import CPU from "../../assets/CPU.png"
import databaseSecurity from "../../assets/database-security.png"
import hourglass from "../../assets/hourglass.png"
import industry from "../../assets/industry.png"
import shield from "../../assets/shield.png"

const UniqueSection = () => {
    const values = [
        {
            icon: Client,
            title: "Client-first Approach",
            description: "We act as an extension of your team, ensuring a hands-on, personalized experience with direct communication."
        },
        {
            icon: CPU,
            title: "Tech-Driven Efficiency",
            description: "We implement automation, process optimization, and smart workflows to eliminate inefficiencies."
        },
        {
            icon: affordable,
            title: "Affordable",
            description: "Get top-tier accounting services at cost-effective rates without compromising on quality or precision."
        },
        {
            icon: shield,
            title: "Data Security",
            description: "Your financial data is safeguarded with strict confidentiality measures and robust security protocols."
        },
        {
            icon: industry,
            title: "Industry Expertise",
            description: "From retail and healthcare to IT, franchises, and real estate, our team understands the nuances of different industries."
        },
        {
            icon: badge,
            title: "Big 4 & Fortune 500 Experience",
            description: "Our professionals bring top-tier expertise, ensuring high-quality financial management."
        },
        {
            icon: hourglass,
            title: "Timely Delivery & Turnaround",
            description: "With a maximum response time of 20 minutes during working hours, we ensure swift and efficient service."
        },
        {
            icon: databaseSecurity,
            title: "Scalability & Flexibility",
            description: "Whether it’s day-to-day bookkeeping or CFO-level advisory, we adapt to your business’s evolving needs."
        },
    ]

    return (
        <div className='uniqueContainer'>
            <h2 className='uniqueTitle'>What makes us Unique?</h2>
            <p className='uniqueSubtitle'>
                From bookkeeping to financial management, we bring a competitive edge with precision and expertise.<br />
                Outsource to us and let our offshore team elevate your accounting efficiency.
            </p>
            <div className='uniqueCards'>
                {values.map((item, index) => (
                    <div key={index} className='uniqueCard'>
                        <div className='uniqueIcons'>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UniqueSection
