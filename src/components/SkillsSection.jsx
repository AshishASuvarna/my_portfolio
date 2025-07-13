import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "Java", level: 70, category: "languages" },
  { name: "HTML/CSS", level: 80, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "MySQL", level: 80, category: "languages" },


  // Frameworks
  { name: "React", level: 75, category: "frameworks" },
  { name: "Node.js", level: 70, category: "frameworks" },


  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "VS Code", level: 70, category: "tools" },
  { name: "Android Studio", level: 70, category: "tools" },
  { name: "Unity Software", level: 65, category: "tools" },

  //Skills
  { name: "Data Structures & Algorithms", level: 95, category: "skills" },
  { name: "API Integration", level: 65, category: "skills" },
  { name: "Operating Systems", level: 75, category: "skills" },
  { name: "Database Management System", level: 75, category: "skills" },
];

const categories = ["all", "languages", "frameworks", "tools", "skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
