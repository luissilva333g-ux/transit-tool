import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import Navbar from "@/components/Navbar";

export default function Regulamento() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("reg.back", lang)}
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">📜 {t("reg.title", lang)}</h1>
        <p className="text-muted-foreground mb-10 text-sm sm:text-base">
          {t("reg.updated", lang)}: 10 de Março de 2026
        </p>
        <p className="text-muted-foreground mb-10 text-sm sm:text-base font-semibold">
          {t("reg.company", lang)}: TRANSPORTES CARLOS & CÉSAR
        </p>

        <div className="space-y-8 sm:space-y-10">
          <Section n="1" title={t("reg.s1_title", lang)}>
            <p>{t("reg.s1_text", lang)}</p>
          </Section>

          <Section n="2" title={t("reg.s2_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s2_a", lang)}</li>
              <li>{t("reg.s2_b", lang)}</li>
              <li>{t("reg.s2_c", lang)}</li>
            </ul>
          </Section>

          <Section n="3" title={t("reg.s3_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s3_a", lang)}</li>
              <li>{t("reg.s3_b", lang)}</li>
              <li>{t("reg.s3_c", lang)}</li>
            </ul>
          </Section>

          <Section n="4" title={t("reg.s4_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s4_a", lang)}</li>
              <li>{t("reg.s4_b", lang)}</li>
              <li>{t("reg.s4_c", lang)}</li>
            </ul>
          </Section>

          <Section n="5" title={t("reg.s5_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s5_a", lang)}</li>
              <li>{t("reg.s5_b", lang)}</li>
            </ul>
          </Section>

          <Section n="6" title={t("reg.s6_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s6_a", lang)}</li>
              <li>{t("reg.s6_b", lang)}</li>
              <li>{t("reg.s6_c", lang)}</li>
              <li>{t("reg.s6_d", lang)}</li>
            </ul>
          </Section>

          <Section n="7" title={t("reg.s7_title", lang)}>
            <p className="mb-2">{t("reg.s7_intro", lang)}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s7_a", lang)}</li>
              <li>{t("reg.s7_b", lang)}</li>
              <li>{t("reg.s7_c", lang)}</li>
              <li>{t("reg.s7_d", lang)}</li>
              <li>{t("reg.s7_e", lang)}</li>
              <li>{t("reg.s7_f", lang)}</li>
              <li>{t("reg.s7_g", lang)}</li>
              <li>{t("reg.s7_h", lang)}</li>
            </ul>
          </Section>

          <Section n="8" title={t("reg.s8_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s8_a", lang)}</li>
              <li>{t("reg.s8_b", lang)}</li>
              <li>{t("reg.s8_c", lang)}</li>
            </ul>
          </Section>

          <Section n="9" title={t("reg.s9_title", lang)}>
            <p>{t("reg.s9_text", lang)}</p>
          </Section>

          <Section n="10" title={t("reg.s10_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s10_a", lang)}</li>
              <li>{t("reg.s10_b", lang)}</li>
              <li>{t("reg.s10_c", lang)}</li>
            </ul>
          </Section>

          <Section n="11" title={t("reg.s11_title", lang)}>
            <p className="mb-2">{t("reg.s11_intro", lang)}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s11_a", lang)}</li>
              <li>{t("reg.s11_b", lang)}</li>
              <li>{t("reg.s11_c", lang)}</li>
              <li>{t("reg.s11_d", lang)}</li>
            </ul>
          </Section>

          <Section n="12" title={t("reg.s12_title", lang)}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("reg.s12_a", lang)}</li>
              <li>{t("reg.s12_b", lang)}</li>
            </ul>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl font-bold mb-3">{n}. {title}</h2>
      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
