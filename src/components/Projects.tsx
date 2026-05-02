import { PillButton } from "./PillButton";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Client Project A", desc: "Smart Project Analysis" },
  { img: p2, title: "Client Project A", desc: "Crypto Project Redesign" },
  { img: p3, title: "Client Project B", desc: "Mobile Banking Suite" },
  { img: p4, title: "Client Project A", desc: "Ecommerce Insights" },
  { img: p5, title: "Client Project A", desc: "CRM Modernization" },
  { img: p6, title: "Client Project A", desc: "Project Management Tool" },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative mb-16 flex items-start justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">New Project</p>
            <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight">
              Projects Section
            </h2>
          </div>
          <h2 className="hidden md:block text-outline font-display text-7xl lg:text-9xl font-black select-none pointer-events-none">
            PROJECTS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group bg-card-glass rounded-3xl p-4 hover:shadow-neon transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.desc}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-sans text-lg font-bold mb-1">[{p.title}]</h3>
                <p className="text-xs text-muted-foreground mb-4">{p.desc}</p>
                <PillButton>View Project</PillButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
