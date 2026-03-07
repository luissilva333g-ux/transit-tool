import { MapPin, Clock } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

export default function WarehousesSection() {
  const { lang } = useLang();
  const warehouses = [
    {
      name: "Mortágua, Portugal",
      subtitle: t("wh.central", lang),
      address: "Zona Industrial de Mortágua (junto ao bar Tirikeda), 3450-232 MRT",
      hours: ["Seg-Qua: 09:00–13:00 / 15:00–19:00", "Qui: 09:00–13:00", "Sex: 15:00–19:00", "Sáb: 09:00–13:00"],
    },
    {
      name: "Hollerich, Luxemburgo",
      address: "20 Rue de Cessange, L-1320 (Garagens ao fundo do parque da Intralux)",
      hours: ["Ter: 17:00–20:30", "Sáb: 08:00–13:00"],
    },
    {
      name: "Rédange, França",
      subtitle: t("wh.border", lang),
      address: "712, Rue de la Cote, F-57390",
      hours: ["Ter: 16:00–19:00", "Sáb: 10:00–17:00"],
    },
  ];

  return (
    <section id="armazens" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">{t("wh.title", lang)}</h2>
        <p className="text-muted-foreground text-center mb-14 text-lg">{t("wh.subtitle", lang)}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {warehouses.map((w, i) => (
            <div key={i} className="card-premium flex flex-col">
              <h3 className="text-xl font-bold mb-1">{w.name}</h3>
              {w.subtitle && <span className="text-sm text-whatsapp font-semibold mb-3">{w.subtitle}</span>}
              <div className="flex items-start gap-2 mb-4 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span className="text-base">{w.address}</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground mt-auto">
                <Clock className="h-4 w-4 mt-1 shrink-0" />
                <div className="space-y-0.5 text-base">
                  {w.hours.map((h, j) => <p key={j}>{h}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
