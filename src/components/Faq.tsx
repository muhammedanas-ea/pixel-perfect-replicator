import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your process?",
    a: "We start with a deep discovery phase, then move into strategy, implementation, and continuous monitoring to ensure measurable business outcomes.",
  },
  { q: "Pricing details", a: "Our engagements are scoped to your specific needs. Reach out for a tailored proposal aligned with your goals and budget." },
  { q: "What is about pricing?", a: "We offer transparent, milestone-based pricing with no hidden fees. Every proposal includes a clear breakdown." },
  { q: "What is your timeline?", a: "Most projects launch within 4-12 weeks depending on scope. We provide a detailed roadmap during onboarding." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h2 className="font-sans text-3xl md:text-5xl font-bold mb-12">FAQ Section</h2>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div
                key={i}
                className="bg-card-glass rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={active}
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${active ? "rotate-180" : ""}`}
                  />
                </button>
                {active && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
