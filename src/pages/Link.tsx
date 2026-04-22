import { useState } from "react";
import { Globe, Phone, MapPin, Facebook, Instagram, Clock, Navigation, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

const officePT = {
  flag: "🇵🇹",
  name: "Escritório Portugal",
  phone: "+351 231 922 340",
  wa: "351231922340",
};

const officeLU = {
  flag: "🇱🇺",
  name: "César - Luxemburgo",
  phone: "+352 621 152 128",
  wa: "352621152128",
};

const warehouses = [
  {
    name: "🇵🇹 Mortágua, Portugal",
    address: "Zona Industrial de Mortágua, 3450-232 MRT",
    note: "(junto ao bar Tirikeda)",
    hours: [
      "Seg-Qua: 09:00–13:00 / 15:00–19:00",
      "Qui: 09:00–13:00",
      "Sex: 14:00–18:00",
      "Sáb: 09:00–13:00",
    ],
    mapUrl: "https://www.google.com/maps?q=40.393832772089816,-8.201443970957152",
  },
  {
    name: "🇱🇺 Hollerich, Luxemburgo",
    address: "20 Rue de Cessange, L-1320",
    note: "(Garagens ao fundo do parque da Intralux)",
    hours: ["Ter: 16:00–19:00", "Sáb: 10:00–17:00"],
    mapUrl: "https://www.google.com/maps?q=49.59765522565655,6.113726780058291",
  },
  {
    name: "🇱🇺🇫🇷 Rédange, França",
    address: "712, Rue de la Cote, F-57390",
    note: "(fronteira de Esch 🇱🇺 com Villerupt 🇫🇷)",
    hours: ["Ter: 17:00–20:00", "Sáb: 08:00–14:00"],
    mapUrl: "https://www.google.com/maps?q=49.49131506157751,5.914277619970524",
  },
];

function ContactCard({ office }: { office: typeof officePT }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 flex flex-col items-center text-center shadow-sm">
      <div className="text-4xl mb-2" aria-hidden>{office.flag}</div>
      <h3 className="font-bold text-base mb-3">{office.name}</h3>
      <a
        href={`tel:${office.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-3 text-sm font-medium"
      >
        <Phone className="h-4 w-4" />
        {office.phone}
      </a>
      <a
        href={`https://wa.me/${office.wa}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground rounded-full px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity w-full justify-center"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}

type LinkButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
};

function LinkButton({ icon, label, onClick, href }: LinkButtonProps) {
  const className =
    "w-full bg-card hover:bg-primary hover:text-primary-foreground text-foreground border border-border rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {icon}
        <span>{label}</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function LinkPage() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-background to-surface flex flex-col items-center justify-start px-4 py-10 sm:py-16">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo + header */}
        <img
          src={logo}
          alt="Transportes Carlos & César"
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-1">
          Transportes Carlos & César
        </h1>
        <p className="text-muted-foreground text-center text-sm sm:text-base mb-8">
          Portugal ⇄ Luxemburgo · há mais de 40 anos
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          <LinkButton
            icon={<Globe className="h-5 w-5" />}
            label="Website"
            href="https://www.transportescarlosecesar.com/"
          />
          <LinkButton
            icon={<Phone className="h-5 w-5" />}
            label="Contactos"
            onClick={() => setContactsOpen(true)}
          />
          <LinkButton
            icon={<MapPin className="h-5 w-5" />}
            label="Localizações"
            onClick={() => setLocationsOpen(true)}
          />
          <LinkButton
            icon={<Facebook className="h-5 w-5" />}
            label="Facebook"
            href="https://www.facebook.com/transportescarlosecesar"
          />
          <LinkButton
            icon={<Instagram className="h-5 w-5" />}
            label="Instagram"
            href="https://www.instagram.com/transportes_carlos_cesar/"
          />
        </div>

        <p className="text-xs text-muted-foreground mt-10 text-center">
          © 2026 Transportes Carlos & César
        </p>
      </div>

      {/* Contacts dialog */}
      <Dialog open={contactsOpen} onOpenChange={setContactsOpen}>
        <DialogContent className="max-w-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-center">Contactos</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <ContactCard office={officePT} />
            <ContactCard office={officeLU} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Locations dialog */}
      <Dialog open={locationsOpen} onOpenChange={setLocationsOpen}>
        <DialogContent className="max-w-2xl rounded-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-center">Os Nossos Armazéns</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 pt-2">
            {warehouses.map((w, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-4 sm:p-5 shadow-sm">
                <h3 className="font-bold text-base sm:text-lg mb-2">{w.name}</h3>
                <div className="flex items-start gap-2 text-muted-foreground text-sm mb-1">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{w.address}</span>
                </div>
                {w.note && (
                  <p className="text-xs text-muted-foreground ml-6 mb-2">{w.note}</p>
                )}
                <div className="flex items-start gap-2 text-muted-foreground text-sm mb-3">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    {w.hours.map((h, j) => (
                      <p key={j}>{h}</p>
                    ))}
                  </div>
                </div>
                <a
                  href={w.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                >
                  <Navigation className="h-4 w-4" />
                  Ver no mapa
                </a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}