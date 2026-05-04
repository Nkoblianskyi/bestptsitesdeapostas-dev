import { FadeIn } from "./animations/fade-in"

export function CompareBonusTypes() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">
        <FadeIn>
          <div className="border-l-4 border-portugal-red pl-6 mb-12">
            <p className="text-sm font-semibold text-portugal-red uppercase tracking-wider mb-2">Guia de Bónus</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Tipos de Bónus: Entenda as Diferenças
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Nem todos os bónus são iguais. Conheça as principais modalidades de promoções oferecidas pelas casas de
              apostas licenciadas em Portugal e saiba qual se adequa melhor ao seu perfil.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          <FadeIn delay={100}>
            <div className="border-r border-gray-200 p-8">
              <div className="border-b-2 border-portugal-green pb-4 mb-5">
                <h3 className="text-xl font-bold text-gray-900">Apostas Grátis</h3>
                <p className="text-xs text-portugal-green font-semibold uppercase tracking-wide mt-1">Free Bets</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Créditos oferecidos pela casa de apostas que permitem fazer apostas sem utilizar o seu próprio
                  saldo. Os ganhos são creditados como dinheiro real, excluindo o valor da aposta inicial.
                </p>
                <div className="bg-gray-50 border-l-2 border-portugal-green p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Como funciona:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cumpra os requisitos (geralmente uma aposta qualificativa) e receba o valor em apostas grátis.
                    Consulte sempre os termos antes de ativar.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="border-r border-gray-200 p-8">
              <div className="border-b-2 border-portugal-red pb-4 mb-5">
                <h3 className="text-xl font-bold text-gray-900">Bónus de Depósito</h3>
                <p className="text-xs text-portugal-red font-semibold uppercase tracking-wide mt-1">Match Bonus</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  A casa de apostas iguala uma percentagem do seu primeiro depósito, adicionando fundos extra à sua
                  conta para aumentar o seu poder de aposta inicial.
                </p>
                <div className="bg-gray-50 border-l-2 border-portugal-red p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Como funciona:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Deposite e receba um bónus percentual (ex: 100% até 50€). Os fundos ficam bloqueados até cumprir
                    os requisitos de rollover especificados nos termos.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="p-8">
              <div className="border-b-2 border-portugal-green pb-4 mb-5">
                <h3 className="text-xl font-bold text-gray-900">Bónus Sem Depósito</h3>
                <p className="text-xs text-portugal-green font-semibold uppercase tracking-wide mt-1">No Deposit</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Créditos oferecidos apenas pelo registo na plataforma, sem necessidade de efetuar qualquer
                  depósito inicial. Ideal para testar o serviço sem risco.
                </p>
                <div className="bg-gray-50 border-l-2 border-portugal-green p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Como funciona:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Complete o registo e verificação da conta para receber o bónus. Valores geralmente mais baixos
                    mas com possibilidade de ganhos reais sem risco.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-8 border-l-4 border-gray-900 bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Nota Editorial:</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Leia sempre os termos e condições antes de aceitar qualquer bónus. Verifique os requisitos de rollover,
              odds mínimas, prazos de validade e restrições de mercados. Um bónus com termos justos vale mais do que
              um valor elevado com condições impossíveis de cumprir.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
