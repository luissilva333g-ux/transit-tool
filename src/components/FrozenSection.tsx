import frozenImg from "@/assets/frozen-service.jpg";
import { Snowflake, MessageCircle } from "lucide-react";

const FROZEN_DATES = [
  "19 Janeiro", "16 Fevereiro", "23 Março", "20 Abril", "18 Maio", "15 Junho",
  "20 Julho", "17 Agosto", "7 Setembro", "19 Outubro", "16 Novembro", "14 Dezembro"
];

export default function FrozenSection() {
  return (
    <section id="congelados" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-2xl text-sm font-semibold mb-6">
            <Snowflake className="h-4 w-4" />
            Serviço Frigorífico
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Congelados Portugal → Luxemburgo</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Saída às Segundas-feiras, chegada às Quintas. Levantamento no Luxemburgo entre 16:00 e 18:30.
          </p>
          <p className="text-muted-foreground mb-2 font-semibold">Datas de saída 2026:</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {FROZEN_DATES.map((d, i) => (
              <span key={i} className="bg-surface text-surface-foreground px-3 py-1.5 rounded-xl text-sm font-medium">{d}</span>
            ))}
          </div>
          <a
            href="https://wa.me/352621152128?text=Olá! Gostaria de saber mais sobre o serviço de congelados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            Contactar César (Luxemburgo)
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img src={frozenImg} alt="Serviço de transporte de congelados" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
