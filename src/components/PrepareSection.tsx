import { Package, Tag, Tv, Thermometer, MessageCircle } from "lucide-react";
import labelImg from "@/assets/label-detail.jpg";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

export default function PrepareSection() {
  const { lang } = useLang();
  const steps = [
    { icon: Package, title: t("prep.pack_title", lang), desc: t("prep.pack_desc", lang) },
    { icon: Tag, title: t("prep.label_title", lang), desc: t("prep.label_desc", lang) },
    { icon: Tv, title: t("prep.fragile_title", lang), desc: t("prep.fragile_desc", lang) },
    { icon: Thermometer, title: t("prep.frozen_title", lang), desc: t("prep.frozen_desc", lang) },
  ];

  return (
    <section id="preparar" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden order-2 md:order-1">
          <img src={labelImg} alt="Detalhe de etiqueta de identificação numa caixa" className="w-full h-auto object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">{t("prep.title", lang)}</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">{t("prep.subtitle", lang)}</p>
          <div className="space-y-4 sm:space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{s.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={`https://wa.me/351231922340?text=${encodeURIComponent(t("prep.wa_text", lang))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            {t("prep.cta", lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
