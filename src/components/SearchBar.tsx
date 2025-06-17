
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm, selectedDifficulty, setSelectedDifficulty }: SearchBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search biology topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-none bg-gray-50 focus:bg-white transition-colors"
        />
      </div>
      
      <div className="flex items-center gap-2 min-w-fit">
        <Filter className="text-gray-400 w-5 h-5" />
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="w-40 border-none bg-gray-50 focus:bg-white">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="All">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
