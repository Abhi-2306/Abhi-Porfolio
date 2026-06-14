const BASE = "https://abhi-porfolio-zeta.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhijith Pandiri",
  url: BASE,
  email: "pandiri.a@northeastern.edu",
  jobTitle: "Full-Stack & AI Engineer",
  description:
    "MS Computer Science student at Northeastern University (4.0 GPA) specializing in full-stack development and AI engineering. Open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. F-1 visa (CPT/OPT eligible).",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
      url: "https://www.northeastern.edu",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "CVR College of Engineering",
    },
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Multi-Agent Systems",
  ],
  award:
    "1st Place / 80+ teams — SundAI × W&B Multi-Agent Hackathon, The Engine at MIT, Boston Tech Week, May 2026",
  sameAs: [
    "https://github.com/Abhi-2306",
    "https://www.linkedin.com/in/abhijith-pandiri-7a0350273/",
    "https://leetcode.com/Abhijith23/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abhijith Pandiri Portfolio",
  url: BASE,
  description:
    "Portfolio of Abhijith Pandiri — Full-Stack & AI Engineer, MS CS at Northeastern University.",
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects by Abhijith Pandiri",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "AI Split",
        description:
          "Production fintech PWA with live users: Google OAuth, friends/debt graph, settle-up payments, group billing, bill templates, and PWA with offline support. AI Smart Split agent photographs a receipt — Groq LLaMA 4 Scout extracts line items, LLaMA 3.3 70B auto-allocates costs per person. 95%+ receipt line-item parsing accuracy.",
        url: "https://ai-split-theta.vercel.app",
        applicationCategory: "FinanceApplication",
        programmingLanguage: ["TypeScript", "Next.js", "Python"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "MCP Finance Server",
        description:
          "Model Context Protocol server exposing 6 financial-data tools to LLM clients over stdio transport. Layered provider architecture with caching and retry/backoff resilience. 30 unit tests and an 18-case eval harness.",
        url: "https://github.com/Abhi-2306/fin-mcp",
        applicationCategory: "DeveloperApplication",
        programmingLanguage: ["TypeScript", "Bun"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Trust Agentic Commerce",
        description:
          "1st place out of 80+ teams at the SundAI × W&B Multi-Agent Hackathon at The Engine, MIT (Boston Tech Week, May 2026). Multi-agent security system with 4 isolated security sub-agents and structured verdict aggregation.",
        url: "https://github.com/ColeLeng/trust-agentic-commerce",
        applicationCategory: "BusinessApplication",
        programmingLanguage: ["Python"],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "DocQuery",
        description:
          "End-to-end RAG-based document QA system fine-tuned on SQuAD 1.1. Achieves 82.88% F1 and 97.30% BERTScore at 80ms latency. Evaluated on 5,000 SQuAD validation examples.",
        url: "https://github.com/Abhi-2306/docquery",
        applicationCategory: "DeveloperApplication",
        programmingLanguage: ["Python", "FastAPI", "Next.js"],
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "Kambaz LMS",
        description:
          "Full-stack Canvas-like LMS with 30+ RESTful API endpoints for courses, assignments, enrollment, and grade management. Compound MongoDB indexes on highest-traffic query paths cut latency by 60%. Dockerized and deployed to AWS with CI/CD via GitHub Actions.",
        url: "https://fa25-kambaz-next-js-git-project-abhijiths-projects-7705a139.vercel.app",
        applicationCategory: "EducationalApplication",
        programmingLanguage: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Abhijith Pandiri authorized to work in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — eligible to work in the US via F-1 CPT/OPT for internships and co-ops.",
      },
    },
    {
      "@type": "Question",
      name: "When is Abhijith Pandiri available for internships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. Graduating 2027. Open to relocation anywhere in the US.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack does Abhijith Pandiri specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-stack and AI engineering: React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, Docker, AWS, and LLM integrations (Groq, HuggingFace, Model Context Protocol, multi-agent systems).",
      },
    },
    {
      "@type": "Question",
      name: "What is Abhijith Pandiri's academic background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MS Computer Science at Northeastern University (4.0 GPA, graduating 2027). Previously BE Computer Science at CVR College of Engineering.",
      },
    },
    {
      "@type": "Question",
      name: "Has Abhijith Pandiri won any hackathons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 1st Place out of 80+ teams at the SundAI × W&B Multi-Agent Hackathon at The Engine, MIT during Boston Tech Week in May 2026.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
