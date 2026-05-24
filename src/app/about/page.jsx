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
              I&apos;m an MS Computer Science student at Northeastern University&apos;s Khoury College
              (4.0 GPA, graduating June 2027), focused on full-stack development, backend systems,
              and AI/ML engineering.
            </p>
            <p className="text-sm">
              I build production-ready applications — from fintech apps with LLM-powered receipt parsing
              to RAG-based document QA systems with fine-tuned transformer models. I enjoy working across
              the stack: React/Next.js frontends, FastAPI/Node.js backends, and PostgreSQL/Supabase data layers.
              I&apos;m always looking for problems where clean engineering and AI can make a real difference.
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
                <div className="font-semibold text-sm mb-1">Languages</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Python</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">TypeScript</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">JavaScript</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Java</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">C</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">C++</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">SQL</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">AI / ML</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Groq API</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">RAG Pipelines</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">HuggingFace</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Fine-tuning</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">scikit-learn</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">PyTorch</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Prompt Engineering</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Web & Backend</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">React</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Next.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">FastAPI</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Node.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Express.js</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Redux</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">RESTful APIs</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Databases & Cloud</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">PostgreSQL</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">MongoDB</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">MySQL</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Supabase</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">AWS</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Tools & DevOps</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Git</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Docker</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">CI/CD</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Nginx</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">PM2</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Turborepo</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Prisma</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Linux</span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm mb-1">Testing</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Vitest</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">Jest</span>
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">JUnit</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CERTIFICATIONS SECTION */}
          <section className="pt-4">
            <h2 className="font-bold text-xl mb-3">Certifications</h2>
            <ul className="space-y-1 text-xs">
              <li>📜 Meta Front-End Developer Professional Certificate</li>
              <li>📜 Node.js – Master the Fundamentals</li>
              <li>📜 Full-Stack Web Development (Udemy)</li>
            </ul>
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
                  <div className="font-semibold text-base">AI Split</div>
                  <a href="https://github.com/Abhi-2306/AI-SPLIT" className="text-xs underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                  <li>Production fintech app with Google OAuth, debt graph, group billing, and PWA offline support</li>
                  <li>AI Smart Split: photograph a receipt → Groq LLaMA 4 Scout extracts items → LLaMA 3.3 70B auto-allocates costs</li>
                  <li>Clean Architecture with 12 use cases; all LLM output validated via Zod before any DB write</li>
                </ul>
              </div>

              <div className="border-l-4 border-black pl-3 py-2">
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-base">Kambaz LMS</div>
                  <a href="https://github.com/Abhi-2306/fa25-kambaz-next-js" className="text-xs underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                  <li>Full-stack Canvas-like LMS supporting 500+ users with 30+ RESTful API endpoints</li>
                  <li>Compound MongoDB indexes reduced latency by 60%; Dockerized and deployed to AWS via GitHub Actions</li>
                </ul>
              </div>

              <div className="text-xs mt-2">
                <Link href="/portfolio" className="underline">View all 8 projects →</Link>
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
              className="space-y-4"
            >
              <div>
                <div className="font-semibold text-base">Teaching Assistant — DS 3000: Foundations of Data Science</div>
                <div className="text-xs italic">Northeastern University • Summer 2026 – Present</div>
              </div>

              <div>
                <div className="font-semibold text-base">Secretary & Lead Developer</div>
                <div className="text-xs italic">Computer Society of India • Jul 2023 - Oct 2024</div>
                <ul className="list-disc ml-4 mt-1 text-xs space-y-0.5">
                  <li>Coordinated 17-member technical team managing platforms for 500+ students</li>
                  <li>Built full-stack applications using MERN stack for event management</li>
                  <li>Increased engagement by 40% through automated notification systems</li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* EDUCATION SECTION */}
          <section className="pt-4">
            <h2 className="font-bold text-xl mb-3">Education</h2>
            <div className="space-y-2">
              <div>
                <div className="font-semibold text-sm">Northeastern University — MS Computer Science</div>
                <div className="text-xs italic">Khoury College • Boston, MA • Aug 2025 – Jun 2027 • GPA: 4.0/4.0</div>
                <div className="text-xs mt-0.5">Coursework: Algorithms (CS 5800), Natural Language Processing (CS 6120),
                  Program Design Paradigm (CS 5010), Web Development (CS 5610)
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm">CVR College of Engineering — B.Tech Computer Science & Engineering</div>
                <div className="text-xs italic">Hyderabad, India • 2021 – 2025 • GPA: 8.9/10</div>
              </div>
            </div>
          </section>

          {/* WHAT I'M LOOKING FOR SECTION */}
          <section className="pt-4 pb-24">
            <h2 className="font-bold text-xl mb-2">What I&apos;m Looking For</h2>
            <p className="text-xs mb-2">Summer &amp; Fall 2026 SWE internship / co-op where I can:</p>
            <ul className="list-none space-y-1 ml-2 text-xs">
              <li>✓ Build production systems with React/Next.js/FastAPI/Node.js</li>
              <li>✓ Apply AI/ML and LLM integration to solve real problems</li>
              <li>✓ Work on data engineering and backend systems at scale</li>
              <li>✓ Collaborate with talented engineering teams</li>
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