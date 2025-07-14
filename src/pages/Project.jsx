import { ExternalLink, Github } from "lucide-react";

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend, Django backend, and integrated payment processing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
      tech: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "Fitness Tracker App",
      description:
        "React Native mobile app with real-time fitness tracking, goal setting, and social features.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600",
      tech: ["React Native", "Node.js", "MongoDB"],
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Machine learning powered analytics platform with real-time data visualization and predictive insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      tech: ["Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Blockchain DApp",
      description:
        "Decentralized application built on Ethereum with smart contracts and Web3 integration.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=600",
      tech: ["Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system with reusable components, tokens, and documentation.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=600",
      tech: ["Figma", "Storybook", "React"],
    },
    {
      title: "IoT Monitoring System",
      description:
        "Real-time IoT device monitoring with data visualization and alert management.",
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&h=600",
      tech: ["Python", "MQTT", "InfluxDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#0d0c1d] to-[#141627] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text font-mono">
            Project Matrix
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Explore my featured projects showcasing innovation and technical
            excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[#1a1a2e] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-shadow duration-300 rounded-3xl overflow-hidden border border-white/10 p-5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-5"
              />
              <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              <div className="flex space-x-4 mt-auto">
                <a
                  href="#"
                  className="flex items-center space-x-1 text-cyan-400 hover:text-white transition"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
