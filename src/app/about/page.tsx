import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-white border-b-4 border-portugal-green py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1150px] text-center">
          <p className="text-sm font-semibold text-portugal-green uppercase tracking-widest mb-3">Sobre Nós</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">bestptsitesdeapostas.com</h1>
          <p className="text-gray-500">A referência independente em análise de apostas desportivas em Portugal</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-[1150px]">
        <div className="bg-white border border-gray-200 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Quem Somos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>bestptsitesdeapostas.com</strong> surgiu da necessidade real de oferecer aos apostadores
              portugueses um recurso informativo genuinamente independente sobre o mercado regulado de apostas
              desportivas. Somos uma equipa de analistas especializados, com anos de experiência no setor do jogo
              online em Portugal, comprometidos com a transparência e a objetividade.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Desde o início da regulamentação do mercado pelo SRIJ, acompanhamos de perto a evolução das
              plataformas, testamos dezenas de operadores e desenvolvemos uma metodologia rigorosa que coloca
              sempre o apostador no centro das nossas análises.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              A Nossa Missão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acreditamos que o apostador português merece acesso a informação transparente, atualizada e imparcial
              sobre os operadores licenciados. A nossa missão é simplificar a escolha da melhor plataforma,
              apresentando análises técnicas detalhadas que permitem a cada utilizador tomar decisões informadas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Não nos limitamos a comparar bónus — avaliamos a experiência completa, desde o registo até ao
              levantamento, garantindo que as nossas recomendações reflitam a realidade do apostador português.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-6">
              Metodologia de Avaliação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
              {[
                {
                  color: "border-portugal-green",
                  num: "01",
                  title: "Segurança e Licenciamento",
                  desc: "Verificamos o licenciamento SRIJ, protocolos de encriptação e conformidade com a legislação portuguesa. Nenhum operador sem licença válida é incluído no nosso ranking.",
                },
                {
                  color: "border-portugal-red",
                  num: "02",
                  title: "Ofertas e Bónus",
                  desc: "Analisamos bónus de boas-vindas, promoções recorrentes e condições reais de utilização. Examinamos requisitos de rollover, odds mínimas e prazos de validade.",
                },
                {
                  color: "border-portugal-green",
                  num: "03",
                  title: "Plataforma e Usabilidade",
                  desc: "Testamos a interface em desktop e mobile, avaliando velocidade de carregamento, intuitividade da navegação e qualidade da aplicação para smartphone.",
                },
                {
                  color: "border-portugal-red",
                  num: "04",
                  title: "Mercados e Odds",
                  desc: "Comparamos a variedade de desportos e mercados disponíveis, bem como a competitividade das cotações face aos principais operadores europeus.",
                },
                {
                  color: "border-portugal-green",
                  num: "05",
                  title: "Pagamentos",
                  desc: "Testamos todos os métodos de depósito e levantamento disponíveis, registando prazos reais de processamento e eventuais comissões aplicadas.",
                },
                {
                  color: "border-portugal-red",
                  num: "06",
                  title: "Apoio ao Cliente",
                  desc: "Contactamos o suporte através de todos os canais disponíveis — chat ao vivo, email e telefone — avaliando tempos de resposta e qualidade do atendimento.",
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 border-b border-r border-gray-200 border-l-4 ${item.color}`}>
                  <div className="text-2xl font-black text-gray-200 mb-2">{item.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Transparência e Parcerias Comerciais
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O bestptsitesdeapostas.com mantém parcerias comerciais com operadores de apostas licenciados pelo SRIJ.
              Quando efetua um registo através dos links presentes no nosso portal, podemos receber uma comissão de
              afiliação sem qualquer custo adicional para si.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Garantimos que estas parcerias não influenciam a independência das nossas análises. As classificações
              e avaliações publicadas baseiam-se exclusivamente nos méritos objetivos de cada plataforma, avaliados
              segundo a metodologia descrita acima.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-red pl-4 mb-4">
              Jogo Responsável
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                Promovemos ativamente práticas de jogo responsável. As apostas desportivas devem ser encaradas
                exclusivamente como entretenimento, nunca como fonte de rendimento regular. Incentivamos todos os
                utilizadores a estabelecer limites de tempo e de gastos, e a recorrer a recursos de apoio caso
                sintam que o jogo pode estar a tornar-se um problema. Linha de apoio:{" "}
                <a href="tel:213950213" className="text-portugal-red font-semibold hover:underline">
                  213 950 213
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para sugestões, correções ou questões editoriais, entre em contacto através de:{" "}
              <a
                href="mailto:redacao@bestptsitesdeapostas.com"
                className="text-portugal-green hover:underline font-medium"
              >
                redacao@bestptsitesdeapostas.com
              </a>
              . A nossa equipa compromete-se a responder em 48 horas úteis.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
