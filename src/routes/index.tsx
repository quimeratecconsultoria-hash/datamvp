import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import salao from "@/assets/salao.webp.asset.json";
import barbearia from "@/assets/barbearia.webp.asset.json";
import bebidas from "@/assets/bebidas.webp.asset.json";
import academia from "@/assets/academia.webp.asset.json";
import petshop from "@/assets/petshop.jpg";
import mecanica from "@/assets/mecanica.jpg";
import odonto from "@/assets/odonto.jpg";

const WA = "https://wa.me/5511970663433";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DATAMVP | Landing pages para pequenos comércios com WhatsApp" },
      {
        name: "description",
        content:
          "Criamos uma página digital para o seu comércio atrair e atender clientes direto no WhatsApp. Orçamento sem compromisso.",
      },
      { property: "og:title", content: "DATAMVP | Página digital para o seu comércio" },
      {
        property: "og:description",
        content:
          "Uma estrutura simples, rápida e profissional para destacar seu negócio local e receber clientes no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2 .52 3.96 1.52 5.69L.55 23.6l6.04-1.58a11.37 11.37 0 0 0 5.44 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-icon-bg text-accent-foreground">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    </span>
  );
}

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-cta w-full sm:w-auto">
      <WhatsIcon />
      {children}
    </a>
  );
}

