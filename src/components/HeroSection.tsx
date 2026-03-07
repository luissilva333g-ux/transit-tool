import heroVan from "@/assets/hero-van.jpg";
import SmartFinder from "./SmartFinder";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img src={heroVan} alt="Carrinha de transporte da Transportes Carlos e César na estrada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative section-padding pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-whatsapp mb-4">
            Há mais de 30 anos ao seu serviço
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
            Portugal ⇄ Luxemburgo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transporte de mercadorias porta-a-porta com a confiança de sempre.
          </p>
          <SmartFinder />
        </div>
      </div>
    </section>
  );
}
