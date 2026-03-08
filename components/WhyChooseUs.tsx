"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Leaf, Droplet, Sun, Shield, 
  Sprout, Truck, Users, Award,
  CheckCircle, Star, Heart, TrendingUp
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-badge",
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

      gsap.fromTo(".why-title",
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

      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, x: 0, duration: 1.2, delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, x: 0, duration: 1.2, delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(featuresRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1, duration: 0.8,
          stagger: 0.15, delay: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Sustainable Farming Practices",
      description: "We use eco-friendly methods that protect the environment while producing healthy, nutritious crops for your family.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "Every product undergoes rigorous quality checks to ensure you receive only the freshest, highest-grade farm produce.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Farm-to-Table Freshness",
      description: "Our efficient harvest-to-delivery system ensures your order reaches you within hours of being picked.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "We're proud to serve Ogun State communities, creating jobs and supporting local economic growth through agriculture.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Perfection",
      description: "Our team's dedication to farming excellence shows in every pepper, tuber, and livestock we raise.",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovative Techniques",
      description: "We combine traditional farming wisdom with modern agricultural technology for superior results.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { value: "100%", label: "Organic Practices", icon: <Leaf /> },
    { value: "24/7", label: "Customer Support", icon: <Users /> },
    { value: "50+", label: "Farm Projects", icon: <Award /> },
    { value: "15+", label: "Years Experience", icon: <Star /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <span className="why-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <Star size={18} className="text-yellow-500" />
            WHY PERAZIM FARMS
          </span>
          
          <h2 className="why-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-yellow-500">Our Farm</span>
          </h2>
          
          <p className="why-title text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            We're not just farmers — we're stewards of the land, committed to bringing you the very best of Nigerian agriculture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div ref={leftRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=735&auto=format&fit=crop"
                    alt="Organic farming practices at Perazim Farms"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    Organic
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b1a?q=80&w=735&auto=format&fit=crop"
                    alt="Fresh harvest from Perazim Farms Ogun State"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    Fresh
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1527683611643-4009f3b7615b?q=80&w=735&auto=format&fit=crop"
                    alt="Happy farmers at Perazim Farms Nigeria"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    Dedicated
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=713&auto=format&fit=crop"
                    alt="Sustainable agriculture Ogun State"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    Sustainable
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Sprout className="w-10 h-10 text-black" />
            </div>
          </div>

          <div ref={rightRef} className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ogun State's Trusted Farm
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Located in the fertile lands of Ogun State, Perazim Farms has become synonymous with quality agricultural produce. Our commitment to excellence has made us a preferred partner for families, restaurants, and markets across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-yellow-50 transition-colors">
                  <div className="text-yellow-500 w-6 h-6 mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white flex items-center justify-center text-xs font-bold text-yellow-800">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1000+</span> happy customers
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                featuresRef.current[index] = el;
              }}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-yellow-600 font-medium text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Trusted quality</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%20want%20to%20experience%20your%20quality%20farm%20produce"
            target="_blank"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold hover:bg-black hover:text-white transition-colors rounded-full group"
          >
            Experience the Perazim Difference
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};