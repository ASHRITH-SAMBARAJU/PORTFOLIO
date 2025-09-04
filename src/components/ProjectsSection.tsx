import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Brain, ShoppingCart, ShieldCheck, Home, Film, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Powered Brain Tumor Detection using Hybrid Deep Learning Models",
      description:
        "AI-driven brain tumor detection system using a hybrid VGG16–ResNet-50–EfficientNetB2 model with Grad-CAM. It uses a dual-input approach to analyze MRI scans and symptoms, and includes symptom screening, treatment suggestions, and PDF report generation.",
      techStack: [
        "TensorFlow",
        "OpenCV",
        "VGG16",
        "ResNet-50",
        "EfficientNetB2",
        "Grad-CAM",
        "Streamlit",
      ],
      github: "https://github.com/ASHRITH-SAMBARAJU/BRAIN-TUMOR-DETECTION",
      icon: Brain,
      iconColor: "text-blue-200",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "E-Commerce Web Application Using MERN Stack",
      description:
        "Developed a Full-stack online shopping platform with Product Listing, User Authentication, and Inventory Management & Cart Features. Built responsive interfaces with React, implemented REST APIs & managed data handling with MongoDB.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Postman", "REST APIs"],
      github: "https://github.com/ASHRITH-SAMBARAJU/E-COMMERCE-APPLICATION",
      icon: ShoppingCart,
      iconColor: "text-green-300",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Blockchain Based Academic Credentials Issuance",
      description:
        "Blockchain-based academic certificate platform with secure login and role-based dashboards for students, universities, and verifiers. Enables tamper-proof credential issuance and seamless verification using Ethers.js and Twilio OTP authentication.",
      techStack: ["React", "Ethereum", "Ethers.js", "Solidity", "Tailwind CSS", "Twilio OTP"],
      github:
        "https://github.com/ASHRITH-SAMBARAJU/BLOCKCHAIN-BASED-ACADEMIC-CREDENTIALS-ISSUANCE",
      icon: ShieldCheck,
      iconColor: "text-red-300",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "MernGrove Interior Decor Application",
      description:
        "MernGrove is a full-stack e-commerce web application designed for interior decor shopping. It enables users to browse, favorite, and purchase home decor products through a modern, responsive, and engaging interface. Built with a focus on a smooth and intuitive frontend experience.",
      techStack: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
      github:
        "https://github.com/ASHRITH-SAMBARAJU/MERNGROVE-INTERIOR-DECOR-APPLICATION",
      icon: Home,
      iconColor: "text-pink-300",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "ML Based - Movie Recommendation System",
      description:
        "Machine learning–based movie recommendation system using content-based and collaborative filtering. Uses NumPy, pandas, and scikit-learn for efficient data handling and recommendation logic. Trained on the MovieLens dataset sourced from Kaggle for generating personalized suggestions.",
      techStack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/ASHRITH-SAMBARAJU/MOVIE-RECOMMENDATION-PROJECT",
      icon: Film,
      iconColor: "text-blue-300",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "ML Based - Iris Classification Project",
      description:
        "Supervised learning model for Iris flower classification using TensorFlow, scikit-learn, NumPy, and pandas. Trained on the Iris dataset with features like sepal and petal dimensions. Accurately classifies flowers into three species - Setosa, Versicolor, and Virginica using standard ML algorithms.",
      techStack: ["Python", "Scikit-learn", "Matplotlib", "Pandas", "Seaborn", "NumPy"],
      github: "https://github.com/ASHRITH-SAMBARAJU/IRIS-CLASSIFICATION-PROJECT",
      icon: BarChart3,
      iconColor: "text-yellow-300",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white text-black hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 border-0 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-gray-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Added margin for spacing above the button */}
                <div className="pt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
