import { useState, useMemo } from "react";
import { Search, MessageCircle, MapPin, AlertTriangle, Snowflake, Warehouse, Calendar } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { t, DATE_LOCALES, type Lang } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import calendarNorth from "@/assets/calendar-north-2026.png";
import calendarLisbon from "@/assets/calendar-lisbon-2026.png";
import calendarFrozen from "@/assets/calendar-frozen-2026.png";

const FROZEN_DATES_RAW: number[][] = [
  [2026,0,19],[2026,1,16],[2026,2,23],[2026,3,20],[2026,4,18],[2026,5,15],
  [2026,6,20],[2026,7,17],[2026,8,7],[2026,9,19],[2026,10,16],[2026,11,14]
];

// Cities near Mortágua warehouse
const MORTAGUA_NEARBY = ["mortágua", "mortagua", "santa comba dão", "santa comba dao", "penacova", "tondela", "campo de besteiros"];

function getNextWeekdays(dayOfWeek: number, locale: string, count = 3) {
  const dates: Date[] = [];
  const now = new Date();
  let d = new Date(now);
  while (dates.length < count) {
    if (d.getDay() === dayOfWeek && d >= now) dates.push(new Date(d));
    d = new Date(d.getTime() + 86400000);
  }
  return formatConsecutiveDates(dates, locale);
}

function getNextWeekdaysMulti(daysOfWeek: number[], locale: string, count = 3) {
  const dates: Date[] = [];
  const now = new Date();
  let d = new Date(now);
  while (dates.length < count) {
    if (daysOfWeek.includes(d.getDay()) && d >= now) dates.push(new Date(d));
    d = new Date(d.getTime() + 86400000);
  }
  return formatConsecutiveDates(dates, locale);
}

function formatConsecutiveDates(dates: Date[], locale: string): string {
  if (dates.length === 0) return "";
  
  const groups: Date[][] = [];
  let currentGroup: Date[] = [dates[0]];
  
  for (let i = 1; i < dates.length; i++) {
    const prev = dates[i - 1];
    const curr = dates[i];
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / 86400000);
    if (diffDays === 1 && curr.getMonth() === prev.getMonth()) {
      currentGroup.push(curr);
    } else {
      groups.push(currentGroup);
      currentGroup = [curr];
    }
  }
  groups.push(currentGroup);
  
  return groups.map(group => {
    if (group.length === 1) {
      return group[0].toLocaleDateString(locale, { day: "numeric", month: "long" });
    }
    const days = group.map(d => d.getDate()).join("/");
    const month = group[0].toLocaleDateString(locale, { month: "long" });
    return `${days} de ${month}`;
  }).join(", ");
}

function getNextFromList(allDates: number[][], locale: string, count = 4) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const dates = allDates
    .map(([y, m, d]) => new Date(y, m, d))
    .filter(d => d >= now)
    .slice(0, count);
  return formatConsecutiveDates(dates, locale);
}

// Calendar image mapping by route index
const ROUTE_CALENDAR: Record<number, string> = {
  3: calendarLisbon,  // Lisboa, Setúbal, Santarém, Leiria
  4: calendarNorth,   // Viana do Castelo, Vila Real, Bragança
};

