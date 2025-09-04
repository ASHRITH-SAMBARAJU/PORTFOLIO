import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white text-black shadow-xl px-8 md:px-10 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Blending AI innovation to solve real-world problems.
          </p>
          <div className="h-1 w-24 bg-black mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-stretch">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 leading-relaxed text-gray-700 text-justify">
              <p>
                Hey! I’m <span className="font-semibold">Ashrith Sambaraju</span> - An
                aspiring Software Developer specializing in Artificial Intelligence and
                Machine Learning, with a good foundation in data structures, algorithms,
                and front-end development.
              </p>
              <p>
                I’m passionate about building AI-powered solutions that connect smart
                technologies with real-world usability. I enjoy collaborating in teams,
                turning innovative ideas into impactful solutions, and constantly growing
                my technical craft.
              </p>
              <p>
                Whether it’s contributing to meaningful projects or exploring new
                challenges, I’m always eager to make a difference through technology.
              </p>
              <p>
                Beyond tech, I unwind through sports, gaming, and on rare occasions
                diving into a good book. I believe in balancing curiosity and creativity,
                both in and out of code.
              </p>
            </div>
          </motion.div>

          {/* Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="bg-[#0f172a] text-white rounded-3xl border border-white/10 shadow-lg p-8 md:p-10 w-full h-full min-h-[260px] flex flex-col justify-center text-center">
              <img
                src="/preview.png"
                alt="Ashrith Sambaraju Logo"
                className="w-28 h-28 mx-auto mb-5 rounded-full object-contain bg-white border-4 border-white shadow"
              />
              <h3 className="text-lg md:text-xl font-semibold">
                Transforming ideas into impact, one project at a time.
              </h3>
              <p className="text-sm text-gray-300 mt-3 max-w-md mx-auto">
                Passionate about blending AI, software, and design to solve real-world
                problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
