function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            skills: [
                "C",
                "C++",
                "Python",
                "JavaScript",
                "HTML",
                "CSS",
                "MySQL",
            ],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                "React.js",
                "Node.js",
                "Express.js",
                "Streamlit",
            ],
        },
        {
            title: "Databases",
            skills: [
                "MongoDB",
                "MySQL",
            ],
        },
        {
            title: "Developer Tools",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Docker",
                "Postman",
            ],
        },
        {
            title: "Core Concepts",
            skills: [
                "Data Structures & Algorithms",
                "OOPs",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
            ],
        },
        {
            title: "AI & Machine Learning",
            skills: [
                "Machine Learning",
                "Reinforcement Learning",
                "Large Language Models",
                "REST APIs",
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="relative py-24 border-t overflow-hidden"
            style={{
                borderColor: "var(--border)",
            }}
        >
            
            <div
                className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                <h1
                    className="
            whitespace-nowrap
            uppercase
            font-black
            leading-none
            tracking-[-0.08em]
            text-[22vw]
            md:text-[22vw]
            lg:text-[20vw]
          "
                    style={{
                        color: "var(--primary)",
                        opacity: 0.9,
                    }}
                >
                    SKILLS
                </h1>
            </div>

           
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 translate-y-10">

                <div
                    className="rounded-3xl border p-8 md:p-12 backdrop-blur-sm"
                    style={{
                        backgroundColor: "rgba(128, 128, 128, 0.08)",
                        borderColor: "rgba(128, 128, 128, 0.25)",
                    }}
                >

                    
                    <div className="text-center mb-12">

                        <p
                            className="
                text-sm
                font-semibold
                tracking-[0.25em]
                uppercase
                mb-3 md:text-6xl
              "
                            style={{
                                    color: "var(--foreground)",
                                }}
                        >
                            Skills
                        </p>

                        <h2
                            className="text-5xl md:text-6xl font-bold"
                            style={{
                                color: "var(--foreground)",
                            }}
                        >
                            Technologies & Expertise
                        </h2>

                        <p
                            className="
                mt-5
                max-w-2xl
                mx-auto
                text-lg
                leading-8
              "
                            style={{
                                color: "var(--foreground)",
                            }}
                        >
                            A collection of technologies, tools, and core
                            computer science concepts I have worked with
                            through academic and personal projects.
                        </p>

                    </div>

                    {/* =========================================
              SKILL CARDS
              ========================================= */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {skillGroups.map((group) => (
                            <div
                                key={group.title}
                                className="
                  p-6
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                                style={{
                                    backgroundColor: "rgba(128, 128, 128, 0.06)",
                                    borderColor: "rgba(128, 128, 128, 0.25)",
                                }}
                            >

                                <h3
                                    className="
                    text-lg
                    font-semibold
                    mb-5
                    text-center
                  "
                                    style={{
                                        color: "var(--primary)",
                                    }}
                                >
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 justify-center">

                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="
                        px-3
                        py-1.5
                        rounded-lg
                        text-sm
                        border
                      "
                                            style={{
                                                backgroundColor: "var(--secondary)",
                                                borderColor: "var(--border)",
                                                color: "var(--foreground)",
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;