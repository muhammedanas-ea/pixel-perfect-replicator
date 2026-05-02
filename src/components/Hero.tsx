import { ArrowDown, Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { PillButton } from "./PillButton";
import heroBlob from "@/assets/hero-blob.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-hero pt-32">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-8 min-h-[calc(100vh-8rem)]">
        <div className="relative z-10">
          <p className="font-display text-xl md:text-2xl tracking-[0.4em] text-white mb-4">WE ARE</p>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-none mb-8 text-white">
            OPTICORE
          </h1>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed mb-10">
            In the dynamic landscape of business, navigating complexities and maximizing
            opportunities requires expertise, vision, and strategic acumen.
          </p>
          <PillButton icon={<Phone className="h-4 w-4" />}>Sign Up</PillButton>
        </div>

        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.27_295/0.4),transparent_70%)] blur-3xl" />
          <img
            src={heroBlob}
            alt="Opticore fluid abstract"
            width={1024}
            height={1024}
            className="relative z-10 w-full h-full object-contain animate-[float_8s_ease-in-out_infinite] drop-shadow-[0_0_80px_oklch(0.6_0.27_295/0.6)]"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="relative h-20 w-20 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]">
            <defs>
              <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white/60" style={{ fontSize: "9px", letterSpacing: "2px" }}>
              <textPath href="#circlePath">SCROLL TO EXPLORE • SCROLL TO EXPLORE • </textPath>
            </text>
          </svg>
          <div className="h-10 w-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
            <ArrowDown className="h-4 w-4 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
        <span className="h-6 w-0.5 bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>

      <div className="absolute bottom-10 right-6 lg:right-12 flex items-center gap-4 text-white/70">
        <Facebook className="h-4 w-4 hover:text-white cursor-pointer" />
        <Instagram className="h-4 w-4 hover:text-white cursor-pointer" />
        <Twitter className="h-4 w-4 hover:text-white cursor-pointer" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
