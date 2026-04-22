import { ArrowLeft, Home, Sofa, Boxes, MapPin, AlertTriangle, CalendarCheck, PackageOpen, MessageCircle, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import Navbar from "@/components/Navbar";

const OFFICE_WA = "351231922340";

export default function Mudancas() {
  const { lang } = useLang();

  const features = [
    { icon: Home, titleKey: "mud.f1_title" as const, descKey: "mud.f1_desc" as const },
    { icon: Sofa, titleKey: "mud.f2_title" as const, descKey: "mud.f2_desc" as const },
    { icon: Boxes, titleKey: "mud.f3_title" as const, descKey: "mud.f3_desc" as const },
    { icon: MapPin, titleKey: "mud.f4_title" as const, descKey: "mud.f4_desc" as const },
  ];

  const notes = [
    { icon: CalendarCheck, titleKey: "mud.note1_title" as const, descKey: "mud.note1_desc" as const },
    { icon: PackageOpen, titleKey: "mud.note2_title" as const, descKey: "mud.note2_desc" as const },
    { icon: AlertTriangle, titleKey: "mud.note3_title" as const, descKey: "mud.note3_desc" as const },
  ];

  const waUrl = `https://wa.me/${OFFICE_WA}?text=${encodeURIComponent(t("mud.wa_text", lang))}`;

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
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-14 bg-gradient-to-br from-primary/15 via-surface to-surface p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3 py-1.5 rounded-xl text-xs font-semibold mb-4">
            <Truck className="h-4 w-4" />
            {t("mud.badge", lang)}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            {t("mud.title", lang)}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
            {t("mud.intro", lang)}
          </p>

          <div className="mt-8">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t("mud.cta", lang)}
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">{t("mud.cta_sub", lang)}</p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div key={i} className="bg-surface rounded-2xl p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{t(titleKey, lang)}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t(descKey, lang)}</p>
            </div>
          ))}
        </div>

        {/* Important notes */}
        <h2 className="text-xl sm:text-2xl font-extrabold mb-5 sm:mb-6">{t("mud.notes_title", lang)}</h2>
        <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-16">
          {notes.map(({ icon: Icon, titleKey, descKey }, i) => (
            <div key={i} className="flex gap-4 sm:gap-5 border border-border rounded-2xl p-5 sm:p-6 bg-card">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">{t(titleKey, lang)}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t(descKey, lang)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-surface rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{t("mud.cta", lang)}</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">{t("mud.cta_sub", lang)}</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}