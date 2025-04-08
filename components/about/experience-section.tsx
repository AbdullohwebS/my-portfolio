"use client"

import { motion } from "framer-motion"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "must read from below",
      company: "I am studying.",
      period: "2025 - Present",
      description:
        "Hello everyone. First of all, I am Nurmukhammedov Abdulloh. It's 2025. For now, don't read this — start reading from the bottom and come back up.",
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Design Studio",
      period: "2023 - 2024",
      description:
        "Alright, let’s continue. In 2022, I had just entered the world of IT. At that time, I didn’t even know what IT was. I got into it because one of my younger brothers was getting into it, and I became interested too. But later, due to certain reasons, my brother stopped, while I continued. There were times when I took breaks for 3–4 months and lost interest.Until 2023, I had learned HTML and CSS. You might say 'Pff, that’s nothing,' but back then, even our teacher had just started learning JavaScript. He only knew HTML and CSS.",
    },
    {
      title: "science throughout my country",
      company: "center school",
      period: "2022 - 2023",
      description:
        "I grew up in the ' BOTIRABOT VILLAGE ' area of Izboskan district, Andijan region. In the center, there was a place that offered IT lessons. I took classes there, and the continuation is mentioned above.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Jobs and Money</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-700"
            >
              <div className="absolute w-3 h-3 bg-neutral-900 dark:bg-white rounded-full -left-[7px] top-1.5" />
              <h4 className="font-bold">{exp.title}</h4>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600 dark:text-neutral-300">
                  {exp.company}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

