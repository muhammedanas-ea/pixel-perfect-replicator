import { ArrowRight, Phone } from "lucide-react";
import { PillButton } from "./PillButton";

const steps = [
  { num: "01", code: "A-01", title: "ASSESSMENT", desc: "We start by conducting a thorough assessment of your business, identifying key areas for improvement and growth opportunities.", highlight: false },
  { num: "02", code: "B-02", title: "DEVELOPMENT", desc: "Based on our assessment findings, we develop a tailored strategy that aligns with your business goals and objectives.", highlight: true },
  { num: "03", code: "C-03", title: "IMPLEMENTATION", desc: "Our experienced consultants work closely with your team to implement the strategy effectively, ensuring seamless integration with existing processes.", highlight: false },
  { num: "04", code: "D-04", title: "MONITORING & ADJUSTMENT", desc: "We don't stop once the strategy is implemented. We continuously monitor its performance, making necessary adjustments along the way to optimize.", highlight: false },
];

export function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">How It Works</p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold">Our Consulting Process</h2>
        </div>

        <div className="space-y-0">
          {steps.map((s) => (
            <div
              key={s.num}
              className={`relative grid grid-cols-12 items-center gap-4 py-10 border-t border-white/10 ${
                s.highlight
                  ? "bg-[linear-gradient(90deg,oklch(0.3_0.2_300/0.4),oklch(0.2_0.15_320/0.2),transparent)]"
                  : ""
              }`}
            >
              <div className="col-span-1 text-sm text-muted-foreground border-b border-white/30 pb-1 inline-block w-fit">{s.num}</div>
              <div className="col-span-4 font-display text-5xl md:text-7xl font-black tracking-tighter">{s.code}</div>
              <div className="col-span-3 text-sm tracking-[0.2em] text-muted-foreground">{s.title}</div>
              <div className="col-span-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              <div className="col-span-1 flex justify-end">
                <button className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <PillButton icon={<Phone className="h-4 w-4" />}>Get In Touch</PillButton>
        </div>
      </div>
    </section>
  );
}
