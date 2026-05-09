import type { ReactNode } from "react";
import precosCover from "@/assets/blog-precos.jpg";
import cartaoTaxisAndrade from "@/assets/blog-cartao-taxis-andrade.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  cover?: string;
  coverAlt?: string;
  content: () => ReactNode;
}

export const posts: BlogPost[] = [
  {
    slug: "precos-transporte-portugal-luxemburgo",
    title: "Quanto custa enviar mercadorias entre Portugal e Luxemburgo?",
    excerpt:
      "Quanto custa realmente enviar mercadorias entre Portugal e Luxemburgo? Exemplos práticos de preços para envelopes, malas, bicicletas e muito mais.",
    metaDescription:
      "Descubra quanto custa enviar mercadorias entre Portugal e Luxemburgo. Desde pequenos envios a bicicletas, bagagens e transporte personalizado.",
    date: "2026-05-08",
    readingMinutes: 5,
    cover: precosCover,
    coverAlt:
      "Carrinha de transporte branca com encomendas, em rua europeia — Transportes Carlos & César",
    content: () => (
      <>
        <p className="lead">
          Uma das perguntas mais frequentes que recebemos é:{" "}
          <em>“Quanto custa enviar mercadorias entre Portugal e Luxemburgo?”</em>
        </p>
        <p>
          A resposta mais honesta é: <strong>depende</strong>.
        </p>
        <p>
          O preço do transporte internacional não pode ser calculado apenas com base no peso.
          Existem vários fatores que influenciam diretamente o valor final, como o tipo de
          mercadoria, o volume ocupado, o peso real, a quantidade de volumes e até a facilidade
          de manuseamento.
        </p>
        <p>
          Ainda assim, existem alguns exemplos práticos que ajudam a perceber melhor os valores.
        </p>

        <h2>Envios pequenos podem começar nos 10€</h2>
        <p>
          Se estivermos a falar de um envelope ou de uma caixa pequena, por exemplo do tamanho
          de uma caixa de sapatos, com peso inferior a 10 kg, o preço pode começar nos{" "}
          <strong>10 euros</strong>.
        </p>
        <p>
          Nestes casos, quando se trata de mercadoria simples, leve e de pequenas dimensões, o
          valor costuma realmente situar-se muito próximo desse mínimo, salvo situações
          específicas.
        </p>
        <p>
          Este tipo de envio é bastante comum para documentos, pequenos objetos pessoais, peças
          pequenas ou encomendas simples.
        </p>

        <h2>Uma mala de cabine até 20 kg ronda normalmente os 20€</h2>
        <p>
          Uma mala de viagem de cabine, com peso até cerca de 20 kg, normalmente fica na casa
          dos <strong>20 euros</strong>.
        </p>
        <p>
          É um tipo de envio bastante frequente para clientes particulares que precisam de
          enviar bagagem, pertences pessoais ou objetos de uso diário entre Portugal e
          Luxemburgo.
        </p>
        <p>
          O valor pode variar ligeiramente dependendo das dimensões e do tipo de conteúdo
          transportado.
        </p>

        <h2>Uma bicicleta de adulto pode rondar os 35€</h2>
        <p>
          No caso de uma bicicleta, o preço depende bastante do tamanho e também do tipo. Por
          exemplo, uma bicicleta normal de adulto costuma rondar os <strong>35 euros</strong>.
        </p>
        <p>
          Se for uma bicicleta elétrica, o valor pode ser superior devido ao peso adicional, ao
          maior volume e às necessidades específicas de transporte. Cada caso deve ser
          analisado individualmente.
        </p>

        <h2>O peso sozinho não define o preço</h2>
        <p>
          Muitas pessoas pensam que o transporte é calculado apenas ao quilo, mas isso não
          funciona assim na prática.
        </p>
        <p>
          Imagine, por exemplo, um edredão. É um artigo que ocupa bastante espaço dentro da
          viatura, mas pesa muito pouco. Se o preço fosse calculado apenas ao quilograma, esse
          transporte deixaria de ser viável para a transportadora.
        </p>
        <p>
          Por isso, o <strong>volume ocupado</strong> é muitas vezes tão importante quanto o
          peso. É precisamente por isso que analisamos sempre:
        </p>
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
        <p>
          Não existe uma tabela fixa que sirva para todos os envios. Cada mercadoria tem
          características próprias e cada cliente tem necessidades diferentes.
        </p>
        <p>
          O nosso objetivo não é dar preços genéricos, mas sim apresentar a melhor solução para
          cada situação específica. Seja um pequeno envelope, uma bicicleta, bagagem pessoal ou
          transporte de mercadorias maiores, analisamos cada pedido de forma individual.
        </p>

        <h2>Peça o seu orçamento</h2>
        <p>
          Se pretende saber exatamente quanto vai custar o seu envio entre Portugal e
          Luxemburgo, a melhor solução é pedir um orçamento rápido. Basta indicar:
        </p>
        <ul>
          <li>o que pretende transportar</li>
          <li>peso aproximado</li>
          <li>dimensões</li>
          <li>origem</li>
          <li>destino</li>
        </ul>
        <p>
          Com essa informação conseguimos apresentar uma proposta ajustada, rápida e sem
          compromisso.
        </p>
      </>
    ),
  },
  {
    slug: "historia-da-empresa-portugal-luxemburgo",
    title:
      "A nossa história: mais de 40 anos de experiência entre Portugal e Luxemburgo",
    excerpt:
      "Da Táxis Mário Andrade à Transportes Carlos & César: a continuidade de mais de quatro décadas de confiança, experiência e ligação entre Portugal e Luxemburgo.",
    metaDescription:
      "Conheça a história da nossa empresa e a continuidade de mais de 40 anos de experiência nos transportes entre Portugal e Luxemburgo, desde Táxis Mário Andrade até à Transportes Carlos e César.",
    date: "2026-05-09",
    readingMinutes: 7,
    content: () => (
      <>
        <p className="lead">
          Quando falamos de transporte entre Portugal e Luxemburgo, não falamos apenas de
          carrinhas, mercadorias ou viagens.
        </p>
        <p>
          Falamos de <strong>confiança</strong>.<br />
          Falamos de relações construídas ao longo de décadas.<br />
          Falamos de famílias, de emigrantes, de trabalho sério e de uma ligação profunda
          entre dois países que tantas histórias partilham.
        </p>
        <p>A nossa empresa não nasceu do zero.</p>
        <p>
          Ela é a continuação de uma história muito maior, construída com dedicação, esforço
          e uma reputação sólida ao longo de mais de <strong>40 anos</strong>.
        </p>
        <p>
          Uma história que começou com um nome bem conhecido por muitas famílias:{" "}
          <em>Táxis Mário Andrade, de Mortágua</em>.
        </p>

        <h2>As origens: Táxis Mário Andrade</h2>
        <p>
          Durante décadas, a empresa <strong>Táxis Mário Andrade</strong> foi uma referência
          nos transportes entre Portugal e Luxemburgo.
        </p>
        <p>
          Fundada pelo senhor Mário Andrade, em Mortágua, esta empresa tornou-se pioneira num
          setor muito específico e extremamente importante: o transporte de passageiros e
          mercadorias entre Portugal e Luxemburgo, com especial ligação à comunidade
          emigrante.
        </p>
        <p>
          Numa altura em que este tipo de serviço exigia muito mais proximidade, confiança e
          dedicação pessoal, Táxis Mário Andrade destacou-se pela seriedade, pelo compromisso
          com os clientes e pela capacidade de responder às necessidades reais de quem vivia
          entre dois países.
        </p>
        <p>Não se tratava apenas de transportar malas ou passageiros.</p>
        <p>
          Tratava-se de transportar histórias, mudanças de vida, reencontros familiares, bens
          pessoais e, muitas vezes, partes inteiras da vida de quem procurava melhores
          oportunidades fora de Portugal.
        </p>
        <p>
          Ao longo dos anos, a empresa tornou-se uma referência para muitas famílias
          portuguesas emigradas no Luxemburgo.
        </p>
        <p>
          Era sinónimo de confiança.<br />
          Era sinónimo de segurança.<br />
          Era sinónimo de alguém que cumpria.
        </p>
        <p>E isso constrói-se com tempo.</p>

        <figure className="my-8">
          <img
            src={cartaoTaxisAndrade}
            alt="Antigo cartão de visita da empresa Táxis Mário Andrade, com contactos das agências em Portugal e Luxemburgo"
            loading="lazy"
            className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
            Antigo cartão de visita da empresa Táxis Mário Andrade
          </figcaption>
        </figure>

        <h2>Carlos Silva: uma vida dentro da empresa</h2>
        <p>
          Entre as pessoas que fizeram parte desta história, há um nome que merece destaque
          especial: <strong>Carlos Silva</strong>.
        </p>
        <p>
          Carlos Silva foi um dos colaboradores mais fiéis do senhor Mário Andrade.
        </p>
        <p>
          Começou a trabalhar muito cedo na empresa Táxis Mário Andrade e passou grande parte
          da sua vida profissional ligado a esta casa.
        </p>
        <p>
          Conhecia a operação como poucos.<br />
          Conhecia os clientes.<br />
          Conhecia os percursos.<br />
          Conhecia as exigências do setor.<br />
          Conhecia os desafios reais deste tipo de transporte.
        </p>
        <p>Viveu os momentos bons e os momentos difíceis.</p>
        <p>
          Passou pelos altos e baixos naturais de qualquer empresa com décadas de atividade
          e acompanhou de perto toda a evolução do negócio.
        </p>
        <p>Não era apenas um trabalhador.</p>
        <p>Era alguém que conhecia a empresa como a palma da sua mão.</p>
        <p>
          Essa experiência prática, construída no terreno e ao longo de muitos anos,
          tornou-se uma base fundamental para aquilo que viria a seguir.
        </p>

        <h2>A passagem de testemunho</h2>
        <p>
          Chegou o momento em que o senhor Mário Andrade decidiu reformar-se.
        </p>
        <p>
          Depois de décadas de trabalho e de uma vida dedicada ao setor dos transportes, era
          tempo de passar o testemunho.
        </p>
        <p>E essa continuidade não podia ficar em mãos mais preparadas.</p>
        <p>
          Em <strong>2018</strong>, Carlos Silva adquiriu a empresa, juntamente com César,
          formando uma nova sociedade com um objetivo muito claro: dar continuidade ao
          trabalho, à reputação e ao legado construído durante tantos anos.
        </p>
        <p>Não se tratava de começar uma empresa nova.</p>
        <p>Tratava-se de preservar uma história.</p>
        <p>Tratava-se de respeitar tudo aquilo que já tinha sido construído.</p>
        <p>
          Tratava-se de continuar um nome, uma confiança e uma posição de mercado conquistada
          com décadas de trabalho sério.
        </p>
        <p>
          Foi assim que nasceu a <strong>Transportes Carlos &amp; César</strong>.
        </p>
        <p>
          Uma nova fase.<br />
          Uma nova estrutura.<br />
          Mas com as mesmas raízes.
        </p>

        <h2>Transportes Carlos &amp; César: continuidade com visão de futuro</h2>
        <p>
          Hoje, a Transportes Carlos &amp; César representa essa continuidade.
        </p>
        <p>
          Mantemos o mesmo compromisso com os clientes: seriedade, proximidade, confiança e
          soluções reais para quem precisa de transportar mercadorias entre Portugal e
          Luxemburgo.
        </p>
        <p>
          A experiência acumulada ao longo de mais de quatro décadas permite-nos conhecer
          profundamente este mercado.
        </p>
        <p>
          Sabemos que cada transporte é diferente.<br />
          Sabemos que cada cliente tem necessidades específicas.<br />
          Sabemos que, neste setor, confiança vale tanto como rapidez.
        </p>
        <p>Não trabalhamos apenas com mercadorias.</p>
        <p>Trabalhamos com responsabilidade.</p>
        <p>
          Cada entrega representa um compromisso.<br />
          Cada transporte representa confiança depositada em nós.
        </p>
        <p>É precisamente essa experiência de longo prazo que nos diferencia.</p>
        <p>Não somos apenas mais uma transportadora.</p>
        <p>Somos a continuidade de uma história real.</p>

        <h2>Experiência que gera confiança</h2>
        <p>
          Num mercado onde muitas empresas aparecem e desaparecem rapidamente, a
          estabilidade e a experiência fazem diferença.
        </p>
        <p>A nossa posição no mercado não foi construída de um dia para o outro.</p>
        <p>
          Foi construída com trabalho consistente, com clientes satisfeitos e com décadas de
          presença real entre Portugal e Luxemburgo.
        </p>
        <p>
          Isso traduz-se em algo simples: quem conhece este setor sabe reconhecer
          experiência.
        </p>
        <p>E essa experiência dá segurança ao cliente.</p>
        <p>Quando alguém nos escolhe, não está apenas a contratar transporte.</p>
        <p>
          Está a escolher confiança.<br />
          Está a escolher conhecimento.<br />
          Está a escolher quem conhece verdadeiramente este percurso.
        </p>

        <h2>Continuamos a fazer história</h2>
        <p>A história começou há mais de 40 anos.</p>
        <p>Mas continua todos os dias.</p>
        <p>
          Cada cliente novo.<br />
          Cada mercadoria entregue.<br />
          Cada viagem concluída.
        </p>
        <p>Tudo isso faz parte da continuação desta história.</p>
        <p>
          O nosso compromisso mantém-se o mesmo: continuar a honrar o legado construído pelo
          senhor Mário Andrade e continuar a merecer a confiança de todos aqueles que
          escolhem trabalhar connosco.
        </p>
        <p>Porque no final, o transporte não é apenas sobre destino.</p>
        <p>
          É sobre <strong>confiança no caminho</strong>.
        </p>

        <h2>Fale connosco</h2>
        <p>
          Se procura uma empresa com experiência real, presença sólida no mercado e profundo
          conhecimento dos transportes entre Portugal e Luxemburgo, estamos aqui para ajudar.
        </p>
        <p>
          Seja para pequenos envios, mercadorias maiores, bagagens, bicicletas ou transporte
          personalizado, analisamos cada caso com atenção e seriedade.
        </p>
        <p>A experiência faz diferença.</p>
        <p>E essa experiência continua connosco.</p>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}