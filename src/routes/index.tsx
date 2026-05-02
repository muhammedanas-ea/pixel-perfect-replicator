import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Opticore — Empowering Digital Growth" },
      { name: "description", content: "Opticore is a leading consultancy firm empowering businesses with tailored strategy, technology and growth solutions." },
      { property: "og:title", content: "Opticore — Empowering Digital Growth" },
      { property: "og:description", content: "Tailored consulting solutions for ambitious businesses." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
