import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";

const CLOSURE_PERIODS: { start: Date; end: Date; key: TranslationKey }[] = [
  { start: new Date(2026, 0, 1), end: new Date(2026, 0, 4), key: "closure.jan" },
  { start: new Date(2026, 3, 27), end: new Date(2026, 4, 3), key: "closure.apr" },
  { start: new Date(2026, 8, 21), end: new Date(2026, 9, 4), key: "closure.sep" },
  { start: new Date(2026, 11, 20), end: new Date(2026, 11, 31), key: "closure.dec" },
];

export default function ClosureBanner() {
  const [activeKey, setActiveKey] = useState<TranslationKey | null>(null);
  const { lang } = useLang();

  useEffect(() => {
    const now = new Date();
    const match = CLOSURE_PERIODS.find(p => now >= p.start && now <= p.end);
    if (match) setActiveKey(match.key);
  }, []);

  if (!activeKey) return null;

  return (
    <div className="bg-destructive text-destructive-foreground text-center py-3 px-4 text-base font-medium">
      ⚠️ {t(activeKey, lang)}. {t("closure.suffix", lang)}
    </div>
  );
}
