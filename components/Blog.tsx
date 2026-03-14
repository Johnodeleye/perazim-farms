"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Clock, 
  MessageCircle, Heart, BookOpen, Sprout,
  Tractor, Droplet, Leaf
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const postsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-badge",
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

      gsap.fromTo(".blog-title",
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

      gsap.fromTo(postsRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 0.8,
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

  const blogPosts = [
    {
      id: 1,
      title: "How to Grow Healthy Pepper: Complete Guide",
      excerpt: "Learn the secrets to cultivating thriving pepper plants from nursery to harvest with our expert tips and techniques.",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop",
      author: "Farm Manager",
      date: "Mar 15, 2026",
      readTime: "5 min read",
      comments: 12,
      likes: 48,
      category: "Pepper Farming",
      icon: <Sprout className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Benefits of Cassava Farming in Ogun State",
      excerpt: "Discover why cassava farming is thriving in Ogun State and how it's transforming local agriculture and communities.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      author: "Agricultural Expert",
      date: "Mar 10, 2026",
      readTime: "4 min read",
      comments: 8,
      likes: 36,
      category: "Root Crops",
      icon: <Leaf className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Essential Pig Farming Tips for Beginners",
      excerpt: "Starting pig farming? Here are crucial tips on housing, feeding, health management, and breeding for success.",
      image: "https://images.unsplash.com/photo-1543946207-39bd91b70bcf?w=800&auto=format&fit=crop",
      author: "Livestock Specialist",
      date: "Mar 5, 2026",
      readTime: "6 min read",
      comments: 15,
      likes: 62,
      category: "Livestock",
      icon: <Tractor className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Watermelon Cultivation: From Seed to Harvest",
      excerpt: "Everything you need to know about growing sweet, juicy watermelons in Nigerian climate conditions.",
      image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop",
      author: "Fruit Specialist",
      date: "Feb 28, 2026",
      readTime: "5 min read",
      comments: 9,
      likes: 41,
      category: "Fruits",
      icon: <Droplet className="w-4 h-4" />
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <span className="blog-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <BookOpen size={18} className="text-yellow-500" />
            FARM TIPS & INSIGHTS
          </span>
          
          <h2 className="blog-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest From Our <span className="text-yellow-500">Blog</span>
          </h2>
          
          <p className="blog-title text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Expert advice, farming tips, and stories from Perazim Farms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el: HTMLDivElement | null) => {
                postsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  {post.icon}
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                </div>

                <Link 
                  href={`https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%20want%20to%20read%20more%20about%20${encodeURIComponent(post.title)}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://wa.me/2349132445279?text=Hello%20Perazim%20Farms%2C%20I%20want%20to%20subscribe%20to%20your%20blog%20updates"
            target="_blank"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors group"
          >
            Subscribe to Our Newsletter
            <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};