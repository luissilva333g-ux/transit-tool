import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Onde entregam?", a: "Porta-a-porta, mas apenas ao nível do rés-do-chão ou porta do prédio. O motorista não sobe escadas nem entra em domicílios." },
  { q: "Como pago?", a: "Numerário ou Multibanco. Confirme se a carrinha tem terminal no momento do agendamento." },
  { q: "O que é proibido?", a: "Explosivos, pirotecnia, animais vivos, baterias de lítio soltas, armas, substâncias ilícitas e produtos inflamáveis ou corrosivos." },
  { q: "Cobram taxas de armazém?", a: "Não. A mercadoria aguarda a viagem no nosso armazém sem custos extra." },
  { q: "Há restrições de peso ou medida?", a: "Não existem restrições, mas mercadorias de grande porte (sofás, máquinas, etc.) exigem aviso prévio no agendamento." },
  { q: "Como agendo uma recolha?", a: "Por WhatsApp ou telefone, com o máximo de antecedência possível. Cancelamentos devem ser comunicados atempadamente." },
  { q: "Posso enviar dinheiro ou joias?", a: "Não recomendamos. O envio de itens de valor elevado sem declaração prévia é da inteira responsabilidade do cliente." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Regras de Ouro</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Perguntas frequentes</p>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-premium !p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left"
              >
                <span className="font-semibold text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-7 pb-5 text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
