import { PillButton } from "./PillButton";
import contactBlob from "@/assets/contact-blob.png";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] lg:h-[700px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0.6_0.27_15/0.4),transparent_70%)] blur-3xl" />
          <img
            src={contactBlob}
            alt="Iridescent fluid"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative h-full w-full object-contain drop-shadow-[0_0_80px_oklch(0.65_0.3_350/0.5)]"
          />
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 text-right">Get In Touch</p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold mb-10 text-right leading-tight">
            Customer Service and<br />Logistics Excellence
          </h2>
          <form className="space-y-4">
            {["*Name", "*Email", "Phone no", "Subject"].map((p) => (
              <input
                key={p}
                placeholder={p}
                className="w-full bg-card-glass rounded-2xl px-5 py-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:shadow-neon transition-all"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-card-glass rounded-2xl px-5 py-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:shadow-neon transition-all resize-none"
            />
            <div className="flex justify-end pt-2">
              <PillButton>Submit</PillButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
