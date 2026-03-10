import { MapPin, Clock, Navigation } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

export default function WarehousesSection() {
  const { lang } = useLang();
  const warehouses = [
    {
      name: "🇵🇹 Mortágua, Portugal",
      address: "Zona Industrial de Mortágua",
      note: t("wh.note_mortagua", lang),
      postcode: "3450-232 MRT",
      hours: ["Seg-Qua: 09:00–13:00 / 15:00–19:00", "Qui: 09:00–13:00", "Sex: 15:00–19:00", "Sáb: 09:00–13:00"],
      mapUrl: "https://www.google.com/maps?q=40.393832772089816,-8.201443970957152",
    },
    {
      name: "🇱🇺 Hollerich, Luxemburgo",
      address: "20 Rue de Cessange, L-1320",
      note: t("wh.note_hollerich", lang),
      hours: ["Ter: 17:00–20:30", "Sáb: 08:00–13:00"],
      mapUrl: "https://www.google.com/maps?q=49.59765522565655,6.113726780058291",
    },
    {
      name: "🇱🇺🇫🇷 Rédange, França",
      address: "712, Rue de la Cote, F-57390",
      note: t("wh.note_redange", lang),
      hours: ["Ter: 16:00–19:00", "Sáb: 10:00–17:00"],
      mapUrl: "https://www.google.com/maps?q=49.49131506157751,5.914277619970524",
    },
  ];

  return (
    <section id="armazens" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4">{t("wh.title", lang)}</h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-14 text-base sm:text-lg">{t("wh.subtitle", lang)}</p>
        <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
          {warehouses.map((w, i) => (
            <div key={i} className="card-premium flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{w.name}</h3>
              <div className="flex items-start gap-2 mb-1 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base">{w.address}{w.postcode && `, ${w.postcode}`}</span>
              </div>
              {w.note && <p className="text-xs sm:text-sm text-muted-foreground ml-6 mb-3 sm:mb-4">{w.note}</p>}
              <div className="flex items-start gap-2 text-muted-foreground mb-3 sm:mb-4">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div className="space-y-0.5 text-sm sm:text-base">
                  {w.hours.map((h, j) => <p key={j}>{h}</p>)}
                </div>
              </div>
              <a
                href={w.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <Navigation className="h-4 w-4" />
                {t("wh.directions", lang)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
