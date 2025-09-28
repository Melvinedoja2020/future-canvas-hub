import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGasMonitoring from "@/assets/hero-gas-monitoring.jpg";
import heroSmartDelivery from "@/assets/hero-smart-delivery.jpg";
import heroSmartHomes from "@/assets/hero-smart-homes.jpg";
import heroIotPlatform from "@/assets/hero-iot-platform.jpg";

const slides = [
  {
    image: heroGasMonitoring,
    title: "Smart Gas Monitoring",
    subtitle: "Real-time IoT cylinder tracking and safety management",
    description: "Monitor gas levels, detect leaks, and ensure safety with our advanced IoT sensors and real-time telemetry system.",
    cta: "Monitor Gas Systems"
  },
  {
    image: heroSmartDelivery,
    title: "Intelligent Delivery Network", 
    subtitle: "Optimized routes and automated logistics",
    description: "Streamline deliveries with AI-powered route optimization, real-time tracking, and automated order management.",
    cta: "Optimize Deliveries"
  },
  {
    image: heroSmartHomes,
    title: "Connected Smart Homes",
    subtitle: "Home automation and gas safety integration", 
    description: "Transform homes with connected gas monitoring, automated reordering, and comprehensive safety alerts.",
    cta: "Connect Your Home"
  },
  {
    image: heroIotPlatform,
    title: "Complete IoT Platform",
    subtitle: "Enterprise-grade gas management solution",
    description: "Comprehensive platform for gas companies, regulators, and enterprises with advanced analytics and reporting.",
    cta: "Explore Platform"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100 animate-slide-up">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-blue-50 mb-8 animate-slide-up">
              {slides[currentSlide].description}
            </p>
          </div>
          
          <div className="flex gap-4 animate-bounce-in">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-blue-50">
              {slides[currentSlide].cta}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="h-12 w-12 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="h-12 w-12 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <div className="absolute bottom-8 right-8 z-20">
        <Button
          onClick={() => setIsPlaying(!isPlaying)}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>
      </div>
    </section>
  );
}