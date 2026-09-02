function SectionHeading({ backgroundText, eyebrow, title, description }) {
  return (
    <div className="relative mb-12 overflow-hidden">

      {/* Large Background Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <h1
          className="
            whitespace-nowrap
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-[18vw]
            md:text-[14vw]
            lg:text-[11vw]
          "
          style={{
            color: "#D7193F",
            opacity: 0.12,
          }}
        >
          {backgroundText}
        </h1>
      </div>

      {/* Foreground Heading */}
      <div className="relative z-10 text-center py-12">
        {eyebrow && (
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
            style={{
              color: "var(--primary)",
            }}
          >
            {eyebrow}
          </p>
        )}

        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{
            color: "var(--foreground)",
          }}
        >
          {title}
        </h2>

        {description && (
          <p
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{
              color: "var(--muted)",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;