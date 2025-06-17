
import { useState } from "react";
import { TrendingUp, Award, BookOpen, Clock, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const progressData = {
  overallProgress: 45,
  totalTopics: 6,
  completedTopics: 2,
  totalLessons: 95,
  completedLessons: 28,
  totalQuizzes: 12,
  completedQuizzes: 4,
  streakDays: 7,
  weeklyGoal: 5,
  weeklyCompleted: 3,
  
  topics: [
    {
      id: "cell-biology",
      title: "Cell Biology",
      progress: 85,
      lessons: 12,
      completedLessons: 10,
      quizScore: 92,
      status: "In Progress"
    },
    {
      id: "botany",
      title: "Botany",
      progress: 60,
      lessons: 15,
      completedLessons: 9,
      quizScore: 78,
      status: "In Progress"
    },
    {
      id: "anatomy",
      title: "Human Anatomy",
      progress: 25,
      lessons: 20,
      completedLessons: 5,
      quizScore: null,
      status: "Started"
    },
    {
      id: "genetics",
      title: "Genetics",
      progress: 0,
      lessons: 18,
      completedLessons: 0,
      quizScore: null,
      status: "Not Started"
    },
    {
      id: "ecology",
      title: "Ecology",
      progress: 0,
      lessons: 14,
      completedLessons: 0,
      quizScore: null,
      status: "Not Started"
    },
    {
      id: "marine-biology",
      title: "Marine Biology",
      progress: 15,
      lessons: 16,
      completedLessons: 2,
      quizScore: null,
      status: "Started"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: BookOpen,
      earned: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Quiz Master",
      description: "Score 90% or higher on a quiz",
      icon: Award,
      earned: true,
      date: "2024-01-18"
    },
    {
      id: 3,
      title: "Consistent Learner",
      description: "Study for 7 days in a row",
      icon: Calendar,
      earned: true,
      date: "2024-01-22"
    },
    {
      id: 4,
      title: "Topic Explorer",
      description: "Start learning 3 different topics",
      icon: Target,
      earned: false,
      date: null
    }
  ],

  recentActivity: [
    {
      type: "lesson",
      title: "Completed: Mitochondria and Energy",
      topic: "Cell Biology",
      date: "Today",
      score: null
    },
    {
      type: "quiz",
      title: "Cell Biology Quiz",
      topic: "Cell Biology", 
      date: "Yesterday",
      score: 92
    },
    {
      type: "lesson",
      title: "Completed: Cell Membrane Structure",
      topic: "Cell Biology",
      date: "2 days ago",
      score: null
    }
  ]
};

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Started":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Not Started":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bio-forest mb-2">Your Learning Progress</h1>
          <p className="text-gray-600">Track your biology learning journey and achievements</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Overall Progress</p>
                  <p className="text-2xl font-bold text-bio-green">{progressData.overallProgress}%</p>
                </div>
                <div className="p-3 bg-bio-green/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-bio-green" />
                </div>
              </div>
              <Progress value={progressData.overallProgress} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed Topics</p>
                  <p className="text-2xl font-bold text-bio-blue">
                    {progressData.completedTopics}/{progressData.totalTopics}
                  </p>
                </div>
                <div className="p-3 bg-bio-blue/10 rounded-xl">
                  <BookOpen className="w-6 h-6 text-bio-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Learning Streak</p>
                  <p className="text-2xl font-bold text-bio-green">{progressData.streakDays} days</p>
                </div>
                <div className="p-3 bg-bio-green/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-bio-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Weekly Goal</p>
                  <p className="text-2xl font-bold text-bio-blue">
                    {progressData.weeklyCompleted}/{progressData.weeklyGoal}
                  </p>
                </div>
                <div className="p-3 bg-bio-blue/10 rounded-xl">
                  <Target className="w-6 h-6 text-bio-blue" />
                </div>
              </div>
              <Progress value={(progressData.weeklyCompleted / progressData.weeklyGoal) * 100} className="mt-3" />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Topics Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Topics Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressData.topics.map((topic) => (
                    <div key={topic.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-bio-forest">{topic.title}</h3>
                        <Badge className={getStatusColor(topic.status)}>
                          {topic.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div>Progress: {topic.progress}%</div>
                        <div>Lessons: {topic.completedLessons}/{topic.lessons}</div>
                        <div>Quiz: {topic.quizScore ? `${topic.quizScore}%` : "Not taken"}</div>
                      </div>
                      
                      <Progress value={topic.progress} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'lesson' ? 'bg-bio-blue/10' : 'bg-bio-green/10'
                      }`}>
                        {activity.type === 'lesson' ? 
                          <BookOpen className="w-4 h-4 text-bio-blue" /> :
                          <Award className="w-4 h-4 text-bio-green" />
                        }
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-bio-forest">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.topic} • {activity.date}</p>
                      </div>
                      {activity.score && (
                        <Badge className="bg-bio-green/10 text-bio-green">
                          {activity.score}%
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-bio-forest">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressData.achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={achievement.id}
                        className={`p-4 border rounded-lg ${
                          achievement.earned ? 'bg-bio-green/5 border-bio-green/20' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            achievement.earned ? 'bg-bio-green text-white' : 'bg-gray-300 text-gray-500'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-medium ${
                              achievement.earned ? 'text-bio-forest' : 'text-gray-500'
                            }`}>
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {achievement.description}
                            </p>
                            {achievement.earned && achievement.date && (
                              <p className="text-xs text-bio-green">
                                Earned on {achievement.date}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
