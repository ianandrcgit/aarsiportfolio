"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const projects = [
    {
      title: "Disaster Management MIS",
      description: "Developed a mission-critical Management Information System (MIS) to coordinate emergency response. Built a real-time tracking dashboard that handles 100+ concurrent data points, reducing resource allocation delay by 40% through automated reporting and PostgreSQL optimization.",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Prisma"],
      image: "/disaster-mis.jpg"
    },
    {
      title: "City App (Citizen Services)",
      description: "A mobile-first web application providing 50,000+ citizens with centralized access to municipal services. Implemented a service-worker-based offline mode and optimized image delivery, ensuring functionality on low-bandwidth networks.",
      tech: ["React", "Tailwind CSS", "Firebase", "PWA"],
      image: "/city-app.jpg"
    },
    {
      title: "GitHub Error Detection Tool",
      description: "Architected a custom CI/CD utility to scan repositories for runtime vulnerabilities and architectural anti-patterns. The tool automates code reviews for remote teams, catching potential deployment blockers before production.",
      tech: ["Python", "GitHub Actions", "Docker", "Pytest"],
      image: "/github-tool.jpg"
    },
    {
      title: "Autonomous AI Task Agent",
      description: "Built an intelligent agent capable of executing multi-step digital workflows. Leveraged LangChain for context-aware memory and OpenAI LLMs for natural language processing to automate complex data extraction tasks.",
      tech: ["OpenAI API", "LangChain", "Node.js", "Vector DB"],
      image: "/ai-agent.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 lg:px-24">
        
        {/* 1. HERO SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
          <p className="text-teal-400 font-mono mb-5">Hi, my name is Anand R C, I build things in the name of Aarsi ....</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-4 h-[1.2em]">
            <Typewriter
              options={{
                strings: ['Innovative Solutions', 'Scalable Code', 'Global Solutions', 'Seamless Experiences'],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-slate-100",
                cursorClassName: "text-teal-400"
              }}
            />
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6 leading-tight">
            Architecting digital solutions<br />for global impact.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed mb-10">
            I specialize in building resilient, high-performance web applications. My focus is on developing <span className="text-teal-400 font-semibold">scalable systems</span> and intuitive frontend experiences.
          </p>
        </section>

        {/* 2. PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-slate-200 mb-16 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span> Projects
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </h2>

          <div className="flex flex-col gap-32">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 items-center group">
                
                {/* Image Section - Alternating sides with Mild & Zoom Effect */}
                <div className={`md:col-span-7 relative aspect-video rounded border border-slate-700 overflow-hidden shadow-xl bg-slate-800 transition-all duration-500 hover:border-teal-400/50 ${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-40 grayscale transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  {/* Subtle teal overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-teal-900/10 transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>

                {/* Content Section */}
                <div className={`md:col-span-5 space-y-4 ${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}>
                  <p className="text-teal-400 font-mono text-sm">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-teal-400">{project.title}</h3>
                  <div className="bg-[#112240] p-6 rounded-md border border-slate-800 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4 font-mono text-xs text-slate-500">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CONTACT SECTION */}
        <section id="contact" className="py-40 text-center max-w-xl mx-auto border-t border-slate-800">
          <h2 className="text-teal-400 font-mono mb-4 text-sm">03. What&apos;s Next?</h2>
          <h3 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h3>
          <a href="mailto:your-email@gmail.com" className="px-10 py-5 border-2 border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-all font-mono font-bold uppercase text-sm tracking-widest">
            Say Hello
          </a>
        </section>

        <footer className="py-10 text-center font-mono text-xs text-slate-500">
          <p>© 2025 Anand R C. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}