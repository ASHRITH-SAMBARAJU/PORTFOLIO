import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Let’s Connect
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Whether it’s a job opportunity or collaboration — I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white text-black p-6 sm:p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
            action="https://formspree.io/f/xqablgep"
            method="POST"
            className="space-y-6"
          >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-2 bg-gray-50"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="mt-2 bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Let me know what you want to talk about..."
                  className="mt-2 bg-gray-50 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 py-4 text-base sm:text-lg font-medium rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info + Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>

              {[
                {
                  icon: <Mail className="w-6 h-6 text-white" />,
                  label: "Email",
                  value: "ashrithsambaraju@gmail.com",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  label: "Location",
                  value: "Onsite / Hybrid / Remote",
                },
                {
                  icon: <Phone className="w-6 h-6 text-white" />,
                  label: "Response Time",
                  value: "Typically replies within 24 hours",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Find Me Online</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/ASHRITH-SAMBARAJU"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashrith-sambaraju"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="mailto:ashrithsambaraju@gmail.com"
                  title="Email"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 mt-16 text-sm">
          © {new Date().getFullYear()} Ashrith Sambaraju. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
