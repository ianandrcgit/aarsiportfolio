"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Kannada Hub", href: "#impact" },
    { name: "Contact", href: "mailto:your@email.com" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-teal-400 font-mono text-xl font-bold tracking-tighter cursor-pointer">
          RC<span className="text-white">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group text-slate-300 text-sm font-mono hover:text-teal-400 transition-colors"
            >
              <span className="text-teal-400 mr-1 text-xs">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="px-4 py-2 border border-teal-400 text-teal-400 text-sm font-mono rounded hover:bg-teal-400/10 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon (Simple placeholder) */}
        <div className="md:hidden text-teal-400">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
}