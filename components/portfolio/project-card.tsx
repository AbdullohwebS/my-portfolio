"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.id === 1 ? (
          <Link href="/about" className="w-full">
            <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
              About Me
              <span className="ml-2">→</span>
            </Button>
          </Link>
        ) : (
          <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            View Project
            <span className="ml-2">→</span>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

