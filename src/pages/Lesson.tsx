
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

const lessonContent = {
  "cell-biology": {
    1: {
      title: "Introduction to Cells",
      content: "Las células son las unidades fundamentales de la vida. Todos los organismos vivos están compuestos por una o más células. En esta lección aprenderemos sobre la teoría celular y los tipos básicos de células.",
      videoUrl: "https://example.com/video1",
      keyPoints: [
        "La célula es la unidad básica de la vida",
        "Existen células procariotas y eucariotas",
        "La teoría celular establece tres principios fundamentales",
        "Las células pueden ser unicelulares o multicelulares"
      ]
    },
    2: {
      title: "Cell Membrane Structure",
      content: "La membrana celular es una barrera selectivamente permeable que controla el paso de sustancias hacia dentro y fuera de la célula. Está compuesta principalmente por fosfolípidos organizados en una bicapa.",
      videoUrl: "https://example.com/video2",
      keyPoints: [
        "La membrana está formada por una bicapa lipídica",
        "Contiene proteínas integrales y periféricas",
        "Es selectivamente permeable",
        "Mantiene la homeostasis celular"
      ]
    },
    3: {
      title: "Nucleus and Genetic Material",
      content: "El núcleo es el centro de control de la célula eucariota. Contiene el ADN organizado en cromosomas y regula la expresión génica y la replicación celular.",
      videoUrl: "https://example.com/video3",
      keyPoints: [
        "El núcleo contiene el material genético",
        "Está rodeado por una envoltura nuclear",
        "Controla las actividades celulares",
        "Regula la síntesis de proteínas"
      ]
    },
    4: {
      title: "Mitochondria and Energy",
      content: "Las mitocondrias son los orgánulos responsables de la producción de energía en forma de ATP. Son conocidas como las 'centrales energéticas' de la célula.",
      videoUrl: "https://example.com/video4",
      keyPoints: [
        "Producen ATP mediante respiración celular",
        "Tienen su propio ADN",
        "Poseen doble membrana",
        "Son abundantes en células activas"
      ]
    },
    5: {
      title: "Endoplasmic Reticulum",
      content: "El retículo endoplasmático es un sistema de membranas que se extiende por todo el citoplasma. Existe en dos formas: rugoso (con ribosomas) y liso (sin ribosomas).",
      videoUrl: "https://example.com/video5",
      keyPoints: [
        "RE rugoso sintetiza proteínas",
        "RE liso sintetiza lípidos",
        "Transporta materiales por la célula",
        "Se conecta con la envoltura nuclear"
      ]
    },
    6: {
      title: "Golgi Apparatus",
      content: "El aparato de Golgi procesa, modifica y empaqueta las proteínas y lípidos que recibe del retículo endoplasmático.",
      videoUrl: "https://example.com/video6",
      keyPoints: [
        "Modifica proteínas del RE",
        "Empaqueta sustancias en vesículas",
        "Tiene cara cis y cara trans",
        "Es esencial para la secreción"
      ]
    }
  }
};

const Lesson = () => {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const lesson = lessonContent[topicId as keyof typeof lessonContent]?.[parseInt(lessonId || "1")];
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const currentLesson = parseInt(lessonId || "1");
  const totalLessons = Object.keys(lessonContent[topicId as keyof typeof lessonContent] || {}).length;
  const progress = (currentLesson / totalLessons) * 100;

  const handleNext = () => {
    if (currentLesson < totalLessons) {
      navigate(`/lesson/${topicId}/${currentLesson + 1}`);
    } else {
      navigate(`/quiz/${topicId}`);
    }
  };

  const handlePrevious = () => {
    if (currentLesson > 1) {
      navigate(`/lesson/${topicId}/${currentLesson - 1}`);
    }
  };

  const handleComplete = () => {
    // Mark lesson as completed and navigate to next
    handleNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-green-light/20 via-white to-bio-blue-light/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/topic/${topicId}`)}
          className="mb-6 text-bio-forest hover:text-bio-green"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Course
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-bio-forest mb-1">{lesson.title}</h1>
                  <p className="text-gray-600">Lesson {currentLesson} of {totalLessons}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-bio-green">{Math.round(progress)}%</div>
                  <div className="text-sm text-gray-500">Progress</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>

          {/* Video/Content Section */}
          <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-bio-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-bio-green" />
                  </div>
                  <p>Video Content Placeholder</p>
                  <p className="text-sm">({lesson.title})</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{lesson.content}</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-bio-forest">Key Learning Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lesson.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-bio-green mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline"
              onClick={handlePrevious}
              disabled={currentLesson === 1}
              className="border-bio-green text-bio-green hover:bg-bio-green hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>

            <Button 
              onClick={handleComplete}
              className="bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green-dark hover:to-bio-blue-dark text-white"
            >
              {currentLesson === totalLessons ? "Take Quiz" : "Next Lesson"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
