import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-400 font-sans selection:bg-teal-300 selection:text-teal-900">
      <Navbar />

      {/* Social Links Sidebar (Brittany Chiang Style) */}
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
          <p className="text-teal-400 font-mono mb-5">Hi, my name is Anand R C - I build things for the web in the name of </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-4">
            Aarsi 
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6 leading-tight">
            Building for the community, <br />Scale for the world.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed mb-10">
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products and empowering the <span className="text-teal-400">Kannada tech community</span>.
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
                My journey in tech is driven by curiosity and a desire to solve real-world problems. Whether it's developing full-stack applications or creating citizen service tools, I prioritize <span className="text-teal-400">performance</span> and <span className="text-teal-400">accessibility</span>.
              </p>
              <p>
                I also run a YouTube channel where I simplify technology in Kannada, helping local communities navigate digital government services and modern tech tools.
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm pt-4">
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Next.js</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> TypeScript</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Tailwind CSS</li>
                <li className="flex items-center gap-2"> <span className="text-teal-400">▹</span> Node.js</li>
              </ul>
            </div>
            <div className="relative group max-w-[250px]">
              <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
              <div className="relative bg-teal-400/20 rounded overflow-hidden grayscale hover:grayscale-0 transition-all">
                {/* Replace with your actual headshot later */}
                <div className="aspect-square bg-slate-700 flex items-center justify-center text-slate-500">Photo</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION (Tamal Sen + Brittany Chiang style) */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-slate-200 mb-16 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span> Projects
            <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
          </h2>

          <div className="space-y-32">
            {/* Project Card */}
            <div className="relative grid md:grid-cols-12 items-center">
              <div className="md:col-span-7 bg-teal-900/20 rounded overflow-hidden border border-slate-700 min-h-[300px] flex items-center justify-center group">
                 <span className="text-slate-500 font-mono group-hover:text-teal-400 transition">Project Screenshot</span>
              </div>
              <div className="md:col-span-6 md:absolute md:right-0 flex flex-col items-end text-right z-10">
                <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Citizen Service Hub</h3>
                <div className="bg-[#112240] p-6 rounded-md shadow-2xl text-slate-300 border border-slate-800 hover:shadow-teal-400/5 transition-all">
                  <p>A comprehensive web platform that bridges the gap between rural citizens and digital government services. Optimized for low-bandwidth areas using Next.js Static Generation.</p>
                </div>
                <ul className="flex gap-4 mt-4 font-mono text-xs text-slate-400">
                  <li>Next.js</li>
                  <li>Tailwind</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KANNADA IMPACT SECTION */}
        <section id="impact" className="py-24">
          <div className="bg-[#112240] border border-slate-700 p-10 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-teal-400 font-mono mb-4">Phase 2 Exploration</h3>
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Kannada Tech Hub & Passive Income</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I am building a specialized ecosystem for Kannada speakers, including a YouTube channel and citizen-centric micro-tools. This section will soon host dedicated links for passive income projects and regional tech tutorials.
            </p>
            <div className="flex justify-center gap-4">
               <span className="bg-teal-400/10 text-teal-400 px-4 py-1 rounded text-sm font-mono italic underline">kannada.aarsi.dev (Coming Soon)</span>
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="py-40 text-center max-w-xl mx-auto">
          <h2 className="text-teal-400 font-mono mb-4 text-sm">03. What's Next?</h2>
          <h3 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h3>
          <p className="text-slate-400 text-lg mb-10">
            I’m currently looking for remote roles or interesting collaborations. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <a href="mailto:your-email@gmail.com" className="px-10 py-5 border-2 border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-all font-mono font-bold">
            Say Hello
          </a>
        </section>

        <footer className="py-10 text-center font-mono text-xs text-slate-500">
          <p>Designed & Built by Aarsi Portfolio</p>
          <p className="mt-2 hover:text-teal-400 transition cursor-pointer italic">Inspired by Brittany Chiang</p>
        </footer>
      </main>
    </div>
  );
}