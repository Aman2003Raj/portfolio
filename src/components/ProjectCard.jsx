function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition">

      {/* Project Image */}
      <div className="h-48 bg-gray-900 flex items-center justify-center">
        <span className="text-gray-600">
          Project Preview
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {project.name}
        </h3>

        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            GitHub →
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Live Demo →
          </a>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;