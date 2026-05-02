import waveBlob from "@/assets/wave-blob.png";

const clients = ["Allianz", "AMGEN", "ASSA ABLOY", "Coca-Cola", "Disney", "Channel", "NATIONAL GEO", "BURGER KING", "Bundesministerium", "Boehringer", "LIDL", "Shell"];

export function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={waveBlob}
          alt="Neon energy wave"
          width={1920}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <h2 className="absolute bottom-10 left-0 right-0 text-center font-display text-6xl md:text-9xl font-black text-white whitespace-nowrap overflow-hidden">
          Where Strategies
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20">
        <p className="text-center text-xs tracking-[0.3em] text-muted-foreground uppercase mb-10">Our Clients</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {clients.map((c) => (
            <div
              key={c}
              className="bg-card-glass rounded-2xl h-20 flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-white hover:shadow-neon transition-all"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
