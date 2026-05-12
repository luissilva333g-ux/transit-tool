import type { ReactNode } from "react";
import precosCover from "@/assets/blog-precos.jpg";
import cartaoTaxisAndrade from "@/assets/blog-cartao-taxis-andrade.jpg";
import cesarFoto from "@/assets/blog-cesar.jpg";
import carlosFoto from "@/assets/blog-carlos.jpg";
import cadeadoTsaCover from "@/assets/blog-cadeado-tsa.jpg";
import cadeadoTsaLock from "@/assets/blog-tsa-lock.jpg";
import type { Lang } from "@/lib/i18n";

type Localized<T> = Record<Lang, T>;

export interface BlogPost {
  slug: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  cover?: string;
  pinned?: boolean;
  title: Localized<string>;
  excerpt: Localized<string>;
  metaDescription: Localized<string>;
  coverAlt: Localized<string>;
  content: (lang: Lang) => ReactNode;
}

export interface LocalizedBlogPost {
  slug: string;
  date: string;
  readingMinutes: number;
  cover?: string;
  pinned?: boolean;
  title: string;
  excerpt: string;
  metaDescription: string;
  coverAlt: string;
  content: () => ReactNode;
}

// ---------- Post 1: Preços ----------
const precos_pt = () => (
  <>
    <p className="lead">
      Uma das perguntas mais frequentes que recebemos é:{" "}
      <em>“Quanto custa enviar mercadorias entre Portugal e Luxemburgo?”</em>
    </p>
    <p>A resposta mais honesta é: <strong>depende</strong>.</p>
    <p>
      O preço do transporte internacional não pode ser calculado apenas com base no peso.
      Existem vários fatores que influenciam diretamente o valor final, como o tipo de
      mercadoria, o volume ocupado, o peso real, a quantidade de volumes e até a facilidade
      de manuseamento.
    </p>
    <p>Ainda assim, existem alguns exemplos práticos que ajudam a perceber melhor os valores.</p>

    <h2>Envios pequenos podem começar nos 10€</h2>
    <p>
      Se estivermos a falar de um envelope ou de uma caixa pequena, por exemplo do tamanho
      de uma caixa de sapatos, com peso inferior a 10 kg, o preço pode começar nos{" "}
      <strong>10 euros</strong>.
    </p>
    <p>
      Nestes casos, quando se trata de mercadoria simples, leve e de pequenas dimensões, o
      valor costuma realmente situar-se muito próximo desse mínimo, salvo situações específicas.
    </p>
    <p>Este tipo de envio é bastante comum para documentos, pequenos objetos pessoais, peças pequenas ou encomendas simples.</p>

    <h2>Uma mala de cabine até 20 kg ronda normalmente os 20€</h2>
    <p>Uma mala de viagem de cabine, com peso até cerca de 20 kg, normalmente fica na casa dos <strong>20 euros</strong>.</p>
    <p>É um tipo de envio bastante frequente para clientes particulares que precisam de enviar bagagem, pertences pessoais ou objetos de uso diário entre Portugal e Luxemburgo.</p>
    <p>O valor pode variar ligeiramente dependendo das dimensões e do tipo de conteúdo transportado.</p>

    <h2>Uma bicicleta de adulto pode rondar os 35€</h2>
    <p>No caso de uma bicicleta, o preço depende bastante do tamanho e também do tipo. Por exemplo, uma bicicleta normal de adulto costuma rondar os <strong>35 euros</strong>.</p>
    <p>Se for uma bicicleta elétrica, o valor pode ser superior devido ao peso adicional, ao maior volume e às necessidades específicas de transporte. Cada caso deve ser analisado individualmente.</p>

    <h2>O peso sozinho não define o preço</h2>
    <p>Muitas pessoas pensam que o transporte é calculado apenas ao quilo, mas isso não funciona assim na prática.</p>
    <p>Imagine, por exemplo, um edredão. É um artigo que ocupa bastante espaço dentro da viatura, mas pesa muito pouco. Se o preço fosse calculado apenas ao quilograma, esse transporte deixaria de ser viável para a transportadora.</p>
    <p>Por isso, o <strong>volume ocupado</strong> é muitas vezes tão importante quanto o peso. É precisamente por isso que analisamos sempre:</p>
    <ul>
      <li>tipo de mercadoria</li>
      <li>peso</li>
      <li>dimensões</li>
      <li>volume</li>
      <li>quantidade de volumes</li>
      <li>facilidade de transporte</li>
    </ul>
    <p>Só assim conseguimos apresentar um valor justo e realista.</p>

    <h2>Cada transporte é diferente</h2>
    <p>Não existe uma tabela fixa que sirva para todos os envios. Cada mercadoria tem características próprias e cada cliente tem necessidades diferentes.</p>
    <p>O nosso objetivo não é dar preços genéricos, mas sim apresentar a melhor solução para cada situação específica. Seja um pequeno envelope, uma bicicleta, bagagem pessoal ou transporte de mercadorias maiores, analisamos cada pedido de forma individual.</p>

    <h2>Peça o seu orçamento</h2>
    <p>Se pretende saber exatamente quanto vai custar o seu envio entre Portugal e Luxemburgo, a melhor solução é pedir um orçamento rápido. Basta indicar:</p>
    <ul>
      <li>o que pretende transportar</li>
      <li>peso aproximado</li>
      <li>dimensões</li>
      <li>origem</li>
      <li>destino</li>
    </ul>
    <p>Com essa informação conseguimos apresentar uma proposta ajustada, rápida e sem compromisso.</p>
  </>
);

const precos_en = () => (
  <>
    <p className="lead">
      One of the most frequent questions we receive is:{" "}
      <em>“How much does it cost to ship goods between Portugal and Luxembourg?”</em>
    </p>
    <p>The most honest answer is: <strong>it depends</strong>.</p>
    <p>
      International transport pricing cannot be calculated based on weight alone. Several
      factors directly influence the final price, such as the type of goods, the volume
      they occupy, the actual weight, the number of items, and even how easy they are to
      handle.
    </p>
    <p>Even so, there are some practical examples that help to better understand the values.</p>

    <h2>Small shipments can start at €10</h2>
    <p>If we are talking about an envelope or a small box, for example the size of a shoebox, weighing less than 10 kg, the price can start at <strong>10 euros</strong>.</p>
    <p>In these cases, when dealing with simple, light and small-sized goods, the value usually stays very close to this minimum, except in specific situations.</p>
    <p>This type of shipment is very common for documents, small personal objects, small parts or simple parcels.</p>

    <h2>A cabin suitcase up to 20 kg is usually around €20</h2>
    <p>A cabin travel suitcase, weighing up to around 20 kg, normally costs around <strong>20 euros</strong>.</p>
    <p>This is a very common type of shipment for private clients who need to send luggage, personal belongings or everyday items between Portugal and Luxembourg.</p>
    <p>The value may vary slightly depending on the dimensions and type of content being transported.</p>

    <h2>An adult bicycle can be around €35</h2>
    <p>For a bicycle, the price depends greatly on size and also on type. For example, a regular adult bicycle is usually around <strong>35 euros</strong>.</p>
    <p>If it is an electric bicycle, the value can be higher due to the additional weight, larger volume and specific transport requirements. Each case must be analysed individually.</p>

    <h2>Weight alone does not define the price</h2>
    <p>Many people think transport is calculated only by weight, but it does not work that way in practice.</p>
    <p>Imagine, for example, a duvet. It takes up a lot of space inside the vehicle but weighs very little. If the price were calculated only per kilogram, that shipment would no longer be viable for the carrier.</p>
    <p>That is why <strong>occupied volume</strong> is often as important as weight. That is precisely why we always analyse:</p>
    <ul>
      <li>type of goods</li>
      <li>weight</li>
      <li>dimensions</li>
      <li>volume</li>
      <li>number of items</li>
      <li>ease of transport</li>
    </ul>
    <p>Only then can we provide a fair and realistic price.</p>

    <h2>Every shipment is different</h2>
    <p>There is no fixed table that fits all shipments. Each item has its own characteristics and each client has different needs.</p>
    <p>Our goal is not to give generic prices, but to present the best solution for each specific situation. Whether it is a small envelope, a bicycle, personal luggage or larger goods, we analyse each request individually.</p>

    <h2>Request your quote</h2>
    <p>If you want to know exactly how much your shipment between Portugal and Luxembourg will cost, the best solution is to request a quick quote. Just let us know:</p>
    <ul>
      <li>what you want to transport</li>
      <li>approximate weight</li>
      <li>dimensions</li>
      <li>origin</li>
      <li>destination</li>
    </ul>
    <p>With this information, we can present a tailored, quick and no-obligation proposal.</p>
  </>
);

