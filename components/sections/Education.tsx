"use client";

import { motion } from "framer-motion";
import { educationData, certificationsData } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function Education() {
  return (
    <section
      id="education"
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
        <h2 className="heading-2 mb-4">Education & Certifications</h2>
        <div className="w-20 h-1 bg-white mx-auto"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            Education
          </motion.h3>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-lg text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-400 mb-2">GPA: {edu.gpa}</p>
                    )}
                    {edu.description && (
                      <p className="text-sm text-gray-300 mt-3">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                    <div>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certificationsData.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6"
            >
              Certifications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card"
                >
                  <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-400">
                    Issued: {formatDate(cert.date)}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 mt-2">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white mt-2 inline-block"
                    >
                      View Credential →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
