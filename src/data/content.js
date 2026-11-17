// Single source of truth for site content.
// Used by the Home, About, Portfolio and Contact pages, page metadata, and JSON-LD.

export const availability =
  "Open to Summer 2027 internships and full-time new-grad roles in 2027.";

export const metaDescription =
  "Abhijith, MS CS at Northeastern, Boston. Full-Stack & Applied AI Engineer. Software Engineer Intern at Badge Six and Research Assistant with Prof. Gilbert Nyaga.";

export const hero = {
  name: "Abhijith",
  title: "Full-Stack & Applied AI Engineer | MS CS @ Northeastern, Boston",
  subtitle: "Software Engineer Intern at Badge Six · Research Assistant with Prof. Gilbert Nyaga",
};

export const about =
  "I'm an MS Computer Science student at Northeastern's Khoury College in Boston (4.0 GPA) who builds full-stack and applied AI systems. I'm currently a Software Engineer Intern at Badge Six, a GovTech compliance platform for law enforcement, where I ship features and fix production issues across React, NestJS, MongoDB, and AWS, and I built an agentic Claude Code workflow that automates investigation, review, and browser testing. I'm also a Research Assistant with Prof. Gilbert Nyaga, analyzing how ownership affects nursing home quality using CMS data. I like owning problems end to end, from debugging production systems to designing pipelines that hold up under real data.";

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "Badge Six, LLC",
    location: "Remote",
    dates: "Jul 2026 to Dec 2026",
    tech: "React, Redux, NestJS, MongoDB, AWS (S3, Bedrock), Puppeteer, Playwright, Claude Code",
    bullets: [
      "Resolved long-standing production bugs, including PDF exports broken for months and a report timeout cut from 60 s to 69 ms.",
      "Built a bulk .zip folder import with a matching engine that hit 100% match on every live manual, backed by an S3 multipart upload pipeline.",
      "Shipped policy search with ranking and snippets, assessment due dates and review cycles, and PDF export for PowerDMS.",
      "Fixed security gaps where the users API trusted client-sent agency IDs, preventing cross-agency data access.",
      "Built an agentic Claude Code workflow with custom skills, subagents for investigation, code review, and Playwright browser verification, and hooks that enforce review and testing before every PR.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Northeastern University (Prof. Gilbert Nyaga)",
    location: "Boston, MA",
    dates: "Sep 2026 to Present",
    tech: "Python, pandas, statsmodels, SQL",
    bullets: [
      "Built a 26 GB data pipeline across 16 CMS and state data sources, producing a nursing home panel matching all ~44,600 facility-years in the professor's dataset.",
      "Found and fixed source data errors, including county mismatches affecting ~17% of facilities, and showed ownership labels overstated sales about 5x.",
      "Ran regression, difference-in-differences, and robustness analyses on how for-profit and chain ownership affect nursing home quality, supporting a journal submission.",
      "Linked California state data to CMS records for 98 to 99% of facilities.",
    ],
  },
  {
    role: "Teaching Assistant, DS 3000 Foundations of Data Science",
    org: "Northeastern University",
    location: "Boston, MA",
    dates: "Summer 2026",
    tech: null,
    bullets: [
      "Held 3 hours of weekly office hours, built grading rubrics from instructor solutions, and graded exams with the course professor.",
    ],
  },
];

