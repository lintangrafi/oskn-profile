"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
  SiFigma,
  SiPostman,
  SiFlutter,
  SiDart,
  SiPhp,
  SiSupabase,
  SiFirebase,
  SiKotlin,
  SiCanva,
  SiUnity,
  SiBlender,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const iconMap: Record<string, any> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "HTML/CSS": SiHtml5,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Git: SiGit,
  "VS Code": VscCode,
  Figma: SiFigma,
  Postman: SiPostman,
  Flutter: SiFlutter,
  Dart: SiDart,
  PHP: SiPhp,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Kotlin: SiKotlin,
  Canva: SiCanva,
  "Unity 3D": SiUnity,
  Blender: SiBlender,
  "Machine Learning": SiPython, // Using Python icon for ML
  "Flame Engine": SiFlutter, // Using Flutter icon for Flame
  "Responsive Design": SiHtml5, // Using HTML5 icon
  "REST APIs": SiNodedotjs, // Using Node icon
};

export default function Skills() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Other",
  ] as const;

  const getSkillsByCategory = (category: string) => {
    return skillsData.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="section-container bg-gradient-to-b from-gray-950 to-black"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-2 mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
      </motion.div>

      {/* Skills Grid by Category */}
      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((category, catIndex) => {
          const skills = getSkillsByCategory(category);
          if (skills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-200">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => {
                  const Icon = iconMap[skill.name];

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="card flex flex-col items-center justify-center p-6 text-center group cursor-pointer"
                    >
                      {Icon && (
                        <Icon className="w-12 h-12 mb-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      )}
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      {skill.proficiency && (
                        <div className="mt-3 w-full bg-gray-800 rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-white h-1.5 rounded-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
