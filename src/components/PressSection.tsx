import { ExternalLink, Newspaper } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

const articles = [
  {
    url: "https://www.contacto.lu/luxemburgo/manu-o-homem-que-transporta-mercadorias-entre-luxemburgo-e-portugal/10947671.html",
    titleKey: "press.p1_title" as const,
    excerptKey: "press.p1_excerpt" as const,
    date: "2021",
  },
  {
    url: "https://www.contacto.lu/reportagem/mandar-o-pinheiro-para-portugal-e-receber-o-bacalhau-no-luxemburgo/111435303.html",
    titleKey: "press.p2_title" as const,
    excerptKey: "press.p2_excerpt" as const,
    date: "2022",
  },
  {
    url: "https://www.contacto.lu/luxemburgo/medo-da-guerra.-portugueses-do-luxemburgo-reduzem-envio-de-encomendas-para-portugal/145331415.html",
    titleKey: "press.p3_title" as const,
    excerptKey: "press.p3_excerpt" as const,
    date: "2024",
  },
];

export default function PressSection() {
  const { lang } = useLang();

  return (
    <section id="imprensa" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Newspaper className="h-5 w-5 text-primary" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            {t("press.source", lang)}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3">
          {t("press.title", lang)}
        </h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
          {t("press.subtitle", lang)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-premium flex flex-col hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                  {t("press.source", lang)} · {a.date}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                {t(a.titleKey, lang)}
              </h3>
              <p className="text-sm text-muted-foreground italic mb-4 flex-1">
                {t(a.excerptKey, lang)}
              </p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                {t("press.read", lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
