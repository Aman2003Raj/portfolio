function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="text-blue-500 font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Aman Raj
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl text-gray-400">
              Computer Science Engineer
            </h2>

            <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
              I build modern web applications with a focus on
              clean code, responsive interfaces and great user
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/projects"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                View Projects
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition font-medium"
              >
                GitHub
              </a>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex justify-center md:justify-end">

            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/10 flex items-center justify-center">

              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">

                <span className="text-7xl">
                  👨‍💻
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;