"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Clock, 
  MessageCircle, Heart, BookOpen, Loader
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  slug: string;
  content: string;
  createdAt: string;
  images: string[];
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  user: {
    name: string;
    username: string;
    profileImage: string;
    isVerified: boolean;
  };
}

export const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const postsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://hubpost-backend.vercel.app/api/posts/user/codewithpdev');
        const data = await response.json();
        
        if (data.success && data.posts) {
          setPosts(data.posts.slice(0, 4));
        } else {
          setError('Failed to load posts');
        }
      } catch (err) {
        setError('Error fetching posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading && posts.length > 0) {
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
    }
  }, [loading, posts]);

  const stripHtmlTags = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getExcerpt = (content: string, maxLength: number = 100) => {
    const text = stripHtmlTags(content);
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
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

          <div className="flex justify-center items-center py-20">
            <Loader className="w-10 h-10 text-yellow-500 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          </div>

          <div className="text-center py-20">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
          {posts.map((post, index) => (
            <div
              key={post.id}
              ref={(el: HTMLDivElement | null) => {
                postsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                {post.images && post.images.length > 0 ? (
                  <Image
                    src={post.images[0]}
                    alt={stripHtmlTags(post.content).substring(0, 50)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.user.name.split(' ')[0]}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.createdAt)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {getExcerpt(post.content, 60)}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {getExcerpt(post.content, 80)}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    @{post.user.username}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Heart className="w-3 h-3" />
                      {post.likesCount}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MessageCircle className="w-3 h-3" />
                      {post.commentsCount}
                    </span>
                  </div>
                </div>

                <Link 
                  href={`https://hubpost.community/posts/${post.slug}`}
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
            href="https://hubpost.community/codewithpdev"
            target="_blank"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors group"
          >
            View All Posts
            <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};