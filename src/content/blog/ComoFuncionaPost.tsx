import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, Calendar, Warehouse, MessageCircle, Phone } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import portaAPorta from "@/assets/blog-porta-a-porta.jpg";

type Dict = Record<Lang, string>;

const T = {
  // Inline link labels
  lnk_frozen: { pt: "serviço de congelados", en: "frozen goods service", fr: "service de surgelés", de: "Tiefkühl-Service" } as Dict,
  lnk_localities: { pt: "localidades próximas", en: "nearby localities", fr: "localités voisines", de: "umliegende Orte" } as Dict,
  lnk_lisboa: { pt: "Lisboa, Santarém e Setúbal", en: "Lisbon, Santarém and Setúbal", fr: "Lisbonne, Santarém et Setúbal", de: "Lissabon, Santarém und Setúbal" } as Dict,
  lnk_whatsapp: { pt: "WhatsApp do escritório", en: "office WhatsApp", fr: "WhatsApp du bureau", de: "WhatsApp des Büros" } as Dict,

  // Localities popup
  loc_title: { pt: "Localidades próximas — rota de terça-feira", en: "Nearby localities — Tuesday route", fr: "Localités voisines — itinéraire du mardi", de: "Umliegende Orte — Dienstagsroute" } as Dict,
  loc_desc: { pt: "Distritos da Guarda e Castelo Branco. Se a sua localidade não estiver listada, contacte-nos — muitas vezes conseguimos adaptar.", en: "Guarda and Castelo Branco districts. If your locality isn't listed, contact us — we can often adapt.", fr: "Districts de Guarda et Castelo Branco. Si votre localité n'est pas listée, contactez-nous — nous pouvons souvent nous adapter.", de: "Bezirke Guarda und Castelo Branco. Falls Ihr Ort nicht aufgelistet ist, kontaktieren Sie uns — wir können uns oft anpassen." } as Dict,

  // Lisboa popup
  lis_title: { pt: "Rota Lisboa, Santarém e Setúbal — 2026", en: "Lisbon, Santarém and Setúbal route — 2026", fr: "Itinéraire Lisbonne, Santarém et Setúbal — 2026", de: "Route Lissabon, Santarém und Setúbal — 2026" } as Dict,
  lis_desc: { pt: "Passamos nesta rota em datas pontuais ao longo do ano. Para confirmar a próxima passagem e marcar a recolha, fale connosco.", en: "We cover this route on selected dates throughout the year. To confirm the next passage and schedule a pickup, contact us.", fr: "Nous couvrons cet itinéraire à des dates ponctuelles tout au long de l'année. Pour confirmer le prochain passage et planifier l'enlèvement, contactez-nous.", de: "Wir bedienen diese Route an ausgewählten Terminen im Jahr. Um den nächsten Durchgang zu bestätigen und eine Abholung zu vereinbaren, kontaktieren Sie uns." } as Dict,
  lis_cta: { pt: "Consultar próxima passagem por WhatsApp", en: "Check next passage on WhatsApp", fr: "Vérifier le prochain passage sur WhatsApp", de: "Nächsten Durchgang per WhatsApp prüfen" } as Dict,

  // Warehouses popup
  wh_title: { pt: "Os nossos armazéns", en: "Our warehouses", fr: "Nos entrepôts", de: "Unsere Lager" } as Dict,
  wh_desc: { pt: "Pode levantar ou entregar mercadoria diretamente em qualquer um dos nossos armazéns.", en: "You can drop off or pick up goods directly at any of our warehouses.", fr: "Vous pouvez déposer ou récupérer la marchandise directement dans l'un de nos entrepôts.", de: "Sie können Waren in jedem unserer Lager abholen oder abgeben." } as Dict,
  wh_directions: { pt: "Ver no mapa", en: "View on map", fr: "Voir sur la carte", de: "Auf Karte ansehen" } as Dict,

  // CTA buttons
  cta_quote: { pt: "Pedir orçamento", en: "Request a quote", fr: "Demander un devis", de: "Angebot anfordern" } as Dict,
  cta_warehouses: { pt: "Ver localizações dos nossos armazéns", en: "View our warehouse locations", fr: "Voir les emplacements de nos entrepôts", de: "Standorte unserer Lager ansehen" } as Dict,
  caption_porta: {
    pt: "Recolhas e entregas ao domicílio: tratamos de todo o processo, do remetente ao destinatário.",
    en: "Door-to-door pickup and delivery: we handle the entire process, from sender to recipient.",
    fr: "Enlèvement et livraison à domicile : nous gérons tout le processus, de l'expéditeur au destinataire.",
    de: "Abholung und Lieferung an die Haustür: Wir kümmern uns um den gesamten Ablauf, vom Absender bis zum Empfänger.",
  } as Dict,
};

