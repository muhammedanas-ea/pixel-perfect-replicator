import { Store, Users, Lightbulb, MessagesSquare } from "lucide-react";
import { PillButton } from "./PillButton";

const services = [
  { icon: Store, title: "Consumer Markets", desc: "With a track record of success across diverse industries, we have helped numerous clients achieve significant improvements in efficiency, profitability, and market positioning." },
  { icon: Users, title: "Technology Consulting", desc: "Our clients are at the heart of everything we do. We prioritize building long-term relationships based on trust, integrity, and mutual respect." },
  { icon: Lightbulb, title: "Consulting Service", desc: "We stay at the forefront of industry trends and emerging technologies, enabling us to offer innovative solutions that drive sustainable growth." },
  { icon: MessagesSquare, title: "Private Consulting", desc: "We stay at the forefront of industry trends and emerging technologies, enabling us to offer innovative solutions that drive sustainable growth." },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative mb-16 flex items-start justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">What We Do</p>
            <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight max-w-xl">
              <span className="text-muted-foreground">Elevate Your Business With</span>
              <br />
              Opticores Tailored Solutions
            </h2>
          </div>
          <h2 className="hidden md:block text-outline font-display text-7xl lg:text-9xl font-black select-none pointer-events-none">
            SERVICES
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card-glass rounded-3xl p-6 hover:shadow-neon transition-all hover:-translate-y-2 duration-500"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-sans text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <PillButton>Discover</PillButton>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <PillButton>View Projects</PillButton>
        </div>
      </div>
    </section>
  );
}
