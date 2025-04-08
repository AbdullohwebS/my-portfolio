"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const categories = [
    {
      name: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL"],
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-400 dark:to-white rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index}>
              <h4 className="font-medium mb-3 text-neutral-600 dark:text-neutral-300">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

