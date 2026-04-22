import { Star } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";

const testimonials = [
  { firstName: "Bougies", rest: "Avec L'amour", key: "testimonials.t1" as const },
  { firstName: "Nelson", rest: "Soares", key: "testimonials.t2" as const },
  { firstName: "Fabio", rest: "Correia", key: "testimonials.t3" as const },
  { firstName: "Centro", rest: "Balmar", key: "testimonials.t4" as const },
  { firstName: "Litos", rest: "Soninha", key: "testimonials.t5" as const },
  { firstName: "Diogo", rest: "Castanheira", key: "testimonials.t6" as const },
];

function BlurredName({ firstName, rest }: { firstName: string; rest: string }) {
  return (
    <span className="font-semibold text-foreground">
      {firstName}{" "}
      <span className="select-none blur-[5px]">{rest}</span>
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { lang } = useLang();

  return (
    <section id="testemunhos" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3">
          {t("testimonials.title", lang)}
        </h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
          {t("testimonials.subtitle", lang)}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="card-premium flex flex-col">
              <Stars />
              <p className="text-muted-foreground text-sm sm:text-base italic mb-4 flex-1">
                "{t(item.key, lang)}"
              </p>
              <BlurredName firstName={item.firstName} rest={item.rest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