const CITY_ROUTES: { cities: string[]; routeKey: TranslationKey; datesLabelKey: TranslationKey; getDates: (locale: string) => string }[] = [
  {
    cities: ["Porto","Vila Nova de Gaia","Espinho","Valongo","Ermesinde","Alfena","Rio Tinto","Gondomar","São Cosme","Fânzeres","Maia","Águas Santas","Moreira da Maia","Trofa","Vila do Conde","Póvoa de Varzim","Matosinhos","Leça da Palmeira","Senhora da Hora","São Mamede de Infesta","Santo Tirso","Rebordões","Negrelos","Paços de Ferreira","Freamunde","Lousada","Vizela","Felgueiras","Fafe","Braga","Vila Verde","Prado","Amares","Póvoa de Lanhoso","Guimarães","Caldas das Taipas","Pevidém","Joane","Vila Nova de Famalicão","Ribeirão","Riba de Ave","Oliveira São Mateus","Barcelos","Esposende","Apúlia","Fão","Aveiro","Ílhavo","Gafanha da Nazaré","Gafanha da Encarnação","Vagos","Oliveira do Bairro","Oiã","Águeda","Albergaria-a-Velha","Estarreja","Pardilhó","Avanca","Ovar","Esmoriz","Santa Maria da Feira","Fiães","São João da Madeira","Vale de Cambra","Arouca","Sever do Vouga","Mealhada","Pampilhosa","Cantanhede","Tocha","Mira","Coimbra","Cernache","Condeixa-a-Nova","Soure","Montemor-o-Velho","Lousã","Miranda do Corvo","Arganil"],
    routeKey: "route.monday",
    datesLabelKey: "route.next_trips",
    getDates: (locale) => getNextWeekdays(1, locale),
  },
  {
    cities: ["Viseu","Abraveses","Repeses","Ranhados","Bodiosa","Campo","Lordosa","São João de Lourosa","Silgueiros","Mundão","Cavernães","Coração de Jesus","Rio de Loba","Seia","São Romão","Paranhos da Beira","Santa Comba","Sabugueiro","Lapa dos Dinheiros","Loriga","Sazes da Beira","Valezim","Vide","Tábua","Midões","Mouronho","Candosa","Carapinha","São João da Boa Vista","Covas","Pinheiro de Coja","Oliveira do Hospital","Nogueira do Cravo","Lagares da Beira","Avô","Lourosa","Meruge","Ervedal da Beira","Penalva de Alva","Travanca de Lagos","Castro Daire","Mões","Moledo","Parada de Ester","Picão","Gosende","Cabril","Mezio","Monteiras","Vila Nova de Paiva","Queiriga","Touro","Pendilhe","Vila Cova à Coelheira","Sátão","Rio de Moinhos","Ferreira de Aves","Romãs","Silvã de Cima","Lamas","Lapa","Aguiar da Beira","Carapito","Dornelas","Pena Verde","Cortiçada","Forninhos","Mortágua","Vale de Remígio","Sobral","Pala","Santa Comba Dão","Treixedo","Pinheiro de Ázere","São Joaninho","Tondela","Campo de Besteiros","Castelões","Molelos","Nandufe","Canas de Santa Maria","Caramulo","Guardão","Varzielas"],
    routeKey: "route.wednesday",
    datesLabelKey: "route.next_trips",
    getDates: (locale) => {
      return getNextWeekdaysMulti([3, 5], locale, 3);
    },
  },
  {
    cities: ["Guarda","Mangualde","Abrunhosa-a-Velha","Cunha Baixa","Quintela de Azurara","Mesquitela","Moimenta de Maceira Dão","Alcafache","Fornos de Algodres","Algodres","Figueiró da Granja","Casal Vasco","Infias","Juncais","Maceira","Vila Chã","Celorico da Beira","Lageosa do Mondego","Fornotelheiro","Linhares da Beira","Baraçal","Prados","Açores","Trancoso","Freches","Torres","Tamanhos","Valdujo","Vila Franca das Naves","Reboleiro","Pinhel","Alverca da Beira","Souropires","Valbom","Freixedas","Atalaia","Safurdão","Méda","Longroiva","Vale Flor","Poço do Canto","Prova","Aveloso","Adão","Gonçalo","Famalicão da Serra","Videmonte","Maçainhas","Benespera","Belmonte","Caria","Colmeal da Torre","Covilhã","Tortosendo","Teixoso","Canhoso","Boidobra","Ferro","Orjais","Verdelhos","Paul","Unhais da Serra","Fundão","Silvares","Alpedrinha","Soalheira","Vale de Prazeres","Castelo Novo","Donas","Fatela","Pêro Viseu","Castelo Branco","Alcains","Lardosa","Escalos de Baixo","Escalos de Cima","Cebolais de Cima","Retaxo","Benquerenças","Penamacor","Aranhas","Aldeia do Bispo","Bemposta","Meimoa"],
    routeKey: "route.tuesday",
    datesLabelKey: "route.next_trips",
    getDates: (locale) => getNextWeekdays(2, locale),
  },
  {
    cities: ["Lisboa","Amadora","Alfragide","Queluz","Massamá","Monte Abraão","Cacém","Rio de Mouro","Sintra","Mem Martins","Algueirão","Belas","Odivelas","Pontinha","Caneças","Loures","Sacavém","Moscavide","Portela","Prior Velho","Bobadela","Santa Iria de Azóia","São João da Talha","Bucelas","Vila Franca de Xira","Alverca do Ribatejo","Póvoa de Santa Iria","Forte da Casa","Vialonga","Castanheira do Ribatejo","Carregado","Alenquer","Azambuja","Aveiras de Cima","Aveiras de Baixo","Vila Nova da Rainha","Arruda dos Vinhos","Sobral de Monte Agraço","Torres Vedras","Malveira","Mafra","Ericeira","Venda do Pinheiro","Milharado","Lourinhã","Bombarral","Cadaval","Oeiras","Paço de Arcos","Carnaxide","Algés","Linda-a-Velha","Cruz Quebrada","Cascais","Estoril","Carcavelos","Parede","São Domingos de Rana","Alcabideche","Setúbal","Azeitão","Palmela","Pinhal Novo","Quinta do Anjo","Montijo","Alcochete","Samouco","Barreiro","Lavradio","Baixa da Banheira","Moita","Alhos Vedros","Seixal","Arrentela","Amora","Corroios","Fernão Ferro","Almada","Cacilhas","Costa da Caparica","Charneca da Caparica","Trafaria","Sesimbra","Quinta do Conde","Santiago do Cacém","Santo André","Sines","Grândola","Alcácer do Sal","Santarém","Cartaxo","Almeirim","Alpiarça","Rio Maior","Benavente","Samora Correia","Salvaterra de Magos","Coruche","Chamusca","Golegã","Entroncamento","Torres Novas","Riachos","Tomar","Ourém","Fátima","Abrantes","Constância","Vila Nova da Barquinha","Mação","Sardoal","Ferreira do Zêzere","Alcanena","Mira de Aire","Minde","Leiria","Marinha Grande","Vieira de Leiria","Batalha","Porto de Mós","Juncal","Pombal","Meirinhas","Redinha","Ansião","Alvaiázere","Figueiró dos Vinhos","Castanheira de Pera","Pedrógão Grande","Caldas da Rainha","Óbidos","Gaeiras","Peniche","Atouguia da Baleia","Nazaré"],
    routeKey: "route.biweekly",
    datesLabelKey: "route.next_dates",
    getDates: (locale) => getNextFromList([
      [2026,0,16],[2026,0,17],[2026,0,30],[2026,0,31],
      [2026,1,13],[2026,1,14],[2026,1,27],[2026,1,28],
      [2026,2,13],[2026,2,14],[2026,2,27],[2026,2,28],
      [2026,3,10],[2026,3,11],[2026,3,17],[2026,3,18],
      [2026,4,8],[2026,4,9],[2026,4,22],[2026,4,23],
      [2026,5,5],[2026,5,6],[2026,5,19],[2026,5,20],
      [2026,6,3],[2026,6,4],[2026,6,17],[2026,6,18],[2026,6,31],
      [2026,7,1],[2026,7,14],[2026,7,15],[2026,7,28],[2026,7,29],
      [2026,8,11],[2026,8,12],
      [2026,9,9],[2026,9,10],[2026,9,23],[2026,9,24],
      [2026,10,6],[2026,10,7],[2026,10,20],[2026,10,21],
      [2026,11,4],[2026,11,5],[2026,11,11],[2026,11,12],
    ], locale),
  },
  {
    cities: ["Viana do Castelo","Darque","Meadela","Areosa","Santa Marta de Portuzelo","Barroselas","Carreço","Afife","Vila Praia de Âncora","Âncora","Caminha","Seixas","Lanhelas","Vila Nova de Cerveira","Gondarém","Reboreda","Valença","Arão","Friestas","Monção","Mazedo","Troviscoso","Melgaço","Penso","Arcos de Valdevez","Ponte da Barca","Ponte de Lima","Feitosa","Arcozelo","Freixo","Vila Real","Lordelo","Mateus","Andrães","Adoufe","Campeã","Vila Pouca de Aguiar","Pedras Salgadas","Ribeira de Pena","Mondim de Basto","Alijó","Favaios","Murça","Sabrosa","Peso da Régua","Godim","Santa Marta de Penaguião","Mesão Frio","Chaves","Vidago","Valpaços","Carrazedo de Montenegro","Bragança","Izeda","Macedo de Cavaleiros","Morais","Mirandela","Carvalhais","Torre de Dona Chama","Vila Flor","Alfândega da Fé","Mogadouro","Vimioso","Miranda do Douro"],
    routeKey: "route.north",
    datesLabelKey: "route.next_dates",
    getDates: (locale) => getNextFromList([
      [2026,0,5],[2026,0,19],[2026,1,2],[2026,1,16],[2026,2,9],[2026,2,30],
      [2026,3,13],[2026,4,11],[2026,5,8],[2026,6,13],[2026,6,27],
      [2026,7,10],[2026,7,24],[2026,8,14],[2026,9,12],[2026,10,9],[2026,10,30],[2026,11,14]
    ], locale),
  },
];

