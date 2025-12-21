import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Password Manager",
    description: "A secure and user-friendly password management app built with MERN Stack.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Bharani-dharan-k/PasswordManager",
  },
  {
    id: 2,
    title: "Trust Review",
    description:
      "A platform for users to share and review their experiences with various services, built using Flask and Mern Stack.",
    image: "/projects/project2.png",
    tags: ["Flask", "Mern Stack", "Tailwindcss"],
    demoUrl: "#",
    githubUrl: "https://github.com/Bharani-dharan-k/Trust-Review",
  },
  {
    id: 3,
    title: "Agri Market",
    description:
      "A comprehensive agricultural marketplace connecting farmers and consumers, developed with React, Node.js, and Flask.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Flask "],
    demoUrl: "#",
    githubUrl: "https://github.com/Bharani-dharan-k/Agri-Market",
  },
];

export const ProjectsSection = () => {  const [borderColor, setBorderColor] = useState("#ffffff");

  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setBorderColor(isDark ? "#ffffff" : "#a78bfa");
    };

    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ElectricBorder
              key={project.id}
              color={borderColor}
              speed={0.8}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 8, height: '100%', minHeight: '450px' }}
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </ElectricBorder>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Bharani-dharan-k"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
