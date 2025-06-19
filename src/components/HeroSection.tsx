
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToTopics = () => {
    const topicsSection = document.getElementById('explore-topics');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemo = () => {
    window.open('https://www.youtube.com/watch?v=LkKR6u2DSoU', '_blank');
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bio-green/10 to-bio-blue/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-bio-green/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-bio-blue/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-bio-green/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-bio-forest mb-6 leading-tight">
          Discover the
          <span className="bg-gradient-to-r from-bio-green to-bio-blue bg-clip-text text-transparent"> Wonders </span>
          of Biology
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Embark on an interactive journey through the fascinating world of life sciences. 
          From microscopic cells to complex ecosystems, explore biology like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToTopics}
            className="bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white px-8 py-4 text-lg group"
          >
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={openDemo}
            className="border-bio-green text-bio-green hover:bg-bio-green hover:text-white px-8 py-4 text-lg group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
