function About() {
  const details = [
    {
      title: "Education",
      value: "B.Tech CSE",
    },
    {
      title: "Institute",
      value: "VNIT Nagpur",
    },
    {
      title: "Graduated",
      value: "2026",
    },
    {
      title: "Focus",
      value: "Web Development",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}
          >
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Computer Science Engineer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* About */}
          <div>
            <p
              className="text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              I'm Aman Raj, a Computer Science and Engineering graduate
              from Visvesvaraya National Institute of Technology, Nagpur.
              I completed my B.Tech in 2026.
            </p>

            <p
              className="mt-6 text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              My technical interests include web development, machine
              learning, reinforcement learning, and large language models.
              I enjoy building practical applications and exploring how
              different technologies can be used to solve real-world
              problems.
            </p>

            <p
              className="mt-6 text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              My projects include a full-stack MERN music streaming
              application, an AI-powered news summarizer, and a
              topology-aware reinforcement learning project for
              cooperative caching in Content-Centric Networks.
            </p>
          </div>

          {/* Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            {details.map((detail) => (
              <div
                key={detail.title}
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  {detail.title}
                </p>

                <p
                  className="font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;