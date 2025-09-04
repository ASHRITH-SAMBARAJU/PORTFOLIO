import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResume = () => {
    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#4f6d9b_1%,_transparent_60%)] z-0" />

      {/* White Container */}
      <div className="relative z-10 max-w-5xl w-full rounded-3xl bg-white text-black shadow-xl px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-[#111827] p-2 rounded-full shadow-xl">
            <img
              src="/profile.jpg"
              alt="Ashrith Sambaraju"
              className="w-72 h-72 md:w-[18rem] md:h-[18rem] object-cover object-center rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 leading-tight">
            Ashrith Sambaraju
          </h1>

          <p className="text-sm text-black tracking-wider uppercase font-semibold">
            Turning ideas into Reality
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/ASHRITH-SAMBARAJU",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/ashrith-sambaraju",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                href: "mailto:ashrithsambaraju@gmail.com",
              },
            ].map((item, idx) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#111827] text-white rounded-full hover:bg-white hover:text-[#111827] transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Animated Titles */}
          <TypeAnimation
            sequence={[
              "Software Developer", 3000,
              "AIML Engineer", 3000,
              "Full Stack Enthusiast", 3000,
              "Problem Solver", 3000,
            ]}
            wrapper="h2"
            className="text-xl sm:text-2xl md:text-3xl !text-black font-semibold tracking-wide"
            repeat={Infinity}
            speed={50} // makes letters appear one by one
          />

          <p className="text-sm text-black tracking-wider uppercase font-semibold">
            Crafting scalable solutions with clean code, performance, and purposeful design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:justify-start justify-center">
            <Button
              onClick={scrollToProjects}
              className="bg-[#111827] text-white border border-[#111827] hover:bg-white hover:text-[#111827] transition duration-300 px-6 py-3 text-md font-semibold rounded-full shadow-md hover:shadow-xl flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              onClick={scrollToResume}
              className="bg-[#111827] text-white border border-[#111827] hover:bg-white hover:text-[#111827] transition duration-300 px-6 py-3 text-md font-semibold rounded-full shadow-md hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
