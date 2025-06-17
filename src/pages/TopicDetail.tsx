
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, BookOpen, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const topicData = {
  "cell-biology": {
    title: "Cell Biology",
    description: "Explore the fundamental units of life and their structures",
    image: "photo-1466721591366-2d5fba72006d",
    difficulty: "Beginner",
    duration: "4 hours",
    progress: 0,
    overview: "Cell biology is the study of cell structure and function, and it revolves around the concept that the cell is the fundamental unit of life. Focusing on the cell permits a detailed understanding of the tissues and organisms that cells compose.",
    topics: [
      "Cell Structure and Organization",
      "Cell Membrane and Transport",
      "Organelles and Their Functions", 
      "Cell Division and Reproduction",
      "Cellular Metabolism",
      "DNA and RNA in Cells"
    ],
    lessons: [
      { id: 1, title: "Introduction to Cells", duration: "15 min", completed: false },
      { id: 2, title: "Cell Membrane Structure", duration: "20 min", completed: false },
      { id: 3, title: "Nucleus and Genetic Material", duration: "25 min", completed: false },
      { id: 4, title: "Mitochondria and Energy", duration: "18 min", completed: false },
      { id: 5, title: "Endoplasmic Reticulum", duration: "22 min", completed: false },
      { id: 6, title: "Golgi Apparatus", duration: "16 min", completed: false }
    ]
  },
  "botany": {
    title: "Botany",
    description: "Discover the fascinating world of plants and their ecosystems",
    image: "photo-1485833077593-4278bba3f11f",
    difficulty: "Intermediate",
    duration: "6 hours",
    progress: 0,
    overview: "Botany is the scientific study of plants, including their physiology, structure, genetics, ecology, distribution, classification, and economic importance.",
    topics: [
      "Plant Anatomy and Morphology",
      "Photosynthesis and Plant Metabolism",
      "Plant Reproduction and Life Cycles",
      "Plant Classification and Taxonomy",
      "Plant Ecology and Adaptation",
      "Economic Botany and Plant Uses",
      "Plant Diseases and Defense",
      "Plant Evolution and Diversity"
    ],
    lessons: [
      { id: 1, title: "Introduction to Plant Kingdom", duration: "20 min", completed: false },
      { id: 2, title: "Plant Cell Structure", duration: "25 min", completed: false },
      { id: 3, title: "Roots, Stems, and Leaves", duration: "30 min", completed: false },
      { id: 4, title: "Photosynthesis Process", duration: "35 min", completed: false },
      { id: 5, title: "Plant Reproduction", duration: "28 min", completed: false },
      { id: 6, title: "Plant Classification", duration: "22 min", completed: false },
      { id: 7, title: "Plant Adaptations", duration: "26 min", completed: false },
      { id: 8, title: "Economic Importance of Plants", duration: "24 min", completed: false }
    ]
  },
  "anatomy": {
    title: "Human Anatomy",
    description: "Learn about the complex systems of the human body",
    image: "photo-1535268647677-300dbf3d78d1",
    difficulty: "Advanced",
    duration: "8 hours",
    progress: 0,
    overview: "Human anatomy is the scientific study of the body's structures. It focuses on the shape, size, position, structure, and relationships between different parts of the human body.",
    topics: [
      "Skeletal System and Bone Structure",
      "Muscular System and Movement",
      "Circulatory System and Heart",
      "Respiratory System and Lungs",
      "Nervous System and Brain",
      "Digestive System and Organs",
      "Endocrine System and Hormones",
      "Reproductive System",
      "Integumentary System",
      "Urinary System"
    ],
    lessons: [
      { id: 1, title: "Introduction to Human Anatomy", duration: "25 min", completed: false },
      { id: 2, title: "Skeletal System Overview", duration: "35 min", completed: false },
      { id: 3, title: "Muscular System", duration: "40 min", completed: false },
      { id: 4, title: "Cardiovascular System", duration: "45 min", completed: false },
      { id: 5, title: "Respiratory System", duration: "38 min", completed: false },
      { id: 6, title: "Nervous System", duration: "50 min", completed: false },
      { id: 7, title: "Digestive System", duration: "42 min", completed: false },
      { id: 8, title: "Endocrine System", duration: "35 min", completed: false },
      { id: 9, title: "Reproductive System", duration: "40 min", completed: false },
      { id: 10, title: "Integumentary System", duration: "30 min", completed: false }
    ]
  },
  "genetics": {
    title: "Genetics",
    description: "Understand heredity and the molecular basis of inheritance",
    image: "photo-1498936178812-4b2e558d2937",
    difficulty: "Advanced",
    duration: "7 hours",
    progress: 0,
    overview: "Genetics is the study of genes, genetic variation, and heredity in organisms. It examines how traits are passed from parents to offspring and how genetic information is expressed.",
    topics: [
      "DNA Structure and Function",
      "Gene Expression and Regulation",
      "Mendelian Genetics and Inheritance",
      "Chromosomes and Cell Division",
      "Mutations and Genetic Variation",
      "Population Genetics",
      "Molecular Genetics Techniques",
      "Genetic Engineering and Biotechnology",
      "Human Genetics and Disease"
    ],
    lessons: [
      { id: 1, title: "Introduction to Genetics", duration: "30 min", completed: false },
      { id: 2, title: "DNA Structure and Replication", duration: "35 min", completed: false },
      { id: 3, title: "Gene Expression", duration: "40 min", completed: false },
      { id: 4, title: "Mendelian Inheritance", duration: "45 min", completed: false },
      { id: 5, title: "Chromosomes and Meiosis", duration: "38 min", completed: false },
      { id: 6, title: "Mutations and Evolution", duration: "42 min", completed: false },
      { id: 7, title: "Population Genetics", duration: "35 min", completed: false },
      { id: 8, title: "Genetic Technologies", duration: "40 min", completed: false },
      { id: 9, title: "Human Genetic Disorders", duration: "45 min", completed: false }
    ]
  },
  "ecology": {
    title: "Ecology",
    description: "Study the relationships between organisms and their environment",
    image: "photo-1452378174528-3090a4bba7b2",
    difficulty: "Intermediate",
    duration: "5 hours",
    progress: 0,
    overview: "Ecology is the scientific study of the relationships between living organisms and their environment. It examines how organisms interact with each other and their physical surroundings.",
    topics: [
      "Ecosystem Structure and Function",
      "Energy Flow and Nutrient Cycling",
      "Population Dynamics",
      "Community Interactions",
      "Biodiversity and Conservation",
      "Climate Change and Environmental Impact",
      "Biomes and Habitats"
    ],
    lessons: [
      { id: 1, title: "Introduction to Ecology", duration: "25 min", completed: false },
      { id: 2, title: "Ecosystem Components", duration: "30 min", completed: false },
      { id: 3, title: "Energy Flow in Ecosystems", duration: "35 min", completed: false },
      { id: 4, title: "Population Ecology", duration: "40 min", completed: false },
      { id: 5, title: "Community Interactions", duration: "45 min", completed: false },
      { id: 6, title: "Biodiversity and Conservation", duration: "38 min", completed: false },
      { id: 7, title: "Environmental Challenges", duration: "42 min", completed: false }
    ]
  },
  "marine-biology": {
    title: "Marine Biology",
    description: "Dive into the study of ocean life and aquatic ecosystems",
    image: "photo-1518877593221-1f28583780b4",
    difficulty: "Intermediate",
    duration: "6 hours",
    progress: 0,
    overview: "Marine biology is the scientific study of organisms in the ocean and other marine bodies of water. It covers a vast range of topics from microscopic plankton to the largest whales.",
    topics: [
      "Marine Ecosystems and Habitats",
      "Ocean Physics and Chemistry",
      "Marine Organisms and Classification",
      "Marine Food Webs and Energy Flow",
      "Coral Reefs and Tropical Ecosystems",
      "Deep Sea Life and Adaptations",
      "Marine Conservation and Threats",
      "Human Impact on Oceans"
    ],
    lessons: [
      { id: 1, title: "Introduction to Marine Biology", duration: "28 min", completed: false },
      { id: 2, title: "Ocean Environments", duration: "32 min", completed: false },
      { id: 3, title: "Marine Organisms", duration: "35 min", completed: false },
      { id: 4, title: "Marine Food Chains", duration: "40 min", completed: false },
      { id: 5, title: "Coral Reef Ecosystems", duration: "45 min", completed: false },
      { id: 6, title: "Deep Ocean Life", duration: "38 min", completed: false },
      { id: 7, title: "Marine Conservation", duration: "42 min", completed: false },
      { id: 8, title: "Ocean Pollution and Climate Change", duration: "35 min", completed: false }
    ]
  }
};

