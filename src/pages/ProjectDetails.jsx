import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p
            className="mt-4"
            style={{ color: "var(--muted)" }}
          >
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="inline-block mt-6 font-semibold"
            style={{ color: "var(--primary)" }}
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-block mb-10 text-sm font-semibold"
          style={{ color: "var(--primary)" }}
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium border"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted)",
            }}
          >
            {project.status}
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold">
            {project.name}
          </h1>

          <p
            className="mt-4 text-xl"
            style={{ color: "var(--muted)" }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">
            About the Project
          </h2>

          <p
            className="mt-4 text-lg leading-8"
            style={{ color: "var(--muted)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold">
              Highlights
            </h2>

            <ul className="mt-5 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--primary)" }}>
                    •
                  </span>

                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3 mt-5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 rounded-lg border text-sm"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold border"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              GitHub
            </a>
          )}

          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold"
              style={{
                backgroundColor: "var(--primary)",
                color: "#ffffff",
              }}
            >
              Live Demo
            </a>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;