"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Heart, 
  Facebook, Twitter, Instagram, Youtube,
  MessageCircle, ArrowUp, Sprout
} from "lucide-react";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Show scroll button
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "Media", href: "/#media" },
    { name: "Blog", href: "/#blog" }
  ];

  const products = [
    "Peppers & Vegetables",
    "Root Crops & Tubers",
    "Fruits & Produce",
    "Livestock",
    "Seedlings"
  ];

  const services = [
    "Nursery & Seedlings",
    "Farm Processing",
    "Livestock Rearing",
    "Farm Fresh Delivery",
    "Consultation"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/perazimfarms", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/perazimfarms", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/perazimfarms", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/perazimfarms", label: "Youtube" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/2349132445279", label: "WhatsApp" }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div className="space-y-6">
            <div className="relative w-32 h-14">
              <Image
                src="/perabg.png"
                alt="Perazim Farms"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Perazim Farms is dedicated to sustainable farming, producing fresh peppers, vegetables, fruits, root crops, and livestock for communities in Ogun State, Nigeria.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-yellow-400 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Products
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-yellow-400 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    href="/#products"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-yellow-400 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/#services"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-gray-800">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <div className="space-y-3">
              <Link href="tel:+2349132445279" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +234 913 244 5279
              </Link>
              <Link href="mailto:info@perazimfarms.com" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@perazimfarms.com
              </Link>
              <Link href="https://maps.google.com/?q=Ogun+State+Nigeria" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <MapPin className="w-4 h-4" />
                Ogun State, Nigeria
              </Link>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-gray-400 text-sm">Subscribe for farm updates and tips</p>
            <form className="flex flex-col md:flex-row gap-3 md:justify-end">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:border-yellow-400 outline-none"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Perazim Farms. All rights reserved. | Ogun State, Nigeria
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Nigerian agriculture
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};