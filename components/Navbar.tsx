"use client";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "PAGES", "SERVICES", "PORTFOLIO", "BLOG"];

  useEffect(() => {
    gsap.fromTo(".nav-item", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
    
    gsap.fromTo(".logo", 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 lg:py-6">
        <div className="logo text-2xl md:text-3xl font-bold tracking-wider text-white">FARM</div>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="nav-item text-white/90 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
          
          <Link 
            href="tel:+1212255511" 
            className="nav-item flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">+1(212)255-511</span>
          </Link>
          
          <button className="nav-item bg-yellow-400 text-black px-6 xl:px-8 py-2.5 xl:py-3 text-sm font-semibold hover:bg-white transition-colors cursor-pointer">
            GET IN TOUCH
          </button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white z-50 cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-black/95 backdrop-blur-lg h-screen flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 text-2xl font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          
          <Link 
            href="tel:+1212255511"
            className="flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-lg font-semibold">+1(212)255-511</span>
          </Link>
          
          <button className="bg-yellow-400 text-black px-10 py-4 text-lg font-semibold hover:bg-white transition-colors mt-4 cursor-pointer">
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  );
};