const WHATSAPP_OFFICE =
  "https://api.whatsapp.com/send/?phone=351231922340&text=Ol%C3%A1%21+Gostaria+de+pedir+um+or%C3%A7amento+de+transporte+entre+Portugal+e+Luxemburgo.&type=phone_number&app_absent=0";

const LOCALITIES = [
  "Mangualde", "Fornos de Algodres", "Celorico da Beira", "Trancoso", "Pinhel",
  "Mêda", "Guarda", "Belmonte", "Covilhã", "Fundão", "Castelo Branco",
];

const WAREHOUSES = [
  { flag: "🇵🇹", name: "Mortágua, Portugal", address: "Zona Industrial de Mortágua, 3450-232", map: "https://www.google.com/maps?q=40.393832772089816,-8.201443970957152" },
  { flag: "🇱🇺", name: "Hollerich, Luxemburgo", address: "20 Rue de Cessange, L-1320", map: "https://www.google.com/maps?q=49.59765522565655,6.113726780058291" },
  { flag: "🇫🇷", name: "Rédange, França", address: "712, Rue de la Cote, F-57390", map: "https://www.google.com/maps?q=49.49131506157751,5.914277619970524" },
];

interface BodyProps {
  lang: Lang;
  open: (k: "loc" | "lis" | "wh") => void;
}

