import { Circle, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs text-muted-foreground tracking-widest uppercase">
          About<br />Opticore Solutions
        </div>
        <a href="#home" className="flex items-center gap-2">
          <Circle className="h-4 w-4 fill-[oklch(0.65_0.28_15)] text-[oklch(0.65_0.28_15)]" />
          <span className="font-display text-2xl font-black tracking-widest">CORE</span>
        </a>
        <div className="flex items-center gap-4 text-white/70">
          <Facebook className="h-4 w-4 hover:text-white cursor-pointer" />
          <Instagram className="h-4 w-4 hover:text-white cursor-pointer" />
          <Twitter className="h-4 w-4 hover:text-white cursor-pointer" />
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">Opticore 2026. All rights reserved.</p>
    </footer>
  );
}
