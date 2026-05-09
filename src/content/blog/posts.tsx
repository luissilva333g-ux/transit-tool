import type { ReactNode } from "react";
import precosCover from "@/assets/blog-precos.jpg";

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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}