function BodyPT({ open }: BodyProps) {
  const lang: Lang = "pt";
  return (
    <>
      <p className="lead">
        Muitas pessoas querem enviar mercadorias, bagagens ou objetos pessoais entre Portugal e Luxemburgo,
        mas nem sempre sabem exatamente como funciona o processo. A dúvida é normal.
      </p>
      <p>
        Como funciona a recolha? Quanto tempo demora? É preciso entregar num armazém? Fazem porta a porta?
        Que tipo de mercadorias podem ser transportadas?
      </p>
      <p>
        A boa notícia é que o processo é muito mais simples do que parece. Na <strong>Transportes Carlos &amp; César</strong>
        {" "}trabalhamos há mais de 40 anos neste setor e fazemos transporte semanal entre Portugal e Luxemburgo,
        com recolhas e entregas porta a porta, tanto para particulares como para empresas.
      </p>
      <p>Neste artigo explicamos exatamente como funciona.</p>

      <h2>Recolha e entrega porta a porta</h2>
      <p>O nosso serviço funciona de forma simples: <strong>recolhemos na origem e entregamos no destino</strong>.</p>
      <p>
        Fazemos recolha ao domicílio em Portugal e entrega ao domicílio no Luxemburgo, e também no sentido
        inverso. Na maioria dos casos, o cliente não precisa de se deslocar — tratamos de todo o processo
        com simplicidade, rapidez e proximidade.
      </p>
      <p>
        Para quem prefere um serviço ainda mais rápido, existe também a possibilidade de levantamento direto
        nos nossos armazéns: no Luxemburgo ao sábado, após a chegada do camião; em Portugal à sexta-feira e
        ao sábado, também após a chegada do camião.
      </p>

      <figure className="my-8">
        <img src={portaAPorta} alt={T.caption_porta[lang]} loading="lazy" width={1280} height={768}
          className="w-full rounded-xl border border-border shadow-sm" />
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{T.caption_porta[lang]}</figcaption>
      </figure>

      <h2>Saídas semanais todas as semanas</h2>
      <p>Realizamos transporte Portugal → Luxemburgo e Luxemburgo → Portugal <strong>todas as semanas</strong>.</p>
      <ul>
        <li><strong>Terças-feiras:</strong> saída do Luxemburgo para Portugal.</li>
        <li><strong>Quartas-feiras:</strong> saída de Portugal para o Luxemburgo.</li>
      </ul>
      <p>Isto permite um serviço regular, previsível e com elevada rapidez de resposta. Não é um serviço ocasional, é uma operação contínua.</p>

      <h2>Como funcionam as recolhas em Portugal</h2>
      <p>As recolhas em Portugal são organizadas por zonas e dias específicos da semana.</p>
      <p>
        <strong>Segundas-feiras:</strong> Porto, Coimbra, Aveiro e Braga. Uma ou duas vezes por mês passamos
        também por Vila Real, Bragança e Viana do Castelo. À segunda-feira, uma vez por mês, realizamos
        ainda o <Link to="/congelados" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_frozen[lang]}</Link>,
        com camião frigorífico.
      </p>
      <p>
        <strong>Terças-feiras:</strong> zona da Guarda e Castelo Branco, incluindo Covilhã e{" "}
        <button onClick={() => open("loc")} className="text-primary underline underline-offset-4 hover:opacity-80">
          {T.lnk_localities[lang]}
        </button>.
      </p>
      <p>
        <strong>Quartas-feiras:</strong> todo o distrito de Viseu e a outra parte do distrito da Guarda,
        até à zona de Seia. Tudo o que fica para lá de Seia entra normalmente na rota de terça-feira.
      </p>
      <p>
        Temos ainda a rota de{" "}
        <button onClick={() => open("lis")} className="text-primary underline underline-offset-4 hover:opacity-80">
          {T.lnk_lisboa[lang]}
        </button>, em datas específicas ao longo do ano.
      </p>

      <h2>O que transportamos</h2>
      <p>Trabalhamos com praticamente todo o tipo de mercadoria. Entre os envios mais comuns estão:</p>
      <ul>
        <li>malas de viagem e bagagens pessoais</li>
        <li>mudanças pequenas</li>
        <li>bicicletas, motas e trotinetes elétricas</li>
        <li>móveis pequenos e eletrodomésticos</li>
        <li>documentos, envelopes e caixas</li>
        <li>pequenas máquinas e mercadorias empresariais</li>
        <li>envios para emigrantes</li>
      </ul>
      <p>
        Trabalhamos tanto com particulares como com empresas, embora a maioria dos nossos clientes sejam
        particulares e emigrantes.
      </p>

      <h2>Mercadorias que não transportamos</h2>
      <p>
        Não realizamos transporte de <strong>veículos automóveis</strong>. No entanto, temos uma empresa
        parceira especializada nesse serviço e podemos fornecer esse contacto mediante pedido.
      </p>
      <p>Naturalmente, também não transportamos mercadorias ilegais ou qualquer conteúdo proibido por lei.</p>

      <h2>Como preparar a mercadoria</h2>
      <p>O cliente é responsável por embalar corretamente todos os volumes. Cada volume deve estar identificado com:</p>
      <ul>
        <li>nome</li>
        <li>morada</li>
        <li>número de telefone</li>
        <li>remetente e destinatário</li>
      </ul>
      <p>Uma boa preparação evita atrasos, problemas na entrega e garante maior segurança no transporte.</p>

      <h2>Como pedir orçamento</h2>
      <p>
        A forma mais rápida é pelo{" "}
        <a href={WHATSAPP_OFFICE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">
          {T.lnk_whatsapp[lang]}
        </a>. Respondemos normalmente em poucas horas.
      </p>
      <p>
        O pagamento pode ser feito na recolha ou na entrega, conforme for mais conveniente. O valor é exatamente o mesmo.
      </p>
      <ul>
        <li><strong>Escritório (Portugal):</strong> +351 231 922 340</li>
        <li><strong>César (assuntos do Luxemburgo):</strong> +352 621 152 128</li>
      </ul>

      <h2>Porque escolher a nossa empresa</h2>
      <p>
        Hoje existem muitas transportadoras, mas poucas com verdadeira experiência neste setor. Somos uma
        empresa familiar, com mais de 40 anos de experiência entre Portugal e Luxemburgo.
      </p>
      <p>
        Temos uma equipa pequena, próxima e acessível: o cliente fala diretamente com qualquer pessoa da
        empresa, desde a gestão até ao estafeta. Não existe distância entre a empresa e o cliente.
      </p>
      <p>
        Além disso, praticamos preços muito competitivos, bastante abaixo da média do mercado, mantendo
        rapidez, segurança e proximidade no serviço.
      </p>

      <h2>Fale connosco</h2>
      <p>
        Se precisa de enviar uma mala, uma bicicleta, uma mudança pequena, mercadoria empresarial ou qualquer
        outro tipo de transporte entre Portugal e Luxemburgo, estamos aqui para ajudar. Analisamos cada caso
        individualmente e apresentamos a melhor solução.
      </p>
      <p><strong>Mais do que transportar mercadorias, transportamos confiança.</strong></p>
    </>
  );
}

