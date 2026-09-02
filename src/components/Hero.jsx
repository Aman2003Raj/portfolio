import { Link } from "react-router-dom";

function Hero() {
  const technologies = [
    "React.js",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Python",
    "Machine Learning",
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p
              className="text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--primary)" }}
            >
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Aman Raj
            </h1>

            <h2
              className="mt-4 text-2xl md:text-3xl font-semibold"
              style={{ color: "var(--primary)" }}
            >
              Computer Science Engineer
            </h2>

            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              B.Tech Computer Science and Engineering graduate from
              Visvesvaraya National Institute of Technology, Nagpur.
              I build practical applications using modern web
              technologies and explore AI, machine learning, and
              reinforcement learning.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Projects Button */}
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#ffffff",
                }}
              >
                View Projects
              </Link>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download = "Aman_Raj_Resume.pdf"
                className="px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--foreground)",
                  borderColor: "var(--border)",
                }}
              >
                View Resume
              </a>

            </div>

            {/* Technologies */}
            <div className="mt-10">
              <p
                className="text-sm mb-3"
                style={{ color: "var(--muted)" }}
              >
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm border"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl border flex items-center justify-center"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Decorative Circle */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                style={{
                  backgroundColor: "var(--primary)",
                }}
              />

              {/* Decorative Circle */}
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-20"
                style={{
                  backgroundColor: "var(--primary)",
                }}
              />

              {/* Developer Content */}
              <div className="text-center">
                <div className="text-7xl mb-5">
                  👨‍💻
                </div>

                <p
                  className="text-xl font-bold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Developer
                </p>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Build • Learn • Explore
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;