const precos_fr = () => (
  <>
    <p className="lead">
      L’une des questions les plus fréquentes que l’on nous pose est :{" "}
      <em>« Combien coûte le transport de marchandises entre le Portugal et le Luxembourg ? »</em>
    </p>
    <p>La réponse la plus honnête est : <strong>cela dépend</strong>.</p>
    <p>
      Le prix d’un transport international ne peut pas être calculé uniquement en fonction du poids.
      Plusieurs facteurs influencent directement le prix final : le type de marchandise, le volume
      occupé, le poids réel, le nombre de colis et même la facilité de manutention.
    </p>
    <p>Voici toutefois quelques exemples concrets pour mieux comprendre les tarifs.</p>

    <h2>Les petits envois peuvent commencer à 10 €</h2>
    <p>S’il s’agit d’une enveloppe ou d’une petite boîte, par exemple de la taille d’une boîte à chaussures, pesant moins de 10 kg, le prix peut commencer à <strong>10 euros</strong>.</p>
    <p>Dans ces cas, pour des marchandises simples, légères et de petite taille, le prix se rapproche généralement de ce minimum, sauf situations particulières.</p>
    <p>Ce type d’envoi est très fréquent pour des documents, petits objets personnels, petites pièces ou colis simples.</p>

    <h2>Une valise cabine jusqu’à 20 kg coûte généralement autour de 20 €</h2>
    <p>Une valise cabine, pesant jusqu’à 20 kg environ, coûte généralement autour de <strong>20 euros</strong>.</p>
    <p>C’est un envoi très courant pour les particuliers qui doivent envoyer des bagages, des affaires personnelles ou des objets du quotidien entre le Portugal et le Luxembourg.</p>
    <p>Le prix peut varier légèrement selon les dimensions et le type de contenu transporté.</p>

    <h2>Un vélo adulte peut être autour de 35 €</h2>
    <p>Pour un vélo, le prix dépend beaucoup de la taille et du type. Par exemple, un vélo adulte standard coûte généralement autour de <strong>35 euros</strong>.</p>
    <p>Pour un vélo électrique, le prix peut être plus élevé en raison du poids supplémentaire, du volume plus important et des besoins spécifiques de transport. Chaque cas est analysé individuellement.</p>

    <h2>Le poids seul ne définit pas le prix</h2>
    <p>Beaucoup pensent que le transport est calculé uniquement au kilo, mais ce n’est pas ainsi que cela fonctionne en pratique.</p>
    <p>Imaginez par exemple une couette. Elle occupe beaucoup de place dans le véhicule mais pèse très peu. Si le prix était calculé uniquement au kilogramme, ce transport ne serait plus viable pour le transporteur.</p>
    <p>C’est pourquoi le <strong>volume occupé</strong> est souvent aussi important que le poids. C’est précisément pour cette raison que nous analysons toujours :</p>
    <ul>
      <li>le type de marchandise</li>
      <li>le poids</li>
      <li>les dimensions</li>
      <li>le volume</li>
      <li>le nombre de colis</li>
      <li>la facilité de transport</li>
    </ul>
    <p>C’est seulement ainsi que nous pouvons proposer un tarif juste et réaliste.</p>

    <h2>Chaque transport est différent</h2>
    <p>Il n’existe pas de grille fixe valable pour tous les envois. Chaque marchandise a ses caractéristiques propres et chaque client des besoins différents.</p>
    <p>Notre objectif n’est pas de donner des prix génériques mais de proposer la meilleure solution pour chaque situation. Petite enveloppe, vélo, bagages personnels ou transport de marchandises plus importantes, nous analysons chaque demande individuellement.</p>

    <h2>Demandez votre devis</h2>
    <p>Pour connaître précisément le coût de votre envoi entre le Portugal et le Luxembourg, la meilleure solution est de demander un devis rapide. Il suffit d’indiquer :</p>
    <ul>
      <li>ce que vous souhaitez transporter</li>
      <li>le poids approximatif</li>
      <li>les dimensions</li>
      <li>l’origine</li>
      <li>la destination</li>
    </ul>
    <p>Avec ces informations, nous vous proposons une offre adaptée, rapide et sans engagement.</p>
  </>
);

const precos_de = () => (
  <>
    <p className="lead">
      Eine der häufigsten Fragen, die wir erhalten, lautet:{" "}
      <em>„Wie viel kostet der Warentransport zwischen Portugal und Luxemburg?“</em>
    </p>
    <p>Die ehrlichste Antwort lautet: <strong>es kommt darauf an</strong>.</p>
    <p>
      Der Preis für internationalen Transport lässt sich nicht allein nach Gewicht berechnen.
      Mehrere Faktoren beeinflussen den Endpreis direkt: Art der Ware, beanspruchtes Volumen,
      tatsächliches Gewicht, Anzahl der Packstücke und sogar die Handhabbarkeit.
    </p>
    <p>Dennoch gibt es einige praktische Beispiele, die helfen, die Preise besser einzuordnen.</p>

    <h2>Kleine Sendungen können ab 10 € beginnen</h2>
    <p>Bei einem Umschlag oder einem kleinen Karton, etwa in der Größe eines Schuhkartons, mit einem Gewicht unter 10 kg, kann der Preis bei <strong>10 Euro</strong> beginnen.</p>
    <p>In diesen Fällen, bei einfachen, leichten und kleinen Waren, liegt der Preis meist sehr nah an diesem Mindestbetrag, abgesehen von Sonderfällen.</p>
    <p>Diese Art von Sendung ist sehr verbreitet für Dokumente, kleine persönliche Gegenstände, kleine Teile oder einfache Pakete.</p>

    <h2>Ein Handgepäckkoffer bis 20 kg kostet meist um 20 €</h2>
    <p>Ein Handgepäckkoffer mit einem Gewicht bis ca. 20 kg liegt normalerweise bei rund <strong>20 Euro</strong>.</p>
    <p>Dies ist eine sehr häufige Sendung für Privatkunden, die Gepäck, persönliche Sachen oder Alltagsgegenstände zwischen Portugal und Luxemburg verschicken müssen.</p>
    <p>Der Preis kann je nach Abmessungen und Art des Inhalts leicht variieren.</p>

    <h2>Ein Erwachsenenfahrrad kann etwa 35 € kosten</h2>
    <p>Bei einem Fahrrad hängt der Preis stark von Größe und Typ ab. Ein normales Erwachsenenfahrrad kostet beispielsweise meist um <strong>35 Euro</strong>.</p>
    <p>Bei einem E-Bike kann der Preis aufgrund des zusätzlichen Gewichts, des größeren Volumens und besonderer Transportanforderungen höher sein. Jeder Fall wird individuell betrachtet.</p>

    <h2>Das Gewicht allein bestimmt den Preis nicht</h2>
    <p>Viele denken, dass Transport ausschließlich nach Gewicht berechnet wird, doch in der Praxis funktioniert das nicht so.</p>
    <p>Stellen Sie sich zum Beispiel eine Bettdecke vor. Sie nimmt viel Platz im Fahrzeug ein, wiegt aber sehr wenig. Würde der Preis nur pro Kilogramm berechnet, wäre der Transport für den Spediteur nicht mehr rentabel.</p>
    <p>Deshalb ist das <strong>beanspruchte Volumen</strong> oft genauso wichtig wie das Gewicht. Genau deshalb prüfen wir immer:</p>
    <ul>
      <li>Art der Ware</li>
      <li>Gewicht</li>
      <li>Abmessungen</li>
      <li>Volumen</li>
      <li>Anzahl der Packstücke</li>
      <li>Transportfähigkeit</li>
    </ul>
    <p>Nur so können wir einen fairen und realistischen Preis anbieten.</p>

    <h2>Jeder Transport ist anders</h2>
    <p>Es gibt keine feste Tabelle, die für alle Sendungen gilt. Jede Ware hat eigene Merkmale und jeder Kunde unterschiedliche Bedürfnisse.</p>
    <p>Unser Ziel ist es nicht, pauschale Preise zu nennen, sondern für jede Situation die beste Lösung zu finden. Ob kleiner Umschlag, Fahrrad, persönliches Gepäck oder größere Warentransporte – wir analysieren jede Anfrage individuell.</p>

    <h2>Fordern Sie Ihr Angebot an</h2>
    <p>Wenn Sie genau wissen möchten, wie viel Ihr Transport zwischen Portugal und Luxemburg kostet, fordern Sie am besten ein schnelles Angebot an. Geben Sie uns einfach an:</p>
    <ul>
      <li>was Sie transportieren möchten</li>
      <li>ungefähres Gewicht</li>
      <li>Abmessungen</li>
      <li>Abholort</li>
      <li>Zielort</li>
    </ul>
    <p>Mit diesen Angaben unterbreiten wir Ihnen ein passendes, schnelles und unverbindliches Angebot.</p>
  </>
);

// ---------- Post 2: História ----------
const HistFigCartao = ({ caption }: { caption: string }) => (
  <figure className="my-8">
    <img
      src={cartaoTaxisAndrade}
      alt={caption}
      loading="lazy"
      className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
    />
    <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
      {caption}
    </figcaption>
  </figure>
);
const HistFigCarlos = ({ caption }: { caption: string }) => (
  <figure className="my-8">
    <img
      src={carlosFoto}
      alt={caption}
      loading="lazy"
      className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
    />
    <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
      {caption}
    </figcaption>
  </figure>
);
const HistFigCesar = ({ caption }: { caption: string }) => (
  <figure className="my-8">
    <img
      src={cesarFoto}
      alt={caption}
      loading="lazy"
      className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
    />
    <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
      {caption}
    </figcaption>
  </figure>
);

