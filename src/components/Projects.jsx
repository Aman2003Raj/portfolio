import { useEffect, useRef, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const scrollRef = useRef(null);
    const trackRef = useRef(null);

    const animationFrameRef = useRef(null);
    const wheelTargetRef = useRef(0);
    const isWheelAnimatingRef = useRef(false);
    const isResettingRef = useRef(false);

    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        "All",
        "React",
        "JavaScript",
        "Python",
        "Node.js",
        "MongoDB",
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) =>
                project.technologies.includes(activeFilter)
            );

    /*
    =========================================
    DUPLICATE PROJECTS
    =========================================
    */

    const loopedProjects = [
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
    ];


    /*
    =========================================
    GET ONE SET WIDTH
    =========================================
    */

    const getSetWidth = () => {
        const container = scrollRef.current;

        if (!container || !filteredProjects.length) {
            return 0;
        }

        const cards =
            container.querySelectorAll(
                "[data-project-card]"
            );

        if (!cards.length) return 0;

        const first = cards[0];
        const second = cards[1];

        const cardWidth =
            first.getBoundingClientRect().width;

        let gap = 24;

        if (second) {
            gap =
                second.offsetLeft -
                first.offsetLeft -
                first.offsetWidth;
        }

        return (
            (cardWidth + gap) *
            filteredProjects.length
        );
    };


    /*
    =========================================
    CENTER CARDS INITIALLY
    =========================================
    */

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;

        requestAnimationFrame(() => {
            const setWidth = getSetWidth();

            if (setWidth) {
                container.scrollLeft = setWidth;

                wheelTargetRef.current =
                    setWidth;
            }
        });
    }, [
        activeFilter,
        filteredProjects.length,
    ]);


    /*
    =========================================
    SMOOTH WHEEL
    =========================================
    */

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;


        const animateWheel = () => {
            const current =
                container.scrollLeft;

            const target =
                wheelTargetRef.current;

            const difference =
                target - current;

            /*
            Very small movement:
            finish animation.
            */

            if (Math.abs(difference) < 0.5) {
                container.scrollLeft = target;

                isWheelAnimatingRef.current =
                    false;

                animationFrameRef.current =
                    null;

                return;
            }


            /*
            Smooth interpolation.

            Higher = more responsive.
            */

            const next =
                current +
                difference * 0.18;


            container.scrollLeft =
                next;


            animationFrameRef.current =
                requestAnimationFrame(
                    animateWheel
                );
        };


        const handleWheel = (event) => {

            /*
            Only hijack vertical wheel.
            */

            if (
                Math.abs(event.deltaY) <=
                Math.abs(event.deltaX)
            ) {
                return;
            }


            /*
            Stop page vertical scrolling.
            */

            event.preventDefault();


            /*
            Add wheel movement.
            */

            wheelTargetRef.current +=
                event.deltaY * 1.4;


            /*
            Start animation only once.
            */

            if (
                !isWheelAnimatingRef.current
            ) {
                isWheelAnimatingRef.current =
                    true;

                animationFrameRef.current =
                    requestAnimationFrame(
                        animateWheel
                    );
            }
        };


        container.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: false,
            }
        );


        return () => {

            container.removeEventListener(
                "wheel",
                handleWheel
            );

            cancelAnimationFrame(
                animationFrameRef.current
            );
        };

    }, []);


    /*
    =========================================
    INFINITE LOOP
    =========================================
    */

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;


        const handleScroll = () => {

            if (isResettingRef.current) {
                return;
            }

            const setWidth =
                getSetWidth();

            if (!setWidth) return;


            const current =
                container.scrollLeft;


            /*
            LEFT
            */

            if (
                current <
                setWidth * 0.5
            ) {

                isResettingRef.current =
                    true;

                const newPosition =
                    current + setWidth;

                container.scrollLeft =
                    newPosition;

                wheelTargetRef.current =
                    newPosition;

                requestAnimationFrame(() => {
                    isResettingRef.current =
                        false;
                });
            }


            /*
            RIGHT
            */

            else if (
                current >
                setWidth * 1.5
            ) {

                isResettingRef.current =
                    true;

                const newPosition =
                    current - setWidth;

                container.scrollLeft =
                    newPosition;

                wheelTargetRef.current =
                    newPosition;

                requestAnimationFrame(() => {
                    isResettingRef.current =
                        false;
                });
            }
        };


        container.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );


        return () => {
            container.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, [
        filteredProjects.length,
    ]);


    /*
    =========================================
    CARD 3D EFFECT
    =========================================
    */

    useEffect(() => {
        const container = scrollRef.current;
        const track = trackRef.current;

        if (!container || !track) {
            return;
        }

        let frame = null;
        let running = false;


        const updateCards = () => {

            const containerRect =
                container.getBoundingClientRect();

            const center =
                containerRect.left +
                containerRect.width / 2;


            const cards =
                track.querySelectorAll(
                    "[data-project-card]"
                );


            cards.forEach((card) => {

                const rect =
                    card.getBoundingClientRect();

                const cardCenter =
                    rect.left +
                    rect.width / 2;


                const distance =
                    cardCenter - center;


                /*
                Only care about cards
                close to center.
                */

                const normalized =
                    Math.max(
                        -1,
                        Math.min(
                            1,
                            distance / 520
                        )
                    );


                const absolute =
                    Math.abs(
                        normalized
                    );


                /*
                CENTER = 1.10
                SIDE   = ~0.90
                */

                const scale =
                    1.10 -
                    absolute * 0.20;


                /*
                Move sides downward.
                */

                const y =
                    absolute * 35;


                /*
                Circular rotation.
                */

                const rotate =
                    normalized * 10;


                /*
                Fade sides.
                */

                const opacity =
                    1 -
                    absolute * 0.35;


                card.style.transform = `
                    translate3d(
                        0,
                        ${y}px,
                        0
                    )
                    scale3d(
                        ${scale},
                        ${scale},
                        1
                    )
                    rotateY(
                        ${rotate}deg
                    )
                `;

                card.style.opacity =
                    opacity;

            });


            running = false;
            frame = null;
        };


        const requestUpdate = () => {

            if (running) return;

            running = true;

            frame =
                requestAnimationFrame(
                    updateCards
                );
        };


        container.addEventListener(
            "scroll",
            requestUpdate,
            {
                passive: true,
            }
        );


        window.addEventListener(
            "resize",
            requestUpdate
        );


        /*
        Initial position.
        */

        requestUpdate();


        return () => {

            container.removeEventListener(
                "scroll",
                requestUpdate
            );

            window.removeEventListener(
                "resize",
                requestUpdate
            );

            cancelAnimationFrame(frame);
        };

    }, [
        filteredProjects.length,
    ]);


    /*
    =========================================
    FILTER
    =========================================
    */

    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };


    return (
        <section
            id="projects"
            className="
                relative
                py-24
                border-t
                overflow-hidden
            "
            style={{
                borderColor:
                    "var(--border)",
            }}
        >

            {/* =========================================
                BACKGROUND TEXT
            ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-start
                    justify-center
                    pt-0
                    pointer-events-none
                    select-none
                    overflow-hidden
                "
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
                        color:
                            "var(--primary)",
                        opacity: 0.9,
                    }}
                >
                    PROJECTS
                </h1>
            </div>


            {/* =========================================
                GLASS CONTAINER
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    max-w-[1400px]
                    mx-auto
                    px-8
                    translate-y-10
                "
            >

                <div
                    className="
                        rounded-3xl
                        border
                        py-8
                        md:py-12
                        backdrop-blur-xl
                    "
                    style={{
                        backgroundColor:
                            "rgba(128, 128, 128, 0.06)",

                        borderColor:
                            "rgba(128, 128, 128, 0.25)",
                    }}
                >

                    {/* =========================================
                        HEADING
                    ========================================= */}

                    <div
                        className="
                            text-center
                            px-6
                            mb-8
                        "
                    >

                        <p
                            className="
                                text-sm
                                font-semibold
                                tracking-[0.25em]
                                uppercase
                                mb-3
                            "
                            style={{
                                color:
                                    "var(--foreground)",
                            }}
                        >
                            Projects
                        </p>

                        <h2
                            className="
                                text-5xl
                                md:text-6xl
                                font-bold
                            "
                            style={{
                                color:
                                    "var(--foreground)",
                            }}
                        >
                            Things I've Built
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
                                color:
                                    "var(--muted)",
                            }}
                        >
                            A selection of projects I've
                            worked on across web development,
                            AI, and machine learning.
                        </p>

                    </div>


                    {/* =========================================
                        FILTERS
                    ========================================= */}

                    <div
                        className="
                            px-6
                            flex
                            flex-wrap
                            justify-center
                            gap-3
                            mb-4
                        "
                    >

                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() =>
                                    handleFilter(filter)
                                }
                                className="
                                    px-4
                                    py-2
                                    rounded-lg
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-300
                                "
                                style={{
                                    backgroundColor:
                                        activeFilter === filter
                                            ? "var(--primary)"
                                            : "var(--secondary)",

                                    color:
                                        activeFilter === filter
                                            ? "#ffffff"
                                            : "var(--foreground)",

                                    border:
                                        "1px solid var(--border)",
                                }}
                            >
                                {filter}
                            </button>
                        ))}

                    </div>


                    {/* =========================================
                        PROJECT CAROUSEL
                    ========================================= */}

                    <div
                        ref={scrollRef}
                        className="
                            project-scroll
                            overflow-x-auto
                            overflow-y-hidden
                            px-[20%]
                            py-20
                        "
                        style={{
                            scrollbarWidth:
                                "none",

                            msOverflowStyle:
                                "none",

                            perspective:
                                "1200px",

                            overscrollBehaviorX:
                                "contain",

                            touchAction:
                                "pan-x",
                        }}
                    >

                        <div
                            ref={trackRef}
                            className="
                                flex
                                items-center
                                gap-6
                                w-max
                            "
                            style={{
                                transformStyle:
                                    "preserve-3d",
                            }}
                        >

                            {loopedProjects.map(
                                (project, index) => (
                                    <div
                                        key={`${project.id}-${index}`}
                                        data-project-card
                                        className="
                                            shrink-0
                                        "
                                        style={{
                                            transform:
                                                "translate3d(0,0,0)",

                                            willChange:
                                                "transform, opacity",

                                            backfaceVisibility:
                                                "hidden",

                                            WebkitBackfaceVisibility:
                                                "hidden",
                                        }}
                                    >

                                        <ProjectCard
                                            project={project}
                                        />

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;