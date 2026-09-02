import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold"
              style={{
                color: "var(--foreground)",
              }}
            >
              Aman Raj
            </Link>

            <p
              className="mt-4 max-w-sm text-sm leading-6"
              style={{
                color: "var(--muted)",
              }}
            >
              Computer Science Engineer focused on building practical
              applications and exploring web development, AI, and
              machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "var(--foreground)",
              }}
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                Home
              </Link>

              <Link
                to="/resume"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                Resume
              </Link>

              <Link
                to="/projects"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "var(--foreground)",
              }}
            >
              Connect
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/Aman2003Raj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/aman-raj-ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:akthakur19870@gmail.com"
                className="text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                }}
              >
                Email ↗
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs"
            style={{
              color: "var(--muted)",
            }}
          >
            © {new Date().getFullYear()} Aman Raj. All rights reserved.
          </p>

          <p
            className="text-xs"
            style={{
              color: "var(--muted)",
            }}
          >
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;