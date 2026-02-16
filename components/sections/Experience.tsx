"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import { formatDate, calculateDuration } from "@/lib/utils";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container bg-gradient-to-b from-black to-gray-950"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-2 mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l-2 border-gray-800 last:border-l-0 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-white" />

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="card"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.location} • {exp.type}
                  </p>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                  <div>
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </div>
                  <div className="text-gray-500">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="text-white mr-2 flex-shrink-0">▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
