import heroVan from "@/assets/hero-van.jpg";
import SmartFinder from "./SmartFinder";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

export default function HeroSection() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src={heroVan} alt="Carrinha de transporte da Transportes Carlos e César na estrada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="relative section-padding pt-32 pb-20 sm:pt-32 sm:pb-28 md:pt-40 md:pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-whatsapp mb-3 sm:mb-4">{t("hero.tagline", lang)}</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight">{t("hero.title", lang)}</h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">{t("hero.subtitle", lang)}</p>
          <SmartFinder />
        </div>
      </div>
    </section>
  );
}