function BodyEN({ open }: BodyProps) {
  const lang: Lang = "en";
  return (
    <>
      <p className="lead">
        Many people want to send goods, luggage or personal belongings between Portugal and Luxembourg,
        but aren't quite sure how the process works. The doubt is normal.
      </p>
      <p>How does the pickup work? How long does it take? Do I have to drop it off at a warehouse? Do you offer door-to-door? What can be shipped?</p>
      <p>
        The good news is that the process is much simpler than it seems. At <strong>Transportes Carlos &amp; César</strong>
        {" "}we have been in this business for over 40 years and we run weekly transport between Portugal and
        Luxembourg, with door-to-door pickups and deliveries for both private clients and companies.
      </p>
      <p>Here's exactly how it works.</p>

      <h2>Door-to-door pickup and delivery</h2>
      <p>Our service is simple: <strong>we pick up at the origin and deliver at the destination</strong>.</p>
      <p>
        We collect at your address in Portugal and deliver at your address in Luxembourg, and the same in
        the opposite direction. In most cases the client doesn't need to leave home — we handle the whole
        process with simplicity, speed and a personal touch.
      </p>
      <p>
        For those who prefer it even faster, you can also pick up directly at our warehouses: in Luxembourg
        on Saturday after the truck arrives; in Portugal on Friday and Saturday, also after arrival.
      </p>

      <figure className="my-8">
        <img src={portaAPorta} alt={T.caption_porta[lang]} loading="lazy" width={1280} height={768}
          className="w-full rounded-xl border border-border shadow-sm" />
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{T.caption_porta[lang]}</figcaption>
      </figure>

      <h2>Weekly departures every week</h2>
      <p>We run Portugal → Luxembourg and Luxembourg → Portugal <strong>every week</strong>.</p>
      <ul>
        <li><strong>Tuesdays:</strong> departure from Luxembourg to Portugal.</li>
        <li><strong>Wednesdays:</strong> departure from Portugal to Luxembourg.</li>
      </ul>
      <p>A regular, predictable service with fast response times — a continuous operation, not an occasional one.</p>

      <h2>How pickups work in Portugal</h2>
      <p>Pickups in Portugal are organised by zones and specific days of the week.</p>
      <p>
        <strong>Mondays:</strong> Porto, Coimbra, Aveiro and Braga. Once or twice a month we also pass
        through Vila Real, Bragança and Viana do Castelo. Once a month on a Monday we run our{" "}
        <Link to="/congelados" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_frozen[lang]}</Link> with a refrigerated truck.
      </p>
      <p>
        <strong>Tuesdays:</strong> Guarda and Castelo Branco area, including Covilhã and{" "}
        <button onClick={() => open("loc")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_localities[lang]}</button>.
      </p>
      <p>
        <strong>Wednesdays:</strong> the entire Viseu district and the other part of the Guarda district,
        up to the Seia area. Anything beyond Seia is normally covered on the Tuesday route.
      </p>
      <p>
        We also serve the{" "}
        <button onClick={() => open("lis")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_lisboa[lang]}</button>
        {" "}route on specific dates throughout the year.
      </p>

      <h2>What we transport</h2>
      <p>We handle almost every type of goods. The most common shipments include:</p>
      <ul>
        <li>travel suitcases and personal luggage</li>
        <li>small removals</li>
        <li>bicycles, motorcycles and electric scooters</li>
        <li>small furniture and home appliances</li>
        <li>documents, envelopes and boxes</li>
        <li>small machinery and business goods</li>
        <li>shipments for expats</li>
      </ul>
      <p>We work with both private clients and companies, though most of our customers are individuals and expats.</p>

      <h2>Goods we don't transport</h2>
      <p>
        We don't transport <strong>cars or motor vehicles</strong>. However, we have a partner company that
        specialises in that service and we can share the contact on request.
      </p>
      <p>Naturally, we also don't transport illegal goods or any content prohibited by law.</p>

      <h2>How to prepare your shipment</h2>
      <p>The client is responsible for properly packing every item. Each parcel must be identified with:</p>
      <ul>
        <li>name</li>
        <li>address</li>
        <li>phone number</li>
        <li>sender and recipient</li>
      </ul>
      <p>Good preparation prevents delays, delivery issues and ensures greater safety during transport.</p>

      <h2>How to request a quote</h2>
      <p>
        The fastest way is via our{" "}
        <a href={WHATSAPP_OFFICE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_whatsapp[lang]}</a>.
        {" "}We usually reply within a few hours.
      </p>
      <p>Payment can be made at pickup or at delivery, whichever is more convenient. The price is exactly the same.</p>
      <ul>
        <li><strong>Office (Portugal):</strong> +351 231 922 340</li>
        <li><strong>César (Luxembourg matters):</strong> +352 621 152 128</li>
      </ul>

      <h2>Why choose us</h2>
      <p>
        Many carriers exist today, but few have real experience on this route. We're a family business with
        over 40 years of experience between Portugal and Luxembourg.
      </p>
      <p>
        Our team is small, close and accessible: clients speak directly with anyone in the company, from
        management to the driver. There's no distance between us and our customers.
      </p>
      <p>
        On top of that, our prices are very competitive — well below market average — while keeping speed,
        safety and a personal touch.
      </p>

      <h2>Get in touch</h2>
      <p>
        Whether you need to ship a suitcase, a bicycle, a small move, business goods or any other type of
        transport between Portugal and Luxembourg, we're here to help. We analyse each case individually and
        present the best solution.
      </p>
      <p><strong>More than goods, we carry trust.</strong></p>
    </>
  );
}