const segmentos = [
  { t: "Barbearias, salões de beleza e clínicas de estética", d: "M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8.1 8.1 20 20M8.1 15.9 20 4" },
  { t: "Mercados, comércios de bebidas, padarias e pizzarias", d: "M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6M9 21h.01M18 21h.01" },
  { t: "Academias, clínicas odontológicas e veterinárias", d: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { t: "Pet shops, mecânicas e comércios locais em geral", d: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" },
];

type Tab = {
  id: string;
  label: string;
  legenda: string;
  img: string;
  composed?: boolean;
  phone?: { nome: string; itens: [string, string][]; botao: string };
};

const tabs: Tab[] = [
  { id: "beleza", label: "Barbearias / Salões / Estética", legenda: "Facilite o agendamento de horários direto no seu WhatsApp.", img: barbearia.url, composed: true },
  { id: "alimentos", label: "Padarias / Pizzarias / Mercados / Bebidas", legenda: "Exponha seus produtos e receba pedidos organizados.", img: bebidas.url, composed: true },
  {
    id: "pet", label: "Pet Shops / Veterinárias", legenda: "Valorize os cuidados do seu pet shop com uma página leve.", img: petshop,
    phone: { nome: "Pet shop do bairro", itens: [["Banho", "Porte pequeno"], ["Banho e tosa", "Todos os portes"], ["Consulta veterinária", "Com horário"]], botao: "Agendar no WhatsApp" },
  },
  {
    id: "auto", label: "Mecânicas / Estética de Veículos", legenda: "Passe credibilidade técnica e feche mais orçamentos.", img: mecanica,
    phone: { nome: "Oficina mecânica", itens: [["Revisão preventiva", "Carros e utilitários"], ["Suspensão e freios", "Diagnóstico"], ["Polimento e higienização", "Estética"]], botao: "Pedir orçamento" },
  },
  {
    id: "saude", label: "Clínicas Odontológicas / Saúde", legenda: "Transmita confiança e organize o primeiro contato do paciente.", img: odonto,
    phone: { nome: "Clínica odontológica", itens: [["Clínica geral", "Avaliação"], ["Ortodontia", "Aparelhos"], ["Clareamento", "Estética dental"]], botao: "Tirar dúvidas" },
  },
];

const passos = [
  { n: "1", t: "Envio de dados", d: "Você nos manda as informações básicas do seu comércio, fotos e serviços." },
  { n: "2", t: "Criação ágil", d: "Nós estruturamos a página pronta para celular." },
  { n: "3", t: "No ar", d: "Sua página publicada, funcionando e pronta para receber clientes da sua região." },
];

function Phone({ p }: { p: NonNullable<Tab["phone"]> }) {
  return (
    <div className="device-frame w-[190px] sm:w-[220px]">
      <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-secondary" />
      <div className="p-4">
        <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-foreground">Página no celular</span>
        <p className="mt-2 font-display text-sm font-bold leading-tight">{p.nome}</p>
        <ul className="mt-3 divide-y divide-border">
          {p.itens.map(([a, b]) => (
            <li key={a} className="py-2">
              <p className="text-xs font-semibold">{a}</p>
              <p className="text-[10px] text-muted-foreground">{b}</p>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex min-h-9 items-center justify-center rounded-md bg-cta text-[11px] font-bold text-cta-foreground">{p.botao}</div>
      </div>
    </div>
  );
}

function Galeria() {
  const [ativa, setAtiva] = useState("beleza");
  const tab = tabs.find((t) => t.id === ativa)!;
  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Segmentos" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === ativa}
            onClick={() => setAtiva(t.id)}
            className={`min-h-11 shrink-0 rounded-lg border px-4 text-sm font-medium transition-colors duration-200 ${
              t.id === ativa ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <figure key={tab.id} className="card-soft fade-in mt-5 overflow-hidden p-0">
        <div className="relative aspect-[1408/768] w-full bg-secondary">
          <img src={tab.img} alt={tab.label} width={1408} height={768} loading="lazy" className="h-full w-full object-cover" />
          {tab.phone && (
            <div className="absolute inset-y-0 right-3 hidden items-center sm:flex md:right-8">
              <Phone p={tab.phone} />
            </div>
          )}
        </div>
        {tab.phone && (
          <div className="flex justify-center bg-secondary py-6 sm:hidden">
            <Phone p={tab.phone} />
          </div>
        )}
        <figcaption className="px-6 py-5 text-base font-medium sm:px-8">{tab.legenda}</figcaption>
      </figure>
    </div>
  );
}

function Index() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">
      <header className="mx-auto flex max-w-6xl items-center px-5 pt-6 sm:px-8">
        <span className="font-display text-lg font-extrabold tracking-tight">
          DATA<span className="text-primary">MVP</span>
        </span>
      </header>

      {/* Seção 1 */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-24 lg:pt-16">
        <div>
          <p className="eyebrow">Para pequenos comércios e negócios locais</p>
          <h1 className="mt-4 text-[30px] font-bold leading-[1.18] sm:text-4xl lg:text-[44px]">
            Criamos uma página digital para o seu comércio atrair e atender clientes direto no WhatsApp.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Uma estrutura simples, rápida e profissional para destacar seu negócio local e transformar visitantes da sua região em novos contatos.
          </p>
          <ul className="mt-7 grid gap-3">
            {segmentos.map((s) => (
              <li key={s.t} className="flex items-center gap-3 text-[15px] font-medium">
                <Icon d={s.d} />
                {s.t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Cta>Quero um orçamento para o meu comércio</Cta>
            <p className="mt-3 text-sm text-muted-foreground">Atendimento rápido via WhatsApp, sem compromisso.</p>
          </div>
        </div>
        <div className="card-soft overflow-hidden p-0">
          <img src={salao.url} alt="Salão de beleza com página de agendamento aberta no celular" width={1408} height={768} fetchPriority="high" className="aspect-[1408/768] h-auto w-full object-cover" />
        </div>
      </section>

      {/* Seção 2 */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Simples, direto e sem complicação</p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight sm:text-4xl">
              Por que depender só do Instagram se você pode ter um canal direto de vendas?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Redes sociais entregam para poucos e o WhatsApp sozinho não transmite a confiança que um comércio profissional merece. Nós criamos uma página sob medida para o seu negócio — focada em celular, leve e desenhada para colocar o seu cliente direto no seu WhatsApp em um clique.
            </p>
          </div>

          <Galeria />

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {passos.map((p) => (
              <li key={p.n} className="card-soft p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-icon-bg font-display text-lg font-bold text-accent-foreground">{p.n}</span>
                <h3 className="mt-4 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Cta>Descobrir como funciona na prática</Cta>
            <p className="mt-3 text-sm text-muted-foreground">Suporte transparente em todas as etapas.</p>
          </div>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="card-soft grid overflow-hidden p-0 lg:grid-cols-2">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Vamos começar?</p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight sm:text-4xl">
              Tenha uma página profissional com preço justo para a realidade do seu comércio.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Chega de perder clientes locais para concorrentes que parecem mais organizados. Fale com a nossa equipe e descubra uma solução acessível para profissionalizar a sua presença digital hoje mesmo.
            </p>
            <div className="mt-8">
              <Cta>Solicitar orçamento sem compromisso</Cta>
              <p className="mt-3 text-sm text-muted-foreground">Atendimento direto pelo WhatsApp (11) 97066-3433. Resposta rápida.</p>
            </div>
          </div>
          <img src={academia.url} alt="Academia de bairro com página digital" width={1408} height={768} loading="lazy" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">DATAMVP</footer>
    </main>
  );
}
