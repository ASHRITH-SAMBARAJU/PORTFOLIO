import { Button } from "@/components/ui/button";
import { Download, FileText, Award, User } from "lucide-react";

const ResumeSection = () => {
  // Encode spaces in the file name
  const RESUME_URL = encodeURI(`${import.meta.env.BASE_URL}ASHRITH SAMBARAJU.pdf`);

  const handleDownloadResume = async () => {
    try {
      const res = await fetch(RESUME_URL);
      if (!res.ok) {
        alert("Could not fetch the PDF. Check the file name/path in /public.");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Sambaraju_Ashrith_Resume.pdf"; // clean filename for user
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error downloading the PDF.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
        <div className="h-1 w-20 bg-white mx-auto rounded-full mb-10" />

        <div className="bg-white text-black p-6 md:p-12 rounded-3xl shadow-xl mb-12">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">Complete Professional Profile</h3>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Download my comprehensive resume to explore my complete background, education,
            detailed project descriptions, and professional achievements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 mb-10">
            <div className="flex items-center gap-3 justify-center">
              <User className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              <span className="text-sm md:text-base font-medium">Complete Background</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              <span className="text-sm md:text-base font-medium">Achievements</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              <span className="text-sm md:text-base font-medium">Project Details</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleDownloadResume}
              className="bg-black text-white hover:bg-gray-800 px-8 md:px-12 py-3 md:py-4 text-sm md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