// Projects from the current content. Links are carried over from the existing site.
export const projects = {
  aiSplit: {
    title: "AI Split",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Groq LLaMA"],
    desc: "Production fintech PWA for splitting receipts, used by live users. AI parses receipts and users assign items. Built a local-first save engine with debounced, coalesced writes and resolved a race condition in the save path.",
    github: "https://github.com/Abhi-2306/AI-SPLIT",
    demo: "https://ai-split-theta.vercel.app",
  },
  financeAssistant: {
    title: "Agentic Finance Assistant",
    stack: ["TypeScript", "Bun", "MCP", "LangGraph", "W&B Weave"],
    desc: "MCP server exposing 6 financial tools to an LLM agent, with Zod validation, TTL caching with single-flight coalescing, concurrency limiting, and retry with backoff. Benchmarked three models; Llama 4 Scout hit 100% accuracy at less than half the latency of the alternatives.",
    github: "https://github.com/Abhi-2306/fin-mcp",
    demo: null,
  },
  docQuery: {
    title: "DocQuery",
    stack: ["FastAPI", "Next.js", "DistilBERT", "RAG"],
    desc: "Document question-answering system combining a RAG pipeline with a fine-tuned DistilBERT model, reaching 82.88% F1 on SQuAD at 80 ms latency.",
    github: "https://github.com/Abhi-2306/docquery",
    demo: null,
  },
  kambaz: {
    title: "Kambaz LMS",
    stack: ["Node.js", "MongoDB", "Docker", "AWS"],
    desc: "Canvas-style learning management system, with compound indexes reducing latency on high-traffic paths.",
    github: "https://github.com/Abhi-2306/fa25-kambaz-next-js",
    demo: "https://fa25-kambaz-next-js-git-project-abhijiths-projects-7705a139.vercel.app",
  },
};

export const award = {
  title: "1st Place, SundAI × Weights & Biases Hackathon (WeaveHacks) at MIT",
  date: "May 2026",
  desc: "Out of 80+ teams. Built a multi-agent trust layer for autonomous AI shopping agents; owned the blue-team scout agent running isolated security sub-agents per seller.",
};

export const education = [
  {
    school: "Northeastern University, Khoury College of Computer Sciences",
    location: "Boston, MA",
    degree: "MS in Computer Science | GPA 4.0 | Expected December 2027",
    // Pre-existing site content, kept.
    coursework: "Algorithms (CS 5800), NLP (CS 6120), Web Dev (CS 5610), Program Design (CS 5010)",
  },
  {
    school: "CVR College of Engineering",
    location: "Hyderabad, India",
    degree: "BTech in Computer Science and Engineering | GPA 8.9/10.0",
    coursework: null,
  },
];

export const leadership = {
  role: "Secretary, Computer Society of India Chapter, CVR College of Engineering",
  desc: "Led a 17-member committee engaging 500+ students; ran the Ciencia2k24 festival with 8 workshops.",
};

export const skills = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "R"] },
  { label: "Frontend", items: ["React", "Next.js", "Redux"] },
  { label: "Backend", items: ["Node.js", "NestJS", "FastAPI", "Bun"] },
  {
    label: "Data & DBs",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "pandas", "statsmodels"],
  },
  {
    label: "AI",
    items: ["LLMs", "RAG", "MCP", "LangGraph", "agentic systems", "Claude Code", "W&B Weave"],
  },
  {
    label: "Cloud & Tools",
    items: ["AWS (S3, Bedrock)", "Docker", "Playwright", "Puppeteer", "Git"],
  },
];

// Pre-existing FAQ, shared by the About page and JSON-LD. Availability answer updated.
export const faq = [
  {
    q: "Is Abhijith authorized to work in the United States?",
    a: "Yes, eligible to work in the US via F-1 CPT/OPT for internships and co-ops.",
  },
  {
    q: "When is Abhijith available?",
    a: availability,
  },
  {
    q: "What tech stack does Abhijith specialize in?",
    a: "Full-stack and AI engineering: React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, Docker, AWS, and LLM integrations (Groq, HuggingFace, Model Context Protocol, multi-agent systems).",
  },
  {
    q: "What is Abhijith's academic background?",
    a: "MS Computer Science at Northeastern University, Boston (4.0 GPA, graduating December 2027). Previously B.Tech Computer Science at CVR College of Engineering (GPA: 8.9/10).",
  },
  {
    q: "Has Abhijith won any hackathons?",
    a: "Yes, 1st Place out of 80+ teams at the SundAI × Weights & Biases Hackathon (WeaveHacks) at MIT in May 2026.",
  },
];
