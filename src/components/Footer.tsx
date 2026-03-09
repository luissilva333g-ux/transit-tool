import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12">{t("footer.title", lang)}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {contacts.map((c, i) => (
            <div key={i} className="text-center">
              <h3 className="font-bold text-sm sm:text-lg mb-2 sm:mb-3 text-background/90">{t(c.nameKey, lang)}</h3>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-1.5 sm:gap-2 text-background/70 hover:text-background transition-colors mb-1.5 sm:mb-2 text-xs sm:text-base">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{c.phone}</span>
              </a>
              <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-whatsapp hover:opacity-80 transition-opacity font-medium text-xs sm:text-base">
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-6 sm:pt-8 flex flex-col items-center gap-2 sm:gap-3 text-center text-background/50 text-xs sm:text-sm">
          <img src={logo} alt="Logo Transportes Carlos & César" className="h-10 w-10 sm:h-12 sm:w-12 opacity-60" />
          <Link
            to="/regulamento"
            className="inline-flex items-center gap-1.5 text-background/60 hover:text-background transition-colors text-xs sm:text-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            {t("footer.regulation", lang)}
          </Link>
          <p>© 2026 Transportes Carlos & César. {t("footer.copyright", lang)}</p>
          <p>{t("footer.tagline", lang)}</p>
        </div>
      </div>
    </footer>
  );
}