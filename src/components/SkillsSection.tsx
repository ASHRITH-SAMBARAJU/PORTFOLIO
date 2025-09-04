import { motion } from "framer-motion";
import {
  Layers,           // AIML
  Code,             // Programming
  Database,         // DB
  MonitorSmartphone,// IDEs & Tools
  LayoutGrid,       // Frontend
  Smile,            // Soft Skills
} from "lucide-react";

// Exactly like your screenshot
const skillCategories = [
  {
    title: "AIML Frameworks & Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "OpenCV"],
    icon: Layers,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Programming Languages",
    skills: ["C", "Python", "R"],
    icon: Code,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Database & Data Storage",
    skills: ["MySQL", "MongoDB"],
    icon: Database,
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "IDEs & Tools",
    skills: ["Visual Studio", "Jupyter", "Google Colab"],
    icon: MonitorSmartphone,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "React", "Bootstrap"],
    icon: LayoutGrid,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Networking", "Problem Solving", "Task Management"],
    icon: Smile,
    color: "from-slate-500 to-slate-700",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const SkillsSection = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Technical Skills</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full my-4" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical foundations and practical toolset.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white text-black text-sm px-4 py-1.5 rounded-full font-medium shadow hover:bg-gray-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
