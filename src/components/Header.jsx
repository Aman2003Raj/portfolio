import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold"
          style={{ color: "var(--foreground)" }}
        >
          Aman Raj
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--primary)"
                  : "var(--foreground)",
              })}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Call Us Button */}
          <a
            href="tel:+916203060380"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--primary)",
              color: "#ffffff",
            }}
          >
            Call Us
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">

          {/* Call Button */}
          <a
            href="tel:+916203060380"
            className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{
              backgroundColor: "var(--primary)",
              color: "#ffffff",
            }}
          >
            Call
          </a>

          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            style={{
              color: "var(--foreground)",
            }}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="md:hidden border-t px-8 py-5"
          style={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-medium"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--primary)"
                    : "var(--foreground)",
                })}
              >
                {link.name}
              </NavLink>
            ))}

          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;