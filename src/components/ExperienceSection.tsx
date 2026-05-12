import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bharat Smart Services (Coral Innovations Pvt Ltd)",
    role: "AIML Engineer Intern",
    duration: "September 2025 - Present",
    logo: "/logos/bss_logo.png",
    contributions: [
      "Engineered a production-grade OCR pipeline for automated electricity bill extraction using Google Cloud Vision, deterministic parsing, and containerized AWS Lambda, supporting all DISCOMs and multiple bill formats across Telangana with 91% extraction accuracy. Built an insights engine for tariff classification, electricity consumption analysis, yearly loss estimation, and consumer savings forecasting.",
      "Architected an end-to-end smart meter classification system using PyTorch (ResNet-18), OpenCV-based quality checks, and a Streamlit dashboard, then deployed it on AWS Lambda with Docker and ECR for low-latency automated top-3 predictions.",
      "Built Transformer Sentinel, an AI-based predictive maintenance system for power transformers (Hack-AP, PS-3), designed for Andhra Pradesh DISCOM scenarios, achieving 86% prediction accuracy with XGBoost, supported by a custom THI engine, SHAP explainability, and FastAPI-Streamlit delivery.",
      "Developed an AI-driven electricity theft detection system using 5-second smart-meter data, combining hybrid anomaly modelling and spike/dip event analytics, achieving 83% detection accuracy. Built a full end-to-end pipeline with Isolation Forest, LSTM Autoencoder, rule-based cue extraction, and an interactive Streamlit dashboard for real-time monitoring, alerts, and forensic analysis.",
      "Implemented a Streamlit-based data management dashboard with MongoDB GridFS for storing meter records, image handling, and automated PDF report generation.",
    ],
  },
  { 
    company: "NextGen Edunet Foundation X EY",          
    role: "MERN Stack Intern",
    duration: "March 2025 - April 2025",
    logo: "/logos/ey_logo.png",
    contributions: [
      "Built a dynamic e-commerce web application using the MERN stack",
      "Implemented user authentication and efficient product management",
      "Focused on delivering a seamless and responsive user experience",
    ],
  },
  {
    company: "International Institute of Information Technology (IIIT-H) X Swecha",
    role: "AI Developer Intern",
    duration: "May 2024 - June 2024",
    logo: "/logos/swecha_logo.png",
    contributions: [
      "Participated in a 5-day workshop at IIIT-Hyderabad as part of the internship program",
      "Developed AI-driven solutions for cultural preservation",
      "Explored deep learning and generative AI with transformer models",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
          <div className="h-1 w-28 bg-white mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 object-contain rounded-lg mr-4"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-lg text-gray-300 italic">{exp.role}</p>
                </div>
              </div>

              <div className="text-gray-400 text-sm mb-4">
                <p>{exp.duration}</p>  
              </div>

              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                {exp.contributions.map((contribution, i) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
