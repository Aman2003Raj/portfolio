import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section
      id="projects"
      className="py-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-blue-500 font-medium mb-2">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Some of the projects I've worked on while learning
            and experimenting with different technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <p className="text-gray-500">
            No projects found for this technology.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;