import { useState, useEffect } from "react";
import { Code, Database, Smartphone, Palette, Server, Globe } from "lucide-react";

// Utility function to determine progress bar color
function getLevelColor(level) {
  if (level >= 90) return "bg-cyber-green";    // Expert
  if (level >= 80) return "bg-cyber-blue";     // Advanced
  if (level >= 70) return "bg-cyber-purple";   // Intermediate
  if (level >= 60) return "bg-cyber-gold";     // Beginner
  return "bg-cyber-pink";                      // Learning
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "cyber-blue",
      skills: [
        { name: "React.js", level: 95, delay: 0 },
        { name: "JavaScript", level: 90, delay: 200 },
        { name: "HTML/CSS", level: 92, delay: 400 },
        { name: "TypeScript", level: 88, delay: 600 },
      ],
    },
    {
      icon: Database,
      title: "Backend",
      color: "cyber-pink",
      skills: [
        { name: "Python", level: 88, delay: 0 },
        { name: "Django", level: 85, delay: 200 },
        { name: "Node.js", level: 80, delay: 400 },
        { name: "PostgreSQL", level: 82, delay: 600 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "cyber-purple",
      skills: [
        { name: "React Native", level: 82, delay: 0 },
        { name: "Flutter", level: 75, delay: 200 },
        { name: "iOS", level: 70, delay: 400 },
        { name: "Android", level: 78, delay: 600 },
      ],
    },
    {
      icon: Palette,
      title: "Design",
      color: "cyber-green",
      skills: [
        { name: "UI/UX Design", level: 87, delay: 0 },
        { name: "Figma", level: 85, delay: 200 },
        { name: "Adobe XD", level: 80, delay: 400 },
        { name: "Prototyping", level: 83, delay: 600 },
      ],
    },
    {
      icon: Server,
      title: "DevOps",
      color: "cyber-gold",
      skills: [
        { name: "AWS", level: 78, delay: 0 },
        { name: "Docker", level: 82, delay: 200 },
        { name: "Git", level: 90, delay: 400 },
        { name: "CI/CD", level: 75, delay: 600 },
      ],
    },
    {
      icon: Globe,
      title: "Other",
      color: "cyber-cyan",
      skills: [
        { name: "Machine Learning", level: 70, delay: 0 },
        { name: "Blockchain", level: 65, delay: 200 },
        { name: "GraphQL", level: 80, delay: 400 },
        { name: "REST APIs", level: 92, delay: 600 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[var(--space-dark)] to-[var(--space-navy)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 font-mono">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-3xl transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 200}ms`,
                background: `linear-gradient(135deg, var(--neuro-surface), var(--neuro-recessed))`,
                boxShadow: `
                  20px 20px 40px hsla(0, 2%, 26%, 0.30),
                  -20px -20px 40px hsla(0, 0%, 100%, 0.18),
                  inset 0 0 20px hsla(193, 100%, 50%, 0.31)
                `,
              }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r from-[var(--${category.color})] to-[var(--cyber-pink)] bg-opacity-20`}>
                  <category.icon className={`text-[var(--${category.color})]`} size={32} />
                </div>
                <h3 className={`text-2xl font-bold text-[var(--${category.color})] ml-4 font-mono`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className={`text-[var(--${category.color})] font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${getLevelColor(skill.level)} transition-all duration-1000`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skill.delay}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
