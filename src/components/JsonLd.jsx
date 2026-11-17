import { availability, award, faq, metaDescription, projects } from "@/data/content";

const BASE = "https://abhi-porfolio-zeta.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhijith Pandiri",
  url: BASE,
  email: "pandiri.a@northeastern.edu",
  jobTitle: "Full-Stack & Applied AI Engineer",
  description: `${metaDescription} ${availability}`,
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
  award: `${award.title}, ${award.date}`,
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
    "Portfolio of Abhijith Pandiri, Full-Stack & Applied AI Engineer, MS CS at Northeastern University.",
};

const toApp = (p, applicationCategory) => ({
  "@type": "SoftwareApplication",
  name: p.title,
  description: p.desc,
  url: p.demo || p.github,
  applicationCategory,
  programmingLanguage: p.stack,
});

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects by Abhijith Pandiri",
  itemListElement: [
    toApp(projects.aiSplit, "FinanceApplication"),
    toApp(projects.financeAssistant, "DeveloperApplication"),
    {
      "@type": "SoftwareApplication",
      name: "Trust Agentic Commerce",
      description:
        "1st place out of 80+ teams at the SundAI × W&B Multi-Agent Hackathon at The Engine, MIT (Boston Tech Week, May 2026). Multi-agent security system with 4 isolated security sub-agents and structured verdict aggregation.",
      url: "https://github.com/ColeLeng/trust-agentic-commerce",
      applicationCategory: "BusinessApplication",
      programmingLanguage: ["Python"],
    },
    toApp(projects.docQuery, "DeveloperApplication"),
    toApp(projects.kambaz, "EducationalApplication"),
  ].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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
