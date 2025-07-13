import { useState, useEffect } from "react";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Python Developer",
    "Software Developer",
    "Entrepreneur",
  ];

  // Typewriter effect
  useEffect(() => {
    const current = roles[currentIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  // Smooth scroll effect
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#0a0a0f] relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent font-mono animate-fade-in">
              SHARATH
            </div>
            <div className="text-4xl md:text-6xl font-bold font-mono text-gray-100 animate-fade-in-up">
              M
            </div>

            <div className="text-xl md:text-2xl font-medium text-cyan-400 h-10">
              <span>{currentText}</span>
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-gray-300 max-w-xl leading-relaxed tracking-wide text-base md:text-lg">
              Crafting innovative digital experiences with cutting-edge technology.
              Passionate about creating scalable solutions that push boundaries.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:shadow-cyan-500/50 transition duration-300 font-semibold"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300 font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center relative animate-fade-in-up">
            <div className="relative w-80 h-80 rounded-full border-4 border-cyan-500 overflow-hidden shadow-xl shadow-cyan-500/30 hover:scale-105 transition">
              <img
                src="https://avatars.githubusercontent.com/u/180433352?v=4"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10 z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating animated glowing dots */}
      <div className="absolute top-1/4 left-1/4 animate-float-slow">
        <div className="w-4 h-4 bg-cyan-400 rounded-full blur-sm opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float-slower">
        <div className="w-6 h-6 bg-pink-500 rounded-full blur-md opacity-40" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-medium">
        <div className="w-8 h-8 bg-purple-500 rounded-full blur-md opacity-50" />
      </div>
    </section>
  );
}
