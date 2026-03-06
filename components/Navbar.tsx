"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "PAGES", "SERVICES", "PORTFOLIO", "BLOG"];
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

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

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      
      gsap.fromTo(menuItemsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, y: 0, scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.2)",
          delay: 0.2
        }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false)
      });
      
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.2,
        stagger: 0.05
      });
    }
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsOpen(false)
    });
    
    gsap.to(menuItemsRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.2,
      stagger: 0.05
    });
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 lg:py-6">
        <Link href="/" className="logo relative w-28 md:w-28 lg:w-32 h-14 md:h-12 lg:h-14">
          <Image
            src="/perabg.png"
            alt="Perazim Farms"
            fill
            className="object-contain"
            priority
          />
        </Link>
        
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
            href="tel:+2349132445279" 
            className="nav-item flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">+234 913 244 5279</span>
          </Link>
          
          <button className="nav-item bg-yellow-400 text-black px-6 xl:px-8 py-2.5 xl:py-3 text-sm font-semibold hover:bg-white transition-colors cursor-pointer">
            GET IN TOUCH
          </button>
        </div>

        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white z-50 cursor-pointer relative w-7 h-7"
        >
          <div className="absolute inset-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {isOpen && (
        <div 
          ref={menuRef}
          className="lg:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-lg min-h-screen flex flex-col items-center justify-center gap-8"
        >
          <Link href="/" className="relative w-32 h-14 mb-4" onClick={closeMenu}>
            <Image
              src="/perabg.png"
              alt="Perazim Farms"
              fill
              className="object-contain"
            />
          </Link>
          
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              ref={(el: HTMLAnchorElement | null) => {
                menuItemsRef.current[index] = el;
              }}
              className="text-white hover:text-yellow-400 text-2xl font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
          
          <Link 
            href="tel:+2349132445279"
            ref={(el: HTMLAnchorElement | null) => {
              menuItemsRef.current[navItems.length] = el;
            }}
            className="flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={closeMenu}
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-lg font-semibold">+234 913 244 5279</span>
          </Link>
          
          <button 
            ref={(el: HTMLButtonElement | null) => {
              menuItemsRef.current[navItems.length + 1] = el;
            }}
            className="bg-yellow-400 text-black px-10 py-4 text-lg font-semibold hover:bg-white transition-colors mt-4 cursor-pointer"
            onClick={closeMenu}
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </nav>
  );
};