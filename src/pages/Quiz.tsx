import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const quizData = {
  "cell-biology": {
    title: "Cell Biology Quiz",
    description: "Test your knowledge of cell structures and functions",
    questions: [
      {
        id: 1,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correct: 1,
        explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP through cellular respiration."
      },
      {
        id: 2,
        question: "Which organelle is responsible for protein synthesis?",
        options: ["Lysosome", "Endoplasmic Reticulum", "Ribosome", "Vacuole"],
        correct: 2,
        explanation: "Ribosomes are the sites of protein synthesis in cells, where amino acids are assembled into proteins."
      },
      {
        id: 3,
        question: "What controls what enters and leaves the cell?",
        options: ["Cell Wall", "Cell Membrane", "Cytoplasm", "Nucleus"],
        correct: 1,
        explanation: "The cell membrane is selectively permeable and controls the movement of substances in and out of the cell."
      },
      {
        id: 4,
        question: "Where is genetic material stored in eukaryotic cells?",
        options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        correct: 1,
        explanation: "In eukaryotic cells, the genetic material (DNA) is stored in the nucleus, which is enclosed by a nuclear membrane."
      },
      {
        id: 5,
        question: "What is the function of the Golgi apparatus?",
        options: ["Energy production", "Protein modification and packaging", "DNA replication", "Waste removal"],
        correct: 1,
        explanation: "The Golgi apparatus modifies, packages, and ships proteins and lipids received from the endoplasmic reticulum."
      }
    ]
  },
  "botany": {
    title: "Botany Quiz",
    description: "Test your knowledge of plant biology",
    questions: [
      {
        id: 1,
        question: "What process do plants use to make their own food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
        correct: 1,
        explanation: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen."
      },
      {
        id: 2,
        question: "Which part of the plant is responsible for absorbing water and nutrients?",
        options: ["Leaves", "Stem", "Roots", "Flowers"],
        correct: 2,
        explanation: "Roots absorb water and minerals from the soil and anchor the plant in place."
      },
      {
        id: 3,
        question: "What pigment gives plants their green color?",
        options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
        correct: 1,
        explanation: "Chlorophyll is the green pigment that captures light energy for photosynthesis."
      },
      {
        id: 4,
        question: "What is the male reproductive part of a flower called?",
        options: ["Pistil", "Stamen", "Sepal", "Petal"],
        correct: 1,
        explanation: "The stamen is the male reproductive organ of a flower, consisting of the anther and filament."
      },
      {
        id: 5,
        question: "Which tissue transports water and minerals in plants?",
        options: ["Phloem", "Xylem", "Cortex", "Epidermis"],
        correct: 1,
        explanation: "Xylem is the vascular tissue that transports water and dissolved minerals from roots to other parts of the plant."
      }
    ]
  },
  "anatomy": {
    title: "Human Anatomy Quiz",
    description: "Test your knowledge of human body systems",
    questions: [
      {
        id: 1,
        question: "How many bones are in the adult human body?",
        options: ["196", "206", "216", "226"],
        correct: 1,
        explanation: "The adult human skeleton has 206 bones, which provide structure and protect organs."
      },
      {
        id: 2,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Lungs"],
        correct: 2,
        explanation: "The skin is the largest organ, covering the entire body and protecting internal structures."
      },
      {
        id: 3,
        question: "Which chamber of the heart pumps blood to the body?",
        options: ["Right Atrium", "Left Atrium", "Right Ventricle", "Left Ventricle"],
        correct: 3,
        explanation: "The left ventricle is the heart's main pumping chamber that sends oxygenated blood to the body."
      },
      {
        id: 4,
        question: "What is the longest bone in the human body?",
        options: ["Tibia", "Fibula", "Femur", "Humerus"],
        correct: 2,
        explanation: "The femur (thigh bone) is the longest and strongest bone in the human body."
      },
      {
        id: 5,
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "The human heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers)."
      }
    ]
  },
  "genetics": {
    title: "Genetics Quiz",
    description: "Test your knowledge of heredity and genes",
    questions: [
      {
        id: 1,
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxyribose Acid", "Dehydrated Nucleic Acid"],
        correct: 0,
        explanation: "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information."
      },
      {
        id: 2,
        question: "How many chromosomes do humans normally have?",
        options: ["44", "46", "48", "50"],
        correct: 1,
        explanation: "Humans typically have 46 chromosomes (23 pairs) in each cell nucleus."
      },
      {
        id: 3,
        question: "What are the four bases found in DNA?",
        options: ["A, T, G, C", "A, U, G, C", "A, T, G, U", "T, G, C, U"],
        correct: 0,
        explanation: "The four DNA bases are Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)."
      },
      {
        id: 4,
        question: "What is a gene?",
        options: ["A type of cell", "A chromosome", "A segment of DNA that codes for a trait", "A protein"],
        correct: 2,
        explanation: "A gene is a specific sequence of DNA that contains instructions for making a particular protein or trait."
      },
      {
        id: 5,
        question: "What is the process of making RNA from DNA called?",
        options: ["Translation", "Transcription", "Replication", "Mutation"],
        correct: 1,
        explanation: "Transcription is the process where genetic information in DNA is copied to make RNA."
      }
    ]
  },
  "ecology": {
    title: "Ecology Quiz",
    description: "Test your knowledge of ecosystems and environment",
    questions: [
      {
        id: 1,
        question: "What is an ecosystem?",
        options: ["Only living organisms", "Only non-living factors", "Living organisms and their environment", "Just plants and animals"],
        correct: 2,
        explanation: "An ecosystem includes all living organisms and the non-living environment they interact with."
      },
      {
        id: 2,
        question: "What are organisms that make their own food called?",
        options: ["Consumers", "Decomposers", "Producers", "Parasites"],
        correct: 2,
        explanation: "Producers (like plants) make their own food through photosynthesis and form the base of food chains."
      },
      {
        id: 3,
        question: "What is the role of decomposers in an ecosystem?",
        options: ["Eat other animals", "Make food from sunlight", "Break down dead organisms", "Pollinate flowers"],
        correct: 2,
        explanation: "Decomposers break down dead plants and animals, recycling nutrients back into the ecosystem."
      },
      {
        id: 4,
        question: "What is biodiversity?",
        options: ["Number of plants only", "Variety of life in an ecosystem", "Amount of water", "Soil quality"],
        correct: 1,
        explanation: "Biodiversity refers to the variety of different species and genetic diversity within an ecosystem."
      },
      {
        id: 5,
        question: "What is a food web?",
        options: ["A spider's web", "Interconnected food chains", "Plant roots", "Animal homes"],
        correct: 1,
        explanation: "A food web shows how multiple food chains are interconnected in an ecosystem."
      }
    ]
  },
  "marine-biology": {
    title: "Marine Biology Quiz",
    description: "Test your knowledge of ocean life",
    questions: [
      {
        id: 1,
        question: "What percentage of Earth's surface is covered by oceans?",
        options: ["60%", "65%", "71%", "75%"],
        correct: 2,
        explanation: "Approximately 71% of Earth's surface is covered by oceans, making them the largest habitat on our planet."
      },
      {
        id: 2,
        question: "What are coral reefs primarily made of?",
        options: ["Rocks", "Plants", "Coral polyp skeletons", "Sand"],
        correct: 2,
        explanation: "Coral reefs are built from the calcium carbonate skeletons of coral polyps accumulated over thousands of years."
      },
      {
        id: 3,
        question: "Which zone of the ocean receives no sunlight?",
        options: ["Sunlight zone", "Twilight zone", "Midnight zone", "Abyssal zone"],
        correct: 2,
        explanation: "The midnight zone (bathypelagic zone) is completely dark as no sunlight penetrates to these depths."
      },
      {
        id: 4,
        question: "What is the largest animal on Earth?",
        options: ["Great White Shark", "Blue Whale", "Giant Squid", "Orca"],
        correct: 1,
        explanation: "The blue whale is the largest animal ever known to have lived on Earth, reaching lengths up to 100 feet."
      },
      {
        id: 5,
        question: "What process do deep-sea organisms use to make food without sunlight?",
        options: ["Photosynthesis", "Chemosynthesis", "Fermentation", "Respiration"],
        correct: 1,
        explanation: "Chemosynthesis allows organisms to produce food using chemical energy from sources like hydrothermal vents."
      }
    ]
  }
};

