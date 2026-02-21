import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhijith Pandiri - Software Engineer & CS Graduate Student",
  description: "First-year MS CS student at Northeastern University specializing in full-stack development and machine learning. Building scalable applications with React, Next.js, and Python. Seeking Summer 2026 software engineering internships.",
  keywords: [
    "Abhijith Pandiri",
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Northeastern University",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "NLP",
    "Computer Science"
  ],
  authors: [{ name: "Abhijith Pandiri" }],
  creator: "Abhijith Pandiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhi-porfolio-zeta.vercel.app",
    title: "Abhijith Pandiri - Software Engineer & CS Graduate Student",
    description: "Full-stack developer and ML enthusiast at Northeastern University. Specializing in React, Next.js, and Python.",
    siteName: "Abhijith Pandiri Portfolio",
    images: [
      {
        url: "/og-image.png", // Add this image to your /public folder
        width: 1200,
        height: 630,
        alt: "Abhijith Pandiri - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijith Pandiri - Software Engineer",
    description: "Full-stack developer and ML enthusiast at Northeastern University",
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}