const historia_pt = () => (
  <>
    <p className="lead">Quando falamos de transporte entre Portugal e Luxemburgo, não falamos apenas de carrinhas, mercadorias ou viagens.</p>
    <p>
      Falamos de <strong>confiança</strong>.<br />
      Falamos de relações construídas ao longo de décadas.<br />
      Falamos de famílias, de emigrantes, de trabalho sério e de uma ligação profunda entre dois países que tantas histórias partilham.
    </p>
    <p>A nossa empresa não nasceu do zero.</p>
    <p>Ela é a continuação de uma história muito maior, construída com dedicação, esforço e uma reputação sólida ao longo de mais de <strong>40 anos</strong>.</p>
    <p>Uma história que começou com um nome bem conhecido por muitas famílias: <em>Táxis Mário Andrade, de Mortágua</em>.</p>

    <h2>As origens: Táxis Mário Andrade</h2>
    <p>Durante décadas, a empresa <strong>Táxis Mário Andrade</strong> foi uma referência nos transportes entre Portugal e Luxemburgo.</p>
    <p>Fundada pelo senhor Mário Andrade, em Mortágua, esta empresa tornou-se pioneira num setor muito específico e extremamente importante: o transporte de passageiros e mercadorias entre Portugal e Luxemburgo, com especial ligação à comunidade emigrante.</p>
    <p>Numa altura em que este tipo de serviço exigia muito mais proximidade, confiança e dedicação pessoal, Táxis Mário Andrade destacou-se pela seriedade, pelo compromisso com os clientes e pela capacidade de responder às necessidades reais de quem vivia entre dois países.</p>
    <p>Não se tratava apenas de transportar malas ou passageiros.</p>
    <p>Tratava-se de transportar histórias, mudanças de vida, reencontros familiares, bens pessoais e, muitas vezes, partes inteiras da vida de quem procurava melhores oportunidades fora de Portugal.</p>
    <p>Ao longo dos anos, a empresa tornou-se uma referência para muitas famílias portuguesas emigradas no Luxemburgo.</p>
    <p>Era sinónimo de confiança.<br />Era sinónimo de segurança.<br />Era sinónimo de alguém que cumpria.</p>
    <p>E isso constrói-se com tempo.</p>
    <HistFigCartao caption="Antigo cartão de visita da empresa Táxis Mário Andrade" />

    <h2>Carlos Silva: uma vida dentro da empresa</h2>
    <p>Entre as pessoas que fizeram parte desta história, há um nome que merece destaque especial: <strong>Carlos Silva</strong>.</p>
    <p>Carlos Silva foi um dos colaboradores mais fiéis do senhor Mário Andrade.</p>
    <p>Começou a trabalhar muito cedo na empresa Táxis Mário Andrade e passou grande parte da sua vida profissional ligado a esta casa.</p>
    <p>Conhecia a operação como poucos.<br />Conhecia os clientes.<br />Conhecia os percursos.<br />Conhecia as exigências do setor.<br />Conhecia os desafios reais deste tipo de transporte.</p>
    <p>Viveu os momentos bons e os momentos difíceis.</p>
    <p>Passou pelos altos e baixos naturais de qualquer empresa com décadas de atividade e acompanhou de perto toda a evolução do negócio.</p>
    <p>Não era apenas um trabalhador.</p>
    <p>Era alguém que conhecia a empresa como a palma da sua mão.</p>
    <p>Essa experiência prática, construída no terreno e ao longo de muitos anos, tornou-se uma base fundamental para aquilo que viria a seguir.</p>
    <HistFigCarlos caption="Carlos Silva, sócio da Transportes Carlos & César, em frente a um camião da empresa" />

    <h2>A passagem de testemunho</h2>
    <p>Chegou o momento em que o senhor Mário Andrade decidiu reformar-se.</p>
    <p>Depois de décadas de trabalho e de uma vida dedicada ao setor dos transportes, era tempo de passar o testemunho.</p>
    <p>E essa continuidade não podia ficar em mãos mais preparadas.</p>
    <p>Em <strong>2018</strong>, Carlos Silva adquiriu a empresa, juntamente com César, formando uma nova sociedade com um objetivo muito claro: dar continuidade ao trabalho, à reputação e ao legado construído durante tantos anos.</p>
    <p>Não se tratava de começar uma empresa nova.</p>
    <p>Tratava-se de preservar uma história.</p>
    <p>Tratava-se de respeitar tudo aquilo que já tinha sido construído.</p>
    <p>Tratava-se de continuar um nome, uma confiança e uma posição de mercado conquistada com décadas de trabalho sério.</p>
    <p>Foi assim que nasceu a <strong>Transportes Carlos &amp; César</strong>.</p>
    <p>Uma nova fase.<br />Uma nova estrutura.<br />Mas com as mesmas raízes.</p>
    <HistFigCesar caption="César, sócio da Transportes Carlos & César, junto a uma das carrinhas da empresa" />

    <h2>Transportes Carlos &amp; César: continuidade com visão de futuro</h2>
    <p>Hoje, a Transportes Carlos &amp; César representa essa continuidade.</p>
    <p>Mantemos o mesmo compromisso com os clientes: seriedade, proximidade, confiança e soluções reais para quem precisa de transportar mercadorias entre Portugal e Luxemburgo.</p>
    <p>A experiência acumulada ao longo de mais de quatro décadas permite-nos conhecer profundamente este mercado.</p>
    <p>Sabemos que cada transporte é diferente.<br />Sabemos que cada cliente tem necessidades específicas.<br />Sabemos que, neste setor, confiança vale tanto como rapidez.</p>
    <p>Não trabalhamos apenas com mercadorias.</p>
    <p>Trabalhamos com responsabilidade.</p>
    <p>Cada entrega representa um compromisso.<br />Cada transporte representa confiança depositada em nós.</p>
    <p>É precisamente essa experiência de longo prazo que nos diferencia.</p>
    <p>Não somos apenas mais uma transportadora.</p>
    <p>Somos a continuidade de uma história real.</p>

    <h2>Experiência que gera confiança</h2>
    <p>Num mercado onde muitas empresas aparecem e desaparecem rapidamente, a estabilidade e a experiência fazem diferença.</p>
    <p>A nossa posição no mercado não foi construída de um dia para o outro.</p>
    <p>Foi construída com trabalho consistente, com clientes satisfeitos e com décadas de presença real entre Portugal e Luxemburgo.</p>
    <p>Isso traduz-se em algo simples: quem conhece este setor sabe reconhecer experiência.</p>
    <p>E essa experiência dá segurança ao cliente.</p>
    <p>Quando alguém nos escolhe, não está apenas a contratar transporte.</p>
    <p>Está a escolher confiança.<br />Está a escolher conhecimento.<br />Está a escolher quem conhece verdadeiramente este percurso.</p>

    <h2>Continuamos a fazer história</h2>
    <p>A história começou há mais de 40 anos.</p>
    <p>Mas continua todos os dias.</p>
    <p>Cada cliente novo.<br />Cada mercadoria entregue.<br />Cada viagem concluída.</p>
    <p>Tudo isso faz parte da continuação desta história.</p>
    <p>O nosso compromisso mantém-se o mesmo: continuar a honrar o legado construído pelo senhor Mário Andrade e continuar a merecer a confiança de todos aqueles que escolhem trabalhar connosco.</p>
    <p>Porque no final, o transporte não é apenas sobre destino.</p>
    <p>É sobre <strong>confiança no caminho</strong>.</p>

    <h2>Fale connosco</h2>
    <p>Se procura uma empresa com experiência real, presença sólida no mercado e profundo conhecimento dos transportes entre Portugal e Luxemburgo, estamos aqui para ajudar.</p>
    <p>Seja para pequenos envios, mercadorias maiores, bagagens, bicicletas ou transporte personalizado, analisamos cada caso com atenção e seriedade.</p>
    <p>A experiência faz diferença.</p>
    <p>E essa experiência continua connosco.</p>
  </>
);

const historia_en = () => (
  <>
    <p className="lead">When we talk about transport between Portugal and Luxembourg, we are not just talking about vans, goods or trips.</p>
    <p>
      We are talking about <strong>trust</strong>.<br />
      About relationships built over decades.<br />
      About families, emigrants, serious work and a deep connection between two countries that share so many stories.
    </p>
    <p>Our company did not start from scratch.</p>
    <p>It is the continuation of a much bigger story, built with dedication, effort and a solid reputation over more than <strong>40 years</strong>.</p>
    <p>A story that began with a name well known to many families: <em>Táxis Mário Andrade, from Mortágua</em>.</p>

    <h2>The origins: Táxis Mário Andrade</h2>
    <p>For decades, <strong>Táxis Mário Andrade</strong> was a reference in transport between Portugal and Luxembourg.</p>
    <p>Founded by Mr. Mário Andrade in Mortágua, the company became a pioneer in a very specific and extremely important sector: passenger and goods transport between Portugal and Luxembourg, with a special connection to the emigrant community.</p>
    <p>At a time when this type of service required far more closeness, trust and personal dedication, Táxis Mário Andrade stood out for its seriousness, its commitment to clients and its ability to respond to the real needs of those living between two countries.</p>
    <p>It was not just about transporting bags or passengers.</p>
    <p>It was about transporting stories, life changes, family reunions, personal belongings and, often, entire parts of the lives of those seeking better opportunities outside Portugal.</p>
    <p>Over the years, the company became a reference for many Portuguese families who had emigrated to Luxembourg.</p>
    <p>It was synonymous with trust.<br />It was synonymous with safety.<br />It was synonymous with someone who delivered.</p>
    <p>And that is built with time.</p>
    <HistFigCartao caption="Old business card of Táxis Mário Andrade" />

    <h2>Carlos Silva: a life within the company</h2>
    <p>Among those who were part of this story, one name deserves special mention: <strong>Carlos Silva</strong>.</p>
    <p>Carlos Silva was one of Mr. Mário Andrade’s most loyal employees.</p>
    <p>He started working at Táxis Mário Andrade very early on and spent much of his professional life linked to this company.</p>
    <p>He knew the operation like few others.<br />He knew the clients.<br />He knew the routes.<br />He knew the demands of the sector.<br />He knew the real challenges of this type of transport.</p>
    <p>He lived through the good and the difficult moments.</p>
    <p>He went through the natural ups and downs of any company with decades of activity and closely followed all the evolution of the business.</p>
    <p>He was not just an employee.</p>
    <p>He was someone who knew the company like the back of his hand.</p>
    <p>That hands-on experience, built in the field over many years, became a fundamental foundation for what was to come next.</p>
    <HistFigCarlos caption="Carlos Silva, partner at Transportes Carlos & César, in front of one of the company’s trucks" />

    <h2>Passing the torch</h2>
    <p>The time came when Mr. Mário Andrade decided to retire.</p>
    <p>After decades of work and a life dedicated to the transport sector, it was time to pass the torch.</p>
    <p>And that continuity could not be left in better-prepared hands.</p>
    <p>In <strong>2018</strong>, Carlos Silva acquired the company, together with César, forming a new partnership with a very clear goal: to give continuity to the work, the reputation and the legacy built over so many years.</p>
    <p>It was not about starting a new company.</p>
    <p>It was about preserving a story.</p>
    <p>It was about respecting everything that had already been built.</p>
    <p>It was about continuing a name, a trust and a market position earned through decades of serious work.</p>
    <p>That is how <strong>Transportes Carlos &amp; César</strong> was born.</p>
    <p>A new phase.<br />A new structure.<br />But with the same roots.</p>
    <HistFigCesar caption="César, partner at Transportes Carlos & César, next to one of the company’s vans" />

    <h2>Transportes Carlos &amp; César: continuity with vision for the future</h2>
    <p>Today, Transportes Carlos &amp; César represents that continuity.</p>
    <p>We keep the same commitment to clients: seriousness, closeness, trust and real solutions for those who need to transport goods between Portugal and Luxembourg.</p>
    <p>The experience accumulated over more than four decades allows us to know this market deeply.</p>
    <p>We know that every transport is different.<br />We know that every client has specific needs.<br />We know that, in this sector, trust is worth as much as speed.</p>
    <p>We do not just work with goods.</p>
    <p>We work with responsibility.</p>
    <p>Every delivery represents a commitment.<br />Every transport represents trust placed in us.</p>
    <p>It is precisely this long-term experience that sets us apart.</p>
    <p>We are not just another carrier.</p>
    <p>We are the continuation of a real story.</p>

    <h2>Experience that builds trust</h2>
    <p>In a market where many companies appear and disappear quickly, stability and experience make a difference.</p>
    <p>Our market position was not built overnight.</p>
    <p>It was built with consistent work, satisfied clients and decades of real presence between Portugal and Luxembourg.</p>
    <p>This translates into something simple: those who know this sector recognise experience.</p>
    <p>And that experience gives clients peace of mind.</p>
    <p>When someone chooses us, they are not just hiring transport.</p>
    <p>They are choosing trust.<br />They are choosing knowledge.<br />They are choosing those who truly know this route.</p>

    <h2>We continue to make history</h2>
    <p>The story began over 40 years ago.</p>
    <p>But it continues every day.</p>
    <p>Every new client.<br />Every delivered shipment.<br />Every completed trip.</p>
    <p>All of this is part of the continuation of this story.</p>
    <p>Our commitment remains the same: to keep honouring the legacy built by Mr. Mário Andrade and to keep deserving the trust of all those who choose to work with us.</p>
    <p>Because in the end, transport is not just about destination.</p>
    <p>It is about <strong>trust along the way</strong>.</p>

    <h2>Get in touch</h2>
    <p>If you are looking for a company with real experience, a solid presence in the market and deep knowledge of transport between Portugal and Luxembourg, we are here to help.</p>
    <p>Whether for small shipments, larger goods, luggage, bicycles or personalised transport, we analyse each case with care and seriousness.</p>
    <p>Experience makes a difference.</p>
    <p>And that experience continues with us.</p>
  </>
);

