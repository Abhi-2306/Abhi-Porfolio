import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import JsonLd from "@/components/JsonLd";
import { metaDescription } from "@/data/content";

const inter = Inter({ subsets: ["latin"] });

const SITE_TITLE = "Abhijith Pandiri | Full-Stack & Applied AI Engineer";

export const metadata = {
  metadataBase: new URL("https://abhi-porfolio-zeta.vercel.app"),
  title: {
    default: SITE_TITLE,
    template: "%s | Abhijith Pandiri",
  },
  description: metaDescription,
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
    "Agentic Finance Assistant",
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
    "internship 2027",
  ],
  authors: [{ name: "Abhijith Pandiri", url: "https://abhi-porfolio-zeta.vercel.app" }],
  creator: "Abhijith Pandiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhi-porfolio-zeta.vercel.app",
    title: SITE_TITLE,
    description: metaDescription,
    siteName: "Abhijith Pandiri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: metaDescription,
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