// District → route index mapping (-1 = Luxembourg special)
const DISTRICT_ROUTES: Record<string, number> = {
  "porto": 0, "braga": 0, "aveiro": 0, "coimbra": 0,
  "viseu": 1,
  "guarda": 2, "castelo branco": 2,
  "lisboa": 3, "setubal": 3, "santarem": 3, "leiria": 3,
  "viana do castelo": 4, "vila real": 4, "braganca": 4,
  "luxemburgo": -1, "luxembourg": -1,
};

const NOT_COVERED_DISTRICTS = ["faro", "beja", "evora", "portalegre"];

function normalize(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const ALL_DISTRICTS = [
  "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra",
  "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Luxemburgo", "Portalegre",
  "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu",
];

type FinderState = "search" | "ask_district" | "result" | "not_covered" | "not_found" | "luxembourg" | "frozen";

export default function SmartFinder() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<FinderState>("search");
  const [selectedResult, setSelectedResult] = useState<{ route: string; dates: string; cityName?: string; routeIdx?: number } | null>(null);
  const [calendarImage, setCalendarImage] = useState<string | null>(null);
  const { lang } = useLang();
  const locale = DATE_LOCALES[lang];

  // Check for "congelados" special keyword
  const isFrozenSearch = useMemo(() => {
    if (state !== "search" || query.length < 3) return false;
    return normalize("congelados").includes(normalize(query)) && normalize(query).length >= 3;
  }, [query, state]);

  const suggestions = useMemo(() => {
    if (state !== "search" || query.length < 2 || isFrozenSearch) return [];
    const q = normalize(query);
    const results: { city: string; routeIdx: number }[] = [];
    CITY_ROUTES.forEach((r, idx) => {
      r.cities.forEach(c => {
        if (normalize(c).includes(q)) results.push({ city: c, routeIdx: idx });
      });
    });
    return results.slice(0, 8);
  }, [query, state, isFrozenSearch]);

  const showAskDistrict = useMemo(() => {
    if (state !== "search") return false;
    if (query.length < 3) return false;
    if (suggestions.length > 0) return false;
    if (isFrozenSearch) return false;
    return true;
  }, [query, suggestions, state, isFrozenSearch]);

  const districtSuggestions = useMemo(() => {
    if (!showAskDistrict) return [];
    const q = normalize(query);
    return ALL_DISTRICTS.filter(d => normalize(d).includes(q));
  }, [query, showAskDistrict]);

  const isNearMortagua = (cityName?: string) => {
    if (!cityName) return false;
    return MORTAGUA_NEARBY.includes(normalize(cityName));
  };

  const handleSelect = (routeIdx: number, cityName?: string) => {
    const r = CITY_ROUTES[routeIdx];
    
    let route = t(r.routeKey, lang);
    let dates = r.getDates(locale);
    
    if (cityName && normalize(cityName) === "penacova") {
      route = t("route.penacova", lang);
      const mondayDates = getNextWeekdays(1, locale, 2);
      const regularDates = r.getDates(locale);
      dates = `${mondayDates}, ${regularDates}`;
    }
    
    setSelectedResult({
      route,
      dates: `${t(r.datesLabelKey, lang)}: ${dates}`,
      cityName,
      routeIdx,
    });
    setState("result");
    setQuery("");
  };

  const handleDistrictSelect = (district: string) => {
    const norm = normalize(district);
    if (NOT_COVERED_DISTRICTS.includes(norm)) {
      setState("not_covered");
      setQuery("");
      return;
    }
    const routeIdx = DISTRICT_ROUTES[norm];
    if (routeIdx === -1) {
      setState("luxembourg");
      setQuery("");
      return;
    }
    if (routeIdx !== undefined) {
      handleSelect(routeIdx);
    } else {
      setState("not_found");
      setQuery("");
    }
  };

  const handleInputChange = (val: string) => {
    setQuery(val);
    setSelectedResult(null);
    setState("search");
  };

  // Get calendar image for current route
  const currentCalendarImage = selectedResult?.routeIdx !== undefined ? ROUTE_CALENDAR[selectedResult.routeIdx] : undefined;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={t("finder.placeholder", lang)}
          className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-4 sm:py-5 bg-card border border-border rounded-2xl sm:rounded-3xl text-base sm:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground"
        />
        {/* City suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl sm:rounded-2xl shadow-lg overflow-hidden z-50 max-h-64 overflow-y-auto">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => handleSelect(s.routeIdx, s.city)}
                className="w-full text-left px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-surface transition-colors text-foreground text-sm sm:text-base">
                {s.city}
              </button>
            ))}
          </div>
        )}

        {/* Frozen suggestion */}
        {isFrozenSearch && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl sm:rounded-2xl shadow-lg overflow-hidden z-50">
            <button onClick={() => { setState("frozen"); setQuery(""); }}
              className="w-full text-left px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-surface transition-colors text-foreground text-sm sm:text-base flex items-center gap-2">
              <Snowflake className="h-4 w-4 text-primary" />
              {t("finder.frozen_title", lang)}
            </button>
          </div>
        )}

        {/* Ask district fallback */}
        {showAskDistrict && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl sm:rounded-2xl shadow-lg overflow-hidden z-50 max-h-72 overflow-y-auto">
            <div className="px-4 sm:px-6 py-3 border-b border-border">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t("finder.ask_district", lang)}
              </p>
            </div>
            {districtSuggestions.length > 0 ? (
              districtSuggestions.map((d, i) => (
                <button key={i} onClick={() => handleDistrictSelect(d)}
                  className="w-full text-left px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-surface transition-colors text-foreground text-sm sm:text-base">
                  {d}
                </button>
              ))
            ) : (
              ALL_DISTRICTS.map((d, i) => (
                <button key={i} onClick={() => handleDistrictSelect(d)}
                  className="w-full text-left px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-surface transition-colors text-foreground text-sm sm:text-base">
                  {d}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Route result */}
      {state === "result" && selectedResult && (
        <div className="mt-4 sm:mt-6 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-1">{selectedResult.route}</p>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{selectedResult.dates}</p>
          
          {/* Mortágua proximity message */}
          {isNearMortagua(selectedResult.cityName) && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-foreground flex items-start gap-2">
                <Warehouse className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                {t("finder.near_mortagua", lang)}
              </p>
              <a
                href="#armazens"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium mt-2 ml-7"
              >
                {t("finder.see_warehouses", lang)} →
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/351917405318?text=${encodeURIComponent(t("finder.wa_text", lang))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              {t("finder.schedule", lang)}
            </a>
            {currentCalendarImage && (
              <button
                onClick={() => setCalendarImage(currentCalendarImage)}
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:bg-accent transition-colors"
              >
                <Calendar className="h-5 w-5" />
                {t("finder.all_routes", lang)}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Not covered */}
      {state === "not_covered" && (
        <div className="mt-4 sm:mt-6 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-base sm:text-lg text-foreground flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
            {t("finder.not_covered", lang)}
          </p>
        </div>
      )}

      {/* Not found */}
      {state === "not_found" && (
        <div className="mt-4 sm:mt-6 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-base sm:text-lg text-foreground mb-4">
            {t("finder.not_found", lang)}
          </p>
          <a
            href="tel:+351231922340"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity"
          >
            📞 +351 231 922 340
          </a>
        </div>
      )}

      {/* Luxembourg */}
      {state === "luxembourg" && (
        <div className="mt-4 sm:mt-6 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-4">
            {t("finder.luxembourg", lang)}
          </p>
          <a
            href={`https://wa.me/351917405318?text=${encodeURIComponent(t("finder.wa_text", lang))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            {t("finder.schedule", lang)}
          </a>
        </div>
      )}

      {/* Frozen dates */}
      {state === "frozen" && (
        <div className="mt-4 sm:mt-6 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-1 flex items-center gap-2">
            <Snowflake className="h-5 w-5 text-primary" />
            {t("finder.frozen_title", lang)}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            {t("finder.frozen_dates", lang)}: {getNextFromList(FROZEN_DATES_RAW, locale, 4)}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/351231922340?text=Olá! Gostaria de saber mais sobre o serviço de congelados."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              {t("finder.schedule", lang)}
            </a>
            <button
              onClick={() => setCalendarImage(calendarFrozen)}
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:bg-accent transition-colors"
            >
              <Calendar className="h-5 w-5" />
              {t("finder.all_routes", lang)}
            </button>
          </div>
        </div>
      )}

      {/* Calendar popup */}
      <Dialog open={!!calendarImage} onOpenChange={(open) => !open && setCalendarImage(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-2 sm:p-4">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              {t("finder.all_routes", lang)}
            </DialogTitle>
          </DialogHeader>
          {calendarImage && (
            <img
              src={calendarImage}
              alt="Calendário de rotas 2026"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