const TopicDetail = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  const topic = topicData[topicId as keyof typeof topicData];
  
  if (!topic) {
    return <div>Topic not found</div>;
  }

  const completedLessons = topic.lessons.filter(lesson => lesson.completed).length;
  const remainingLessons = topic.lessons.length - completedLessons;

  const handleLessonStart = (lessonId: number) => {
    navigate(`/lesson/${topicId}/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 text-bio-forest hover:text-bio-green"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${topic.image}?w=800&h=400&fit=crop)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="mb-2 bg-white/20 text-white border-white/30">
                    {topic.difficulty}
                  </Badge>
                  <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>
                  <p className="text-lg opacity-90">{topic.description}</p>
                </div>
              </div>
            </Card>

            {/* Overview */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{topic.overview}</p>
                
                <h3 className="font-semibold mb-4 text-bio-forest">What you'll learn:</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {topic.topics.map((topicItem, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-bio-green" />
                      <span className="text-gray-600">{topicItem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lessons */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Course Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topic.lessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${lesson.completed ? 'bg-bio-green text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {lesson.completed ? <CheckCircle className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-bio-forest">{lesson.title}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleLessonStart(lesson.id)}
                        className="hover:bg-bio-green hover:text-white"
                      >
                        {lesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-bio-green mb-1">{topic.progress}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
                <Progress value={topic.progress} className="mb-4" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-bio-forest">{completedLessons}</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-bio-forest">{remainingLessons}</div>
                    <div className="text-xs text-gray-500">Remaining</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Course Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-bio-green" />
                    <div>
                      <div className="font-medium">{topic.lessons.length} Lessons</div>
                      <div className="text-sm text-gray-500">Interactive content</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-bio-blue" />
                    <div>
                      <div className="font-medium">{topic.duration}</div>
                      <div className="text-sm text-gray-500">Total duration</div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white"
                  onClick={() => navigate(`/quiz/${topicId}`)}
                >
                  Take Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
