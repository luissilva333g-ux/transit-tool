import { Package, Tag, Tv, Thermometer } from "lucide-react";
import labelImg from "@/assets/label-detail.jpg";

const steps = [
  { icon: Package, title: "Embalamento", desc: "O cliente é responsável pela embalagem. Use caixas fortes e fita adesiva larga." },
  { icon: Tag, title: "Identificação", desc: "Obrigatório colocar Nome, Morada e Telefone (remetente e destinatário) em cada volume." },
  { icon: Tv, title: "Frágeis", desc: "TVs e eletrónicos devem ir na caixa original com proteção reforçada." },
  { icon: Thermometer, title: "Congelados", desc: "Uso obrigatório de geleiras térmicas ou esferovite adequadas." },
];

export default function PrepareSection() {
  return (
    <section id="preparar" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-3xl overflow-hidden order-2 md:order-1">
          <img src={labelImg} alt="Detalhe de etiqueta de identificação numa caixa" className="w-full h-auto object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Preparar o Envio</h2>
          <p className="text-muted-foreground text-lg mb-8">O guia simplificado para que a sua mercadoria chegue em segurança.</p>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
