import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0f0f1f]/60 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-widest">
          SM
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <a
                href={link.href}
                className="text-white transition-colors duration-300 group-hover:text-cyan-400"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6 bg-[#0f0f1f]/90 backdrop-blur-md shadow-lg space-y-3"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-base font-medium py-2 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
