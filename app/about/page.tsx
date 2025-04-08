import { Button } from "@/components/ui/button"
import Link from "next/link"
import AboutLayout from "@/components/about/about-layout"
import ProfileSection from "@/components/about/profile-section"
import SkillsSection from "@/components/about/skills-section"
import ExperienceSection from "@/components/about/experience-section"

export default function About() {
  return (
    <AboutLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex space-x-4 mb-8">
            <Link href="/">
              <Button variant="outline" className="rounded-full px-6 py-2 text-sm">
                <span className="mr-2">←</span> Home
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="rounded-full px-6 py-2 text-sm">
                <span className="mr-2">←</span> Portfolio
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-white/80">
            About Me
          </h1>
          <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Get to know me better - my skills, experience, and what drives my passion for creating exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <ProfileSection />
          <div className="lg:col-span-2 space-y-12">
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}

