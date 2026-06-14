import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description:
    "Learn about Abhijith Pandiri — Full-Stack & AI Engineer, MS CS at Northeastern University (4.0 GPA). Skills, projects, experience, education, and availability for Summer/Fall 2026 internships.",
  openGraph: {
    title: "About | Abhijith Pandiri",
    description:
      "Full-Stack & AI Engineer. MS CS at Northeastern (4.0 GPA). Open to Summer/Fall 2026 internships. F-1 (CPT/OPT eligible).",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
