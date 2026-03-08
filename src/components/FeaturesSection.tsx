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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-3xl bg-whatsapp/10 flex items-center justify-center mb-5">
                <f.icon className="h-7 w-7 text-whatsapp" />
              </div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
