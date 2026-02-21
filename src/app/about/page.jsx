"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const projectRef = useRef();
  const isProjectRefInView = useInView(projectRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col gap-8 lg:w-2/3 xl:w-1/2">
          {/* ABOUT ME SECTION */}
          <section className="space-y-3">
            <h1 className="font-bold text-2xl">About Me</h1>
            <p className="text-sm">
              I&apos;m a first-year Master&apos;s student in Computer Science at Northeastern
              University&apos;s Khoury College (4.0 GPA, graduating June 2027),
              specializing in full-stack development and machine learning applications.
            </p>
            <p className="text-sm">
              My recent work includes building Kambaz, a full-featured learning management
              system using Next.js and MongoDB, and developing NLP models for sentiment analysis
              that achieved 95.4% accuracy. I&apos;m passionate about creating scalable applications
              that bridge full-stack development with machine learning.
            </p>
            <div className="flex gap-2 flex-wrap">
              <a href="/resume.pdf" className="px-3 py-1.5 text-sm bg-black text-white rounded hover:bg-gray-800 transition">
                Download Resume
              </a>
              <a href="/contact" className="px-3 py-1.5 text-sm border border-black rounded hover:bg-gray-100 transition">
                Contact Me
              </a>
            </div>
          </section>

          {/* TECHNICAL SKILLS SECTION */}
          <section ref={skillRef} className="pt-4">
            <motion.h2
              initial={{ x: -200 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="font-bold text-xl mb-3"
            >
              Technical Skills
            </motion.h2>

            <motion.div
              initial={{ x: -200 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div>
                <div className="font-semibold text-sm mb-1">Frontend</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">React.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Next.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Redux</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Tailwind</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Backend</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Node.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Express.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">MongoDB</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">PostgreSQL</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Languages</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">JavaScript/TypeScript</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Python</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Java</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">ML & AI</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">TensorFlow</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">NLP</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">scikit-learn</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Tools</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Git</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">AWS</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Vercel</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Docker</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Testing</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">JUnit</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Jest</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">JaCoCo</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* FEATURED PROJECTS SECTION */}
          <section ref={projectRef} className="pt-4">
            <motion.h2
              initial={{ x: -200 }}
              animate={isProjectRefInView ? { x: 0 } : {}}
              className="font-bold text-xl mb-3"
            >
              Featured Projects
            </motion.h2>

            <motion.div
              initial={{ x: -200 }}
              animate={isProjectRefInView ? { x: 0 } : {}}
              className="space-y-4"
            >
              <div className="border-l-4 border-black pl-3 py-2">
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-base">Kambaz LMS</div>
                  <a href="https://github.com/abhi-2306/kambaz" className="text-xs underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                  <li>Canvas-like LMS with course management, assignments, grading (Next.js, MongoDB)</li>
                  <li>Role-based auth, real-time updates, deployed on Vercel</li>
                </ul>
              </div>

              <div className="border-l-4 border-black pl-3 py-2">
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-base">Sentiment Analysis Model</div>
                  <a href="https://github.com/abhi-2306/sentiment-analysis" className="text-xs underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                  <li>95.4% accuracy NLP model using TensorFlow and Word2Vec embeddings</li>
                  <li>Part of CS 6120 coursework at Northeastern University</li>
                </ul>
              </div>

              <div className="text-xs mt-2">
                <Link href="/portfolio" className="underline">View all 6 projects →</Link>
              </div>
            </motion.div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section ref={experienceRef} className="pt-4">
            <motion.h2
              initial={{ x: -200 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-xl mb-3"
            >
              Experience
            </motion.h2>

            <motion.div
              initial={{ x: -200 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              <div className="font-semibold text-base">Secretary & Lead Developer</div>
              <div className="text-xs italic">Computer Society of India • Jan 2024 - Present</div>
              <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                <li>Coordinate 17-member team managing platforms for 500+ students</li>
                <li>Built full-stack apps using MERN for event management</li>
                <li>Increased engagement 40% via automated notification systems</li>
              </ul>
            </motion.div>
          </section>

          {/* EDUCATION SECTION */}
          <section className="pt-4">
            <h2 className="font-bold text-xl mb-3">Education</h2>
            <div className="space-y-2">
              <div>
                <div className="font-semibold text-sm">Northeastern University — MS Computer Science</div>
                <div className="text-xs italic">Boston, MA • Sep 2025 - Jun 2027 • GPA: 4.0/4.0</div>
                <div className="text-xs mt-0.5">Coursework: Algorithms, NLP</div>
              </div>

              <div>
                <div className="font-semibold text-sm">CVR College — B.Tech CSE</div>
                <div className="text-xs italic">2021 - 2025 • GPA: 9.03/10.0</div>
              </div>
            </div>
          </section>

          {/* WHAT I'M LOOKING FOR SECTION */}
          <section className="pt-4 pb-24">
            <h2 className="font-bold text-xl mb-2">What I&apos;m Looking For</h2>
            <p className="text-xs mb-2">Summer 2026 SWE internships where I can:</p>
            <ul className="list-none space-y-1 ml-2 text-xs">
              <li>✓ Build production systems with React/Next.js/Node.js</li>
              <li>✓ Apply ML/NLP to solve real problems</li>
              <li>✓ Work with talented engineering teams</li>
            </ul>
            <p className="text-xs mt-3">📧 pandiri.a@northeastern.edu | 📍 Boston, MA</p>
          </section>
        </div>

        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;