const Quiz = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const quiz = quizData[topicId as keyof typeof quizData];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "You must choose an option before proceeding.",
        variant: "destructive"
      });
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: number[]) => {
    const correct = finalAnswers.filter((answer, index) => 
      answer === quiz.questions[index].correct
    ).length;
    
    const percentage = Math.round((correct / quiz.questions.length) * 100);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${correct}/${quiz.questions.length} (${percentage}%)`,
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const correctAnswers = answers.filter((answer, index) => 
    answer === quiz.questions[index].correct
  ).length;

  const percentage = quizCompleted ? Math.round((correctAnswers / quiz.questions.length) * 100) : 0;

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
        <Header />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-bio-green to-bio-blue flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl text-bio-forest">Quiz Complete!</CardTitle>
              <p className="text-gray-600">Here are your results</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-bio-green mb-2">{percentage}%</div>
                <div className="text-lg text-gray-600">
                  {correctAnswers} out of {quiz.questions.length} correct
                </div>
                <Badge 
                  className={`mt-2 ${
                    percentage >= 80 ? 'bg-green-100 text-green-700' : 
                    percentage >= 60 ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'
                  }`}
                >
                  {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : 'Keep Studying!'}
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-bio-forest">Review Your Answers</h3>
                {quiz.questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correct;
                  
                  return (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-1 rounded-full ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                            {isCorrect ? 
                              <CheckCircle className="w-5 h-5 text-green-600" /> : 
                              <XCircle className="w-5 h-5 text-red-600" />
                            }
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">{question.question}</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                {question.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-600 mb-2">
                                Correct answer: <span className="text-green-600">
                                  {question.options[question.correct]}
                                </span>
                              </p>
                            )}
                            <p className="text-sm text-gray-500">{question.explanation}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-bio-green text-bio-green hover:bg-bio-green hover:text-white"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button 
                  onClick={() => navigate(`/topic/${topicId}`)}
                  className="bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white"
                >
                  Continue Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/topic/${topicId}`)}
          className="mb-6 text-bio-forest hover:text-bio-green"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topic
        </Button>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl text-bio-forest">{quiz.title}</CardTitle>
              <Badge variant="outline">
                {currentQuestion + 1} of {quiz.questions.length}
              </Badge>
            </div>
            <Progress 
              value={((currentQuestion + 1) / quiz.questions.length) * 100} 
              className="w-full"
            />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-bio-forest mb-6">
                {question.question}
              </h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'border-bio-green bg-bio-green/10 text-bio-green-dark'
                        : 'border-gray-200 hover:border-bio-green/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index 
                          ? 'border-bio-green bg-bio-green' 
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </div>
              
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white"
                disabled={selectedAnswer === null}
              >
                {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