function BodyFR({ open }: BodyProps) {
  const lang: Lang = "fr";
  return (
    <>
      <p className="lead">
        Beaucoup de personnes souhaitent envoyer des marchandises, des bagages ou des effets personnels
        entre le Portugal et le Luxembourg, sans savoir exactement comment le processus fonctionne. Le doute
        est normal.
      </p>
      <p>Comment se passe l'enlèvement ? Combien de temps cela prend ? Faut-il déposer dans un entrepôt ? Faites-vous du porte-à-porte ? Que peut-on transporter ?</p>
      <p>
        La bonne nouvelle, c'est que le processus est bien plus simple qu'il n'y paraît. Chez{" "}
        <strong>Transportes Carlos &amp; César</strong>, nous travaillons dans ce secteur depuis plus de 40 ans
        et nous assurons un transport hebdomadaire entre le Portugal et le Luxembourg, avec enlèvement et
        livraison en porte-à-porte, pour particuliers comme pour entreprises.
      </p>
      <p>Voici exactement comment cela fonctionne.</p>

      <h2>Enlèvement et livraison en porte-à-porte</h2>
      <p>Notre service est simple : <strong>nous récupérons à l'origine et livrons à destination</strong>.</p>
      <p>
        Nous effectuons l'enlèvement à domicile au Portugal et la livraison à domicile au Luxembourg, et
        inversement. Dans la plupart des cas, le client n'a pas besoin de se déplacer — nous gérons tout le
        processus avec simplicité, rapidité et proximité.
      </p>
      <p>
        Pour un service encore plus rapide, vous pouvez également récupérer directement dans nos entrepôts :
        au Luxembourg le samedi après l'arrivée du camion ; au Portugal le vendredi et le samedi, également
        après l'arrivée.
      </p>

      <figure className="my-8">
        <img src={portaAPorta} alt={T.caption_porta[lang]} loading="lazy" width={1280} height={768}
          className="w-full rounded-xl border border-border shadow-sm" />
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{T.caption_porta[lang]}</figcaption>
      </figure>

      <h2>Départs hebdomadaires chaque semaine</h2>
      <p>Nous effectuons Portugal → Luxembourg et Luxembourg → Portugal <strong>chaque semaine</strong>.</p>
      <ul>
        <li><strong>Mardis :</strong> départ du Luxembourg vers le Portugal.</li>
        <li><strong>Mercredis :</strong> départ du Portugal vers le Luxembourg.</li>
      </ul>
      <p>Un service régulier, prévisible et très réactif — une opération continue, pas occasionnelle.</p>

      <h2>Comment se passent les enlèvements au Portugal</h2>
      <p>Les enlèvements au Portugal sont organisés par zones et par jours spécifiques de la semaine.</p>
      <p>
        <strong>Lundis :</strong> Porto, Coimbra, Aveiro et Braga. Une ou deux fois par mois, nous passons
        également par Vila Real, Bragança et Viana do Castelo. Un lundi par mois, nous assurons aussi le{" "}
        <Link to="/congelados" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_frozen[lang]}</Link>, avec camion frigorifique.
      </p>
      <p>
        <strong>Mardis :</strong> zone de Guarda et Castelo Branco, y compris Covilhã et{" "}
        <button onClick={() => open("loc")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_localities[lang]}</button>.
      </p>
      <p>
        <strong>Mercredis :</strong> tout le district de Viseu et l'autre partie du district de Guarda,
        jusqu'à la zone de Seia. Tout ce qui se situe au-delà de Seia entre normalement dans l'itinéraire du mardi.
      </p>
      <p>
        Nous avons également l'itinéraire de{" "}
        <button onClick={() => open("lis")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_lisboa[lang]}</button>, à des dates précises tout au long de l'année.
      </p>

      <h2>Ce que nous transportons</h2>
      <p>Nous gérons presque tout type de marchandise. Parmi les envois les plus courants :</p>
      <ul>
        <li>valises de voyage et bagages personnels</li>
        <li>petits déménagements</li>
        <li>vélos, motos et trottinettes électriques</li>
        <li>petits meubles et électroménagers</li>
        <li>documents, enveloppes et cartons</li>
        <li>petites machines et marchandises professionnelles</li>
        <li>envois pour les expatriés</li>
      </ul>
      <p>Nous travaillons avec des particuliers comme avec des entreprises, mais la majorité de nos clients sont des particuliers et des émigrés.</p>

      <h2>Marchandises que nous ne transportons pas</h2>
      <p>
        Nous ne transportons pas de <strong>véhicules automobiles</strong>. Nous avons cependant une entreprise
        partenaire spécialisée dans ce service et pouvons partager le contact sur demande.
      </p>
      <p>Nous ne transportons pas non plus de marchandises illégales ou tout contenu interdit par la loi.</p>

      <h2>Comment préparer votre envoi</h2>
      <p>Le client est responsable de l'emballage de tous les colis. Chaque colis doit être identifié avec :</p>
      <ul>
        <li>nom</li>
        <li>adresse</li>
        <li>numéro de téléphone</li>
        <li>expéditeur et destinataire</li>
      </ul>
      <p>Une bonne préparation évite les retards, les problèmes de livraison et garantit une plus grande sécurité.</p>

      <h2>Comment demander un devis</h2>
      <p>
        Le moyen le plus rapide est via notre{" "}
        <a href={WHATSAPP_OFFICE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_whatsapp[lang]}</a>.
        {" "}Nous répondons généralement en quelques heures.
      </p>
      <p>Le paiement peut se faire à l'enlèvement ou à la livraison, selon ce qui vous convient. Le prix est exactement le même.</p>
      <ul>
        <li><strong>Bureau (Portugal) :</strong> +351 231 922 340</li>
        <li><strong>César (questions Luxembourg) :</strong> +352 621 152 128</li>
      </ul>

      <h2>Pourquoi nous choisir</h2>
      <p>
        Il existe de nombreux transporteurs, mais peu ont une véritable expérience sur cet axe. Nous sommes
        une entreprise familiale avec plus de 40 ans d'expérience entre le Portugal et le Luxembourg.
      </p>
      <p>
        Notre équipe est petite, proche et accessible : le client parle directement avec n'importe quelle
        personne de l'entreprise, de la direction au chauffeur. Aucune distance entre nous et nos clients.
      </p>
      <p>
        De plus, nos tarifs sont très compétitifs — bien en dessous de la moyenne du marché — tout en gardant
        rapidité, sécurité et proximité.
      </p>

      <h2>Contactez-nous</h2>
      <p>
        Que vous deviez envoyer une valise, un vélo, un petit déménagement, de la marchandise professionnelle
        ou tout autre type de transport entre le Portugal et le Luxembourg, nous sommes là pour vous aider.
        Nous analysons chaque cas individuellement et proposons la meilleure solution.
      </p>
      <p><strong>Plus que des marchandises, nous transportons de la confiance.</strong></p>
    </>
  );
}

