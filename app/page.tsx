import Link from "next/link"
import Image from "next/image"
import { listLandings } from "@/lib/api"

export const revalidate = 300

const WA = "https://wa.me/5511930819577?text=" + encodeURIComponent("Olá, vim pelo site de Advocacia Criminal e preciso de orientação.")

export const metadata = {
  title: "Advogado Criminalista | Defesa Criminal em Todas as Fases · Dr. Oliveira",
  description:
    "Advocacia criminal: prisão em flagrante, habeas corpus, inquérito, tribunal do júri, crimes financeiros e virtuais. Defesa técnica com sigilo e urgência.",
  alternates: { canonical: "https://criminal.droliveira.adv.br" },
}

const STEPS: [string, string][] = [
  ["Contato imediato", "Você fala com o escritório pelo WhatsApp, com sigilo. Em situações urgentes, o tempo de resposta importa."],
  ["Análise e estratégia", "Avaliamos os autos, a fase do caso e os direitos em jogo para definir a melhor estratégia de defesa."],
  ["Defesa em todas as fases", "Atuamos do inquérito ao júri, acompanhando cada ato e protegendo os direitos do cliente."],
]

const FAQ: [string, string][] = [
  ["Fui intimado a depor. Preciso de advogado?", "Sim, é altamente recomendável. O acompanhamento por advogado desde o início protege os seus direitos e evita prejuízos à defesa. Procure orientação antes de prestar depoimento."],
  ["Houve uma prisão em flagrante. O que fazer?", "Agir rápido é essencial. Há medidas cabíveis logo após o flagrante, como o pedido de liberdade. Entre em contato o quanto antes para avaliar a situação."],
  ["O atendimento é sigiloso e nacional?", "Sim. O atendimento é feito com sigilo profissional e alcance nacional, de forma online e direta."],
]

export default async function Home() {
  const list = await listLandings()

  return (
    <>
      <header className="border-b border-[#e4e0d7] bg-[#f6f4ef]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Image src="/logo/logo-horizontal.png" alt="Dr. Oliveira Advocacia" width={220} height={44} className="h-9 w-auto" priority />
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#20ba5a]">WhatsApp</a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(165deg,#082533,#081b26)] text-[#efebe6]">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ccab76]">Advocacia Criminal</p>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-5xl">
            Defesa criminal técnica, em todas as fases.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#aeb8bd]">
            Do inquérito ao júri: prisão em flagrante, habeas corpus, defesa e acompanhamento.
            Atendimento com sigilo e urgência quando o caso exige.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-7 py-3 font-semibold text-white transition hover:bg-[#20ba5a]">
              Falar com um advogado agora
            </a>
            <a href="#temas" className="rounded-lg border border-[#ccab76] px-7 py-3 font-semibold text-[#ccab76] transition hover:bg-[#ccab76] hover:text-[#082533]">
              Ver as áreas
            </a>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-sm text-[#aeb8bd]">
            <span>OAB/SP 524.997 · OAB/PE 24.469</span>
            <span>Atendimento online e nacional</span>
            <span>Sigilo profissional</span>
          </div>
        </div>
      </section>

      {/* TEMAS (data-driven) */}
      <section id="temas" className="bg-[#f6f4ef]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-[#082533] md:text-3xl">Áreas de atuação criminal</h2>
            <p className="mt-3 text-[#4a5560]">Escolha o tema mais próximo da sua situação para entender como agir.</p>
          </div>
          {list.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((l) => (
                <Link key={l.slug} href={`/${l.slug}`} className="group rounded-xl border border-[#ccab76]/40 bg-white p-5 transition-colors hover:border-[#ccab76]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ccab76]">{l.eyebrow}</p>
                  <p className="mt-2 font-serif text-lg font-bold text-[#082533]">{l.titleLead}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-[#082533] group-hover:underline">Ver mais →</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-[#4a5560]">As páginas serão exibidas aqui em breve.</p>
          )}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-center font-serif text-2xl font-bold text-[#082533] md:text-3xl">Como funciona</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="rounded-xl border border-[#e4e0d7] p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082533] font-bold text-[#ccab76]">{i + 1}</div>
                <p className="mt-4 font-serif text-lg font-bold text-[#082533]">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5560]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-[linear-gradient(165deg,#082533,#081b26)] text-[#efebe6]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 py-16 md:flex-row">
          <Image src="/team/dr-oliveira-duotone.jpg" alt="Dr. Carlos Fernando Lopes de Oliveira" width={160} height={160} className="h-40 w-40 flex-shrink-0 rounded-2xl object-cover" />
          <div>
            <p className="font-serif text-2xl font-bold">Dr. Carlos Fernando Lopes de Oliveira</p>
            <p className="mt-1 text-sm text-[#ccab76]">Advogado · OAB/SP 524.997 · OAB/PE 24.469 · Mestre em Ciências Jurídicas (UFPB)</p>
            <p className="mt-4 leading-relaxed text-[#aeb8bd]">
              Atuação em Advocacia Criminal em todas as fases, do inquérito ao Tribunal do Júri, com defesa técnica,
              sigilo e atenção à urgência de cada caso. O atendimento é direto e reservado.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f4ef]">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-center font-serif text-2xl font-bold text-[#082533] md:text-3xl">Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="rounded-xl border border-[#e4e0d7] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#082533]">{q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5560]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#082533] text-center text-[#efebe6]">
        <div className="mx-auto max-w-2xl px-5 py-16">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Precisa de defesa criminal?</h2>
          <p className="mt-3 text-[#aeb8bd]">Converse com o escritório com sigilo e entenda como agir.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-lg bg-[#25D366] px-8 py-3 font-semibold text-white transition hover:bg-[#20ba5a]">
            Falar com um advogado agora
          </a>
        </div>
      </section>

      <footer className="bg-[#0a212e] px-5 py-6 text-center text-[11px] text-[#8a97a0]">
        Dr. Carlos Fernando L. de Oliveira · OAB/SP 524.997 · OAB/PE 24.469 · Conteúdo informativo em conformidade com o Provimento OAB 205/2021.
      </footer>
    </>
  )
}
