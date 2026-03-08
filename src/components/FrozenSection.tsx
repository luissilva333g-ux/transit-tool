import frozenImg from "@/assets/frozen-service.jpg";
import { Snowflake, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

const FROZEN_DATES = [
  "19 Jan", "16 Fev", "23 Mar", "20 Abr", "18 Mai", "15 Jun",
  "20 Jul", "17 Ago", "7 Set", "19 Out", "16 Nov", "14 Dez"
];

export default function FrozenSection() {
  const { lang } = useLang();
  return (
    <section id="congelados" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Snowflake className="h-4 w-4" />
            {t("frozen.badge", lang)}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">{t("frozen.title", lang)}</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">{t("frozen.desc", lang)}</p>
          <p className="text-muted-foreground mb-2 font-semibold text-sm sm:text-base">{t("frozen.dates_label", lang)}</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {FROZEN_DATES.map((d, i) => (
              <span key={i} className="bg-surface text-surface-foreground px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium">{d}</span>
            ))}
          </div>
          <a
            href="https://wa.me/351231922340?text=Olá! Gostaria de saber mais sobre o serviço de congelados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            {t("frozen.contact", lang)}
          </a>
        </div>
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
          <img src={frozenImg} alt="Serviço de transporte de congelados" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}