import { Phone, MessageCircle } from "lucide-react";

const contacts = [
  { name: "Sede Mortágua", phone: "+351 231 922 340", wa: "351231922340" },
  { name: "Carlos (Gestão)", phone: "+351 917 405 318", wa: "351917405318" },
  { name: "Luís (Logística)", phone: "+351 968 599 748", wa: "351968599748" },
  { name: "César (Luxemburgo)", phone: "+352 621 152 128", wa: "352621152128" },
];

export default function Footer() {
  return (
    <footer id="contactos" className="section-padding bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Contactos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((c, i) => (
            <div key={i} className="text-center">
              <h3 className="font-bold text-lg mb-3 text-background/90">{c.name}</h3>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-background/70 hover:text-background transition-colors mb-2">
                <Phone className="h-4 w-4" />
                {c.phone}
              </a>
              <a
                href={`https://wa.me/${c.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-whatsapp hover:opacity-80 transition-opacity font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 text-center text-background/50 text-sm">
          <p>© 2026 Transportes Carlos & César. Todos os direitos reservados.</p>
          <p className="mt-1">Mais de 30 anos na rota Portugal ⇄ Luxemburgo.</p>
        </div>
      </div>
    </footer>
  );
}