function BodyDE({ open }: BodyProps) {
  const lang: Lang = "de";
  return (
    <>
      <p className="lead">
        Viele Menschen möchten Waren, Gepäck oder persönliche Gegenstände zwischen Portugal und Luxemburg
        verschicken, wissen aber nicht genau, wie der Ablauf funktioniert. Die Unsicherheit ist normal.
      </p>
      <p>Wie funktioniert die Abholung? Wie lange dauert es? Muss ich in einem Lager abgeben? Bieten Sie Haus-zu-Haus-Service? Was darf transportiert werden?</p>
      <p>
        Die gute Nachricht: Der Ablauf ist viel einfacher, als es scheint. Bei{" "}
        <strong>Transportes Carlos &amp; César</strong> sind wir seit über 40 Jahren in der Branche tätig und
        führen wöchentliche Transporte zwischen Portugal und Luxemburg durch, mit Haus-zu-Haus-Abholung und
        -Lieferung, sowohl für Privatkunden als auch für Unternehmen.
      </p>
      <p>So funktioniert es genau.</p>

      <h2>Abholung und Lieferung an der Haustür</h2>
      <p>Unser Service ist einfach: <strong>Wir holen am Ursprungsort ab und liefern am Zielort</strong>.</p>
      <p>
        Wir holen an Ihrer Adresse in Portugal ab und liefern an Ihre Adresse in Luxemburg — und umgekehrt.
        In den meisten Fällen muss der Kunde sich nicht bewegen — wir kümmern uns um den gesamten Ablauf,
        einfach, schnell und persönlich.
      </p>
      <p>
        Wer es noch schneller mag, kann auch direkt in unseren Lagern abholen: in Luxemburg samstags nach
        Ankunft des LKWs; in Portugal freitags und samstags, ebenfalls nach Ankunft.
      </p>

      <figure className="my-8">
        <img src={portaAPorta} alt={T.caption_porta[lang]} loading="lazy" width={1280} height={768}
          className="w-full rounded-xl border border-border shadow-sm" />
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{T.caption_porta[lang]}</figcaption>
      </figure>

      <h2>Wöchentliche Abfahrten jede Woche</h2>
      <p>Wir fahren Portugal → Luxemburg und Luxemburg → Portugal <strong>jede Woche</strong>.</p>
      <ul>
        <li><strong>Dienstags:</strong> Abfahrt von Luxemburg nach Portugal.</li>
        <li><strong>Mittwochs:</strong> Abfahrt von Portugal nach Luxemburg.</li>
      </ul>
      <p>Ein regelmäßiger, planbarer Service mit schneller Reaktionszeit — ein dauerhafter Betrieb, kein Gelegenheitsdienst.</p>

      <h2>Wie Abholungen in Portugal ablaufen</h2>
      <p>Die Abholungen in Portugal sind nach Zonen und festen Wochentagen organisiert.</p>
      <p>
        <strong>Montags:</strong> Porto, Coimbra, Aveiro und Braga. Ein- bis zweimal im Monat fahren wir
        auch durch Vila Real, Bragança und Viana do Castelo. Einmal im Monat montags führen wir zudem unseren{" "}
        <Link to="/congelados" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_frozen[lang]}</Link> mit Kühl-LKW durch.
      </p>
      <p>
        <strong>Dienstags:</strong> Region Guarda und Castelo Branco, einschließlich Covilhã und{" "}
        <button onClick={() => open("loc")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_localities[lang]}</button>.
      </p>
      <p>
        <strong>Mittwochs:</strong> der gesamte Bezirk Viseu und der andere Teil des Bezirks Guarda bis zur
        Region Seia. Alles, was hinter Seia liegt, wird normalerweise auf der Dienstagsroute abgedeckt.
      </p>
      <p>
        Wir bedienen außerdem die Route{" "}
        <button onClick={() => open("lis")} className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_lisboa[lang]}</button>
        {" "}an bestimmten Terminen im Jahr.
      </p>

      <h2>Was wir transportieren</h2>
      <p>Wir bewegen praktisch jede Art von Ware. Zu den häufigsten Sendungen gehören:</p>
      <ul>
        <li>Reisekoffer und persönliches Gepäck</li>
        <li>kleine Umzüge</li>
        <li>Fahrräder, Motorräder und E-Scooter</li>
        <li>Kleinmöbel und Haushaltsgeräte</li>
        <li>Dokumente, Umschläge und Kartons</li>
        <li>kleine Maschinen und Geschäftsware</li>
        <li>Sendungen für Auswanderer</li>
      </ul>
      <p>Wir arbeiten sowohl mit Privatkunden als auch mit Firmen, wobei die Mehrheit unserer Kunden Privatpersonen und Auswanderer sind.</p>

      <h2>Waren, die wir nicht transportieren</h2>
      <p>
        Wir transportieren <strong>keine Kraftfahrzeuge</strong>. Wir haben jedoch ein Partnerunternehmen,
        das auf diesen Service spezialisiert ist, und können den Kontakt auf Anfrage weitergeben.
      </p>
      <p>Selbstverständlich transportieren wir auch keine illegalen Waren oder gesetzlich verbotene Inhalte.</p>

      <h2>So bereiten Sie Ihre Sendung vor</h2>
      <p>Der Kunde ist für die korrekte Verpackung aller Stücke verantwortlich. Jedes Packstück sollte gekennzeichnet sein mit:</p>
      <ul>
        <li>Name</li>
        <li>Adresse</li>
        <li>Telefonnummer</li>
        <li>Absender und Empfänger</li>
      </ul>
      <p>Eine gute Vorbereitung verhindert Verzögerungen, Lieferprobleme und sorgt für mehr Sicherheit im Transport.</p>

      <h2>So fordern Sie ein Angebot an</h2>
      <p>
        Am schnellsten geht es über unseren{" "}
        <a href={WHATSAPP_OFFICE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">{T.lnk_whatsapp[lang]}</a>.
        {" "}Normalerweise antworten wir innerhalb weniger Stunden.
      </p>
      <p>Die Zahlung kann bei Abholung oder Lieferung erfolgen, je nachdem, was Ihnen besser passt. Der Preis ist exakt gleich.</p>
      <ul>
        <li><strong>Büro (Portugal):</strong> +351 231 922 340</li>
        <li><strong>César (Luxemburg-Angelegenheiten):</strong> +352 621 152 128</li>
      </ul>

      <h2>Warum uns wählen</h2>
      <p>
        Es gibt heute viele Spediteure, aber nur wenige mit echter Erfahrung auf dieser Achse. Wir sind ein
        Familienunternehmen mit über 40 Jahren Erfahrung zwischen Portugal und Luxemburg.
      </p>
      <p>
        Unser Team ist klein, nah und gut erreichbar: Der Kunde spricht direkt mit jeder Person im Unternehmen,
        von der Geschäftsführung bis zum Fahrer. Es gibt keine Distanz zwischen uns und unseren Kunden.
      </p>
      <p>
        Außerdem bieten wir sehr wettbewerbsfähige Preise — deutlich unter dem Marktdurchschnitt — bei
        gleichbleibender Schnelligkeit, Sicherheit und Nähe.
      </p>

      <h2>Sprechen Sie uns an</h2>
      <p>
        Ob Koffer, Fahrrad, kleiner Umzug, Geschäftsware oder eine andere Art von Transport zwischen Portugal
        und Luxemburg — wir sind für Sie da. Wir prüfen jeden Fall einzeln und schlagen die beste Lösung vor.
      </p>
      <p><strong>Mehr als Waren transportieren wir Vertrauen.</strong></p>
    </>
  );
}

