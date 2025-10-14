import React from "react";
import "../styles/Home.css";
import ParticlesBackground from "../components/ParticlesBackground";
import ExperienceCards from "../components/ExperienceCards";

export default function Home() {
  return (
    <section className="home">
        <ParticlesBackground />
        <div className="main-content content">
            <h2>Curriculum Vitae</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="col-span-1 bg-white/60 dark:bg-neutral-900/40 p-6 rounded-xl shadow-sm">
                <h1 className="text-2xl font-bold">Ngabirano Daniel</h1>
                <p className="text-sm mt-2">Full-stack Developer — React · Django · Flutter</p>
                <ul className="mt-4 text-sm space-y-1">
                    <li>Location: Bukasa/Katongole, Kampala, Uganda</li>
                    <li>Phone: +256 779061223</li>
                    <li>Email: ngabiranodaniel74@gmail.com</li>
                    <li>GitHub: <a href="https://github.com/ChiefDNA" target="_blank" rel="noreferrer" className="underline">ChiefDNA</a></li>
                </ul>
                <div className="mt-6 space-y-3">
                    <a href="/downloads/resume.pdf" className="block px-4 py-2 rounded bg-violet-soft text-milky-black font-semibold text-center">Download Resume (PDF)</a>
                    <a href="/downloads/Personal Statement.pdf" className="block px-4 py-2 rounded bg-violet-soft/80 text-milky-black font-semibold text-center">Download Personal Statement (PDF)</a>
                </div>
                </div>
                <div className="md:col-span-2">
                <div className="prose max-w-none dark:prose-invert">
                    <h2>Objective</h2>
                    <p>
                    Seeking a challenging role in Information Technology where my expertise in software development, system
                    maintenance, and diligence can contribute to a dynamic team and improve content delivery.
                    </p>

                    <h2>About Me</h2>
                    <p>
                    In my formative years, I was deeply imaginative—constantly envisioning future plans and creatively designing
                    things. This curiosity led me to explore the boundaries between science and magic, developing a fascination for
                    turning ideas into reality through woodwork, metalwork, programming, and electronics. Over time, I refined my
                    skills across multiple fields, eventually focusing on programming as my means to create impactful, functional tools.
                    </p>
                    <p>
                    My journey has been one of constant learning—from mastering physics, math, and technical drawing to discovering
                    the power of programming as a creative outlet. Today, I build robust desktop, web, and mobile applications, and I’m
                    passionate about using these tools to simplify how people interact with technology.
                    </p>

                    <h2>Skills</h2>
                    <ul>
                    <li>Full-stack development using React.js, Angular, Django, and MongoDB</li>
                    <li>Software development in Python, Java, C, and C++</li>
                    <li>API development and testing</li>
                    <li>Git, GitHub, CircleCI, and automated testing</li>
                    <li>Strong teamwork and communication using tools like Jira and SCRUM</li>
                    </ul>

                    <h2>Experience</h2>
                    <ExperienceCards />

                    <h2>Education</h2>
                    <p>
                    <strong>Bachelor of Science in Applied Information Technology</strong> — ISBAT University<br/>
                    Graduated December 2023, GPA 4.33 (Second Class Upper)
                    </p>
                    <p><strong>High School:</strong> Mengo Senior School (U.C.E and U.A.C.E, 2013 - 2019)</p>

                    <h2>Leadership & Communication</h2>
                    <p>
                    As a team coordinator and class monitor, I learned the importance of clear communication and empathetic leadership.
                    I use tools like PowerPoint and Power BI to present project proposals and communicate complex ideas effectively.
                    </p>

                    <h2>Personal Traits</h2>
                    <p>
                    I’m a quiet but dependable team player—reserved, reflective, and dedicated to delivering results. My curiosity drives
                    me to understand how things work, while my practicality keeps me focused on building tangible solutions. I’m most
                    motivated when creating tools that make life easier or more efficient for others.
                    </p>
                    {/* 
                    <h2>References</h2>
                    <ul>
                    <li>Mr. Emmanuel Kakaire — Senior Developer, BoraLink.com (+256 772 967 407)</li>
                    <li>Mr. Muhawenimana Davis — Field Electrician, SMS Construction Company Limited (+256 789 809 171)</li>
                    <li>Mr. Wasswa Ivan — Manager, Alcazar Systems Limited (+256 786 143 087)</li>
                    </ul> */}

                    <h2>Personal Statement</h2>
                    <p>
                    I am driven by curiosity and creativity. I see technology as a form of craftsmanship—something that merges science
                    and imagination. While I enjoy problem-solving and building tools, I also value patience and consistency, traits I
                    learned from my family and faith. I take pride in being versatile, combining technical precision with creative
                    exploration.
                    </p>
                    <p>
                    My biggest influences are my parents: my father’s adaptability across trades—electrician, teacher, and farmer—taught
                    me that specialization is limitless, while my mother’s lessons in patience and wisdom grounded my ambitions.
                    </p>
                    <p>
                    My ultimate goal is to contribute innovations that enhance accessibility, efficiency, and creativity for users across
                    the world.
                    </p>
                </div>
                </div>
            </div>  
        </div>
    </section>
  );
}
