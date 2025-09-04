import { motion } from "framer-motion";

type Publication = {
  title: string;
  venue: string;
  description?: string;
  link?: string; // external URL
  file?: string; // local file in /public/certificates
};

type Certificate = {
  title: string;
  issuer: string;
  link?: string; // external URL
  file?: string; // local file in /public/certificates
};

const publications: Publication[] = [
  {
    title:
      'Lead Author – "Automated Brain Tumor Classification Using Hybrid Deep Learning Models"',
    venue:
      "Published in IRJAEH (International Research Journal of Advanced Engineering Hub)",
    link: "https://irjaeh.com/index.php/journal/article/view/819", // ✅ Opens in browser
  },
];

const certificates: Certificate[] = [
  { title: "AWS Essentials: A Complete Beginner's Guide", issuer: "Udemy", file: "AWS - UDEMY.pdf" },
  { title: "ICSEM Conference", issuer: "International Conference on Advancement in Science, Engineering and Management", file: "ICSEM CONFERENCE.pdf" },
  { title: "MERN Internship", issuer: "EY X Edunet Foundation", file: "NEXTGEN x EY.pdf" },
  { title: "AI Developer Internship", issuer: "IIIT-H x Swecha", file: "IIITH X SWECHA.pdf" },
  { title: "AI Bootcamp", issuer: "IIIT-H x Swecha", file: "SWECHA BOOTCAMP.pdf" },
  { title: "Forage Developer Job Simulation", issuer: "Accenture", file: "FORAGE ACCENTURE.pdf" },
  { title: "Natural Language Processing", issuer: "Great Learning", file: "NLP.pdf" },
  { title: "Robo Code Hackathon", issuer: "College Hackathon", file: "ROBO CODE HACKATHON.pdf" },
  { title: "ANN Workshop", issuer: "College Workshop", file: "ANN WORKSHOP.pdf" },
  { title: "Introduction to CyberSecurity", issuer: "Cisco", file: "CISCO.pdf" },
];

// Get proper href (if file, point to /certificates folder)
const hrefFor = (x: { link?: string; file?: string }) =>
  x.link ? x.link : x.file ? `/certificates/${x.file}` : undefined;

const PublicationsCertifications = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold">Publications &amp; Certifications</h2>
          <div className="h-1 w-32 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Publications Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl mb-12"
        >
          <h3 className="text-xl font-bold tracking-wide text-center">PUBLICATIONS</h3>
          {publications.map((p, i) => {
            const href = hrefFor(p);
            return (
              <div key={i} className="mt-6 text-center">
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-gray-400 mt-1">{p.venue}</p>
                {p.description && (
                  <p className="text-sm text-gray-400 mt-1">{p.description}</p>
                )}
                  {href && (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-5 py-2 rounded-full bg-white text-black border border-black text-sm font-medium hover:bg-gray-200 transition"
    >
      View Publication
    </a>
  )}

              </div>
            );
          })}
        </motion.div>

        {/* Certificates Block */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-extrabold text-center mb-6">CERTIFICATES</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => {
              const href = hrefFor(c);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="bg-white text-black rounded-2xl p-5 md:p-6 shadow hover:shadow-2xl transition flex flex-col"
                >
                  <div className="flex-grow">
                    <h4 className="text-base md:text-lg font-semibold leading-snug">{c.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">{c.issuer}</p>
                  </div>
                  {href && (
                    <div className="mt-5">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsCertifications;
