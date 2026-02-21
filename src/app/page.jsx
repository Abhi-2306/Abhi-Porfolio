"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image */}
        <div className="h-1/2 lg:w-1/2 lg:h-full relative">
          <Image src="/hero.png" fill className="object-contain" alt="Abhijith Pandiri" />
        </div>

        {/* Text */}
        <div className="h-1/2 flex flex-col gap-4 lg:gap-6 lg:w-1/2 lg:h-full items-center justify-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              CS Master&apos;s Student & <br />
              Aspiring Software Engineer
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Northeastern University • Boston, MA • 4.0 GPA
            </p>
          </div>

          <p className="text-sm md:text-base text-center lg:text-left">
            Hi, I&apos;m Abhijith. I&apos;m a full-stack web developer passionate about creating
            beautiful, functional websites. I love building scalable applications and solving
            complex problems through clean code.
          </p>

          <div className="flex flex-wrap gap-1.5 text-xs justify-center lg:justify-start">
            <span className="bg-black text-white px-2 py-1 rounded-full">React</span>
            <span className="bg-black text-white px-2 py-1 rounded-full">Next.js</span>
            <span className="bg-black text-white px-2 py-1 rounded-full">Node.js</span>
            <span className="bg-black text-white px-2 py-1 rounded-full">MongoDB</span>
            <span className="bg-black text-white px-2 py-1 rounded-full">Python</span>
            <span className="bg-black text-white px-2 py-1 rounded-full">TensorFlow</span>
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-3 flex-wrap justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="px-4 py-2 text-sm rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm rounded-lg ring-1 ring-black hover:bg-gray-100 transition">
                Contact Me
              </button>
            </Link>
            <Link href="/resume.pdf">
              <button className="px-4 py-2 text-sm rounded-lg ring-1 ring-black hover:bg-gray-100 transition">
                Resume
              </button>
            </Link>
          </div>

          <div className="text-xs text-gray-600 text-center lg:text-left">
            <p>📧 pandiri.a@northeastern.edu</p>
            <p className="mt-0.5">🎯 Open for Summer 2026 Internships</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;