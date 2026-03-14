"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Send, Clock,
  Facebook, Twitter, Instagram, Youtube,
  MessageCircle, CheckCircle, AlertCircle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-badge",
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

      gsap.fromTo(".contact-title",
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
          opacity: 1, x: 0, duration: 1.2, delay: 0.4,
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
          opacity: 1, x: 0, duration: 1.2, delay: 0.4,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: "+234 913 244 5279",
      link: "tel:+2349132445279",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: "info@perazimfarms.com",
      link: "mailto:info@perazimfarms.com",
      action: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Farm Location",
      value: "Ogun State, Nigeria",
      link: "https://maps.google.com/?q=Ogun+State+Nigeria",
      action: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      value: "Mon - Sat: 8am - 6pm",
      link: null,
      action: "Visit Us"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/perazimfarms", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/perazimfarms", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/perazimfarms", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/perazimfarms", label: "Youtube" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/2349132445279", label: "WhatsApp" }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <span className="contact-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <MessageCircle size={18} className="text-yellow-500" />
            GET IN TOUCH
          </span>
          
          <h2 className="contact-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-yellow-500">Perazim Farms</span>
          </h2>
          
          <p className="contact-title text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div ref={leftRef} className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-gray-500 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-semibold mb-1">{info.value}</p>
                      {info.link && (
                        <Link 
                          href={info.link}
                          target={info.link.startsWith('http') ? "_blank" : undefined}
                          className="text-yellow-600 text-sm hover:text-yellow-700 font-medium inline-flex items-center gap-1"
                        >
                          {info.action} →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-500 mb-4">Follow Us</h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1527683611643-4009f3b7615b?q=80&w=735&auto=format&fit=crop"
                alt="Perazim Farms Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link 
                  href="https://maps.google.com/?q=Ogun+State+Nigeria"
                  target="_blank"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  View on Google Maps
                </Link>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {formStatus === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 text-sm">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-700 text-sm">Something went wrong. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our privacy policy and consent to being contacted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};