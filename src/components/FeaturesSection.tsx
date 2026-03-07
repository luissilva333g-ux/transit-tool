import { Truck, Clock, Shield, MapPin } from "lucide-react";

const features = [
  { icon: Truck, title: "Porta-a-Porta", desc: "Recolhemos e entregamos ao domicílio em toda a rota." },
  { icon: Clock, title: "+30 Anos", desc: "Experiência e confiança na rota Portugal ⇄ Luxemburgo." },
  { icon: Shield, title: "Sem Taxas Extra", desc: "Armazenamento gratuito. A mercadoria aguarda sem custos." },
  { icon: MapPin, title: "Cobertura Total", desc: "De Bragança ao Alentejo, passamos na sua zona." },
];

export default function FeaturesSection() {
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
