import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://abhi-porfolio-zeta.vercel.app"),
  title: {
    default: "Abhijith Pandiri — Full-Stack & AI Engineer",
    template: "%s | Abhijith Pandiri",
  },
  description:
    "Full-Stack & AI Engineer. MS Computer Science at Northeastern University (4.0 GPA). Built production fintech apps, RAG pipelines, and multi-agent systems. 1st place at SundAI × W&B Multi-Agent Hackathon at MIT. Open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. F-1 (CPT/OPT eligible).",
  keywords: [
    "Abhijith Pandiri",
    "Full-Stack Engineer",
    "AI Engineer",
    "Software Engineer",
    "Northeastern University",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Docker",
    "AWS",
    "AI Split",
    "MCP Finance Server",
    "Model Context Protocol",
    "Trust Agentic Commerce",
    "DocQuery",
    "Kambaz LMS",
    "LLM",
    "RAG",
    "Multi-Agent",
    "HuggingFace",
    "Supabase",
    "CPT OPT",
    "F-1 visa",
    "internship 2026",
  ],
  authors: [{ name: "Abhijith Pandiri", url: "https://abhi-porfolio-zeta.vercel.app" }],
  creator: "Abhijith Pandiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhi-porfolio-zeta.vercel.app",
    title: "Abhijith Pandiri — Full-Stack & AI Engineer",
    description:
      "Full-Stack & AI Engineer. MS CS at Northeastern (4.0 GPA). Production fintech, RAG, and multi-agent systems. 1st place at MIT hackathon. Open to Summer/Fall 2026 internships.",
    siteName: "Abhijith Pandiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith Pandiri — Full-Stack & AI Engineer",
    description:
      "Full-Stack & AI Engineer. MS CS at Northeastern (4.0 GPA). Production fintech, RAG, and multi-agent systems. 1st place at MIT hackathon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}