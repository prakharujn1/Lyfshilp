import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Gamepad2, 
  Clock, 
  Users, 
  Star, 
  TrendingUp,
  Award,
  Play,
  ChevronRight,
  Filter,
  Search
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Fundamentals of Finance",
    description: "Master money management, budgeting, saving, and smart investing to build a strong financial future.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
    notesLink: "/finance/notes",
    gamesLink: "/finance/games",
    category: "Finance",
    difficulty: "Beginner",
    duration: "6 weeks",
    students: 2847,
    rating: 4.8,
    progress: 0,
    color: "emerald",
    icon: "💰"
  },
  {
    id: 2,
    title: "Computer Science Fundamentals",
    description: "Dive into programming, algorithms, and software development with hands-on projects and real-world applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    notesLink: "/computer/notes",
    gamesLink: "/computer/games",
    category: "Technology",
    difficulty: "Intermediate",
    duration: "8 weeks",
    students: 3521,
    rating: 4.9,
    progress: 0,
    color: "blue",
    icon: "💻"
  },
  {
    id: 3,
    title: "Fundamentals of Law",
    description: "Navigate legal systems, understand your rights, and become an informed citizen with practical legal knowledge.",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
    notesLink: "/law/notes",
    gamesLink: "/law/games",
    category: "Legal",
    difficulty: "Beginner",
    duration: "5 weeks",
    students: 1923,
    rating: 4.7,
    progress: 0,
    color: "purple",
    icon: "⚖️"
  },
  {
    id: 4,
    title: "Communication Mastery",
    description: "Transform your speaking, listening, and presentation skills for personal and professional success.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=60",
    notesLink: "/communications/notes",
    gamesLink: "/communications/games",
    category: "Soft Skills",
    difficulty: "Beginner",
    duration: "4 weeks",
    students: 4156,
    rating: 4.8,
    progress: 0,
    color: "orange",
    icon: "🗣️"
  },
  {
    id: 5,
    title: "Entrepreneurship Bootcamp",
    description: "Turn innovative ideas into thriving businesses with strategic planning, leadership, and market insights.",
    image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=600&auto=format&fit=crop&q=60",
    notesLink: "/entreprenerurship/notes",
    gamesLink: "/entreprenerurship/games",
    category: "Business",
    difficulty: "Advanced",
    duration: "10 weeks",
    students: 2634,
    rating: 4.9,
    progress: 0,
    color: "red",
    icon: "🚀"
  },
  {
    id: 6,
    title: "Digital Marketing Pro",
    description: "Master social media, SEO, content creation, and digital advertising to build powerful online presence.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    notesLink: "/digital-marketing/notes",
    gamesLink: "/digital-marketing/games",
    category: "Marketing",
    difficulty: "Intermediate",
    duration: "7 weeks",
    students: 3782,
    rating: 4.8,
    progress: 0,
    color: "pink",
    icon: "📱"
  },
  {
    id: 7,
    title: "Leadership & Adaptability",
    description: "Develop confident leadership, emotional intelligence, and adaptability through practical challenges.",
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?w=600&auto=format&fit=crop&q=60",
    notesLink: "/leadership/notes",
    gamesLink: "/leadership/games",
    category: "Leadership",
    difficulty: "Intermediate",
    duration: "6 weeks",
    students: 2145,
    rating: 4.7,
    progress: 0,
    color: "indigo",
    icon: "👑"
  },
  {
    id: 8,
    title: "Environmental Sustainability",
    description: "Explore climate solutions, conservation strategies, and sustainable practices for a greener future.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    notesLink: "/environmental/notes",
    gamesLink: "/environmental/games",
    category: "Environment",
    difficulty: "Beginner",
    duration: "5 weeks",
    students: 1876,
    rating: 4.6,
    progress: 0,
    color: "green",
    icon: "🌱"
  },
  {
    id: 9,
    title: "Wellness & Mental Health",
    description: "Build emotional resilience, stress management skills, and holistic approaches to mental and physical wellness.",
    image: "https://images.unsplash.com/photo-1644952350841-070996fad2af?w=600&auto=format&fit=crop&q=60",
    notesLink: "/social-learning/notes",
    gamesLink: "/social-learning/games",
    category: "Health",
    difficulty: "Beginner",
    duration: "4 weeks",
    students: 3456,
    rating: 4.9,
    progress: 0,
    color: "teal",
    icon: "🧘"
  }
];

const categories = ["All", "Finance", "Technology", "Legal", "Soft Skills", "Business", "Marketing", "Leadership", "Environment", "Health"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    emerald: "from-emerald-400 to-teal-500",
    blue: "from-blue-400 to-cyan-500",
    purple: "from-purple-400 to-pink-500",
    orange: "from-orange-400 to-red-500",
    red: "from-red-400 to-pink-500",
    pink: "from-pink-400 to-rose-500",
    indigo: "from-indigo-400 to-purple-500",
    green: "from-green-400 to-emerald-500",
    teal: "from-teal-400 to-cyan-500"
  };

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[course.color]} z-10 pointer-events-none`}
      />
      
      {/* Course Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700`}>
            <span className="text-sm">{course.icon}</span>
            {course.category}
          </span>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[course.difficulty]}`}>
            {course.difficulty}
          </span>
        </div>

        {/* Hover Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
            <Play className="w-8 h-8 text-white" fill="currentColor" />
          </div>
        </motion.div>
      </div>

      {/* Course Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-600">{course.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-6 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to={course.notesLink}
            className="flex-1 group/btn"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover/btn:shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              View Notes
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </Link>
          
          <Link
            to={course.gamesLink}
            className="group/btn"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-r ${colorClasses[course.color]} text-white py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg`}
            >
              <Gamepad2 className="w-4 h-4" />
              Play
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-gray-900 text-white shadow-lg' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {children}
  </motion.button>
);

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="h-[90vh] relative overflow-hidden bg-gradient-to-r from-[#1e2b16] via-[#2f4f2f] to-[#1a2e1a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white/90">Transform Your Future</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master New Skills
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Shape Tomorrow
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover world-class courses designed to unlock your potential. Interactive learning meets gamified experiences.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-8 text-center"
            >
              <div>
                <div className="text-2xl font-bold text-white">{courses.length}+</div>
                <div className="text-sm text-gray-400">Expert Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-sm text-gray-400">Active Learners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.8⭐</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              <Filter className="w-4 h-4" />
              Filters
            </motion.button>

            <div className="text-sm text-gray-600">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ 
              height: showFilters ? "auto" : 0,
              opacity: showFilters ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {/* Category Filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <FilterButton
                      key={category}
                      active={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </FilterButton>
                  ))}
                </div>
              </div>

              {/* Difficulty Filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(difficulty => (
                    <FilterButton
                      key={difficulty}
                      active={selectedDifficulty === difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                    >
                      {difficulty}
                    </FilterButton>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-black py-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are already transforming their careers
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;