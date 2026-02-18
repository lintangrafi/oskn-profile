"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
        <h2 className="heading-2 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work and side projects
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Featured Projects - Larger Cards */}
        {featuredProjects.slice(0, 2).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 ${
              index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-2"
            }`}
          >
            {/* Project Image */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-800">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  {/* Placeholder - replace with actual images */}
                  <span className="text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </motion.div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Featured Project 3 */}
        {featuredProjects[2] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 md:col-span-1"
          >
            <div className="relative h-48 overflow-hidden bg-gray-800">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <span className="text-5xl font-bold opacity-20">
                  {featuredProjects[2].title.charAt(0)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{featuredProjects[2].title}</h3>
              <p className="text-gray-400 text-sm mb-4">{featuredProjects[2].description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProjects[2].technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {featuredProjects[2].links.demo && (
                  <a
                    href={featuredProjects[2].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                )}
                {featuredProjects[2].links.github && (
                  <a
                    href={featuredProjects[2].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Featured Project 4 */}
        {featuredProjects[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 md:col-span-1"
          >
            <div className="relative h-48 overflow-hidden bg-gray-800">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <span className="text-5xl font-bold opacity-20">
                  {featuredProjects[3].title.charAt(0)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{featuredProjects[3].title}</h3>
              <p className="text-gray-400 text-sm mb-4">{featuredProjects[3].description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProjects[3].technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {featuredProjects[3].links.demo && (
                  <a
                    href={featuredProjects[3].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                )}
                {featuredProjects[3].links.github && (
                  <a
                    href={featuredProjects[3].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Other Projects - Compact Grid */}
      {otherProjects.length > 0 && (
        <>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 mt-16"
          >
            More Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card hover:scale-105"
              >
                <div className="relative h-40 overflow-hidden bg-gray-800 rounded-lg mb-4">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <span className="text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={14} />
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <FiGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
