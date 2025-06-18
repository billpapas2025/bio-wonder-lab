
import { useNavigate } from "react-router-dom";
import { Clock, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  difficulty: string;
  lessons: number;
  duration: string;
}

interface TopicCardProps {
  topic: Topic;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-700 border-green-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "Advanced":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const TopicCard = ({ topic }: TopicCardProps) => {
  const navigate = useNavigate();
  const IconComponent = topic.icon;

  // Check if the image is an uploaded file or Unsplash URL
  const imageUrl = topic.image.startsWith('/lovable-uploads/') 
    ? topic.image 
    : `https://images.unsplash.com/${topic.image}?w=400&h=300&fit=crop`;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <Badge className={getDifficultyColor(topic.difficulty)}>
              {topic.difficulty}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="p-2 bg-white/90 backdrop-blur-sm rounded-xl">
              <IconComponent className="w-6 h-6 text-bio-green" />
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-bio-forest mb-2 group-hover:text-bio-green transition-colors">
          {topic.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {topic.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{topic.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{topic.duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white"
          onClick={() => navigate(`/topic/${topic.id}`)}
        >
          Learn More
        </Button>
        <Button 
          variant="outline" 
          className="border-bio-green text-bio-green hover:bg-bio-green hover:text-white"
          onClick={() => navigate(`/quiz/${topic.id}`)}
        >
          <TrendingUp className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;
