import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
    const navigate = useNavigate();
    const [isOpening, setIsOpening] = useState(false);

    const handleOpenProject = () => {
        if (isOpening) return;

        setIsOpening(true);

        // Change page after transition
        setTimeout(() => {
            navigate(`/projects/${project.id}`);
        }, 600);
    };

    return (
        <>
            {/* =========================================
                PROJECT CARD
            ========================================= */}
            <article
                onClick={handleOpenProject}
                className={`
                    w-[320px]
                    md:w-[420px]
                    min-h-[300px]
                    shrink-0
                    p-7
                    rounded-2xl
                    border
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    cursor-pointer
                    transition-all
                    duration-300
                    ${
                        isOpening
                            ? "scale-[0.98] opacity-70"
                            : "hover:-translate-y-2 hover:scale-[1.02]"
                    }
                `}
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Status */}
                <div>
                    <span
                        className="
                            inline-block
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-medium
                            border
                            mb-5
                        "
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--muted)",
                        }}
                    >
                        {project.status}
                    </span>

                    {/* Project Name */}
                    <h3
                        className="
                            text-2xl
                            md:text-3xl
                            font-bold
                            leading-tight
                            break-words
                        "
                        style={{
                            color: "var(--foreground)",
                        }}
                    >
                        {project.name}
                    </h3>

                    {/* Subtitle */}
                    <p
                        className="
                            mt-3
                            text-sm
                            md:text-base
                        "
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        {project.subtitle}
                    </p>
                </div>

                {/* Technologies */}
                <div className="mt-8">

                    <div className="flex flex-wrap gap-2 mb-6">

                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="
                                    px-3
                                    py-1
                                    rounded-lg
                                    text-xs
                                    border
                                "
                                style={{
                                    backgroundColor: "var(--secondary)",
                                    borderColor: "var(--border)",
                                    color: "var(--foreground)",
                                }}
                            >
                                {technology}
                            </span>
                        ))}

                    </div>

                    <span
                        className="font-semibold text-sm"
                        style={{
                            color: "var(--primary)",
                        }}
                    >
                        View Project →
                    </span>

                </div>
            </article>


            {/* =========================================
                PAGE TRANSITION
            ========================================= */}
            {isOpening && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        pointer-events-none
                        overflow-hidden
                    "
                >

                    {/* Main wipe */}
                    <div
                        className="
                            absolute
                            inset-0
                            page-transition-main
                        "
                        style={{
                            backgroundColor: "var(--primary)",
                        }}
                    />

                    {/* Dark/foreground layer */}
                    <div
                        className="
                            absolute
                            inset-0
                            page-transition-dark
                        "
                        style={{
                            backgroundColor: "var(--background)",
                        }}
                    />

                    {/* Project name */}
                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            page-transition-content
                        "
                    >
                        <div className="text-center px-8">

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    tracking-[0.3em]
                                    uppercase
                                    mb-4
                                "
                                style={{
                                    color: "var(--primary)",
                                }}
                            >
                                Opening Project
                            </p>

                            <h2
                                className="
                                    text-4xl
                                    md:text-6xl
                                    font-bold
                                "
                                style={{
                                    color: "var(--foreground)",
                                }}
                            >
                                {project.name}
                            </h2>

                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default ProjectCard;