function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aman Raj. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">

            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
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