const historia_fr = () => (
  <>
    <p className="lead">Quand on parle de transport entre le Portugal et le Luxembourg, on ne parle pas seulement de camionnettes, de marchandises ou de voyages.</p>
    <p>
      On parle de <strong>confiance</strong>.<br />
      De relations construites au fil des décennies.<br />
      De familles, d’émigrants, de travail sérieux et d’un lien profond entre deux pays qui partagent tant d’histoires.
    </p>
    <p>Notre entreprise n’est pas née de rien.</p>
    <p>Elle est la continuation d’une histoire bien plus large, bâtie avec dévouement, effort et une réputation solide depuis plus de <strong>40 ans</strong>.</p>
    <p>Une histoire qui a commencé avec un nom bien connu de nombreuses familles : <em>Táxis Mário Andrade, de Mortágua</em>.</p>

    <h2>Les origines : Táxis Mário Andrade</h2>
    <p>Pendant des décennies, l’entreprise <strong>Táxis Mário Andrade</strong> a été une référence dans le transport entre le Portugal et le Luxembourg.</p>
    <p>Fondée par Monsieur Mário Andrade, à Mortágua, elle est devenue pionnière dans un secteur très spécifique et extrêmement important : le transport de passagers et de marchandises entre le Portugal et le Luxembourg, avec un lien particulier avec la communauté émigrante.</p>
    <p>À une époque où ce type de service exigeait beaucoup plus de proximité, de confiance et de dévouement personnel, Táxis Mário Andrade s’est distinguée par son sérieux, son engagement envers les clients et sa capacité à répondre aux besoins réels de ceux qui vivaient entre deux pays.</p>
    <p>Il ne s’agissait pas seulement de transporter des bagages ou des passagers.</p>
    <p>Il s’agissait de transporter des histoires, des changements de vie, des retrouvailles familiales, des biens personnels et, souvent, des pans entiers de vies de ceux qui cherchaient de meilleures opportunités hors du Portugal.</p>
    <p>Au fil des années, l’entreprise est devenue une référence pour de nombreuses familles portugaises émigrées au Luxembourg.</p>
    <p>Elle était synonyme de confiance.<br />Synonyme de sécurité.<br />Synonyme de quelqu’un qui tient ses engagements.</p>
    <p>Et cela se construit avec le temps.</p>
    <HistFigCartao caption="Ancienne carte de visite de l’entreprise Táxis Mário Andrade" />

    <h2>Carlos Silva : une vie au sein de l’entreprise</h2>
    <p>Parmi les personnes qui ont fait partie de cette histoire, un nom mérite une mention particulière : <strong>Carlos Silva</strong>.</p>
    <p>Carlos Silva fut l’un des collaborateurs les plus fidèles de Monsieur Mário Andrade.</p>
    <p>Il a commencé très tôt à travailler chez Táxis Mário Andrade et a passé une grande partie de sa vie professionnelle liée à cette maison.</p>
    <p>Il connaissait l’opération comme peu d’autres.<br />Il connaissait les clients.<br />Il connaissait les itinéraires.<br />Il connaissait les exigences du secteur.<br />Il connaissait les vrais défis de ce type de transport.</p>
    <p>Il a vécu les bons et les moments difficiles.</p>
    <p>Il a traversé les hauts et les bas naturels de toute entreprise avec des décennies d’activité et a suivi de près toute l’évolution du métier.</p>
    <p>Il n’était pas qu’un employé.</p>
    <p>Il connaissait l’entreprise comme sa poche.</p>
    <p>Cette expérience pratique, construite sur le terrain pendant de longues années, est devenue une base fondamentale pour la suite.</p>
    <HistFigCarlos caption="Carlos Silva, associé de Transportes Carlos & César, devant l’un des camions de l’entreprise" />

    <h2>Le passage de témoin</h2>
    <p>Le moment est venu où Monsieur Mário Andrade a décidé de prendre sa retraite.</p>
    <p>Après des décennies de travail et une vie consacrée au secteur du transport, il était temps de passer le témoin.</p>
    <p>Et cette continuité ne pouvait être confiée à de meilleures mains.</p>
    <p>En <strong>2018</strong>, Carlos Silva a racheté l’entreprise, avec César, formant une nouvelle société avec un objectif très clair : assurer la continuité du travail, de la réputation et de l’héritage construits durant tant d’années.</p>
    <p>Il ne s’agissait pas de créer une nouvelle entreprise.</p>
    <p>Il s’agissait de préserver une histoire.</p>
    <p>De respecter tout ce qui avait déjà été bâti.</p>
    <p>De poursuivre un nom, une confiance et une position de marché conquises par des décennies de travail sérieux.</p>
    <p>C’est ainsi qu’est née la <strong>Transportes Carlos &amp; César</strong>.</p>
    <p>Une nouvelle phase.<br />Une nouvelle structure.<br />Mais avec les mêmes racines.</p>
    <HistFigCesar caption="César, associé de Transportes Carlos & César, à côté d’une des camionnettes de l’entreprise" />

    <h2>Transportes Carlos &amp; César : continuité avec une vision d’avenir</h2>
    <p>Aujourd’hui, Transportes Carlos &amp; César représente cette continuité.</p>
    <p>Nous gardons le même engagement envers nos clients : sérieux, proximité, confiance et solutions réelles pour ceux qui doivent transporter des marchandises entre le Portugal et le Luxembourg.</p>
    <p>L’expérience accumulée pendant plus de quatre décennies nous permet de connaître ce marché en profondeur.</p>
    <p>Nous savons que chaque transport est différent.<br />Nous savons que chaque client a des besoins spécifiques.<br />Nous savons que, dans ce secteur, la confiance vaut autant que la rapidité.</p>
    <p>Nous ne travaillons pas seulement avec des marchandises.</p>
    <p>Nous travaillons avec responsabilité.</p>
    <p>Chaque livraison représente un engagement.<br />Chaque transport représente la confiance que l’on nous accorde.</p>
    <p>C’est précisément cette expérience de long terme qui nous distingue.</p>
    <p>Nous ne sommes pas simplement un transporteur de plus.</p>
    <p>Nous sommes la continuation d’une histoire réelle.</p>

    <h2>Une expérience qui inspire confiance</h2>
    <p>Sur un marché où de nombreuses entreprises apparaissent et disparaissent rapidement, la stabilité et l’expérience font la différence.</p>
    <p>Notre position sur le marché ne s’est pas construite du jour au lendemain.</p>
    <p>Elle s’est bâtie avec un travail constant, des clients satisfaits et des décennies de présence réelle entre le Portugal et le Luxembourg.</p>
    <p>Cela se traduit par quelque chose de simple : ceux qui connaissent ce secteur reconnaissent l’expérience.</p>
    <p>Et cette expérience apporte de la sérénité au client.</p>
    <p>Quand quelqu’un nous choisit, il ne fait pas que recourir à un service de transport.</p>
    <p>Il choisit la confiance.<br />Il choisit la connaissance.<br />Il choisit ceux qui connaissent vraiment ce parcours.</p>

    <h2>Nous continuons d’écrire l’histoire</h2>
    <p>L’histoire a commencé il y a plus de 40 ans.</p>
    <p>Mais elle se poursuit chaque jour.</p>
    <p>Chaque nouveau client.<br />Chaque marchandise livrée.<br />Chaque voyage achevé.</p>
    <p>Tout cela fait partie de la continuation de cette histoire.</p>
    <p>Notre engagement reste le même : continuer à honorer l’héritage construit par Monsieur Mário Andrade et continuer à mériter la confiance de tous ceux qui choisissent de travailler avec nous.</p>
    <p>Car au fond, le transport ne concerne pas seulement la destination.</p>
    <p>Il s’agit de <strong>confiance tout au long du chemin</strong>.</p>

    <h2>Contactez-nous</h2>
    <p>Si vous cherchez une entreprise avec une expérience réelle, une présence solide sur le marché et une connaissance approfondie du transport entre le Portugal et le Luxembourg, nous sommes là pour vous aider.</p>
    <p>Pour de petits envois, des marchandises plus volumineuses, des bagages, des vélos ou un transport personnalisé, nous analysons chaque cas avec attention et sérieux.</p>
    <p>L’expérience fait la différence.</p>
    <p>Et cette expérience continue avec nous.</p>
  </>
);