export function ComoFuncionaPost({ lang }: { lang: Lang }) {
  const [openModal, setOpenModal] = useState<null | "loc" | "lis" | "wh">(null);
  const open = (k: "loc" | "lis" | "wh") => setOpenModal(k);
  const close = () => setOpenModal(null);

  let Body: React.FC<BodyProps>;
  switch (lang) {
    case "en": Body = BodyEN; break;
    case "fr": Body = BodyFR; break;
    case "de": Body = BodyDE; break;
    default: Body = BodyPT;
  }

  return (
    <>
      <Body lang={lang} open={open} />

      {/* Extra CTA: warehouses + quote */}
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center not-prose">
        <a
          href={WHATSAPP_OFFICE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="h-4 w-4" />
          {T.cta_quote[lang]}
        </a>
        <button
          onClick={() => open("wh")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/50 font-semibold transition-colors"
        >
          <Warehouse className="h-4 w-4" />
          {T.cta_warehouses[lang]}
        </button>
      </div>

      {/* Localities dialog */}
      <Dialog open={openModal === "loc"} onOpenChange={(o) => !o && close()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <MapPin className="h-5 w-5 text-primary" />
              {T.loc_title[lang]}
            </DialogTitle>
            <DialogDescription>{T.loc_desc[lang]}</DialogDescription>
          </DialogHeader>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {LOCALITIES.map((l) => (
              <li key={l} className="text-sm bg-secondary rounded-lg px-3 py-2">{l}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>

      {/* Lisboa dates dialog */}
      <Dialog open={openModal === "lis"} onOpenChange={(o) => !o && close()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Calendar className="h-5 w-5 text-primary" />
              {T.lis_title[lang]}
            </DialogTitle>
            <DialogDescription>{T.lis_desc[lang]}</DialogDescription>
          </DialogHeader>
          <a
            href={WHATSAPP_OFFICE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" />
            {T.lis_cta[lang]}
          </a>
        </DialogContent>
      </Dialog>

      {/* Warehouses dialog */}
      <Dialog open={openModal === "wh"} onOpenChange={(o) => !o && close()}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Warehouse className="h-5 w-5 text-primary" />
              {T.wh_title[lang]}
            </DialogTitle>
            <DialogDescription>{T.wh_desc[lang]}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {WAREHOUSES.map((w) => (
              <div key={w.name} className="rounded-xl border border-border p-4">
                <div className="font-semibold mb-1">{w.flag} {w.name}</div>
                <div className="text-sm text-muted-foreground flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{w.address}</span>
                </div>
                <a
                  href={w.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80"
                >
                  <Phone className="h-3.5 w-3.5 hidden" />
                  {T.wh_directions[lang]}
                </a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
