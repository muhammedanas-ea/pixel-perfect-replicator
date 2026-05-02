import { Circle } from "lucide-react";

const links = ["Home", "About", "Services", "Process", "Clients"];

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[min(95%,1100px)]">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl shadow-glow">
        <a href="#home" className="flex items-center gap-2 pl-3 pr-4 py-1">
          <Circle className="h-4 w-4 fill-[oklch(0.65_0.28_15)] text-[oklch(0.65_0.28_15)]" />
          <span className="font-display text-lg font-bold tracking-widest">CORE</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                  i === 0 ? "text-white" : "text-muted-foreground"
                }`}
              >
                {l}
                {i === 0 && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[oklch(0.65_0.28_15)]" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/15 px-5 py-2 text-sm font-semibold text-white hover:shadow-neon transition-all"
        >
          Start A Project
        </a>
      </nav>
    </header>
  );
}
