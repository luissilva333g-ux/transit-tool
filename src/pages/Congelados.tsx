import { ArrowLeft, Snowflake, ThermometerSnowflake, Package, Clock, CalendarCheck, Truck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import frozenImg from "@/assets/frozen-service.jpg";

export default function Congelados() {
  const { lang } = useLang();

  const rules = [
    { icon: CalendarCheck, titleKey: "cong.schedule_title" as const, descKey: "cong.schedule_desc" as const },
    { icon: Package, titleKey: "cong.packaging_title" as const, descKey: "cong.packaging_desc" as const },
    { icon: Truck, titleKey: "cong.transport_title" as const, descKey: "cong.transport_desc" as const },
    { icon: Clock, titleKey: "cong.pickup_title" as const, descKey: "cong.pickup_desc" as const },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("reg.back", lang)}
        </Link>

        {/* Hero */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-14">
          <img src={frozenImg} alt="Serviço frigorífico" className="w-full h-48 sm:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1.5 rounded-xl text-xs font-semibold mb-2 backdrop-blur-sm">
              <Snowflake className="h-4 w-4" />
              {t("frozen.badge", lang)}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              {t("cong.title", lang)}
            </h1>
          </div>
        </div>

        {/* Intro */}
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 sm:mb-14">
          {t("cong.intro", lang)}
        </p>

        {/* Rules cards */}
        <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-14">
          {rules.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div key={i} className="flex gap-4 sm:gap-5 bg-surface rounded-2xl p-5 sm:p-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">{i + 1}. {t(titleKey, lang)}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t(descKey, lang)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/351231922340?text=Olá! Gostaria de saber mais sobre o serviço de congelados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            {t("frozen.contact", lang)}
          </a>
        </div>
      </main>
    </div>
  );
}