const historia_de = () => (
  <>
    <p className="lead">Wenn wir über Transporte zwischen Portugal und Luxemburg sprechen, sprechen wir nicht nur über Lieferwagen, Waren oder Fahrten.</p>
    <p>
      Wir sprechen über <strong>Vertrauen</strong>.<br />
      Über Beziehungen, die über Jahrzehnte gewachsen sind.<br />
      Über Familien, Auswanderer, ehrliche Arbeit und eine tiefe Verbindung zwischen zwei Ländern, die so viele Geschichten teilen.
    </p>
    <p>Unser Unternehmen ist nicht bei null gestartet.</p>
    <p>Es ist die Fortsetzung einer viel größeren Geschichte, aufgebaut mit Hingabe, Anstrengung und einem soliden Ruf über mehr als <strong>40 Jahre</strong>.</p>
    <p>Eine Geschichte, die mit einem vielen Familien wohlbekannten Namen begann: <em>Táxis Mário Andrade aus Mortágua</em>.</p>

    <h2>Die Anfänge: Táxis Mário Andrade</h2>
    <p>Über Jahrzehnte war das Unternehmen <strong>Táxis Mário Andrade</strong> eine Referenz im Transport zwischen Portugal und Luxemburg.</p>
    <p>Gegründet von Herrn Mário Andrade in Mortágua, wurde es zum Pionier in einem sehr spezifischen und äußerst wichtigen Bereich: dem Personen- und Warentransport zwischen Portugal und Luxemburg, mit besonderer Verbindung zur Auswanderergemeinschaft.</p>
    <p>Zu einer Zeit, als diese Art von Dienstleistung weit mehr Nähe, Vertrauen und persönlichen Einsatz erforderte, zeichnete sich Táxis Mário Andrade durch Seriosität, Engagement gegenüber den Kunden und die Fähigkeit aus, auf die wirklichen Bedürfnisse derer einzugehen, die zwischen zwei Ländern lebten.</p>
    <p>Es ging nicht nur um Gepäck oder Passagiere.</p>
    <p>Es ging um Geschichten, Lebensveränderungen, Familienzusammenkünfte, persönliche Habseligkeiten und oft um ganze Lebensabschnitte derer, die außerhalb Portugals nach besseren Chancen suchten.</p>
    <p>Im Laufe der Jahre wurde das Unternehmen zu einer Referenz für viele in Luxemburg lebende portugiesische Familien.</p>
    <p>Es stand für Vertrauen.<br />Es stand für Sicherheit.<br />Es stand für jemanden, der hält, was er verspricht.</p>
    <p>Und das baut man nur mit Zeit auf.</p>
    <HistFigCartao caption="Alte Visitenkarte des Unternehmens Táxis Mário Andrade" />

    <h2>Carlos Silva: ein Leben im Unternehmen</h2>
    <p>Unter den Menschen, die Teil dieser Geschichte waren, verdient ein Name besondere Erwähnung: <strong>Carlos Silva</strong>.</p>
    <p>Carlos Silva war einer der treuesten Mitarbeiter von Herrn Mário Andrade.</p>
    <p>Er begann sehr früh bei Táxis Mário Andrade zu arbeiten und verbrachte einen großen Teil seines Berufslebens in diesem Haus.</p>
    <p>Er kannte den Betrieb wie kaum ein anderer.<br />Er kannte die Kunden.<br />Er kannte die Strecken.<br />Er kannte die Anforderungen der Branche.<br />Er kannte die wirklichen Herausforderungen dieser Art von Transport.</p>
    <p>Er erlebte gute und schwierige Zeiten.</p>
    <p>Er ging durch die natürlichen Höhen und Tiefen jedes Unternehmens mit jahrzehntelanger Tätigkeit und verfolgte die gesamte Entwicklung des Geschäfts aus nächster Nähe.</p>
    <p>Er war nicht nur ein Mitarbeiter.</p>
    <p>Er war jemand, der das Unternehmen wie seine Westentasche kannte.</p>
    <p>Diese praktische Erfahrung, im Feld über viele Jahre aufgebaut, wurde zur grundlegenden Basis für das, was folgen sollte.</p>
    <HistFigCarlos caption="Carlos Silva, Partner von Transportes Carlos & César, vor einem der LKW des Unternehmens" />

    <h2>Die Übergabe</h2>
    <p>Es kam der Moment, an dem Herr Mário Andrade entschied, in den Ruhestand zu gehen.</p>
    <p>Nach Jahrzehnten der Arbeit und einem dem Transportsektor gewidmeten Leben war es Zeit, den Staffelstab zu übergeben.</p>
    <p>Und diese Kontinuität konnte nicht in besser vorbereiteten Händen liegen.</p>
    <p>Im Jahr <strong>2018</strong> übernahm Carlos Silva das Unternehmen gemeinsam mit César und gründete eine neue Gesellschaft mit einem klaren Ziel: die Arbeit, den Ruf und das Erbe, das über so viele Jahre aufgebaut wurde, fortzuführen.</p>
    <p>Es ging nicht darum, ein neues Unternehmen zu gründen.</p>
    <p>Es ging darum, eine Geschichte zu bewahren.</p>
    <p>Alles zu respektieren, was bereits aufgebaut worden war.</p>
    <p>Einen Namen, ein Vertrauen und eine Marktposition fortzuführen, die durch jahrzehntelange seriöse Arbeit erworben wurden.</p>
    <p>So entstand die <strong>Transportes Carlos &amp; César</strong>.</p>
    <p>Eine neue Phase.<br />Eine neue Struktur.<br />Aber mit denselben Wurzeln.</p>
    <HistFigCesar caption="César, Partner von Transportes Carlos & César, neben einem der Fahrzeuge des Unternehmens" />

    <h2>Transportes Carlos &amp; César: Kontinuität mit Zukunftsblick</h2>
    <p>Heute steht Transportes Carlos &amp; César für diese Kontinuität.</p>
    <p>Wir behalten dasselbe Engagement gegenüber unseren Kunden bei: Seriosität, Nähe, Vertrauen und echte Lösungen für alle, die Waren zwischen Portugal und Luxemburg transportieren müssen.</p>
    <p>Die über mehr als vier Jahrzehnte gesammelte Erfahrung erlaubt uns, diesen Markt tief zu kennen.</p>
    <p>Wir wissen, dass jeder Transport anders ist.<br />Wir wissen, dass jeder Kunde spezifische Bedürfnisse hat.<br />Wir wissen, dass in diesem Sektor Vertrauen genauso viel wert ist wie Schnelligkeit.</p>
    <p>Wir arbeiten nicht nur mit Waren.</p>
    <p>Wir arbeiten mit Verantwortung.</p>
    <p>Jede Lieferung steht für ein Versprechen.<br />Jeder Transport steht für das in uns gesetzte Vertrauen.</p>
    <p>Genau diese langjährige Erfahrung unterscheidet uns.</p>
    <p>Wir sind nicht einfach ein weiterer Transporteur.</p>
    <p>Wir sind die Fortsetzung einer echten Geschichte.</p>

    <h2>Erfahrung, die Vertrauen schafft</h2>
    <p>In einem Markt, in dem viele Unternehmen schnell entstehen und wieder verschwinden, machen Stabilität und Erfahrung den Unterschied.</p>
    <p>Unsere Marktposition wurde nicht über Nacht aufgebaut.</p>
    <p>Sie wurde durch beständige Arbeit, zufriedene Kunden und Jahrzehnte echter Präsenz zwischen Portugal und Luxemburg aufgebaut.</p>
    <p>Das übersetzt sich in etwas Einfaches: Wer diesen Sektor kennt, erkennt Erfahrung.</p>
    <p>Und diese Erfahrung gibt dem Kunden Sicherheit.</p>
    <p>Wer uns wählt, beauftragt nicht nur einen Transport.</p>
    <p>Er wählt Vertrauen.<br />Er wählt Wissen.<br />Er wählt diejenigen, die diesen Weg wirklich kennen.</p>

    <h2>Wir schreiben weiter Geschichte</h2>
    <p>Die Geschichte begann vor mehr als 40 Jahren.</p>
    <p>Aber sie wird jeden Tag fortgesetzt.</p>
    <p>Jeder neue Kunde.<br />Jede ausgelieferte Ware.<br />Jede abgeschlossene Fahrt.</p>
    <p>All das ist Teil der Fortsetzung dieser Geschichte.</p>
    <p>Unser Engagement bleibt dasselbe: das von Herrn Mário Andrade geschaffene Erbe weiter zu ehren und das Vertrauen all jener zu verdienen, die sich für uns entscheiden.</p>
    <p>Denn am Ende geht es bei einem Transport nicht nur um das Ziel.</p>
    <p>Es geht um <strong>Vertrauen auf dem Weg</strong>.</p>

    <h2>Kontaktieren Sie uns</h2>
    <p>Wenn Sie ein Unternehmen mit echter Erfahrung, solider Marktpräsenz und tiefem Wissen über Transporte zwischen Portugal und Luxemburg suchen, sind wir für Sie da.</p>
    <p>Ob für kleine Sendungen, größere Waren, Gepäck, Fahrräder oder maßgeschneiderten Transport – wir analysieren jeden Fall mit Aufmerksamkeit und Ernsthaftigkeit.</p>
    <p>Erfahrung macht den Unterschied.</p>
    <p>Und diese Erfahrung lebt mit uns weiter.</p>
  </>
);

