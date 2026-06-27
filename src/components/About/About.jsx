import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/khalid.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-0 md:mt-0 lg:mt-0"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Khalid Sheikh
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <ReactTypingEffect
              text={["MERN Developer", "Web Developer", "UI Designer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Frontend Developer skilled in HTML, CSS, JavaScript (ES6+),
            React.js, and Tailwind CSS. Passionate about building responsive and
            user-friendly web applications with clean, efficient, and
            maintainable code. Always eager to learn new technologies and
            improve development skills.
          </p>

          {/* Resume Button */}
         <a
           href="/resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold     transition duration-300 transform hover:scale-105"
            style={{
             background: "linear-gradient(90deg, #8245ec, #a855f7)",
             boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
             >
              DOWNLOAD CV
              </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center items-center md:w-1/2 mt-8 md:mt-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square flex-shrink-0">
            <Tilt
              className="w-full h-full rounded-full overflow-hidden border-[4px] border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={800}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Khalid Sheikh"
                className="w-full h-full object-cover object-top rounded-full scale-110"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
