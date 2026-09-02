function Resume() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Header */}
        <header className="text-center pb-8 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Aman Raj
          </h1>

          <p
            className="mt-3 text-lg font-medium"
            style={{ color: "var(--primary)" }}
          >
            B.Tech – Computer Science and Engineering
          </p>

          <p
            className="mt-2"
            style={{ color: "var(--muted)" }}
          >
            Visvesvaraya National Institute of Technology, Nagpur
          </p>

          <div
            className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <a href="tel:+916203060380" className="hover:underline" style={{ color: "var(--muted)" }}>+91 6203060380</a>
            <a href="mailto:akthakur19870@gmail.com" className="hover:underline" style={{ color: "var(--muted)" }}>akthakur19870@gmail.com</a>
            <a
              href="https://github.com/Aman2003Raj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--primary)" }}
            >
              GitHub Profile
            </a>
          </div>
        </header>

        {/* Education */}
        <ResumeSection title="Education">
          <ResumeItem
            title="B.Tech – Computer Science and Engineering"
            subtitle="Visvesvaraya National Institute of Technology, Nagpur"
            right="2026"
          >
            CGPA: 6.01
          </ResumeItem>

          <ResumeItem
            title="Class XII – CBSE"
            subtitle="J P Central School, Samastipur, Bihar"
            right="2022"
          >
            67.8%
          </ResumeItem>

          <ResumeItem
            title="Class X – CBSE"
            subtitle="Green Valley International School, Pusa, Samastipur, Bihar"
            right="2020"
          >
            78.2%
          </ResumeItem>
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Projects">
          <ResumeItem
            title="Muzic – Music Streaming Website"
            subtitle="React, MongoDB, Express, Node.js"
            right="Oct 2025"
          >
            <ul>
              <li>
                Developed a full-stack music streaming web application
                using the MERN stack with secure user authentication
                and a responsive user interface.
              </li>
              <li>
                Implemented music playback, song search, and song
                management features using RESTful APIs and MongoDB
                for efficient data storage and retrieval.
              </li>
              <li>
                Deployed the frontend on Vercel and maintained the
                project with GitHub, ensuring scalable deployment,
                version control, and clean project organization.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="AI News Summarizer"
            subtitle="GPT4All, Streamlit"
            right="April 2025"
          >
            <ul>
              <li>
                Developed an AI-powered web app using Streamlit to
                fetch, summarize, and evaluate news articles using
                GPT4All and DeepSeek LLMs.
              </li>
              <li>
                Integrated multi-agent architecture with a local LLM
                summarizer and OpenRouter-based quality checker to
                ensure accuracy in AI-generated content.
              </li>
              <li>
                Secured API keys via .env and structured the project
                for open-source deployment with GitHub, including
                clean documentation and dependency management.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Topology-Aware Reinforcement Learning for Adaptive Cooperative Caching in CCN"
            subtitle="Python – Deep Q-Network (DQN) – Reinforcement Learning – Network Simulation"
            right="April 2026"
          >
            <ul>
              <li>
                Developed a topology-aware reinforcement learning
                framework using Deep Q-Network (DQN) and
                centrality-based (CMBA) features to optimize
                cooperative caching in Content-Centric Networks (CCN).
              </li>
              <li>
                Designed and evaluated four topology migration
                scenarios to analyze policy adaptation, router
                selection, reward convergence, and latency performance
                under changing network conditions.
              </li>
              <li>
                Improved caching efficiency by implementing
                fine-tuning of pretrained models, achieving faster
                adaptation, lower latency, and more stable performance
                compared to training from scratch.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Portfolio Website"
            subtitle="React, Vite, Tailwind CSS, React Router"
            right="2026"
          >
            <ul>
              <li>
                Responsive developer portfolio built with React and
                Vite to showcase projects, technical skills, and
                development experience.
              </li>
              <li>
                Implemented reusable components, client-side routing,
                and light/dark theme support.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Voter Management System"
            subtitle="React, JavaScript, Node.js, MongoDB"
            right="Under Development"
          >
            <ul>
              <li>
                Web application currently under development for
                managing voter-related information.
              </li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <SkillRow
            title="Languages"
            value="C, C++, Python, JavaScript, HTML, CSS, MySQL"
          />

          <SkillRow
            title="Frameworks/Libraries"
            value="React.js, Node.js, Express.js, Streamlit"
          />

          <SkillRow
            title="Databases"
            value="MongoDB, MySQL"
          />

          <SkillRow
            title="Developer Tools"
            value="Git, GitHub, VS Code, Docker, Postman"
          />

          <SkillRow
            title="Core Concepts"
            value="Data Structures & Algorithms, OOPs, DBMS, Operating Systems, Computer Networks, Machine Learning, Reinforcement Learning, Large Language Models (LLMs), REST APIs"
          />
        </ResumeSection>

        {/* Download */}
        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            download="Aman_Raj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--primary)",
              color: "#ffffff",
            }}
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="mt-12">
      <h2
        className="text-xl md:text-2xl font-bold pb-3 border-b"
        style={{
          borderColor: "var(--border)",
          color: "var(--primary)",
        }}
      >
        {title}
      </h2>

      <div className="mt-6 space-y-8">
        {children}
      </div>
    </section>
  );
}

function ResumeItem({ title, subtitle, right, children }) {
  return (
    <article>
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div>
          <h3 className="font-bold text-lg">
            {title}
          </h3>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </p>
        </div>

        <span
          className="text-sm font-medium md:text-right"
          style={{ color: "var(--muted)" }}
        >
          {right}
        </span>
      </div>

      {children && (
        <div
          className="mt-3 text-sm leading-7"
          style={{ color: "var(--muted)" }}
        >
          {children}
        </div>
      )}
    </article>
  );
}

function SkillRow({ title, value }) {
  return (
    <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-6">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p
        className="leading-7"
        style={{ color: "var(--muted)" }}
      >
        {value}
      </p>
    </div>
  );
}

export default Resume;