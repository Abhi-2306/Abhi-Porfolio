import AboutClient from "./AboutClient";
import { availability, metaDescription } from "@/data/content";

export const metadata = {
  title: "About",
  description: `${metaDescription} Skills, projects, experience, and education. ${availability}`,
  openGraph: {
    title: "About | Abhijith Pandiri",
    description: metaDescription,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
