import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PlaySmartGuide() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">
        <div className="border-l-4 border-portugal-green pl-6 mb-12">
          <p className="text-sm font-semibold text-portugal-green uppercase tracking-wider mb-2">Guia Prático</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Como Começar a Apostar em Portugal
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Se é novo no mundo das apostas desportivas, este guia explica todo o processo desde o registo até à
            primeira aposta. Siga estes passos para começar de forma segura e informada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 mb-16">
          {[
            {
              num: "01",
              color: "border-portugal-green",
              textColor: "text-portugal-green",
              title: "Escolha uma Casa de Apostas",
              body: "Consulte o nosso ranking e selecione um operador licenciado que corresponda às suas preferências. Considere fatores como bónus oferecidos, mercados disponíveis e métodos de pagamento.",
              tip: "Verifique sempre se o site possui licença válida do SRIJ antes de se registar.",
              tipLabel: "Dica",
            },
            {
              num: "02",
              color: "border-portugal-red",
              textColor: "text-portugal-red",
              title: "Complete o Registo",
              body: "Preencha o formulário de registo com os seus dados pessoais. Será necessário fornecer nome completo, data de nascimento, morada e contactos. Prepare documentos de identificação.",
              tip: "Utilize sempre dados verdadeiros. Informações falsas podem resultar no bloqueio da conta.",
              tipLabel: "Importante",
            },
            {
              num: "03",
              color: "border-portugal-green",
              textColor: "text-portugal-green",
              title: "Faça o Primeiro Depósito",
              body: "Escolha um método de pagamento disponível e deposite o valor desejado. Se houver um bónus de boas-vindas, certifique-se de inserir o código promocional antes de confirmar.",
              tip: "Comece com um valor modesto enquanto se familiariza com a plataforma.",
              tipLabel: "Recomendação",
            },
            {
              num: "04",
              color: "border-portugal-red",
              textColor: "text-portugal-red",
              title: "Coloque a Sua Primeira Aposta",
              body: "Navegue pelos mercados disponíveis, selecione o evento desportivo e o tipo de aposta. Insira o valor no boletim e confirme. Acompanhe o resultado e gira o seu bankroll responsavelmente.",
              tip: "Aposte apenas o que pode perder e nunca tente recuperar perdas com apostas impulsivas.",
              tipLabel: "Lembre-se",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`p-8 border-b md:border-b-0 border-gray-200 ${i % 2 === 0 ? "md:border-r" : ""} border-l-4 ${step.color}`}
            >
              <div className={`text-4xl font-black ${step.textColor} mb-3 opacity-30`}>{step.num}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{step.body}</p>
              <div className="bg-gray-50 p-3 border-l-2 border-gray-300">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-gray-800">{step.tipLabel}: </span>
                  {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-portugal-green uppercase tracking-wider mb-2">FAQ</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Perguntas Mais Comuns</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respostas claras às dúvidas mais frequentes sobre apostas desportivas em Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                q: "Como escolher a melhor casa de apostas?",
                a: "Avalie múltiplos critérios: licença SRIJ válida, variedade de mercados desportivos, competitividade das odds, qualidade do bónus de boas-vindas, métodos de pagamento e qualidade do apoio ao cliente. O nosso ranking analisa todos estes fatores para facilitar a sua escolha.",
              },
              {
                q: "Qual o valor mínimo para começar a apostar?",
                a: "A maioria das casas de apostas em Portugal permite depósitos mínimos entre 5€ e 10€. As apostas mínimas variam geralmente entre 0,50€ e 1€, dependendo do operador e do tipo de mercado. Recomendamos começar com valores baixos.",
              },
              {
                q: "Os bónus de boas-vindas valem a pena?",
                a: "Sim, mas é fundamental ler os termos e condições. Os bónus aumentam o seu saldo inicial, mas geralmente têm requisitos de rollover que precisam ser cumpridos antes de levantar. Compare as condições entre operadores.",
              },
              {
                q: "Quanto tempo demora um levantamento?",
                a: "Carteiras digitais como MB WAY processam em 24-48 horas. Transferências bancárias podem demorar 3-5 dias úteis. A primeira retirada pode ser mais lenta devido à verificação de identidade exigida por lei.",
              },
              {
                q: "Posso apostar pelo telemóvel?",
                a: "Absolutamente. Todas as casas de apostas licenciadas em Portugal oferecem versões mobile otimizadas ou aplicações nativas para iOS e Android, com experiência completa incluindo depósitos e levantamentos.",
              },
              {
                q: "Como funcionam as apostas ao vivo?",
                a: "As apostas ao vivo permitem apostar durante o decorrer do evento. As odds atualizam em tempo real conforme o jogo evolui. É uma modalidade dinâmica que exige atenção e decisões rápidas, ideal para quem acompanha os jogos.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 bg-gray-50">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${i}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 text-base font-bold text-gray-900 hover:text-portugal-green text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-sm text-gray-700 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Ainda tem dúvidas? Consulte a secção de{" "}
              <a href="/responsible-gambling" className="text-portugal-green font-semibold hover:underline">
                Jogo Responsável
              </a>{" "}
              para mais informações sobre segurança e limites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