// ---------- Post 3: Cadeado TSA ----------
const cadeado_pt = () => (
  <>
    <p className="lead">
      Esta é uma dúvida muito frequente entre clientes que enviam malas, bagagens pessoais ou
      mercadorias entre Portugal e Luxemburgo: <em>“Posso enviar a minha mala fechada com cadeado?”</em>
    </p>
    <p>A resposta mais correta é: <strong>depende do tipo de cadeado</strong>.</p>
    <p>
      Na maioria dos casos, não recomendamos o uso de cadeados comuns, especialmente cadeados
      tradicionais, aluquetes normais ou fechaduras com código sem certificação apropriada.
    </p>
    <p>
      Isto porque durante o transporte internacional podem existir fiscalizações e inspeções
      por parte das autoridades competentes. Quando isso acontece, a mala pode precisar de ser
      aberta imediatamente. E se o cadeado não permitir essa abertura, o resultado costuma ser
      simples: o cadeado é forçado e, muitas vezes, a própria mala acaba danificada ou inutilizada.
    </p>

    <h2>Porque é que isto acontece?</h2>
    <p>
      Durante o transporte internacional, especialmente em rotas frequentes entre Portugal e
      Luxemburgo, podem existir controlos aduaneiros, inspeções de segurança e verificações por
      parte das autoridades. Essas fiscalizações são normais e fazem parte do processo.
    </p>
    <p>
      Quando uma mala, caixa ou mercadoria precisa de ser aberta para inspeção, as entidades
      responsáveis precisam de acesso rápido e imediato ao interior. Se a bagagem estiver fechada
      com um cadeado comum, sem sistema de abertura autorizado, os agentes não vão esperar nem
      procurar o proprietário.
    </p>
    <p>
      Na maioria das situações, o cadeado é cortado. E em alguns casos, dependendo da estrutura
      da mala, a própria mala pode ser danificada de forma irreversível.
    </p>

    <h2>O problema dos cadeados comuns</h2>
    <p>
      Muitas pessoas usam cadeados tradicionais por acharem que estão a proteger melhor os seus
      bens. Mas no transporte internacional, isso pode acabar por criar exatamente o problema contrário.
    </p>
    <p>Um cadeado comum:</p>
    <ul>
      <li>pode ser cortado</li>
      <li>pode obrigar à destruição parcial da mala</li>
      <li>pode atrasar o processo de inspeção</li>
      <li>pode gerar danos desnecessários</li>
    </ul>
    <p>Ou seja, aquilo que parecia proteção pode transformar-se num prejuízo.</p>

    <h2>A melhor opção: cadeados TSA</h2>
    <p>
      Se pretende proteger a sua bagagem e, ao mesmo tempo, evitar problemas em fiscalizações,
      a melhor solução é utilizar <strong>cadeados TSA</strong>.
    </p>
    <p>Mas afinal, o que significa isso?</p>
    <p>
      TSA significa <em>Travel Sentry Approved</em>. São cadeados desenvolvidos especificamente
      para viagens e transportes internacionais, permitindo que as autoridades autorizadas
      consigam abrir a mala com uma chave mestra própria, sem necessidade de cortar o cadeado
      ou danificar a bagagem.
    </p>
    <p>
      Estes cadeados costumam ter o símbolo vermelho característico TSA, facilmente identificável.
      Esse pequeno detalhe pode evitar muitos problemas.
    </p>

    <h2>Como identificar um cadeado TSA</h2>
    <p>É simples. Normalmente, os cadeados TSA apresentam:</p>
    <ul>
      <li>símbolo vermelho característico</li>
      <li>identificação <em>Travel Sentry</em></li>
      <li>estrutura própria para abertura com chave mestra autorizada</li>
    </ul>
    <p>
      Se o seu cadeado não tiver estas características, muito provavelmente trata-se de um
      cadeado comum. Nesse caso, não é a melhor opção para transporte internacional.
    </p>

    <h2>Então devo enviar sem cadeado?</h2>
    <p>
      Se não tiver um cadeado TSA, muitas vezes é preferível enviar sem cadeado do que usar um
      cadeado comum que possa provocar danos maiores.
    </p>
    <p>
      A segurança do transporte não depende apenas do cadeado. Depende também da forma como a
      bagagem é preparada, embalada e transportada. E principalmente, depende da confiança na
      empresa que faz esse transporte.
    </p>
    <p>
      Por isso, mais importante do que um cadeado forte, é escolher um serviço de transporte
      sério e experiente.
    </p>

    <h2>A nossa recomendação</h2>
    <p>A nossa recomendação é simples:</p>
    <p><strong>Evite cadeados comuns.</strong></p>
    <p>
      Se quiser proteger a sua mala ou mercadoria, utilize apenas cadeados com certificação TSA.
      Isso reduz significativamente o risco de danos durante fiscalizações e evita situações
      desagradáveis no momento da entrega.
    </p>
    <p>É uma pequena escolha que pode fazer uma grande diferença.</p>

    <h2>Em caso de dúvida, fale connosco</h2>
    <p>
      Cada envio é diferente. Algumas mercadorias exigem cuidados específicos e algumas bagagens
      precisam de preparação especial antes do transporte.
    </p>
    <p>
      Se tiver dúvidas sobre como preparar a sua mala, bagagem ou mercadoria para envio entre
      Portugal e Luxemburgo, fale connosco.
    </p>
    <p>Preferimos esclarecer antes do transporte do que resolver problemas depois.</p>
    <p>A prevenção continua a ser a melhor solução.</p>
  </>
);

const cadeado_en = () => (
  <>
    <p className="lead">
      This is a very common question among clients who send suitcases, personal luggage or goods
      between Portugal and Luxembourg: <em>“Can I send my suitcase locked with a padlock?”</em>
    </p>
    <p>The most accurate answer is: <strong>it depends on the type of padlock</strong>.</p>
    <p>
      In most cases, we do not recommend using common padlocks, especially traditional padlocks,
      regular locks or combination locks without proper certification.
    </p>
    <p>
      This is because during international transport there may be inspections and checks by the
      competent authorities. When this happens, the suitcase may need to be opened immediately.
      And if the padlock does not allow that, the result is usually simple: the lock is forced
      and, very often, the suitcase itself ends up damaged or destroyed.
    </p>

    <h2>Why does this happen?</h2>
    <p>
      During international transport, especially on frequent routes between Portugal and
      Luxembourg, there can be customs controls, security inspections and checks by the
      authorities. These inspections are normal and part of the process.
    </p>
    <p>
      When a suitcase, box or goods need to be opened for inspection, the responsible authorities
      need quick and immediate access to the inside. If the luggage is closed with a common
      padlock, without an authorised opening system, agents will not wait or look for the owner.
    </p>
    <p>
      In most situations, the padlock is cut. And in some cases, depending on the structure of
      the suitcase, the suitcase itself can be irreversibly damaged.
    </p>

    <h2>The problem with common padlocks</h2>
    <p>
      Many people use traditional padlocks because they think they are better protecting their
      belongings. But in international transport, this can actually create the opposite problem.
    </p>
    <p>A common padlock:</p>
    <ul>
      <li>can be cut</li>
      <li>can force partial destruction of the suitcase</li>
      <li>can delay the inspection process</li>
      <li>can cause unnecessary damage</li>
    </ul>
    <p>In short, what looked like protection can become a loss.</p>

    <h2>The best option: TSA locks</h2>
    <p>
      If you want to protect your luggage while avoiding problems during inspections, the best
      solution is to use <strong>TSA locks</strong>.
    </p>
    <p>But what does that actually mean?</p>
    <p>
      TSA stands for <em>Travel Sentry Approved</em>. These padlocks are designed specifically
      for travel and international transport, allowing authorised authorities to open the
      suitcase with their own master key, without cutting the lock or damaging the luggage.
    </p>
    <p>
      They usually carry the characteristic red TSA symbol, easy to identify. That small detail
      can prevent many problems.
    </p>

    <h2>How to identify a TSA lock</h2>
    <p>It is simple. TSA locks usually feature:</p>
    <ul>
      <li>the characteristic red symbol</li>
      <li><em>Travel Sentry</em> identification</li>
      <li>a structure designed to open with an authorised master key</li>
    </ul>
    <p>
      If your padlock does not have these features, it is most likely a common padlock — and
      therefore not the best option for international transport.
    </p>

    <h2>Should I send it without a padlock?</h2>
    <p>
      If you do not have a TSA lock, it is often better to send the luggage without a padlock
      than to use a common one that may cause greater damage.
    </p>
    <p>
      Transport safety does not depend solely on the padlock. It also depends on how the luggage
      is prepared, packed and transported. And above all, it depends on trust in the company
      handling the transport.
    </p>
    <p>
      That is why, more important than a strong padlock, is choosing a serious and experienced
      transport service.
    </p>

    <h2>Our recommendation</h2>
    <p>Our recommendation is simple:</p>
    <p><strong>Avoid common padlocks.</strong></p>
    <p>
      If you want to protect your suitcase or goods, use only TSA-certified locks. This
      significantly reduces the risk of damage during inspections and avoids unpleasant
      situations on delivery.
    </p>
    <p>It is a small choice that can make a big difference.</p>

    <h2>If in doubt, talk to us</h2>
    <p>
      Every shipment is different. Some goods require specific care and some luggage needs
      special preparation before transport.
    </p>
    <p>
      If you have any doubts about how to prepare your suitcase, luggage or goods for shipment
      between Portugal and Luxembourg, talk to us.
    </p>
    <p>We prefer to clarify things before transport rather than solve problems afterwards.</p>
    <p>Prevention remains the best solution.</p>
  </>
);

