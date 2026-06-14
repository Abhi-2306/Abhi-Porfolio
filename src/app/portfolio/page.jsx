import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio",
  description:
    "Portfolio of Abhijith Pandiri — 10 projects including AI Split, MCP Finance Server, Trust Agentic Commerce (1st place MIT hackathon), DocQuery (82.88% F1), and Kambaz LMS (30+ REST endpoints).",
  openGraph: {
    title: "Portfolio | Abhijith Pandiri",
    description:
      "10 projects: AI Split, MCP Finance Server, Trust Agentic Commerce (🏆 1st/80+ teams), DocQuery, Kambaz LMS, and more.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
