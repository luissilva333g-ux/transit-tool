import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";

const FAQ_KEYS: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
  { q: "faq.q6", a: "faq.a6" },
  { q: "faq.q7", a: "faq.a7" },
  { q: "faq.q8", a: "faq.a8" },
  { q: "faq.q9", a: "faq.a9" },
  { q: "faq.q10", a: "faq.a10" },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLang();

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8">{t("faq.title", lang)}</h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">{t("faq.intro", lang)}</p>
        <div className="space-y-2 sm:space-y-3">
          {FAQ_KEYS.map((f, i) => (
            <div key={i} className="card-premium !p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left"
              >
                <span className="font-semibold text-base sm:text-lg pr-4">{t(f.q, lang)}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div
                  className="px-5 sm:px-7 pb-4 sm:pb-5 text-muted-foreground text-sm sm:text-base animate-in fade-in slide-in-from-top-1 duration-200"
                  dangerouslySetInnerHTML={{ __html: t(f.a, lang) }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
