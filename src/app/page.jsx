import HomeClient from "./HomeClient";
import { metaDescription } from "@/data/content";

export const metadata = {
  title: "Abhijith Pandiri | Full-Stack & Applied AI Engineer",
  description: metaDescription,
  openGraph: {
    title: "Abhijith Pandiri | Full-Stack & Applied AI Engineer",
    description: metaDescription,
  },
};

export default function HomePage() {
  return <HomeClient />;
}
