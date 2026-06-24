import React from "react";
import { experiences } from "../../constants";
import myLogo from "../../assets/work_logo/paul.png";


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">  
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Experience Entries */}
        <div className="space-y-16">
          {experiences.map((experience, index) => {
            // Isse check hoga ki element even hai ya odd
            const isEven = index % 2 === 0;

            return (
              <div
                key={experience.id}
                className={`flex flex-col sm:flex-row items-center justify-between w-full relative ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Yeh spacer div desktop par opposite side ko khali rakhega */}
                <div className="w-full sm:w-[45%] hidden sm:block"></div>

                {/* Timeline Circle/Logo - Jo bilkul center line par aayega */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 rounded-full hidden sm:flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
     <img
  src={experience.img}
  alt={experience.company}
  className="w-full h-full object-cover rounded-full"
/>
                </div>

                {/* Experience Card */}
                <div
                  className="w-full sm:w-[45%] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 z-10"
                >
                  {/* Mobile View Ke Liye Circle Logo (Jo card ke upar dikhega) */}
                  <div className="sm:hidden flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gray-400 border-2 border-[#8245ec] rounded-full overflow-hidden">
                      <img src={experience.img} alt="My Logo" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Company Image and Text Info */}
                  <div className="flex items-center space-x-6">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Role, Company Name, and Date */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {experience.role}
                        </h3>
                        <h4 className="text-md text-gray-300 mt-0.5">
                          {experience.company}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-medium">{experience.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{experience.desc}</p>
                  
                  {/* Skills Badges */}
                  <div className="mt-4">
                    <h5 className="font-medium text-white text-sm">Skills:</h5>
                    <ul className="flex flex-wrap mt-2 gap-2">
                      {experience.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-[#8245ec]/20 text-[#b58eff] px-3 py-1 text-xs rounded-full border border-[#8245ec]/30 font-medium"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;






