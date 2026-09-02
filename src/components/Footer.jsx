function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
            © {new Date().getFullYear()} Aman Raj. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <a
              href="#"
              className="transition hover:opacity-70"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:opacity-70"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:opacity-70"
            >
              Email
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;