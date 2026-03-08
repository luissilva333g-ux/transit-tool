export type Lang = "pt" | "en" | "fr" | "de";

export const LANG_LABELS: Record<Lang, string> = {
  pt: "PT",
  en: "EN",
  fr: "FR",
  de: "DE",
};

const translations = {
  // Navbar
  "nav.warehouses": { pt: "Armazéns", en: "Warehouses", fr: "Entrepôts", de: "Lager" },
  "nav.frozen": { pt: "Congelados", en: "Frozen Goods", fr: "Surgelés", de: "Tiefkühlware" },
  "nav.prepare": { pt: "Preparar Envio", en: "Prepare Shipment", fr: "Préparer l'envoi", de: "Sendung vorbereiten" },
  "nav.faq": { pt: "FAQ", en: "FAQ", fr: "FAQ", de: "FAQ" },
  "nav.contacts": { pt: "Contactos", en: "Contacts", fr: "Contacts", de: "Kontakte" },

  // Closure banner
  "closure.jan": { pt: "Encerrados de 1 a 4 de Janeiro", en: "Closed from January 1 to 4", fr: "Fermé du 1er au 4 janvier", de: "Geschlossen vom 1. bis 4. Januar" },
  "closure.apr": { pt: "Encerrados de 27 de Abril a 3 de Maio", en: "Closed from April 27 to May 3", fr: "Fermé du 27 avril au 3 mai", de: "Geschlossen vom 27. April bis 3. Mai" },
  "closure.sep": { pt: "Encerrados de 21 de Setembro a 4 de Outubro", en: "Closed from September 21 to October 4", fr: "Fermé du 21 septembre au 4 octobre", de: "Geschlossen vom 21. September bis 4. Oktober" },
  "closure.dec": { pt: "Encerrados de 20 a 31 de Dezembro", en: "Closed from December 20 to 31", fr: "Fermé du 20 au 31 décembre", de: "Geschlossen vom 20. bis 31. Dezember" },
  "closure.suffix": { pt: "Voltamos em breve!", en: "We'll be back soon!", fr: "Nous revenons bientôt !", de: "Wir sind bald zurück!" },

  // Hero
  "hero.tagline": { pt: "Há mais de 30 anos ao seu serviço", en: "Serving you for over 30 years", fr: "À votre service depuis plus de 30 ans", de: "Seit über 30 Jahren zu Ihrem Dienst" },
  "hero.title": { pt: "Portugal ⇄ Luxemburgo", en: "Portugal ⇄ Luxembourg", fr: "Portugal ⇄ Luxembourg", de: "Portugal ⇄ Luxemburg" },
  "hero.subtitle": { pt: "Transporte de mercadorias porta-a-porta com a confiança de sempre.", en: "Door-to-door freight transport you can always trust.", fr: "Transport de marchandises porte-à-porte en toute confiance.", de: "Tür-zu-Tür-Frachttransport, dem Sie vertrauen können." },

  // Smart Finder
  "finder.placeholder": { pt: "Para onde quer enviar a sua mercadoria?", en: "Where do you want to send your goods?", fr: "Où voulez-vous envoyer votre marchandise ?", de: "Wohin möchten Sie Ihre Ware senden?" },
  "finder.schedule": { pt: "Agendar recolha (WhatsApp)", en: "Schedule pickup (WhatsApp)", fr: "Planifier un enlèvement (WhatsApp)", de: "Abholung planen (WhatsApp)" },
  "finder.wa_text": { pt: "Olá! Gostaria de agendar uma recolha.", en: "Hello! I'd like to schedule a pickup.", fr: "Bonjour ! Je souhaite planifier un enlèvement.", de: "Hallo! Ich möchte eine Abholung planen." },

  // Route descriptions
  "route.monday": { pt: "Passamos na sua zona todas as Segundas-feiras.", en: "We pass through your area every Monday.", fr: "Nous passons dans votre zone tous les lundis.", de: "Wir fahren jeden Montag durch Ihre Gegend." },
  "route.wednesday": { pt: "Passamos na sua zona 2x por semana (Quarta-feira e Sexta ou Sábado).", en: "We pass through your area twice a week (Wednesday and Friday or Saturday).", fr: "Nous passons dans votre zone 2x par semaine (mercredi et vendredi ou samedi).", de: "Wir fahren 2x pro Woche durch Ihre Gegend (Mittwoch und Freitag oder Samstag)." },
  "route.tuesday": { pt: "Passamos na sua zona todas as Terças-feiras (tarde).", en: "We pass through your area every Tuesday (afternoon).", fr: "Nous passons dans votre zone tous les mardis (après-midi).", de: "Wir fahren jeden Dienstag (nachmittags) durch Ihre Gegend." },
  "route.biweekly": { pt: "Rota Quinzenal (Sexta e Sábado).", en: "Biweekly route (Friday and Saturday).", fr: "Route bimensuelle (vendredi et samedi).", de: "Zweiwöchentliche Route (Freitag und Samstag)." },
  "route.north": { pt: "Rota Norte Especial (datas específicas).", en: "Special Northern Route (specific dates).", fr: "Route Nord spéciale (dates spécifiques).", de: "Spezielle Nordroute (bestimmte Termine)." },
  "route.next_trips": { pt: "Próximas viagens", en: "Next trips", fr: "Prochains voyages", de: "Nächste Fahrten" },
  "route.next_dates": { pt: "Próximas datas", en: "Upcoming dates", fr: "Prochaines dates", de: "Nächste Termine" },

  // Features
  "feat.door_title": { pt: "Porta-a-Porta", en: "Door-to-Door", fr: "Porte-à-Porte", de: "Tür-zu-Tür" },
  "feat.door_desc": { pt: "Recolhemos e entregamos ao domicílio em toda a rota.", en: "We pick up and deliver to your home across the entire route.", fr: "Nous collectons et livrons à domicile sur tout le trajet.", de: "Wir holen ab und liefern entlang der gesamten Route." },
  "feat.years_title": { pt: "+30 Anos", en: "+30 Years", fr: "+30 Ans", de: "+30 Jahre" },
  "feat.years_desc": { pt: "Experiência e confiança na rota Portugal ⇄ Luxemburgo.", en: "Experience and trust on the Portugal ⇄ Luxembourg route.", fr: "Expérience et confiance sur la route Portugal ⇄ Luxembourg.", de: "Erfahrung und Vertrauen auf der Route Portugal ⇄ Luxemburg." },
  "feat.free_title": { pt: "Sem Taxas Extra", en: "No Extra Fees", fr: "Sans Frais Supplémentaires", de: "Keine Zusatzkosten" },
  "feat.free_desc": { pt: "Armazenamento gratuito. A mercadoria aguarda sem custos.", en: "Free storage. Your goods wait at no extra cost.", fr: "Stockage gratuit. Vos marchandises attendent sans frais.", de: "Kostenlose Lagerung. Ihre Waren warten ohne Zusatzkosten." },
  "feat.coverage_title": { pt: "Cobertura Total", en: "Full Coverage", fr: "Couverture Totale", de: "Vollständige Abdeckung" },
  "feat.coverage_desc": { pt: "De Bragança ao Alentejo, passamos na sua zona.", en: "From Bragança to Alentejo, we cover your area.", fr: "De Bragança à l'Alentejo, nous couvrons votre zone.", de: "Von Bragança bis zum Alentejo, wir decken Ihr Gebiet ab." },

  // Warehouses
  "wh.title": { pt: "Os Nossos Armazéns", en: "Our Warehouses", fr: "Nos Entrepôts", de: "Unsere Lager" },
  "wh.subtitle": { pt: "Pontos de recolha e entrega estratégicos", en: "Strategic pickup and delivery points", fr: "Points de collecte et de livraison stratégiques", de: "Strategische Abhol- und Lieferpunkte" },
  "wh.central": { pt: "Ponto Central", en: "Central Hub", fr: "Point Central", de: "Zentraler Knotenpunkt" },
  "wh.border": { pt: "Fronteira Luxemburgo", en: "Luxembourg Border", fr: "Frontière Luxembourg", de: "Grenze Luxemburg" },
  "wh.note_mortagua": { pt: "(junto ao bar Tirikeda)", en: "(next to bar Tirikeda)", fr: "(à côté du bar Tirikeda)", de: "(neben der Bar Tirikeda)" },
  "wh.note_hollerich": { pt: "(Garagens ao fundo do parque da Intralux)", en: "(Garages at the back of the Intralux park)", fr: "(Garages au fond du parc Intralux)", de: "(Garagen am Ende des Intralux-Parks)" },
  "wh.note_redange": { pt: "(fronteira de Esch 🇱🇺 com Villerupt 🇫🇷)", en: "(border of Esch 🇱🇺 with Villerupt 🇫🇷)", fr: "(frontière d'Esch 🇱🇺 avec Villerupt 🇫🇷)", de: "(Grenze von Esch 🇱🇺 mit Villerupt 🇫🇷)" },

  // Frozen
  "frozen.badge": { pt: "Serviço Frigorífico", en: "Refrigerated Service", fr: "Service Réfrigéré", de: "Kühltransport" },
  "frozen.title": { pt: "Congelados Portugal → Luxemburgo", en: "Frozen Goods Portugal → Luxembourg", fr: "Surgelés Portugal → Luxembourg", de: "Tiefkühlware Portugal → Luxemburg" },
  "frozen.desc": { pt: "Saída às Segundas-feiras, chegada às Quintas. Levantamento no Luxemburgo entre 16:00 e 18:30.", en: "Departure on Mondays, arrival on Thursdays. Pickup in Luxembourg between 4:00 PM and 6:30 PM.", fr: "Départ le lundi, arrivée le jeudi. Retrait au Luxembourg entre 16h00 et 18h30.", de: "Abfahrt montags, Ankunft donnerstags. Abholung in Luxemburg zwischen 16:00 und 18:30." },
  "frozen.dates_label": { pt: "Datas de saída 2026:", en: "2026 departure dates:", fr: "Dates de départ 2026 :", de: "Abfahrtstermine 2026:" },
  "frozen.contact": { pt: "Contactar César (Luxemburgo)", en: "Contact César (Luxembourg)", fr: "Contacter César (Luxembourg)", de: "César kontaktieren (Luxemburg)" },

  // Prepare
  "prep.title": { pt: "Preparar o Envio", en: "Prepare Your Shipment", fr: "Préparer l'Envoi", de: "Sendung Vorbereiten" },
  "prep.subtitle": { pt: "O guia simplificado para que a sua mercadoria chegue em segurança.", en: "A simple guide to ensure your goods arrive safely.", fr: "Le guide simplifié pour que vos marchandises arrivent en toute sécurité.", de: "Eine einfache Anleitung, damit Ihre Ware sicher ankommt." },
  "prep.pack_title": { pt: "Embalamento", en: "Packaging", fr: "Emballage", de: "Verpackung" },
  "prep.pack_desc": { pt: "O cliente é responsável pela embalagem. Use caixas fortes e fita adesiva larga.", en: "The customer is responsible for packaging. Use strong boxes and wide tape.", fr: "Le client est responsable de l'emballage. Utilisez des boîtes solides et du ruban adhésif large.", de: "Der Kunde ist für die Verpackung verantwortlich. Verwenden Sie stabile Kartons und breites Klebeband." },
  "prep.label_title": { pt: "Identificação", en: "Labeling", fr: "Identification", de: "Kennzeichnung" },
  "prep.label_desc": { pt: "Obrigatório colocar Nome, Morada e Telefone (remetente e destinatário) em cada volume.", en: "Name, Address and Phone (sender and recipient) must be on every package.", fr: "Nom, adresse et téléphone (expéditeur et destinataire) obligatoires sur chaque colis.", de: "Name, Adresse und Telefon (Absender und Empfänger) müssen auf jedem Paket stehen." },
  "prep.fragile_title": { pt: "Frágeis", en: "Fragile Items", fr: "Fragiles", de: "Zerbrechlich" },
  "prep.fragile_desc": { pt: "TVs e eletrónicos devem ir na caixa original com proteção reforçada.", en: "TVs and electronics must be in their original box with extra protection.", fr: "Les TV et appareils électroniques doivent être dans leur boîte d'origine avec protection renforcée.", de: "Fernseher und Elektronik müssen in der Originalverpackung mit zusätzlichem Schutz sein." },
  "prep.frozen_title": { pt: "Congelados", en: "Frozen Goods", fr: "Surgelés", de: "Tiefkühlware" },
  "prep.frozen_desc": { pt: "Uso obrigatório de geleiras térmicas ou esferovite adequadas.", en: "Thermal coolers or proper polystyrene boxes are mandatory.", fr: "L'utilisation de glacières thermiques ou de polystyrène approprié est obligatoire.", de: "Thermokühler oder geeignete Styroporboxen sind Pflicht." },

  // FAQ
  "faq.title": { pt: "Regras de Ouro", en: "Golden Rules", fr: "Règles d'Or", de: "Goldene Regeln" },
  "faq.subtitle": { pt: "Perguntas frequentes", en: "Frequently asked questions", fr: "Questions fréquentes", de: "Häufig gestellte Fragen" },
  "faq.q1": { pt: "Onde entregam?", en: "Where do you deliver?", fr: "Où livrez-vous ?", de: "Wohin liefern Sie?" },
  "faq.a1": { pt: "Porta-a-porta, mas apenas ao nível do rés-do-chão ou porta do prédio. O motorista não sobe escadas nem entra em domicílios.", en: "Door-to-door, but only at ground floor level or building entrance. The driver does not climb stairs or enter homes.", fr: "Porte-à-porte, mais uniquement au rez-de-chaussée ou à l'entrée de l'immeuble. Le chauffeur ne monte pas les escaliers.", de: "Tür-zu-Tür, aber nur im Erdgeschoss oder am Gebäudeeingang. Der Fahrer steigt keine Treppen und betritt keine Wohnungen." },
  "faq.q2": { pt: "Como pago?", en: "How do I pay?", fr: "Comment payer ?", de: "Wie bezahle ich?" },
  "faq.a2": { pt: "Numerário ou Multibanco. Confirme se a carrinha tem terminal no momento do agendamento.", en: "Cash or card terminal. Confirm terminal availability when scheduling.", fr: "Espèces ou terminal de paiement. Confirmez la disponibilité du terminal lors de la réservation.", de: "Bar oder Kartenterminal. Bestätigen Sie die Verfügbarkeit des Terminals bei der Buchung." },
  "faq.q3": { pt: "O que é proibido?", en: "What is prohibited?", fr: "Qu'est-ce qui est interdit ?", de: "Was ist verboten?" },
  "faq.a3": { pt: "Explosivos, pirotecnia, animais vivos, baterias de lítio soltas, armas, substâncias ilícitas e produtos inflamáveis ou corrosivos.", en: "Explosives, pyrotechnics, live animals, loose lithium batteries, weapons, illicit substances, and flammable or corrosive products.", fr: "Explosifs, pyrotechnie, animaux vivants, batteries au lithium en vrac, armes, substances illicites et produits inflammables ou corrosifs.", de: "Sprengstoff, Pyrotechnik, lebende Tiere, lose Lithiumbatterien, Waffen, illegale Substanzen und brennbare oder ätzende Produkte." },
  "faq.q4": { pt: "Cobram taxas de armazém?", en: "Do you charge storage fees?", fr: "Y a-t-il des frais d'entrepôt ?", de: "Erheben Sie Lagergebühren?" },
  "faq.a4": { pt: "Não. A mercadoria aguarda a viagem no nosso armazém sem custos extra.", en: "No. Your goods wait in our warehouse at no extra cost.", fr: "Non. Vos marchandises attendent dans notre entrepôt sans frais supplémentaires.", de: "Nein. Ihre Waren warten kostenlos in unserem Lager." },
  "faq.q5": { pt: "Há restrições de peso ou medida?", en: "Are there weight or size restrictions?", fr: "Y a-t-il des restrictions de poids ou de taille ?", de: "Gibt es Gewichts- oder Größenbeschränkungen?" },
  "faq.a5": { pt: "Não existem restrições, mas mercadorias de grande porte (sofás, máquinas, etc.) exigem aviso prévio no agendamento.", en: "No restrictions, but large items (sofas, machines, etc.) require advance notice when scheduling.", fr: "Pas de restrictions, mais les objets volumineux (canapés, machines, etc.) nécessitent un préavis.", de: "Keine Einschränkungen, aber große Gegenstände (Sofas, Maschinen usw.) erfordern eine Voranmeldung." },
  "faq.q6": { pt: "Como agendo uma recolha?", en: "How do I schedule a pickup?", fr: "Comment planifier un enlèvement ?", de: "Wie plane ich eine Abholung?" },
  "faq.a6": { pt: "Por WhatsApp ou telefone, com o máximo de antecedência possível. Cancelamentos devem ser comunicados atempadamente.", en: "Via WhatsApp or phone, with as much advance notice as possible. Cancellations must be communicated promptly.", fr: "Par WhatsApp ou téléphone, avec le plus de préavis possible. Les annulations doivent être communiquées rapidement.", de: "Per WhatsApp oder Telefon, mit so viel Vorlauf wie möglich. Stornierungen müssen rechtzeitig mitgeteilt werden." },
  "faq.q7": { pt: "Posso enviar dinheiro ou joias?", en: "Can I send money or jewelry?", fr: "Puis-je envoyer de l'argent ou des bijoux ?", de: "Kann ich Geld oder Schmuck senden?" },
  "faq.a7": { pt: "Não recomendamos. O envio de itens de valor elevado sem declaração prévia é da inteira responsabilidade do cliente.", en: "Not recommended. Sending high-value items without prior declaration is entirely the customer's responsibility.", fr: "Déconseillé. L'envoi d'objets de grande valeur sans déclaration préalable est sous l'entière responsabilité du client.", de: "Nicht empfohlen. Der Versand von hochwertigen Gegenständen ohne vorherige Erklärung liegt in der alleinigen Verantwortung des Kunden." },

  // Footer
  "footer.title": { pt: "Contactos", en: "Contacts", fr: "Contacts", de: "Kontakte" },
  "footer.hq": { pt: "Sede Mortágua", en: "HQ Mortágua", fr: "Siège Mortágua", de: "Hauptsitz Mortágua" },
  "footer.management": { pt: "Carlos (Gestão)", en: "Carlos (Management)", fr: "Carlos (Direction)", de: "Carlos (Leitung)" },
  "footer.logistics": { pt: "Luís (Logística)", en: "Luís (Logistics)", fr: "Luís (Logistique)", de: "Luís (Logistik)" },
  "footer.luxembourg": { pt: "César (Luxemburgo)", en: "César (Luxembourg)", fr: "César (Luxembourg)", de: "César (Luxemburg)" },
  "footer.copyright": { pt: "Todos os direitos reservados.", en: "All rights reserved.", fr: "Tous droits réservés.", de: "Alle Rechte vorbehalten." },
  "footer.tagline": { pt: "Mais de 30 anos na rota Portugal ⇄ Luxemburgo.", en: "Over 30 years on the Portugal ⇄ Luxembourg route.", fr: "Plus de 30 ans sur la route Portugal ⇄ Luxembourg.", de: "Über 30 Jahre auf der Route Portugal ⇄ Luxemburg." },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? translations[key]?.pt ?? key;
}

// Date locale mapping
export const DATE_LOCALES: Record<Lang, string> = {
  pt: "pt-PT",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
};
