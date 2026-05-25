"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px", once: true });

  const projectRef = useRef();
  const isProjectRefInView = useInView(projectRef, { margin: "-100px", once: true });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px", once: true });

  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* HERO */}
        <section className="mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block" />
                Open to SWE Internship / Co-op — Summer &amp; Fall 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Abhijith Pandiri</h1>
              <p className="text-gray-500 text-sm">
                MS Computer Science @ Northeastern (4.0 GPA) · Full-Stack · AI/ML Engineering
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href="/resume.pdf"
                className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="px-4 py-2 text-sm border border-black rounded-lg hover:bg-gray-100 transition"
              >
                Contact
              </a>
            </div>
          </div>
          <p className="mt-4 text-gray-700 max-w-2xl text-sm leading-relaxed">
            I build production-ready applications — from fintech apps with LLM-powered receipt parsing
            to RAG-based document QA systems with fine-tuned transformer models. I work across the full
            stack: React/Next.js frontends, FastAPI/Node.js backends, and PostgreSQL/Supabase data layers.
          </p>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Skills — spans 2 cols */}
          <motion.div
            ref={skillRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Languages",
                  items: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "SQL"],
                },
                {
                  label: "AI / ML",
                  items: ["Groq API", "RAG Pipelines", "HuggingFace", "Fine-tuning", "scikit-learn", "PyTorch", "Prompt Engineering"],
                },
                {
                  label: "Web & Backend",
                  items: ["React", "Next.js", "FastAPI", "Node.js", "Express.js", "Redux", "RESTful APIs"],
                },
                {
                  label: "Databases & Cloud",
                  items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "AWS"],
                },
                {
                  label: "Tools & DevOps",
                  items: ["Git", "Docker", "CI/CD", "Nginx", "PM2", "Turborepo", "Prisma", "Linux"],
                },
                {
                  label: "Testing",
                  items: ["Vitest", "Jest", "JUnit"],
                },
              ].map(({ label, items }) => (
                <div key={label}>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    {label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span key={s} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats — 1 col, dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black text-white rounded-2xl p-6 flex flex-col gap-5"
          >
            <h2 className="font-bold text-lg">Quick Facts</h2>
            <div className="space-y-4 flex-1">
              {[
                { value: "4.0", label: "GPA at Northeastern" },
                { value: "8+", label: "Deployed projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold">{value}</div>
                  <div className="text-gray-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-400">📍 Boston, MA</div>
          </motion.div>

          {/* Featured Projects — spans 2 cols */}
          <motion.div
            ref={projectRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isProjectRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Featured Projects</h2>
              <Link href="/portfolio" className="text-xs text-gray-500 underline">
                View all →
              </Link>
            </div>
            <div className="space-y-5">
              <div className="border-l-4 border-black pl-4">
                <div className="flex justify-between items-start">
                  <div className="font-semibold">AI Split</div>
                  <a
                    href="https://github.com/Abhi-2306/AI-SPLIT"
                    className="text-xs text-gray-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
                <ul className="list-disc ml-4 mt-1.5 text-sm text-gray-600 space-y-1">
                  <li>Production fintech app with Google OAuth, debt graph, group billing, and PWA offline support</li>
                  <li>AI Smart Split: photograph a receipt → Groq LLaMA 4 Scout extracts items → LLaMA 3.3 70B auto-allocates costs</li>
                  <li>Clean Architecture with 12 use cases; all LLM output validated via Zod before any DB write</li>
                </ul>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="flex justify-between items-start">
                  <div className="font-semibold">Kambaz LMS</div>
                  <a
                    href="https://github.com/Abhi-2306/fa25-kambaz-next-js"
                    className="text-xs text-gray-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
                <ul className="list-disc ml-4 mt-1.5 text-sm text-gray-600 space-y-1">
                  <li>Full-stack Canvas-like LMS supporting 500+ users with 30+ RESTful API endpoints</li>
                  <li>Compound MongoDB indexes reduced latency by 60%; Dockerized and deployed to AWS via GitHub Actions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience — 1 col */}
          <motion.div
            ref={experienceRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Experience</h2>
            <div className="space-y-5">
              <div>
                <div className="font-semibold text-sm">Teaching Assistant</div>
                <div className="text-xs text-gray-500 italic">DS 3000: Foundations of Data Science</div>
                <div className="text-xs text-gray-400">Northeastern · Summer 2026 – Present</div>
              </div>
              <div>
                <div className="font-semibold text-sm">Secretary & Lead Developer</div>
                <div className="text-xs text-gray-500 italic">Computer Society of India</div>
                <div className="text-xs text-gray-400">Jul 2023 – Oct 2024</div>
                <ul className="list-disc ml-4 mt-1.5 text-xs text-gray-600 space-y-1">
                  <li>17-member team managing platforms for 500+ students</li>
                  <li>MERN stack event management apps</li>
                  <li>40% engagement increase via automation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Education</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-sm">Northeastern University</div>
                <div className="text-xs text-gray-500">MS Computer Science · Khoury College</div>
                <div className="text-xs text-gray-400 mt-0.5">Boston, MA · Aug 2025 – Jun 2027 · GPA: 4.0/4.0</div>
                <div className="text-xs text-gray-500 mt-2">
                  Algorithms (CS 5800), NLP (CS 6120), Web Dev (CS 5610), Program Design (CS 5010)
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-sm">CVR College of Engineering</div>
                <div className="text-xs text-gray-500">B.Tech Computer Science & Engineering</div>
                <div className="text-xs text-gray-400 mt-0.5">Hyderabad, India · 2021 – 2025 · GPA: 8.9/10</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications — 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Certifications</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span>📜</span>
                <span>Meta Front-End Developer Professional Certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📜</span>
                <span>Node.js – Master the Fundamentals</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📜</span>
                <span>Full-Stack Web Development (Udemy)</span>
              </li>
            </ul>
          </motion.div>

          {/* What I'm Looking For — full width, dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-black text-white rounded-2xl p-6 mb-8"
          >
            <h2 className="font-bold text-lg mb-2">What I&apos;m Looking For</h2>
            <p className="text-gray-400 text-sm mb-4">
              Summer &amp; Fall 2026 SWE internship / co-op where I can:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "Build production systems with React / Next.js / FastAPI / Node.js",
                "Apply AI/ML and LLM integration to solve real problems",
                "Work on data engineering and backend systems at scale",
                "Collaborate with talented engineering teams",
              ].map((item) => (
                <div key={item} className="bg-white/10 rounded-xl p-3 text-sm">
                  ✓ {item}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              📧 pandiri.a@northeastern.edu · 📍 Boston, MA
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
