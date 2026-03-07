import { useEffect, useState } from "react";

const CLOSURE_PERIODS = [
  { start: new Date(2026, 0, 1), end: new Date(2026, 0, 4), label: "Encerrados de 1 a 4 de Janeiro" },
  { start: new Date(2026, 3, 27), end: new Date(2026, 4, 3), label: "Encerrados de 27 de Abril a 3 de Maio" },
  { start: new Date(2026, 8, 21), end: new Date(2026, 9, 4), label: "Encerrados de 21 de Setembro a 4 de Outubro" },
  { start: new Date(2026, 11, 20), end: new Date(2026, 11, 31), label: "Encerrados de 20 a 31 de Dezembro" },
];

export default function ClosureBanner() {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const match = CLOSURE_PERIODS.find(p => now >= p.start && now <= p.end);
    if (match) setActiveMessage(match.label);
  }, []);

  if (!activeMessage) return null;

  return (
    <div className="bg-destructive text-destructive-foreground text-center py-3 px-4 text-base font-medium">
      ⚠️ {activeMessage}. Voltamos em breve!
    </div>
  );
}