const cadeado_fr = () => (
  <>
    <p className="lead">
      C’est une question très fréquente parmi les clients qui envoient des valises, des bagages
      personnels ou des marchandises entre le Portugal et le Luxembourg :{" "}
      <em>« Puis-je envoyer ma valise fermée avec un cadenas ? »</em>
    </p>
    <p>La réponse la plus juste est : <strong>cela dépend du type de cadenas</strong>.</p>
    <p>
      Dans la plupart des cas, nous ne recommandons pas l’utilisation de cadenas classiques,
      notamment les cadenas traditionnels, les serrures normales ou les serrures à code sans
      certification appropriée.
    </p>
    <p>
      En effet, durant le transport international, des contrôles et inspections peuvent être
      effectués par les autorités compétentes. Lorsque cela arrive, la valise peut devoir être
      ouverte immédiatement. Et si le cadenas ne le permet pas, le résultat est souvent simple :
      le cadenas est forcé et, très souvent, la valise elle-même est endommagée, voire inutilisable.
    </p>

    <h2>Pourquoi cela arrive-t-il ?</h2>
    <p>
      Pendant le transport international, en particulier sur les itinéraires fréquents entre le
      Portugal et le Luxembourg, il peut y avoir des contrôles douaniers, des inspections de
      sécurité et des vérifications par les autorités. Ces contrôles sont normaux et font partie
      du processus.
    </p>
    <p>
      Lorsqu’une valise, une caisse ou une marchandise doit être ouverte pour inspection, les
      autorités responsables ont besoin d’un accès rapide et immédiat. Si le bagage est fermé
      avec un cadenas classique, sans système d’ouverture autorisé, les agents n’attendront pas
      ni ne chercheront le propriétaire.
    </p>
    <p>
      Dans la plupart des situations, le cadenas est coupé. Et dans certains cas, selon la
      structure de la valise, celle-ci peut être endommagée de manière irréversible.
    </p>

    <h2>Le problème des cadenas classiques</h2>
    <p>
      Beaucoup utilisent des cadenas traditionnels en pensant mieux protéger leurs biens. Mais
      dans le transport international, cela peut produire exactement l’effet inverse.
    </p>
    <p>Un cadenas classique :</p>
    <ul>
      <li>peut être coupé</li>
      <li>peut entraîner la destruction partielle de la valise</li>
      <li>peut retarder le processus d’inspection</li>
      <li>peut générer des dégâts inutiles</li>
    </ul>
    <p>En d’autres termes, ce qui semblait être une protection peut devenir une perte.</p>

    <h2>La meilleure option : les cadenas TSA</h2>
    <p>
      Si vous souhaitez protéger vos bagages tout en évitant les problèmes lors des contrôles,
      la meilleure solution est d’utiliser des <strong>cadenas TSA</strong>.
    </p>
    <p>Mais qu’est-ce que cela signifie au juste ?</p>
    <p>
      TSA signifie <em>Travel Sentry Approved</em>. Ce sont des cadenas conçus spécifiquement
      pour les voyages et les transports internationaux, permettant aux autorités autorisées
      d’ouvrir la valise avec leur propre clé maîtresse, sans avoir à couper le cadenas ni à
      endommager le bagage.
    </p>
    <p>
      Ces cadenas portent généralement le symbole rouge caractéristique TSA, facilement
      identifiable. Ce petit détail peut éviter bien des problèmes.
    </p>

    <h2>Comment identifier un cadenas TSA</h2>
    <p>C’est simple. Les cadenas TSA présentent généralement :</p>
    <ul>
      <li>le symbole rouge caractéristique</li>
      <li>la mention <em>Travel Sentry</em></li>
      <li>une structure conçue pour être ouverte avec une clé maîtresse autorisée</li>
    </ul>
    <p>
      Si votre cadenas ne possède pas ces caractéristiques, il s’agit très probablement d’un
      cadenas classique — et ce n’est donc pas la meilleure option pour le transport international.
    </p>

    <h2>Dois-je envoyer sans cadenas ?</h2>
    <p>
      Si vous n’avez pas de cadenas TSA, il est souvent préférable d’envoyer sans cadenas
      plutôt qu’avec un cadenas classique pouvant causer des dégâts plus importants.
    </p>
    <p>
      La sécurité du transport ne dépend pas uniquement du cadenas. Elle dépend aussi de la
      manière dont les bagages sont préparés, emballés et transportés. Et surtout, de la
      confiance accordée à l’entreprise qui réalise ce transport.
    </p>
    <p>
      C’est pourquoi, plus important qu’un cadenas solide, c’est de choisir un service de
      transport sérieux et expérimenté.
    </p>

    <h2>Notre recommandation</h2>
    <p>Notre recommandation est simple :</p>
    <p><strong>Évitez les cadenas classiques.</strong></p>
    <p>
      Si vous souhaitez protéger votre valise ou votre marchandise, utilisez uniquement des
      cadenas certifiés TSA. Cela réduit considérablement le risque de dégâts lors des contrôles
      et évite les situations désagréables au moment de la livraison.
    </p>
    <p>C’est un petit choix qui peut faire une grande différence.</p>

    <h2>En cas de doute, parlez-nous</h2>
    <p>
      Chaque envoi est différent. Certaines marchandises nécessitent des soins spécifiques et
      certains bagages exigent une préparation particulière avant le transport.
    </p>
    <p>
      Si vous avez des doutes sur la façon de préparer votre valise, vos bagages ou votre
      marchandise pour un envoi entre le Portugal et le Luxembourg, parlez-nous.
    </p>
    <p>Nous préférons clarifier avant le transport plutôt que résoudre les problèmes après.</p>
    <p>La prévention reste la meilleure solution.</p>
  </>
);

const cadeado_de = () => (
  <>
    <p className="lead">
      Diese Frage stellen viele Kunden, die Koffer, persönliches Gepäck oder Waren zwischen
      Portugal und Luxemburg versenden: <em>„Kann ich meinen Koffer mit einem Schloss verschlossen versenden?“</em>
    </p>
    <p>Die richtigste Antwort lautet: <strong>es kommt auf die Art des Schlosses an</strong>.</p>
    <p>
      In den meisten Fällen empfehlen wir keine gewöhnlichen Schlösser, insbesondere keine
      traditionellen Vorhängeschlösser, einfache Schlösser oder Zahlenschlösser ohne
      entsprechende Zertifizierung.
    </p>
    <p>
      Denn beim internationalen Transport kann es zu Kontrollen und Inspektionen durch die
      zuständigen Behörden kommen. In solchen Fällen muss der Koffer unter Umständen sofort
      geöffnet werden. Lässt das Schloss dies nicht zu, ist das Ergebnis meist klar: Das Schloss
      wird aufgebrochen und sehr oft wird auch der Koffer selbst beschädigt oder unbrauchbar.
    </p>

    <h2>Warum passiert das?</h2>
    <p>
      Beim internationalen Transport, vor allem auf den häufigen Strecken zwischen Portugal und
      Luxemburg, kann es zu Zollkontrollen, Sicherheitsinspektionen und Überprüfungen durch
      Behörden kommen. Diese Kontrollen sind normal und Teil des Prozesses.
    </p>
    <p>
      Wenn ein Koffer, eine Kiste oder eine Ware zur Inspektion geöffnet werden muss, brauchen
      die zuständigen Stellen schnellen und sofortigen Zugang zum Inhalt. Ist das Gepäck mit
      einem gewöhnlichen Schloss ohne autorisiertes Öffnungssystem verschlossen, werden die
      Beamten nicht warten oder den Eigentümer suchen.
    </p>
    <p>
      In den meisten Fällen wird das Schloss aufgeschnitten. Und je nach Struktur des Koffers
      kann dieser dabei irreversibel beschädigt werden.
    </p>

    <h2>Das Problem mit gewöhnlichen Schlössern</h2>
    <p>
      Viele Menschen verwenden traditionelle Schlösser in der Annahme, ihre Sachen besser zu
      schützen. Im internationalen Transport kann das jedoch genau das Gegenteil bewirken.
    </p>
    <p>Ein gewöhnliches Schloss:</p>
    <ul>
      <li>kann aufgeschnitten werden</li>
      <li>kann zur teilweisen Zerstörung des Koffers führen</li>
      <li>kann den Inspektionsprozess verzögern</li>
      <li>kann unnötige Schäden verursachen</li>
    </ul>
    <p>Was nach Schutz aussah, kann sich also in einen Schaden verwandeln.</p>

    <h2>Die beste Option: TSA-Schlösser</h2>
    <p>
      Wenn Sie Ihr Gepäck schützen und gleichzeitig Probleme bei Kontrollen vermeiden möchten,
      ist die beste Lösung die Verwendung von <strong>TSA-Schlössern</strong>.
    </p>
    <p>Aber was bedeutet das eigentlich?</p>
    <p>
      TSA steht für <em>Travel Sentry Approved</em>. Diese Schlösser wurden speziell für Reisen
      und internationale Transporte entwickelt und ermöglichen es autorisierten Behörden, den
      Koffer mit einem eigenen Generalschlüssel zu öffnen, ohne das Schloss aufzuschneiden oder
      das Gepäck zu beschädigen.
    </p>
    <p>
      Diese Schlösser tragen in der Regel das charakteristische rote TSA-Symbol, das leicht zu
      erkennen ist. Dieses kleine Detail kann viele Probleme vermeiden.
    </p>

    <h2>Wie erkennt man ein TSA-Schloss?</h2>
    <p>Es ist einfach. TSA-Schlösser zeigen normalerweise:</p>
    <ul>
      <li>das charakteristische rote Symbol</li>
      <li>die Kennzeichnung <em>Travel Sentry</em></li>
      <li>eine Struktur, die das Öffnen mit einem autorisierten Generalschlüssel erlaubt</li>
    </ul>
    <p>
      Hat Ihr Schloss diese Merkmale nicht, handelt es sich höchstwahrscheinlich um ein
      gewöhnliches Schloss — und damit nicht um die beste Wahl für internationale Transporte.
    </p>

    <h2>Soll ich also ohne Schloss versenden?</h2>
    <p>
      Wenn Sie kein TSA-Schloss haben, ist es oft besser, ohne Schloss zu versenden, als ein
      gewöhnliches Schloss zu verwenden, das größere Schäden verursachen kann.
    </p>
    <p>
      Die Sicherheit des Transports hängt nicht allein vom Schloss ab. Sie hängt auch davon ab,
      wie das Gepäck vorbereitet, verpackt und transportiert wird. Und vor allem vom Vertrauen
      in das Unternehmen, das den Transport durchführt.
    </p>
    <p>
      Deshalb ist wichtiger als ein starkes Schloss die Wahl eines seriösen und erfahrenen
      Transportdienstes.
    </p>

    <h2>Unsere Empfehlung</h2>
    <p>Unsere Empfehlung ist einfach:</p>
    <p><strong>Vermeiden Sie gewöhnliche Schlösser.</strong></p>
    <p>
      Wenn Sie Ihren Koffer oder Ihre Ware schützen möchten, verwenden Sie nur TSA-zertifizierte
      Schlösser. Das verringert das Risiko von Schäden bei Kontrollen erheblich und vermeidet
      unangenehme Situationen bei der Lieferung.
    </p>
    <p>Eine kleine Entscheidung, die einen großen Unterschied machen kann.</p>

    <h2>Im Zweifel sprechen Sie mit uns</h2>
    <p>
      Jede Sendung ist anders. Manche Waren erfordern besondere Sorgfalt und manches Gepäck
      eine besondere Vorbereitung vor dem Transport.
    </p>
    <p>
      Wenn Sie Fragen zur Vorbereitung Ihres Koffers, Ihres Gepäcks oder Ihrer Ware für den
      Versand zwischen Portugal und Luxemburg haben, sprechen Sie uns an.
    </p>
    <p>Wir klären lieber vor dem Transport, als hinterher Probleme zu lösen.</p>
    <p>Vorbeugen bleibt die beste Lösung.</p>
  </>
);

