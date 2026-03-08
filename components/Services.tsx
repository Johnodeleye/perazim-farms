"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Sprout, Tractor, Package, Truck, 
  ShoppingBag, Leaf, Droplet, Sun,
  Phone, ArrowRight
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-badge",
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

      gsap.fromTo(".services-title",
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

      gsap.fromTo(servicesRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, x: 0, duration: 1,
          stagger: 0.2, delay: 0.4,
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

  const services = [
    {
      id: "nursery",
      title: "Nursery & Seedlings",
      description: "Quality pepper nurseries and vegetable seedlings for aspiring farmers.",
      icon: <Sprout className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1771712256832-c75c2439e514?q=80&w=687&auto=format&fit=crop",
      features: ["Pepper Nursery", "Tomato Seedlings", "Vegetable Starts"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "processing",
      title: "Farm Processing",
      description: "Cassava processing into garri, flour, and other value-added products.",
      icon: <Package className="w-8 h-8" />,
      image: "/pro.jpg",
      features: ["Garri Processing", "Cassava Flour", "Packing"],
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: "livestock",
      title: "Livestock Rearing",
      description: "Expert pig farming and livestock management with healthy breeding practices.",
      icon: <Tractor className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1651592279311-120424784c06?q=80&w=1974&auto=format&fit=crop",
      features: ["Pig Farming", "Broilers", "Goat"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: "delivery",
      title: "Farm Fresh Delivery",
      description: "Direct from farm to your table with our reliable delivery service.",
      icon: <Truck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1761839257874-e56dfa2260cb?q=80&w=1469&auto=format&fit=crop",
      features: ["Same Day Delivery", "Farm Pickup", "Wholesale Orders"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-gray-50 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <span className="services-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <Sun size={18} className="text-yellow-500" />
            WHAT WE OFFER
          </span>
          
          <h2 className="services-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Farm <span className="text-yellow-500">Services</span>
          </h2>
          
          <p className="services-title text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive farming solutions from nursery to delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                servicesRef.current[index] = el;
              }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl">
                    <div className="text-yellow-600">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/services/${service.id}`}
                      className="flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group/btn cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      href={`https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%27m%20interested%20in%20your%20${service.title.toLowerCase()}%20services`}
                      target="_blank"
                      className="flex items-center gap-2 bg-gray-100 hover:bg-yellow-400 px-4 py-2 rounded-full transition-colors group/call cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-gray-600 group-hover/call:text-black" />
                      <span className="text-sm font-medium">Contact</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-yellow-600">
                Premium Quality
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Want to Partner With Us?
            </h3>
            <p className="text-black/80 text-base md:text-lg mb-6">
              Whether you're looking for fresh produce, seedlings, or farm processing services, we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%20would%20like%20to%20place%20an%20order`}
                target="_blank"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors inline-flex items-center gap-2 justify-center cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                Place Order
              </Link>
              <Link 
                href={`https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%20would%20like%20to%20inquire%20about%20your%20services`}
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};