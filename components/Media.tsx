"use client";
import Image from "next/image";
import { 
  Play, X, ChevronLeft, ChevronRight, 
  Volume2, VolumeX, Maximize, Minimize,
  Heart, Download, Share2, Camera, Video,
  Grid3x3, LayoutGrid, Image as ImageIcon
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Media = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const videoRef = useRef<HTMLVideoElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".media-badge",
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

      gsap.fromTo(".media-title",
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

      gsap.fromTo(".media-grid-item",
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, scale: 1, duration: 0.8,
          stagger: 0.1, delay: 0.4,
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

  useEffect(() => {
    if (selectedMedia !== null && lightboxRef.current) {
      gsap.fromTo(lightboxRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [selectedMedia]);

  const mediaItems = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop",
      title: "Pepper Harvest",
      category: "farming",
      description: "Fresh peppers ready for harvest at Perazim Farms"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1567539549213-cc1697632146?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1567539549213-cc1697632146?w=800&auto=format&fit=crop",
      title: "Vegetable Garden",
      category: "farming",
      description: "Lush vegetable gardens in Ogun State"
    },
    {
      type: "video",
      url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1543946207-39bd91b70bcf?w=800&auto=format&fit=crop",
      title: "Farm Life at Perazim",
      category: "behind-scenes",
      description: "A day in the life at our farm"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
      title: "Cassava Processing",
      category: "processing",
      description: "Traditional cassava processing methods"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop",
      title: "Fresh Watermelon",
      category: "produce",
      description: "Juicy watermelons from our farm"
    },
    {
      type: "video",
      url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1543946207-39bd91b70bcf?w=800&auto=format&fit=crop",
      title: "Pig Farming",
      category: "livestock",
      description: "Our healthy pig farming operations"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
      title: "Organic Farming",
      category: "farming",
      description: "Sustainable organic practices"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b1a?w=1200&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b1a?w=800&auto=format&fit=crop",
      title: "Farm Workers",
      category: "behind-scenes",
      description: "Our dedicated team at work"
    },
    {
      type: "video",
      url: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1527683611643-4009f3b7615b?w=800&auto=format&fit=crop",
      title: "Farm Tour",
      category: "tours",
      description: "Take a tour of Perazim Farms"
    }
  ];

  const filters = [
    { id: "all", label: "All Media", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "images", label: "Images", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "videos", label: "Videos", icon: <Video className="w-4 h-4" /> },
    { id: "farming", label: "Farming", icon: <Camera className="w-4 h-4" /> },
    { id: "behind-scenes", label: "Behind Scenes", icon: <Grid3x3 className="w-4 h-4" /> }
  ];

  const filteredMedia = activeFilter === "all" 
    ? mediaItems 
    : activeFilter === "images"
    ? mediaItems.filter(item => item.type === "image")
    : activeFilter === "videos"
    ? mediaItems.filter(item => item.type === "video")
    : mediaItems.filter(item => item.category === activeFilter);

  const handleMediaClick = (index: number) => {
    const originalIndex = mediaItems.findIndex(
      item => item.url === filteredMedia[index].url
    );
    setCurrentIndex(originalIndex);
    setSelectedMedia(originalIndex);
  };

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
  }, [mediaItems.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
  }, [mediaItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedMedia === null) return;
    
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedMedia(null);
  }, [selectedMedia, handlePrevious, handleNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section id="media" ref={sectionRef} className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <span className="media-badge inline-flex items-center gap-2 text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-4">
            <Camera size={18} className="text-yellow-500" />
            OUR GALLERY
          </span>
          
          <h2 className="media-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moments From <span className="text-yellow-500">Perazim Farms</span>
          </h2>
          
          <p className="media-title text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore the beauty of our farm through images and videos
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-yellow-400 text-black shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMedia.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMediaClick(index)}
              className="media-grid-item group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-black" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>

              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                {item.type === "video" ? "Video" : "Photo"}
              </div>
            </div>
          ))}
        </div>

        {selectedMedia !== null && (
          <div 
            ref={lightboxRef}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <div 
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                {mediaItems[currentIndex].type === "video" ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      ref={videoRef}
                      src={mediaItems[currentIndex].url}
                      className="max-h-full max-w-full rounded-lg"
                      controls
                      playsInline
                    />
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-yellow-400 transition-colors"
                      >
                        {isPlaying ? <X className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:text-yellow-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={toggleFullscreen}
                        className="text-white hover:text-yellow-400 transition-colors"
                      >
                        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={mediaItems[currentIndex].url}
                      alt={mediaItems[currentIndex].title}
                      fill
                      className="object-contain"
                    />
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
                      <button className="text-white hover:text-yellow-400 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-yellow-400 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-yellow-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{mediaItems[currentIndex].title}</h3>
                <p className="text-white/80">{mediaItems[currentIndex].description}</p>
              </div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {currentIndex + 1} / {mediaItems.length}
                </span>
                <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {mediaItems[currentIndex].type === "video" ? "Video" : "Image"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};