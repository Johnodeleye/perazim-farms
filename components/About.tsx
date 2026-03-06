"use client";
import Image from "next/image";
import { Leaf, Wheat, Sprout, PiggyBank, Apple, Award, Users, Truck } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-badge",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".about-title",
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 1.2, delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".about-text",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef1.current,
        { opacity: 0, x: -50, rotate: -5 },
        { 
          opacity: 1, x: 0, rotate: 0, duration: 1.2, delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef2.current,
        { opacity: 0, y: 50, rotate: 5 },
        { 
          opacity: 1, y: 0, rotate: 0, duration: 1.2, delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef3.current,
        { opacity: 0, x: 50, rotate: 5 },
        { 
          opacity: 1, x: 0, rotate: 0, duration: 1.2, delay: 0.7,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".stat-card",
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, delay: 0.8,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".product-icon",
        { opacity: 0, y: 20 },
        { 
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { icon: <Sprout className="w-6 h-6" />, name: "Peppers" },
    { icon: <Leaf className="w-6 h-6" />, name: "Vegetables" },
    { icon: <Apple className="w-6 h-6" />, name: "Fruits" },
    { icon: <Wheat className="w-6 h-6" />, name: "Root Crops" },
    { icon: <PiggyBank className="w-6 h-6" />, name: "Livestock" },
  ];

  const stats = [
    { icon: <Award />, value: "15+", label: "Years Experience" },
    { icon: <Users />, value: "1000+", label: "Happy Customers" },
    { icon: <Truck />, value: "50+", label: "Daily Deliveries" },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div ref={imageRef1} className="relative h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/john.jpg"
                    alt="Pepper farm"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div ref={imageRef2} className="relative h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/farm1.jpg"
                    alt="Fresh vegetables"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div ref={imageRef3} className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/farm2.jpg"
                    alt="Farm animals"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="bg-yellow-400 rounded-2xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <div className="text-black font-bold text-xl md:text-2xl">Perazim Farms</div>
                  <div className="text-black/80 text-sm md:text-base">Est. 2026</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-400/20 rounded-full blur-3xl" />
          </div>

          <div ref={textRef} className="space-y-6 md:space-y-8">
            <div>
              <span className="about-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-3">
                <Sprout size={18} className="text-yellow-500" />
                ABOUT PERAZIM FARMS
              </span>
              
              <h2 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Growing Quality, <br />
                <span className="text-yellow-500">Nurturing Life</span>
              </h2>
            </div>

            <p className="about-text text-gray-600 text-base md:text-lg leading-relaxed">
              Perazim Farms is dedicated to sustainable farming, producing fresh peppers & vegetations, fruits, root crops, and livestock for our community.
            </p>

            <p className="about-text text-gray-600 text-base md:text-lg leading-relaxed">
              From pepper nurseries to cassava and plantains, and even pig farming, we ensure every product is nurtured with care. Our goal is to bring natural, healthy, and high-quality produce straight from the farm to your table.
            </p>

            <div className="about-text grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-4">
              {products.map((product, index) => (
                <div key={index} className="product-icon flex items-center gap-2 bg-gray-50 p-3 rounded-xl hover:bg-yellow-50 transition-colors group">
                  <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">{product.name}</span>
                </div>
              ))}
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-4 md:gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-yellow-50 hover:to-white transition-colors">
                  <div className="text-yellow-500 w-8 h-8 md:w-10 md:h-10 mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/+23481346366" className="about-button group bg-yellow-400 text-black px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer rounded-xl">
              Learn More About Us
              <Sprout className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};