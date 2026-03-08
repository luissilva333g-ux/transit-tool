import { Truck, Clock, Tag, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

export default function FeaturesSection() {
  const { lang } = useLang();
  const features = [
    { icon: Truck, title: t("feat.door_title", lang), desc: t("feat.door_desc", lang) },
    { icon: Clock, title: t("feat.years_title", lang), desc: t("feat.years_desc", lang) },
    { icon: Tag, title: t("feat.free_title", lang), desc: t("feat.free_desc", lang) },
    { icon: MapPin, title: t("feat.coverage_title", lang), desc: t("feat.coverage_desc", lang) },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-2xl sm:rounded-3xl bg-whatsapp/10 flex items-center justify-center mb-3 sm:mb-5">
                <f.icon className="h-5 w-5 sm:h-7 sm:w-7 text-whatsapp" />
              </div>
              <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}