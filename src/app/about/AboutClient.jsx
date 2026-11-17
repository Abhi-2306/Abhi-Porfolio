"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  about,
  availability,
  award,
  education,
  experience,
  faq,
  hero,
  leadership,
  projects,
  skills,
} from "@/data/content";

const FEATURED_PROJECTS = [
  projects.aiSplit,
  projects.financeAssistant,
  {
    title: "Trust Agentic Commerce",
    github: "https://github.com/ColeLeng/trust-agentic-commerce",
    badge: "🏆 1st / 80+ teams",
    bullets: [
      "Multi-agent security system with 4 isolated security sub-agents and structured verdict aggregation",
      "Built with Python, LLMs, and W&B Weave observability · SundAI × W&B Hackathon at MIT, May 2026",
    ],
  },
  projects.docQuery,
  projects.kambaz,
];

export default function AboutClient() {
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px", once: true });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px", once: true });

  const projectRef = useRef();
  const isProjectRefInView = useInView(projectRef, { margin: "-100px", once: true });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px", once: true });

  const faqRef = useRef();
  const isFaqRefInView = useInView(faqRef, { margin: "-100px", once: true });

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
                {availability}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{hero.name}</h1>
              <p className="text-gray-500 text-sm">{hero.title}</p>
              <p className="text-gray-500 text-sm">{hero.subtitle}</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href="/resume.pdf"
                className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Resume
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm border border-black rounded-lg hover:bg-gray-100 transition"
              >
                Contact
              </Link>
            </div>
          </div>
          <p className="mt-4 text-gray-700 max-w-2xl text-sm leading-relaxed">{about}</p>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* AWARD: full width, first card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-black text-white rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="text-5xl shrink-0">🏆</div>
              <div>
                <div className="text-xs text-yellow-400 uppercase tracking-widest mb-1 font-semibold">
                  Hackathon Win · {award.date}
                </div>
                <div className="text-xl font-bold leading-snug">{award.title}</div>
                <div className="text-gray-400 text-xs mt-2 max-w-2xl">{award.desc}</div>
              </div>
            </div>
          </motion.div>

          {/* Experience: full width */}
          <motion.div
            ref={experienceRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Experience</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              {experience.map((job) => (
                <div key={`${job.role}-${job.org}`} className="bg-gray-50 rounded-xl p-4">
                  <div className="font-semibold text-sm">{job.role}</div>
                  <div className="text-xs text-gray-500 italic">{job.org}</div>
                  <div className="text-xs text-gray-400">
                    {job.location} · {job.dates}
                  </div>
                  {job.tech && (
                    <div className="text-xs text-gray-500 mt-2">
                      <span className="font-semibold">Tech:</span> {job.tech}
                    </div>
                  )}
                  <ul className="list-disc ml-4 mt-2 text-xs text-gray-600 space-y-1">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills: spans 2 cols */}
          <motion.div
            ref={skillRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map(({ label, items }) => (
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

          {/* Quick Stats: 1 col, dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black text-white rounded-2xl p-6 flex flex-col gap-5"
          >
            <h2 className="font-bold text-lg">Quick Facts</h2>
            <div className="space-y-4 flex-1">
              {[
                { value: "4.0", label: "GPA at Northeastern, Boston" },
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

          {/* Featured Projects: spans 2 cols */}
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
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.title} className="border-l-4 border-black pl-4">
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-sm">{proj.title}</div>
                      {proj.badge && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-semibold">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <a
                      href={proj.github}
                      className="text-xs text-gray-500 underline shrink-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                  {proj.stack && (
                    <div className="text-xs text-gray-400 mt-0.5">{proj.stack.join(", ")}</div>
                  )}
                  {proj.desc && (
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{proj.desc}</p>
                  )}
                  {proj.bullets && (
                    <ul className="list-disc ml-4 mt-1.5 text-xs text-gray-600 space-y-1">
                      {proj.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership: 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isProjectRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Leadership</h2>
            <div className="font-semibold text-sm">{leadership.role}</div>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{leadership.desc}</p>
          </motion.div>

          {/* Education: spans 2 cols */}
          <motion.div
            ref={educationRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isEducationRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Education</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div key={edu.school} className="bg-gray-50 rounded-xl p-4">
                  <div className="font-semibold text-sm">{edu.school}</div>
                  <div className="text-xs text-gray-500">{edu.degree}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{edu.location}</div>
                  {edu.coursework && (
                    <div className="text-xs text-gray-500 mt-2">{edu.coursework}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications: 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isEducationRefInView ? { opacity: 1, y: 0 } : {}}
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

          {/* What I'm Looking For: full width, dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isEducationRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-black text-white rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-2">What I&apos;m Looking For</h2>
            <p className="text-gray-400 text-sm mb-4">{availability}</p>
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
              📧 pandiri.a@northeastern.edu · 📍 Boston, MA · Graduating December 2027
            </p>
          </motion.div>

          {/* FAQ: full width */}
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isFaqRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 mb-8"
          >
            <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
            <dl className="space-y-5">
              {faq.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <dt className="font-semibold text-sm text-gray-900 mb-1">{q}</dt>
                  <dd className="text-sm text-gray-600">{a}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
