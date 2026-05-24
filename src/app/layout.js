import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhijith Pandiri - Software Engineer & MS CS Student",
  description: "MS CS student at Northeastern University (GPA 4.0) specializing in full-stack development, backend systems, and AI/ML. Built production apps with Next.js, Python, and LLM integration. Seeking Summer & Fall 2026 SWE internship/co-op.",
  keywords: [
    "Abhijith Pandiri",
    "Software Engineer",
    "Full Stack Developer",
    "Northeastern University",
    "React Developer",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Docker",
    "AWS",
    "AI Split",
    "DocQuery",
    "Kambaz LMS",
    "LLM integration",
    "RAG",
    "HuggingFace",
    "Supabase",
    "Computer Science"
  ],
  authors: [{ name: "Abhijith Pandiri" }],
  creator: "Abhijith Pandiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhi-porfolio-zeta.vercel.app",
    title: "Abhijith Pandiri - Software Engineer & MS CS Student",
    description: "MS CS student at Northeastern University (GPA 4.0) specializing in full-stack development, backend systems, and AI/ML. Built production apps with Next.js, Python, and LLM integration. Seeking Summer & Fall 2026 SWE internship/co-op.",
    siteName: "Abhijith Pandiri Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhijith Pandiri - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith Pandiri - Software Engineer",
    description: "MS CS student at Northeastern University (GPA 4.0) specializing in full-stack development, backend systems, and AI/ML. Built production apps with Next.js, Python, and LLM integration. Seeking Summer & Fall 2026 SWE internship/co-op.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}