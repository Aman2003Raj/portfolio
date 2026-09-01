import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">

      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
          >
            Aman<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={getLinkClass}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={getLinkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="./resume_WD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              Resume
            </a>

          </div>
        )}

      </nav>

    </header>
  );
}

export default Header;