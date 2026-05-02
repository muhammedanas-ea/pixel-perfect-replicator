import { Phone } from "lucide-react";
import { PillButton } from "./PillButton";
import aboutBlob from "@/assets/about-blob.png";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] lg:h-[700px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.5_0.25_310/0.5),transparent_60%)] blur-3xl" />
          <img
            src={aboutBlob}
            alt="Purple liquid form"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative h-full w-full object-contain drop-shadow-[0_0_60px_oklch(0.6_0.27_295/0.5)]"
          />
        </div>

        <div className="relative">
          <h2 className="absolute -top-10 right-0 text-outline font-display text-7xl md:text-9xl font-black select-none pointer-events-none">
            ABOUT
          </h2>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 mt-16">Who We Are</p>
          <h3 className="font-sans text-2xl md:text-3xl font-bold leading-tight mb-6">
            Providing comprehensive business management consulting services tailored to the unique needs of our clients.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Opticore is a leading consultancy firm comprised of seasoned professionals dedicated to
            empowering businesses to achieve their full potential. With a diverse team of experts spanning
            various industries and disciplines, we bring a wealth of experience and insight to every project we undertake.
          </p>
          <PillButton icon={<Phone className="h-4 w-4" />}>Read More</PillButton>
        </div>
      </div>
    </section>
  );
}
