import { Phone, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const contacts = [
  { nameKey: "footer.office" as const, phone: "+351 231 922 340", wa: "351231922340" },
  { nameKey: "footer.cesar" as const, phone: "+352 621 152 128", wa: "352621152128" },
  { nameKey: "footer.carlos" as const, phone: "+351 917 405 318", wa: "351917405318" },
  { nameKey: "footer.luis" as const, phone: "+351 968 599 748", wa: "351968599748" },
];

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer id="contactos" className="section-padding bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">{t("footer.title", lang)}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((c, i) => (
            <div key={i} className="text-center">
              <h3 className="font-bold text-lg mb-3 text-background/90">{t(c.nameKey, lang)}</h3>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-background/70 hover:text-background transition-colors mb-2">
                <Phone className="h-4 w-4" />
                {c.phone}
              </a>
              <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-whatsapp hover:opacity-80 transition-opacity font-medium">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 flex flex-col items-center gap-3 text-center text-background/50 text-sm">
          <img src={logo} alt="Logo Transportes Carlos & César" className="h-12 w-12 opacity-60" />
          <p>© 2026 Transportes Carlos & César. {t("footer.copyright", lang)}</p>
          <p>{t("footer.tagline", lang)}</p>
        </div>
      </div>
    </footer>
  );
}
