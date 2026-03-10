import { useState } from "react";
import frozenImg from "@/assets/frozen-service.jpg";
import { Snowflake, MessageCircle, Info } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const FROZEN_SCHEDULE = [
  { month: "Jan", departure: "19 Jan", arrival: "22 Jan" },
  { month: "Fev", departure: "16 Fev", arrival: "19 Fev" },
  { month: "Mar", departure: "23 Mar", arrival: "26 Mar" },
  { month: "Abr", departure: "20 Abr", arrival: "23 Abr" },
  { month: "Mai", departure: "18 Mai", arrival: "21 Mai" },
  { month: "Jun", departure: "15 Jun", arrival: "18 Jun" },
  { month: "Jul", departure: "20 Jul", arrival: "23 Jul" },
  { month: "Ago", departure: "17 Ago", arrival: "20 Ago" },
  { month: "Set", departure: "7 Set", arrival: "10 Set" },
  { month: "Out", departure: "19 Out", arrival: "22 Out" },
  { month: "Nov", departure: "16 Nov", arrival: "19 Nov" },
  { month: "Dez", departure: "14 Dez", arrival: "17 Dez" },
];

export default function FrozenSection() {
  const { lang } = useLang();
  const [selectedMonth, setSelectedMonth] = useState<typeof FROZEN_SCHEDULE[0] | null>(null);

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
            {FROZEN_SCHEDULE.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelectedMonth(item)}
                className="bg-surface text-surface-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
          <img src={frozenImg} alt="Serviço de transporte de congelados" className="w-full h-auto object-cover" />
        </div>
      </div>

      <Dialog open={!!selectedMonth} onOpenChange={(open) => !open && setSelectedMonth(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Snowflake className="h-5 w-5 text-primary" />
              {t("frozen.popup_title", lang)} — {selectedMonth?.month}
            </DialogTitle>
            <DialogDescription>
              {t("frozen.desc", lang)}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{t("frozen.departure", lang)}</p>
                <p className="font-bold text-lg">{selectedMonth?.departure}</p>
              </div>
              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{t("frozen.arrival", lang)}</p>
                <p className="font-bold text-lg">{selectedMonth?.arrival}</p>
              </div>
            </div>

            <a
              href={`https://wa.me/351231922340?text=${encodeURIComponent(t("frozen.wa_text", lang).replace("{month}", selectedMonth?.month || ""))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              {t("frozen.schedule", lang)}
            </a>

            <Link
              to="/congelados"
              onClick={() => setSelectedMonth(null)}
              className="flex items-center justify-center gap-2 w-full border border-border text-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
            >
              <Info className="h-4 w-4" />
              {t("frozen.more_info", lang)}
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
