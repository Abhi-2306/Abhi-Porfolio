import ContactClient from "./ContactClient";
import { availability } from "@/data/content";

export const metadata = {
  title: "Contact",
  description: `Get in touch with Abhijith Pandiri. ${availability} pandiri.a@northeastern.edu`,
  openGraph: {
    title: "Contact | Abhijith Pandiri",
    description: `Get in touch. ${availability}`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
