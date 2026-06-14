import HomeClient from "./HomeClient";

export const metadata = {
  title: "Abhijith Pandiri — Full-Stack & AI Engineer",
  description:
    "Full-Stack & AI Engineer. MS Computer Science at Northeastern University (4.0 GPA). Production fintech apps, RAG pipelines, and multi-agent systems. 1st place at SundAI × W&B Multi-Agent Hackathon at MIT. Open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. F-1 (CPT/OPT eligible).",
  openGraph: {
    title: "Abhijith Pandiri — Full-Stack & AI Engineer",
    description:
      "Full-Stack & AI Engineer. MS CS at Northeastern (4.0 GPA). 1st place at MIT hackathon. Open to Summer/Fall 2026 internships.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
