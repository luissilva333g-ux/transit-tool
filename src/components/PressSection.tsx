import { ExternalLink, Newspaper } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

const articles = [
  {
    url: "https://www.contacto.lu/luxemburgo/manu-o-homem-que-transporta-mercadorias-entre-luxemburgo-e-portugal/10947671.html",
    image:
      "https://img.contacto.lu/public/luxemburgo/991ikp-interview-manu-ferreira-2.jpg/alternates/WIDTH_1440/Interview-Manu-Ferreira%202.jpg",
    titleKey: "press.p1_title" as const,
    excerptKey: "press.p1_excerpt" as const,
    date: "2021",
  },
  {
    url: "https://www.contacto.lu/reportagem/mandar-o-pinheiro-para-portugal-e-receber-o-bacalhau-no-luxemburgo/111435303.html",
    image:
      "https://img.contacto.lu/public/luxemburgo/9dlgqy-goods-that-are-transported-betwe-15.jpg/alternates/TWENTYONE_NINE_1620/Goods-that-are-transported-betwe%2015.jpg",
    titleKey: "press.p2_title" as const,
    excerptKey: "press.p2_excerpt" as const,
    date: "2022",
  },
  {
    url: "https://www.contacto.lu/luxemburgo/medo-da-guerra.-portugueses-do-luxemburgo-reduzem-envio-de-encomendas-para-portugal/145331415.html",
    image:
      "https://img.contacto.lu/public/luxemburgo/7ubh90-interview-manu-ferreira-3.jpg/alternates/SIXTEEN_NINE_1920/Interview-Manu-Ferreira%203.jpg",
    titleKey: "press.p3_title" as const,
    excerptKey: "press.p3_excerpt" as const,
    date: "2024",
  },
];

function ContactoLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-extrabold tracking-tight ${className}`}
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      aria-label="Contacto.lu"
    >
      <span style={{ color: "#C8102E" }}>Contacto</span>
      <span className="text-foreground/70">.lu</span>
    </span>
  );
}

export default function PressSection() {
  const { lang } = useLang();

  return (
    <section
      id="imprensa"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-y border-primary/20"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30">
            <Newspaper className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              {t("press.title", lang)}
            </span>
          </div>
          <ContactoLogo className="text-3xl sm:text-4xl" />
        </div>
        <p className="text-muted-foreground text-center mb-10 sm:mb-14 text-sm sm:text-base max-w-2xl mx-auto">
          {t("press.subtitle", lang)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={t(a.titleKey, lang)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-background/95 backdrop-blur px-2.5 py-1 rounded-md shadow-sm">
                  <ContactoLogo className="text-sm" />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
                  {a.date}
                </span>
                <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                  {t(a.titleKey, lang)}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-4 flex-1">
                  {t(a.excerptKey, lang)}
                </p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                  {t("press.read", lang)}
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
