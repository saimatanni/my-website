import React from "react";

const skills = [
  "React JS",
  "Next JS",
  "React Hooks",
  "JavaScript",
  "Typescript",
  "Redux",
  "Redux Toolkit",
  "CSS",
  "React-Bootstrap",
  "Material UI",
  "Vite",
  "Styled Components",
  "Tailwind CSS",
  "REST API",
];

const Skills = () => {
  return (
    <section className="py-16 text-white bg-black" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-white transition bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
