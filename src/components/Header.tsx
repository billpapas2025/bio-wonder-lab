
import { useState } from "react";
import { Link } from "react-router-dom";
import { Microscope, Menu, X, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-bio-green to-bio-blue rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-bio-green to-bio-blue bg-clip-text text-transparent">
              BioWonder Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-bio-forest hover:text-bio-green transition-colors duration-200"
            >
              <BookOpen className="w-4 h-4" />
              <span>Topics</span>
            </Link>
            <Link 
              to="/progress" 
              className="flex items-center space-x-1 text-bio-forest hover:text-bio-green transition-colors duration-200"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Progress</span>
            </Link>
            <Button className="bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-bio-forest hover:text-bio-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                <span>Topics</span>
              </Link>
              <Link 
                to="/progress" 
                className="flex items-center space-x-2 text-bio-forest hover:text-bio-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Progress</span>
              </Link>
              <Button className="bg-gradient-to-r from-bio-green to-bio-blue text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
