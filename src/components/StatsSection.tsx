
import { Users, BookOpen, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "6",
    label: "Active Learners",
    color: "text-bio-green"
  },
  {
    icon: BookOpen,
    number: "60+",
    label: "Lessons Available",
    color: "text-bio-blue"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    color: "text-bio-green"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Access Available",
    color: "text-bio-blue"
  }
];

const StatsSection = () => {
  return (
    <section className="py-12 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-4`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-bio-forest mb-2">{stat.number}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
