
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
    lessons: 12,
    progress: 30,
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
      { id: 1, title: "Introduction to Cells", duration: "15 min", completed: true },
      { id: 2, title: "Cell Membrane Structure", duration: "20 min", completed: true },
      { id: 3, title: "Nucleus and Genetic Material", duration: "25 min", completed: true },
      { id: 4, title: "Mitochondria and Energy", duration: "18 min", completed: false },
      { id: 5, title: "Endoplasmic Reticulum", duration: "22 min", completed: false },
      { id: 6, title: "Golgi Apparatus", duration: "16 min", completed: false }
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
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer"
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
                      <Button variant="ghost" size="sm">
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
                    <div className="text-lg font-semibold text-bio-forest">3</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-bio-forest">9</div>
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
                      <div className="font-medium">{topic.lessons} Lessons</div>
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
