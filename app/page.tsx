import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
      <Navbar />

      {/* Social Links Sidebar */}
      <div className="hidden lg:block fixed left-10 bottom-0 z-10">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-400">
          <a href="https://github.com/ianandrcgit" target="_blank" className="hover:-translate-y-1 hover:text-teal-400 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="#" className="hover:-translate-y-1 hover:text-teal-400 transition-all text-sm font-mono tracking-widest vertical-text mb-4">
             LinkedIn
          </a>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 lg:px-24">
        
        {/* 1. HERO SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
          <p className="text-teal-400 font-mono mb-5">Hi, my name is Anand R C, Build things in the name of ---- </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-4">
            Aarsi  
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6 leading-tight">
            Architecting digital solutions<br />for global impact.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed mb-10">
            I specialize in building resilient, high-performance web applications that solve complex business challenges. My focus is on developing <span className="text-teal-400">scalable systems</span> and ensuring seamless integration between robust backend logic and intuitive frontend experiences.
          </p>
          <div>
            <a href="#projects" className="px-7 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-all font-mono">
              Check out my work!
            </a>
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section className="py-24 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-slate-400 leading-relaxed text-lg">
            <div className="md:col-span-2 space-y-4">
              <p>
                I thrive on solving real-world problems through clean code and efficient architecture. My approach prioritizes <span className="text-teal-400">performance, security, and accessibility</span> to ensure products scale effectively for global users.
              </p>
              <p>
                I have a strong background in developing full-stack applications and specialized tools that streamline complex workflows. I am a firm believer in continuous learning and staying ahead of modern web standards.
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm pt-4">
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Next.js (React)</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> TypeScript</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Tailwind CSS</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Node.js & APIs</li>
              </ul>
            </div>
            <div className="relative group max-w-[250px] mx-auto">
              <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
              <div className="relative bg-teal-400/20 rounded overflow-hidden grayscale hover:grayscale-0 transition-all">
                <div className="aspect-square bg-slate-700 flex items-center justify-center text-slate-500 font-mono italic text-xs">Profile Image</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-slate-200 mb-16 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span> Selected Projects
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </h2>

          <div className="space-y-32">
            <div className="relative grid md:grid-cols-12 items-center">
              <div className="md:col-span-7 bg-teal-900/20 rounded overflow-hidden border border-slate-700 min-h-[300px] flex items-center justify-center group shadow-xl hover:border-teal-400/30 transition-all">
                 <span className="text-slate-500 font-mono group-hover:text-teal-400 transition uppercase tracking-widest text-xs">Project Case Study coming soon</span>
              </div>
              <div className="md:col-span-6 md:absolute md:right-0 flex flex-col items-end text-right z-10 p-4 md:p-0">
                <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Enterprise Resource Engine</h3>
                <div className="bg-[#112240] p-6 rounded-md shadow-2xl text-slate-300 border border-slate-800 hover:shadow-teal-400/5 transition-all max-w-lg">
                  <p>A high-performance management system designed to coordinate distributed resources. Implemented with a focus on low-latency data updates and a highly responsive dashboard architecture.</p>
                </div>
                <ul className="flex gap-4 mt-4 font-mono text-xs text-slate-400">
                  <li>Next.js</li>
                  <li>Prisma</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. REMOTE WORKFLOW / STACK SECTION */}
        <section id="impact" className="py-24">
          <div className="bg-[#112240] border border-slate-700 p-10 rounded-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-teal-400 font-mono mb-2 text-sm">Remote Ready</h3>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Optimized for Async Teams</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  I understand that communication is the most important tool for a remote engineer. I am proficient in Git workflows, technical documentation, and collaborative project management tools.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 border border-slate-700 rounded bg-slate-900/50">
                   <p className="text-teal-400 mb-1">Version Control</p>
                   <p className="text-slate-300">GitHub / GitLab</p>
                </div>
                <div className="p-4 border border-slate-700 rounded bg-slate-900/50">
                   <p className="text-teal-400 mb-1">CI/CD</p>
                   <p className="text-slate-300">Vercel / Actions</p>
                </div>
                <div className="p-4 border border-slate-700 rounded bg-slate-900/50">
                   <p className="text-teal-400 mb-1">Collaboration</p>
                   <p className="text-slate-300">Slack / Notion</p>
                </div>
                <div className="p-4 border border-slate-700 rounded bg-slate-900/50">
                   <p className="text-teal-400 mb-1">Environment</p>
                   <p className="text-slate-300">Docker / Linux</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="py-40 text-center max-w-xl mx-auto">
          <h2 className="text-teal-400 font-mono mb-4 text-sm">03. What&apos;s Next?</h2>
          <h3 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I am currently open to new remote opportunities and technical collaborations. Whether you have a specific project in mind or just want to connect, feel free to reach out.
          </p>
          <a href="mailto:your-email@gmail.com" className="px-10 py-5 border-2 border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-all font-mono font-bold tracking-widest uppercase text-sm">
            Say Hello
          </a>
        </section>

        <footer className="py-10 text-center font-mono text-xs text-slate-500 border-t border-slate-800">
          <p>© 2025 Anand R C. Built with Next.js & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}