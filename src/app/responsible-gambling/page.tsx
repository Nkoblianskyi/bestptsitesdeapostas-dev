import { AlertTriangle, Clock, Ban, Wallet, Brain, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50 border-b-4 border-portugal-red py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Jogo Responsável</h1>
          <p className="text-gray-700">Aposte com consciência e responsabilidade</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white space-y-8 text-gray-900">
          {/* Intro */}
          <div className="bg-red-50 border border-portugal-red/30 p-6 rounded-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              O topptsitesdeapostas.com defende que as apostas desportivas devem ser encaradas exclusivamente como forma
              de entretenimento, nunca como meio de obter rendimento ou solucionar dificuldades financeiras.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Identificar Comportamentos de Risco</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reconhecer sinais de alerta é fundamental. Se identifica algum destes comportamentos, procure apoio:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Dedicar tempo ou recursos financeiros superiores ao que pode permitir-se</li>
              <li>Dificuldade em controlar ou interromper a atividade de apostas</li>
              <li>Ocultar de familiares a extensão real dos seus hábitos de apostas</li>
              <li>Recorrer às apostas como fuga a problemas pessoais</li>
              <li>Contrair empréstimos para financiar apostas</li>
              <li>Negligenciar responsabilidades profissionais ou familiares</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Princípios de Apostas Conscientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <Clock className="h-8 w-8 text-portugal-green flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Estabeleça Limites Temporais</h3>
                  <p className="text-sm text-gray-600">
                    Defina quanto tempo pretende dedicar às apostas e respeite esse limite rigorosamente.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <Wallet className="h-8 w-8 text-portugal-red flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Defina Orçamentos Rígidos</h3>
                  <p className="text-sm text-gray-600">
                    Aposte exclusivamente com valores que pode perder sem comprometer o seu bem-estar financeiro.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <Ban className="h-8 w-8 text-portugal-green flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Faça Intervalos Regulares</h3>
                  <p className="text-sm text-gray-600">
                    Apostar continuamente compromete a capacidade de tomar decisões racionais.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <Brain className="h-8 w-8 text-portugal-red flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Aposte Informado</h3>
                  <p className="text-sm text-gray-600">
                    Compreenda as probabilidades e regras dos mercados em que aposta.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <AlertTriangle className="h-8 w-8 text-portugal-green flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Nunca Persiga Perdas</h3>
                  <p className="text-sm text-gray-600">
                    Tentar recuperar perdas conduz frequentemente a perdas ainda maiores.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex gap-4">
                <Phone className="h-8 w-8 text-portugal-red flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Procure Apoio Especializado</h3>
                  <p className="text-sm text-gray-600">
                    Não hesite em contactar serviços especializados. O apoio é confidencial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Apoio Especializado em Portugal</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organizações portuguesas que disponibilizam apoio gratuito e confidencial:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>SICAD - Linha de Apoio: 211 210 200</li>
              <li>Linha SOS Vício do Jogo - Contacto: 213 950 213</li>
              <li>APAJO - Associação Portuguesa de Apoio ao Jogador</li>
              <li>Centros de Respostas Integradas (CRI) - Rede nacional de apoio presencial</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ferramentas de Autocontrolo</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os operadores licenciados oferecem ferramentas para ajudar a manter controlo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Limites de Depósito - Valores máximos por dia, semana ou mês</li>
              <li>Limites de Aposta - Controle o montante máximo por sessão</li>
              <li>Limites de Tempo - Duração máxima das sessões</li>
              <li>Períodos de Reflexão - Pausas temporárias de 24 horas até 6 semanas</li>
              <li>Autoexclusão - Bloqueio permanente ou de longa duração</li>
              <li>Alertas de Realidade - Notificações sobre tempo e valores apostados</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

