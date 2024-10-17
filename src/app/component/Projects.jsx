"use client";
import React, { useState } from "react";

const Projects = () => {
  const allProjects = [
    {
      title: "PS Portal Onboarding System",
      description:
        "Led the development of the Super User Admin Panel for a UK-based payment solutions provider.",
      techStack: ["React", "Redux", "Material UI", "REST API"],
      bgImage: "/project1-bg.jpg",
      demoLink: "https://onboarding.paymentsave.co.uk/",
    },
    {
      title: "PS Partner Portal System",
      description:
        "Admin panel for partners focusing on seamless operations and data integration.",
      techStack: ["React", "Redux", "Core UI", "REST API"],
      bgImage: "/project2-bg.jpg",
      demoLink: "https://partner.paymentsave.co.uk/login",
    },
    {
      title: "MenuBookBD",
      description:
        "Food ordering system website. Built the client panel and admin integration.",
      techStack: ["React", "Redux", "React-Bootstrap"],
      bgImage: "/project4-bg.jpg",
      demoLink: "https://client.menubookbd.com/",
    },
    {
      title: "Epos Master Admin",
      description:
        "Designed the admin panel for managing POS systems with React and Bootstrap.",
      techStack: ["React", "Redux", "React-Bootstrap", "CSS"],
      bgImage: "/project5-bg.jpg",
      demoLink: "https://epos-master.demo.devstream.com/",
    },
    {
      title: "DevStore E-commerce",
      description:
        "Built an e-commerce store using Next.js and integrated with Axios and REST API.",
      techStack: ["Next.js", "React-Bootstrap", "REST API"],
      bgImage: "/project6-bg.jpg",
      demoLink: "https://e-com-website-silk.vercel.app/",
    },
    {
      title: "Bangladesh Medical System",
      description:
        "Developed a medical leave management system using Typescript and React.",
      techStack: ["Typescript", "React", "Tailwind CSS", "REST API"],
      bgImage: "/project7-bg.jpg",
      demoLink: "https://bmc.clients.devstream.com/",
    },
    {
      title: "Weet Twist",
      description:
        "Built a web-based production house management tool with React and Bootstrap.",
      techStack: ["React", "Bootstrap", "REST API"],
      bgImage: "/project8-bg.jpg",
      demoLink: "https://weettwist.com/",
    },
    {
      title: "Pay By Link",
      description:
        "Payment gateway system using Vite, React, and Tailwind CSS.",
      techStack: ["Vite", "React", "Tailwind CSS", "REST API"],
      bgImage: "/project9-bg.jpg",
      demoLink: "https://demo.paybylink.devstream.com/login",
    },
    {
      title: "Link Sharing App",
      description:
        "Link sharing app featuring customizable and sharable social media links using Vite, React, and Tailwind CSS.",
      techStack: ["Vite", "React", "Tailwind CSS"],
      bgImage: "/project10-bg.jpg",
      demoLink: "https://link-sharing-app-weld.vercel.app/",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section className="py-16 text-white bg-black" id="projects">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          My Latest Work
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform transform bg-center bg-cover rounded-lg shadow-lg h-72 hover:scale-105 hover:border-4 hover:border-pink-500"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all bg-black bg-opacity-50 rounded-lg hover:bg-opacity-80">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-2 text-white">{project.description}</p>
                <p className="text-sm font-semibold text-gray-300">
                  Tech Stack: {project.techStack.join(", ")}
                </p>
                <a href={project.demoLink} className="mt-2 text-pink-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-700"
            >
              See More Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
