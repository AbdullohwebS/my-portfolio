"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-neutral-700 shadow-md">
          <Image
            src="/eyyoBro.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">Nurmukhammedov Abdulloh</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-center">
          Full Stack Developer & UI/UX Designer
        </p>

        <div className="w-full mb-6">
          <Button className="w-full mb-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>

          <div className="flex justify-center space-x-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-semibold mb-3 text-lg">Personal Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Location:
              </span>
              <span className="font-medium">Uzbekistan Andion, Izboskan</span>
            </li>
            <li className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Experience:
              </span>
              <span className="font-medium">3+ Years</span>
            </li>
            <li className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Languages:
              </span>
              <span className="font-medium">English, Uzbek</span>
            </li>
            <li className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Availability:
              </span>
              <span className="font-medium">Full-time</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
