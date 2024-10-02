const Experience = () => {
  const experiences = [
    {
      role: "Front End Developer",
      company: "DevStream Limited",
      location: "Dhaka, Bangladesh",
      duration: "02/2022 - Present",
      tasks: [
        "Led the development of the Super User Admin Panel for a UK-based payment solutions provider.",
        "Worked on PS Portal Onboarding and Partner Portal systems, focusing on data handling and intuitive UI design.",
        "Technologies: React JS, Next JS, React Hooks, JavaScript, Typescript, Redux, Redux Toolkit, CSS, React-Bootstrap, Material UI, Vite, Styled Components, Tailwind CSS, REST API.",
        "Collaborated with backend teams for API integrations and improved system scalability."
      ],
      notableProjects: [
        { name: "PS Portal Onboarding", url: "https://onboarding.paymentsave.co.uk" },
        { name: "PS Partner Portal System", url: "https://partner.paymentsave.co.uk/login" },
      ]
    },
    {
      role: "Junior Frontend Developer",
      company: "Ghuri Express",
      location: "Dhaka, Bangladesh",
      duration: "10/2021 - 12/2021",
      tasks: [
        "Responsible for designing and implementing API integration in the Ghuri admin panel.",
        "Collaborated with team members to ensure the successful launch of the Ghuri Bazar web application.",
        "Technologies: JavaScript, React JS, REST API, React Hooks, Redux.",
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
              <h3 className="mb-2 text-2xl font-bold">{exp.role}</h3>
              <p className="mb-2 text-gray-400">
                {exp.company} | {exp.duration} | {exp.location}
              </p>
              <ul className="ml-6 text-gray-300 list-disc">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              {exp.notableProjects && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Notable Projects:</h4>
                  <ul>
                    {exp.notableProjects.map((project, idx) => (
                      <li key={idx}>
                        <a href={project.url} className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
