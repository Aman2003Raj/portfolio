import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const getLinkClass = ({ isActive }) =>
        `transition ${isActive
            ? "font-semibold"
            : "opacity-70 hover:opacity-100"
        }`;

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md"
            style={{
                backgroundColor: "color-mix(in srgb, var(--background) 85%, transparent)",
                borderColor: "var(--border)",
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold"
                    >
                        Aman<span style={{ color: "var(--primary)" }}>.</span>
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

                        {/* Theme Button */}
                        <ThemeToggle />

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg text-white transition hover:scale-105"
                            style={{
                                backgroundColor: "var(--primary)",
                            }}
                        >
                            Resume
                        </a>

                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-3 md:hidden">

                        <ThemeToggle />

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? "×" : "☰"}
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-5 pb-3 flex flex-col gap-5">

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
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit px-4 py-2 rounded-lg text-white"
                            style={{
                                backgroundColor: "var(--primary)",
                            }}
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