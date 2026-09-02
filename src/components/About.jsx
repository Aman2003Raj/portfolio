function About() {
    return (
        <section
            id="about"
            className="relative py-24 border-t overflow-hidden"
            style={{
                borderColor: "var(--border)",
            }}
        >

            <div
                className="absolute inset-0 flex items-start justify-center -translate-y-4 pointer-events-none select-none overflow-hidden"
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
            md:text-[18vw]
            lg:text-[20vw]
          "
                    style={{
                        color: "var(--primary)",
                        opacity: 0.9,
                    }}
                >
                    ABOUT ME
                </h1>
            </div>


            <div className="relative z-10 max-w-[1300px] mx-auto px-8 ">

                <div
                    className="rounded-3xl border p-8 md:p-12 backdrop-blur-sm"
                    style={{
                        backgroundColor: "rgba(128, 128, 128, 0.08)",
                        borderColor: "rgba(128, 128, 128, 0.25)",
                    }}
                >

                    <div className="text-center mb-8">

                        <p
                            className="
                text-sm
                font-semibold
                tracking-[0.25em]
                uppercase
                mb-3
              "
                            style={{
                                color: "var(--primary)",
                            }}
                        >

                        </p>

                        <h2
                            className="text-5xl md:text-6xl font-bold"
                            style={{
                                color: "var(--foreground)",
                            }}
                        >
                            About Me
                        </h2>

                    </div>

                    {/* =========================================
              ABOUT CONTENT
              ========================================= */}
                    <div
                        className="
              max-w-4xl
              mx-auto
              text-center
              text-lg
              leading-8
            "
                        style={{
                            color: "var(--foreground)",
                        }}
                    >

                        <p>
                            I'm Aman Raj, a Computer Science and Engineering
                            graduate from Visvesvaraya National Institute of
                            Technology, Nagpur. I enjoy building practical
                            applications and exploring technologies that solve
                            real-world problems.
                        </p>

                        <p className="mt-6">
                            My interests span modern web development, artificial
                            intelligence, machine learning, and reinforcement
                            learning. I like turning ideas into working projects
                            while continuously learning new technologies and
                            improving my development skills.
                        </p>

                        <p className="mt-6">
                            Through my academic and personal projects, I have
                            worked with technologies such as React, Node.js,
                            MongoDB, Python, machine learning, and REST APIs.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;