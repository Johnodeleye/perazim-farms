"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Sprout, PiggyBank, Apple, Wheat, 
  ShoppingCart, Star, Flame, Droplet,
  Award, Truck, Leaf
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".products-badge",
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

      gsap.fromTo(".products-title",
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

      gsap.fromTo(productsRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, y: 0, scale: 1, duration: 0.8,
          stagger: 0.15, delay: 0.4,
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
    {
      id: "peppers-vegetables",
      category: "Peppers & Vegetables",
      icon: <Flame className="w-8 h-8" />,
      items: ["Pepper Nursery", "Green Pepper", "Tomatoes", "Scotch Bonnet", "Bell Peppers"],
      image: "https://images.unsplash.com/photo-1567539549213-cc1697632146?q=80&w=687&auto=format&fit=crop",
      color: "from-red-500 to-orange-500",
      message: "Hello Perazim Farms, I want to order Peppers and Vegetables"
    },
    {
      id: "root-crops",
      category: "Root Crops & Tubers",
      icon: <Wheat className="w-8 h-8" />,
      items: ["Cassava", "Garri Processing", "Yam", "Sweet Potatoes", "Cocoyam"],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      color: "from-amber-600 to-yellow-600",
      message: "Hello Perazim Farms, I want to order Root Crops and Tubers"
    },
    {
      id: "fruits",
      category: "Fruits & Produce",
      icon: <Apple className="w-8 h-8" />,
      items: ["Watermelon", "Plantain", "Banana", "Pineapple", "Pawpaw"],
      image: "https://images.unsplash.com/photo-1690483705837-41fb4c90b5f1?q=80&w=687&auto=format&fit=crop",
      color: "from-green-500 to-emerald-600",
      message: "Hello Perazim Farms, I want to order Fruits and Produce"
    },
    {
      id: "livestock",
      category: "Livestock",
      icon: <PiggyBank className="w-8 h-8" />,
      items: ["Pig Farming", "Broilers", "Layers", "Goats"],
      image: "https://images.unsplash.com/photo-1655307550020-3eb7efdef723?q=80&w=880&auto=format&fit=crop",
      color: "from-amber-700 to-brown-600",
      message: "Hello Perazim Farms, I want to order Livestock products"
    }
  ];

  const handleWhatsAppOrder = (product: typeof products[0]) => {
    const phoneNumber = "2349132445279";
    const message = encodeURIComponent(product.message);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="products-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <Sprout size={18} className="text-yellow-500" />
            OUR FARM PRODUCE
          </span>
          
          <h2 className="products-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fresh From Our <span className="text-yellow-500">Farm</span>
          </h2>
          
          <p className="products-title text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From nursery to harvest, we nurture the finest quality produce for your table
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                productsRef.current[index] = el;
              }}
              onClick={() => handleWhatsAppOrder(product)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-600">
                    {product.icon}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {product.category}
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <Leaf className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-gray-500">Farm Fresh</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(product);
                    }}
                    className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-1 group/btn cursor-pointer"
                  >
                    Order Now
                    <ShoppingCart className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 md:gap-12 bg-white px-8 py-4 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 text-sm md:text-base">Daily Fresh Harvest</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Droplet className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 text-sm md:text-base">Organic Farming</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden md:block" />
            <div className="items-center gap-2 hidden md:flex">
              <Flame className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 text-sm md:text-base">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};