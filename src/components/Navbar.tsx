import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t, LANG_LABELS, type Lang } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const LANGS: Lang[] = ["pt", "en", "fr", "de"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();

  const navItems = [
    { label: t("nav.warehouses", lang), href: "#armazens" },
    { label: t("nav.frozen", lang), href: "#congelados" },
    { label: t("nav.prepare", lang), href: "#preparar" },
    { label: t("nav.faq", lang), href: "#faq" },
    { label: t("nav.contacts", lang), href: "#contactos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="flex items-center gap-2 font-extrabold text-foreground min-w-0">
          <img src={logo} alt="Logo Transportes Carlos & César" className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" />
          <span className="text-sm sm:text-lg truncate">Transportes Carlos & César</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              {item.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              {LANG_LABELS[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[80px]">
                {LANGS.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface ${l === lang ? "text-primary" : "text-foreground"}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="p-2 text-muted-foreground">
              <Globe className="h-5 w-5" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[80px]">
                {LANGS.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface ${l === lang ? "text-primary" : "text-foreground"}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}