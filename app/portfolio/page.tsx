import { Button } from "@/components/ui/button"
import Link from "next/link"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import ProjectCard from "@/components/portfolio/project-card"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Briefly about myself",
      description: "Full-Stack...",
      image: "/img.jpg",
      tags: ["React", "Next.js", "Tailwind CSS", "Vhk..."],
    },
    {
      id: 2,
      title: "Super Hot NFTs",
      description: "Create, Explore & Collect Abstract NFTs",
      image: "/responsiv.png",
      tags: ["Html", "Css", "JavaScript"],
    },
    {
      id: 3,
      title: "Hi I'm Mini Site",
      description: "mini site light-dark-mode localstorage save",
      image: "/mini.png",
      tags: ["daisyui", "tailwindcss", "JavaScript"],
    },
    {
      id: 4,
      title: "Mobile Application",
      description: "Rock-Paper-Scissors",
      image: "/dondonziki.png",
      tags: ["daisyui", "tailwindcss", "JavaScript", "Html"],
    },
  ];

  return (
    <PortfolioLayout>
      <header className="sticky top-0 z-50 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button className="text-lg font-semibold bg-neutral-900 hover:bg-neutral-800 text-white">
              <span className="mr-2">←</span> Home
            </Button>
          </Link>
          <Link href="/about">
            <Button className="text-lg font-semibold bg-neutral-900 hover:bg-neutral-800 text-white">
              About Me <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-white/80">
            My Portfolio
          </h1>
          <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Showcasing my creative work and professional projects. Each piece represents my dedication to excellence and
            attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PortfolioLayout>
  )
}

