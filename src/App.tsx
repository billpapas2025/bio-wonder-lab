
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TopicDetail from "./pages/TopicDetail";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import Lesson from "./pages/Lesson";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="font-comfortaa">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/topic/:topicId" element={<TopicDetail />} />
            <Route path="/lesson/:topicId/:lessonId" element={<Lesson />} />
            <Route path="/quiz/:topicId" element={<Quiz />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
