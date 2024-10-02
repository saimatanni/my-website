const Experience = () => {
  const experiences = [
    {
      role: "Front End Developer",
      company: "DevStream Limited",
      location: "Dhaka, Bangladesh",
      duration: "02/2022 - Present",
      tasks: [
        "Led the development of the Super User Admin Panel for a UK-based payment solutions provider.",
        "Worked on PS Portal Onboarding and Partner Portal systems.",
        "Technologies:  React JS Next JS React Hooks, JavaScript, Typescript, Redux, Redux Toolkit, CSS, React-Bootstrap, Material UI, Vite, Styled Components, Tailwind CSS,REST API",
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Ghuri Express",
      location: "Dhaka, Bangladesh",
      duration: "10/2021 - 12/2021",
      tasks: [
        "Responsible for design and API integration in the Ghuri admin panel.",
        "Technologies:JavaScript, React JS, REST API, Hooks, Redux.",
      ],
    },
  ];

  return (
    <section className="py-16 text-white bg-black" id="experience">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 transition-all transform bg-gray-800 border border-transparent rounded-lg shadow-md hover:scale-105 hover:border-pink-500"
            >
              {/* <span className="absolute text-xl text-pink-500 top-2 left-2">{`0${index + 1}`}</span> */}
              <h3 className="mb-2 text-2xl font-bold">{exp.role}</h3>
              <p className="mb-2 text-gray-400">
                {exp.company} | {exp.duration}
              </p>
              <ul className="ml-6 text-gray-300 list-disc">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              {/* <a
                href="#"
                className="inline-block mt-4 text-pink-500 hover:underline"
              >
                Read More →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
