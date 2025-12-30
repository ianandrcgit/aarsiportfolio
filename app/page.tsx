import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      {/* 1. STICKY HEADER / NAV */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-teal-400 font-mono font-bold">RC.dev</span>
          <div className="space-x-8 text-sm font-medium text-slate-200">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#impact" className="hover:text-teal-400 transition">Impact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* 2. HERO SECTION */}
        <section id="about" className="mb-32">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 tracking-tight">
            I build digital solutions <br />
            <span className="text-slate-400">for global impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Full-stack developer specializing in modern web technologies. 
            I bridge the gap between complex code and community empowerment through 
            <span className="text-teal-400"> Kannada Tech Education</span>.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="https://github.com/ianandrcgit" className="px-6 py-3 rounded-md bg-teal-400/10 text-teal-400 font-semibold border border-teal-400/20 hover:bg-teal-400/20 transition">
              View GitHub
            </a>
            <button className="px-6 py-3 rounded-md border border-slate-700 hover:border-teal-400 transition">
              Resume
            </button>
          </div>
        </section>

        {/* 3. FEATURED PROJECTS (Phase 1) */}
        <section id="projects" className="mb-32">
          <h2 className="text-2xl font-bold text-slate-100 mb-12 flex items-center">
            <span className="text-teal-400 font-mono mr-2 text-sm">01.</span> Selected Work
          </h2>
          
          <div className="grid gap-12">
            {/* Project Card 1 */}
            <div className="group relative grid lg:grid-cols-12 gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition duration-300">
              <div className="lg:col-span-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                Next.js • Tailwind • Supabase
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-slate-200 font-semibold text-xl group-hover:text-teal-400 transition">
                  Modern Citizen Services Platform
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  A high-performance web app designed to simplify local governance tasks. 
                  Focused on accessibility and lightning-fast load times for users on low-bandwidth connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KANNADA COMMUNITY & PASSIVE INCOME (Phase 2 Preview) */}
        <section id="impact" className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-teal-400">Community & Innovation</h2>
            <p className="mt-4 italic text-slate-300">
              Building for the next billion users. My work includes a dedicated Kannada YouTube 
              channel for tech education and several niche citizen service tools.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-mono text-slate-400">
              <span>Coming Soon:</span>
              <span className="bg-slate-700 px-2 py-1 rounded">kannada.yourname.dev</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center pb-10 text-xs text-slate-500">
        Built with Next.js & Tailwind CSS. Hosted on Vercel.
      </footer>
    </div>
  );
}