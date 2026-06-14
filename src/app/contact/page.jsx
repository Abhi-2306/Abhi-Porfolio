import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhijith Pandiri. Open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. F-1 (CPT/OPT eligible). pandiri.a@northeastern.edu",
  openGraph: {
    title: "Contact | Abhijith Pandiri",
    description:
      "Get in touch — open to Summer/Fall 2026 internships and Spring/Summer 2027 co-op. F-1 (CPT/OPT eligible).",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
