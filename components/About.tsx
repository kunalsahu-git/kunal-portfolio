import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex about-section">
                <div className="flex-full about-cards">
                    {aboutCards.map((card, index) => (
                        <AboutCard 
                            key={index}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            projects={card.projects} />
                    ))}
                </div>

                <div className="flex-full about-text">
                    <h5 className="gray">Hello!</h5>
                    <h1 className="white">I&#39;m Kunal, Your Full-Stack Visionary</h1>
                    <h3 className="green">Transforming Ideas Into Digital Realities</h3>
                    <p className="gray">With expertise in <strong>React</strong>, <strong>Drupal</strong>, and a flair for creative problem-solving, I bring ideas to life. Over the years, I have collaborated with diverse teams to deliver innovative solutions. From designing elegant UIs to crafting robust backends, I thrive on pushing boundaries and delivering excellence.<br/><br/>
                    Outside the code, you might find me exploring creative projects or brainstorming the next big idea!</p>

                    <h4 className="white">Clients</h4>
                    <ul className="gray">
                        <li>RVCE</li>
                        <li>Kendallhunt</li>
                        <li>ASU</li>
                        <li>EdPlus</li>
                        <li>IFIM</li>
                        <li>Kanyathon</li>
                    </ul>

                    <h4 className="white">Projects</h4>
                    <h5 className="green">Client Projects</h5>
                    <ul className="gray">
                        <li>RVCE College – Delivered solutions tailored to academic needs.</li>
                        <li>Flourish – Crafted scalable platforms for growth.</li>
                        <li>ASU Local – Localized solutions with impact.</li>
                        <li>CPECMS – Comprehensive CMS for performance management.</li>
                        <li>SGACMS – Advanced CMS for streamlined operations.</li>
                        <li>Plus Alliance – Collaborative initiatives for global reach.</li>
                        <li>Sun Devils – Engaging and dynamic digital experiences.</li>
                    </ul>

                    <h5 className="green">Internal Projects</h5>
                    <ul className="gray">
                        <li>Resource Management Tool – Optimized resource allocation and tracking.</li>
                        <li>Project Management – Centralized tool for managing timelines and deliverables.</li>
                        <li>HR Management – Simplified and automated HR workflows.</li>
                    </ul>

                    <h4 className="white">Core Interests</h4>
                    <ul className="gray">
                        <li>Drupal Migrations – Expertise in moving and managing content seamlessly.</li>
                        <li>Decoupled Architecture – Building robust systems with React and headless CMS.</li>
                        <li>API Integration – Efficient and scalable API-driven solutions.</li>
                        <li>Lighthouse Performance Score – Achieving the perfect score with optimization.</li>
                        <li>Performance Improvements – Enhancing speed, reliability, and efficiency.</li>
                        <li>Creative Solutions – Innovating scalable, optimized, and sustainable solutions.</li>
                    </ul>
                </div>
            </div>

            <div className="flex partners justify-space">
                {partners.map((partner, index) => (
                    <Image 
                        key={index} 
                        src={partner.src} 
                        height={45} 
                        width={180} 
                        alt={partner.alt} />
                ))}
            </div>
        </section>
    );
}

const aboutCards = [
    {
        title: "Frontend Wizardry",
        icon: "/icons/frontend.svg",
        description: "Building seamless and interactive interfaces.",
        projects: 15,
    },
    {
        title: "Backend Architect",
        icon: "/icons/backend.svg",
        description: "Ensuring secure, scalable, and robust solutions.",
        projects: 12,
    },
    {
        title: "UI/UX Innovator",
        icon: "/icons/design.svg",
        description: "Designing experiences that captivate and inspire.",
        projects: 9,
    },
];

const partners = [
    { src: "/images/partners/github.png", alt: "GitHub" },
    { src: "/images/partners/drupal.png", alt: "Drupal" },
    { src: "/images/partners/react.png", alt: "React" },
    { src: "/images/partners/aws.png", alt: "AWS" },
    { src: "/images/partners/vercel.png", alt: "Vercel" },
];

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number,
};

function AboutCard({ title, icon, description, projects }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects completed</span>
        </div>
    );
}