// ---------- Posts list ----------
export const posts: BlogPost[] = [
  {
    slug: "cadeado-tsa-malas-transporte",
    date: "2026-05-11",
    readingMinutes: 6,
    cover: cadeadoTsaCover,
    title: {
      pt: "Devo enviar a minha mala ou mercadoria fechada com cadeado?",
      en: "Should I send my suitcase or goods locked with a padlock?",
      fr: "Dois-je envoyer ma valise ou ma marchandise fermée avec un cadenas ?",
      de: "Sollte ich meinen Koffer oder meine Ware mit einem Schloss verschlossen versenden?",
    },
    excerpt: {
      pt: "Cadeados comuns podem causar danos durante fiscalizações. Saiba quando usar cadeados TSA e como preparar a sua mala para o transporte internacional.",
      en: "Common padlocks can cause damage during inspections. Learn when to use TSA locks and how to prepare your luggage for international transport.",
      fr: "Les cadenas classiques peuvent causer des dégâts lors des contrôles. Découvrez quand utiliser un cadenas TSA et comment préparer votre valise.",
      de: "Gewöhnliche Schlösser können bei Kontrollen Schäden verursachen. Erfahren Sie, wann Sie TSA-Schlösser nutzen und wie Sie Ihren Koffer vorbereiten sollten.",
    },
    metaDescription: {
      pt: "Descubra porque não deve enviar malas com cadeados comuns e quando deve usar cadeados TSA para evitar danos durante fiscalizações internacionais.",
      en: "Find out why you shouldn't send suitcases with common padlocks and when to use TSA locks to avoid damage during international inspections.",
      fr: "Découvrez pourquoi il ne faut pas envoyer de valises avec des cadenas classiques et quand utiliser des cadenas TSA pour éviter les dégâts lors des contrôles internationaux.",
      de: "Erfahren Sie, warum Sie Koffer nicht mit gewöhnlichen Schlössern versenden sollten und wann TSA-Schlösser Schäden bei internationalen Kontrollen vermeiden.",
    },
    coverAlt: {
      pt: "Mala metálica com cadeado TSA num armazém de transporte — Transportes Carlos & César",
      en: "Metallic suitcase with TSA lock in a transport warehouse — Transportes Carlos & César",
      fr: "Valise métallique avec cadenas TSA dans un entrepôt de transport — Transportes Carlos & César",
      de: "Metallkoffer mit TSA-Schloss in einem Transportlager — Transportes Carlos & César",
    },
    content: (lang) => {
      switch (lang) {
        case "en": return cadeado_en();
        case "fr": return cadeado_fr();
        case "de": return cadeado_de();
        default: return cadeado_pt();
      }
    },
  },
  {
    slug: "precos-transporte-portugal-luxemburgo",
    date: "2026-05-08",
    readingMinutes: 5,
    cover: precosCover,
    title: {
      pt: "Quanto custa enviar mercadorias entre Portugal e Luxemburgo?",
      en: "How much does it cost to ship goods between Portugal and Luxembourg?",
      fr: "Combien coûte le transport de marchandises entre le Portugal et le Luxembourg ?",
      de: "Wie viel kostet der Warentransport zwischen Portugal und Luxemburg?",
    },
    excerpt: {
      pt: "Quanto custa realmente enviar mercadorias entre Portugal e Luxemburgo? Exemplos práticos de preços para envelopes, malas, bicicletas e muito mais.",
      en: "How much does it really cost to ship goods between Portugal and Luxembourg? Practical price examples for envelopes, suitcases, bicycles and more.",
      fr: "Combien coûte réellement l’envoi de marchandises entre le Portugal et le Luxembourg ? Exemples concrets de tarifs pour enveloppes, valises, vélos et plus encore.",
      de: "Wie viel kostet der Versand von Waren zwischen Portugal und Luxemburg wirklich? Praktische Preisbeispiele für Umschläge, Koffer, Fahrräder und mehr.",
    },
    metaDescription: {
      pt: "Descubra quanto custa enviar mercadorias entre Portugal e Luxemburgo. Desde pequenos envios a bicicletas, bagagens e transporte personalizado.",
      en: "Find out how much it costs to ship goods between Portugal and Luxembourg. From small shipments to bicycles, luggage and personalised transport.",
      fr: "Découvrez combien coûte l’envoi de marchandises entre le Portugal et le Luxembourg. Des petits envois aux vélos, bagages et transport personnalisé.",
      de: "Erfahren Sie, wie viel der Warentransport zwischen Portugal und Luxemburg kostet. Von kleinen Sendungen bis zu Fahrrädern, Gepäck und individuellen Transporten.",
    },
    coverAlt: {
      pt: "Carrinha de transporte branca com encomendas, em rua europeia — Transportes Carlos & César",
      en: "White transport van with parcels, on a European street — Transportes Carlos & César",
      fr: "Camionnette blanche avec colis dans une rue européenne — Transportes Carlos & César",
      de: "Weißer Transporter mit Paketen auf einer europäischen Straße — Transportes Carlos & César",
    },
    content: (lang) => {
      switch (lang) {
        case "en": return precos_en();
        case "fr": return precos_fr();
        case "de": return precos_de();
        default: return precos_pt();
      }
    },
  },
  {
    slug: "historia-da-empresa-portugal-luxemburgo",
    date: "2026-05-09",
    readingMinutes: 7,
    cover: carlosFoto,
    title: {
      pt: "A nossa história: mais de 40 anos de experiência entre Portugal e Luxemburgo",
      en: "Our story: more than 40 years of experience between Portugal and Luxembourg",
      fr: "Notre histoire : plus de 40 ans d’expérience entre le Portugal et le Luxembourg",
      de: "Unsere Geschichte: über 40 Jahre Erfahrung zwischen Portugal und Luxemburg",
    },
    excerpt: {
      pt: "Da Táxis Mário Andrade à Transportes Carlos & César: a continuidade de mais de quatro décadas de confiança, experiência e ligação entre Portugal e Luxemburgo.",
      en: "From Táxis Mário Andrade to Transportes Carlos & César: the continuity of more than four decades of trust, experience and connection between Portugal and Luxembourg.",
      fr: "De Táxis Mário Andrade à Transportes Carlos & César : la continuité de plus de quatre décennies de confiance, d’expérience et de lien entre le Portugal et le Luxembourg.",
      de: "Von Táxis Mário Andrade zu Transportes Carlos & César: die Fortsetzung von über vier Jahrzehnten Vertrauen, Erfahrung und Verbindung zwischen Portugal und Luxemburg.",
    },
    metaDescription: {
      pt: "Conheça a história da nossa empresa e a continuidade de mais de 40 anos de experiência nos transportes entre Portugal e Luxemburgo, desde Táxis Mário Andrade até à Transportes Carlos e César.",
      en: "Discover the story of our company and the continuity of more than 40 years of experience in transport between Portugal and Luxembourg, from Táxis Mário Andrade to Transportes Carlos & César.",
      fr: "Découvrez l’histoire de notre entreprise et plus de 40 ans d’expérience dans le transport entre le Portugal et le Luxembourg, de Táxis Mário Andrade à Transportes Carlos & César.",
      de: "Entdecken Sie die Geschichte unseres Unternehmens und die Kontinuität von mehr als 40 Jahren Erfahrung im Transport zwischen Portugal und Luxemburg, von Táxis Mário Andrade bis Transportes Carlos & César.",
    },
    coverAlt: {
      pt: "Carlos Silva, sócio da Transportes Carlos & César, em frente a um camião da empresa",
      en: "Carlos Silva, partner at Transportes Carlos & César, in front of one of the company trucks",
      fr: "Carlos Silva, associé de Transportes Carlos & César, devant un camion de l’entreprise",
      de: "Carlos Silva, Partner bei Transportes Carlos & César, vor einem LKW des Unternehmens",
    },
    content: (lang) => {
      switch (lang) {
        case "en": return historia_en();
        case "fr": return historia_fr();
        case "de": return historia_de();
        default: return historia_pt();
      }
    },
  },
];

export function localizePost(post: BlogPost, lang: Lang): LocalizedBlogPost {
  return {
    slug: post.slug,
    date: post.date,
    readingMinutes: post.readingMinutes,
    cover: post.cover,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
    metaDescription: post.metaDescription[lang],
    coverAlt: post.coverAlt[lang],
    content: () => post.content(lang),
  };
}

export function getPostBySlug(slug: string, lang: Lang): LocalizedBlogPost | undefined {
  const p = posts.find((p) => p.slug === slug);
  return p ? localizePost(p, lang) : undefined;
}

export function getSortedPosts(lang: Lang): LocalizedBlogPost[] {
  return [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => localizePost(p, lang));
}
