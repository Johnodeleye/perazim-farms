"use client";
import Image from "next/image";
import { ArrowRight, Leaf, Wheat, Sprout } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(".hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(".hero-button",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.1, ease: "back.out(1.7)" }
      );

      gsap.fromTo(".stat-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, delay: 1.3, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Farm landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 flex items-center h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <span className="hero-badge inline-flex items-center gap-2 text-yellow-400 text-sm md:text-base font-semibold tracking-wider mb-3 md:mb-4">
            <Sprout size={18} className="text-yellow-400" />
            BELIEVE IN QUALITY!
          </span>
          
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Quality Trust: <br className="hidden md:block" />
            Direct to the Farm
          </h1>
          
          <p className="hero-description text-white/90 text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 max-w-lg">
            We all need a little space to grow. Give yourself the space you need to find your inner you.
          </p>
          
          <button className="hero-button group bg-yellow-400 text-black px-6 md:px-8 lg:px-10 py-3 md:py-4 text-base md:text-lg font-semibold hover:bg-white transition-colors inline-flex items-center gap-2 cursor-pointer">
            Contact Us
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="hidden lg:flex absolute right-10 xl:right-16 bottom-10 xl:bottom-16 gap-6 xl:gap-8">
          <div className="stat-item flex items-center gap-3">
            <Leaf className="w-6 h-6 text-yellow-400" />
            <span className="text-white text-lg font-medium">Organic</span>
          </div>
          <div className="stat-item flex items-center gap-3">
            <Wheat className="w-6 h-6 text-yellow-400" />
            <span className="text-white text-lg font-medium">Fresh</span>
          </div>
          <div className="stat-item flex items-center gap-3 border-b-2 border-yellow-400 pb-1">
            <Sprout className="w-6 h-6 text-yellow-400" />
            <span className="text-white text-lg font-semibold">Natural</span>
          </div>
        </div>

        <div className="absolute left-6 md:left-10 lg:left-16 bottom-6 md:bottom-8 lg:hidden flex gap-4">
          <span className="text-white/60 text-sm md:text-base">HOME1</span>
          <span className="text-white/60 text-sm md:text-base">HOME2</span>
          <span className="text-white text-sm md:text-base font-semibold border-b-2 border-yellow-400">HOME3</span>
        </div>
      </div>
    </section>
  );
};