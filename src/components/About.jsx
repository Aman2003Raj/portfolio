function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-2">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            A little about me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Description */}
          <div className="text-gray-400 leading-relaxed space-y-5">

            <p>
              I'm a Computer Science Engineering graduate with
              an interest in building web applications and
              solving problems through technology.
            </p>

            <p>
              I enjoy working with JavaScript, React and modern
              web technologies, while continuously improving my
              understanding of software development.
            </p>

            <p>
              I'm currently focused on strengthening my frontend
              and full-stack development skills by building
              practical projects.
            </p>

          </div>

          {/* Quick Information */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm text-gray-500">
                Education
              </p>

              <p className="mt-2 font-medium">
                B.Tech CSE
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm text-gray-500">
                Focus
              </p>

              <p className="mt-2 font-medium">
                Web Development
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm text-gray-500">
                Frontend
              </p>

              <p className="mt-2 font-medium">
                React
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="mt-2 font-medium">
                India
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;