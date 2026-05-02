import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    quote:
      "Working with Opticore transformed our business strategy. Their team brought clarity, expertise and measurable growth across every department.",
    name: "Sarah Mitchell",
    role: "National Geographic",
    avatar: a1,
  },
  {
    quote:
      "From assessment to implementation, the consulting process was seamless. We saw revenue growth within the first quarter of partnership.",
    name: "James Carter",
    role: "Boehringer Logistics",
    avatar: a2,
  },
  {
    quote:
      "Their innovative approach and dedication to client success make them an invaluable partner. Truly best in class consultancy work.",
    name: "Emma Roberts",
    role: "Disney Studios",
    avatar: a3,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">What Clients Say</p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-card-glass rounded-3xl p-8 flex flex-col justify-between hover:shadow-neon transition-all"
            >
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
