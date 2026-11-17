"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { availability, award, hero, projects } from "@/data/content";

const fromContent = (p) => ({ ...p, tags: p.stack, badge: null });

const PROJECTS = [
  fromContent(projects.aiSplit),
  fromContent(projects.financeAssistant),
  {
    title: "Trust Agentic Commerce",
    desc: "Multi-agent security system with 4 isolated sub-agents and structured verdict aggregation. Built with Python, LLMs, and W&B Weave.",
    tags: ["Python", "Multi-Agent", "W&B Weave"],
    github: "https://github.com/ColeLeng/trust-agentic-commerce",
    demo: null,
    badge: "🏆 1st / 80+ teams",
  },
  fromContent(projects.docQuery),
  fromContent(projects.kambaz),
];

export default function HomeClient() {
  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* HERO */}
      <section className="min-h-screen flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-64 lg:h-auto lg:w-1/2 relative shrink-0">
          <Image src="/hero.png" fill className="object-contain" alt="Abhijith Pandiri" />
        </div>

        <div className="flex flex-col gap-4 lg:gap-5 lg:w-1/2 items-center justify-center py-8 lg:py-0">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {hero.name}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              {hero.title}
            </p>
          </div>

          <p className="text-sm md:text-base text-center lg:text-left leading-relaxed text-gray-700">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 text-xs justify-center lg:justify-start">
            {["React", "Next.js", "TypeScript", "Python", "FastAPI", "LLMs", "Agentic AI", "MCP", "RAG", "PostgreSQL", "Docker"].map((t) => (
              <span key={t} className="bg-black text-white px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>

          <div className="w-full flex gap-3 flex-wrap justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="px-4 py-2 text-sm rounded-lg bg-black text-white hover:bg-gray-800 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm rounded-lg ring-1 ring-black hover:bg-gray-100 transition">
                Contact Me
              </button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 text-sm rounded-lg ring-1 ring-black hover:bg-gray-100 transition">
                Resume
              </button>
            </a>
          </div>

          <div className="text-xs text-gray-500 text-center lg:text-left leading-relaxed">
            <p>📧 pandiri.a@northeastern.edu</p>
            <p className="mt-0.5">{availability}</p>
          </div>
        </div>
      </section>

      {/* HACKATHON WIN BANNER */}
      <section className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="text-5xl sm:text-6xl shrink-0">🏆</div>
          <div>
            <div className="text-xs text-yellow-400 uppercase tracking-widest mb-1 font-semibold">
              Hackathon Win
            </div>
            <div className="text-xl sm:text-2xl font-bold leading-snug">
              {award.title}
            </div>
            <div className="text-gray-300 text-sm mt-1">
              {award.date}
            </div>
            <div className="text-gray-400 text-xs mt-2">
              {award.desc}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Work</h2>
            <Link href="/portfolio" className="text-sm text-gray-500 underline">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((p) => (
              <div key={p.title} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base leading-tight">{p.title}</h3>
                  {p.badge && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-semibold shrink-0">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Open to opportunities</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          {availability}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition">
              Get in Touch
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 border-2 border-black rounded-full font-semibold text-sm hover:bg-gray-100 transition">
              About Me
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
