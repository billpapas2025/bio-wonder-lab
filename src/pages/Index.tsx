
import { useState } from "react";
import { Search, Microscope, Leaf, Heart, Dna, TreePine, Waves } from "lucide-react";
import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import SearchBar from "@/components/SearchBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const topics = [
  {
    id: "cell-biology",
    title: "Cell Biology",
    description: "Explore the fundamental units of life and their structures",
    icon: Microscope,
    image: "/lovable-uploads/aa72f012-b0ef-4432-8ed3-e8f99377d008.png",
    difficulty: "Beginner",
    lessons: 6,
    duration: "4 hours"
  },
  {
    id: "botany",
    title: "Botany",
    description: "Discover the fascinating world of plants and their ecosystems",
    icon: Leaf,
    image: "/lovable-uploads/74a8bdc2-d1a8-4933-b316-1da0469caf19.png",
    difficulty: "Intermediate",
    lessons: 8,
    duration: "6 hours"
  },
  {
    id: "anatomy",
    title: "Human Anatomy",
    description: "Learn about the complex systems of the human body",
    icon: Heart,
    image: "/lovable-uploads/ab9072f8-8982-44a4-824a-90fbb94bcaea.png",
    difficulty: "Advanced",
    lessons: 10,
    duration: "8 hours"
  },
  {
    id: "genetics",
    title: "Genetics",
    description: "Understand heredity and the molecular basis of inheritance",
    icon: Dna,
    image: "/lovable-uploads/ff6a3b2f-d3ea-4371-a59b-e3465bd6edf3.png",
    difficulty: "Advanced",
    lessons: 9,
    duration: "7 hours"
  },
  {
    id: "ecology",
    title: "Ecology",
    description: "Study the relationships between organisms and their environment",
    icon: TreePine,
    image: "/lovable-uploads/7bbf19ca-7ef7-45c6-bfcb-d30560162a5d.png",
    difficulty: "Intermediate",
    lessons: 7,
    duration: "5 hours"
  },
  {
    id: "marine-biology",
    title: "Marine Biology",
    description: "Dive into the study of ocean life and aquatic ecosystems",
    icon: Waves,
    image: "/lovable-uploads/b6581ef4-4c6a-43c4-92f9-ef6197c7bda6.png",
    difficulty: "Intermediate",
    lessons: 8,
    duration: "6 hours"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "All" || topic.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <StatsSection />
        
        <div id="explore-topics" className="mb-8">
          <h2 className="text-3xl font-bold text-bio-forest mb-6 text-center">
            Explore Biology Topics
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No topics found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
