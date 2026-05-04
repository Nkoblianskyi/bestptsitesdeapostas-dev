import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-white border-b-4 border-portugal-green py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1150px] text-center">
          <p className="text-sm font-semibold text-portugal-green uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
          <p className="text-gray-500 text-sm">Última atualização: 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-[1150px]">
        <div className="bg-white border border-gray-200 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Compromisso com a Privacidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>bestptsitesdeapostas.com</strong> está profundamente comprometido com a proteção dos dados
              pessoais dos seus utilizadores. Esta Política de Privacidade descreve de forma clara e transparente
              como recolhemos, utilizamos e protegemos as informações que nos são confiadas, em total conformidade
              com o Regulamento Geral de Proteção de Dados (RGPD) e a legislação portuguesa em vigor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Dados Pessoais Recolhidos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No âmbito da sua utilização do bestptsitesdeapostas.com, podemos recolher as seguintes categorias
              de informação:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Identificação: nome, pseudónimo ou outros identificadores únicos",
                "Contactos: endereço de email e outros meios de comunicação disponibilizados voluntariamente",
                "Informação técnica: endereço IP, tipo de navegador, sistema operativo e localização geográfica aproximada",
                "Comportamento de navegação: páginas visitadas, duração de sessões e padrões de interação com o portal",
                "Preferências comunicacionais: consentimentos para newsletters e notificações",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-portugal-green rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Finalidades do Tratamento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os dados recolhidos são processados exclusivamente para:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Disponibilizar e melhorar continuamente os nossos serviços de comparação e análise de operadores",
                "Personalizar a experiência de navegação com conteúdos relevantes e atualizados",
                "Enviar comunicações sobre novas análises, rankings atualizados e ofertas exclusivas (com consentimento)",
                "Realizar análises estatísticas internas para otimizar a estrutura e qualidade do portal",
                "Cumprir obrigações legais impostas por autoridades reguladoras portuguesas e europeias",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-portugal-green rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Partilha com Terceiros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O bestptsitesdeapostas.com pode partilhar dados nas seguintes circunstâncias:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Com operadores de apostas licenciados pelo SRIJ, quando clica em links de afiliação presentes no portal",
                "Com prestadores de serviços técnicos para manutenção, hospedagem e segurança do website",
                "Com plataformas de análise web (ex: Google Analytics) para fins estatísticos agregados e anónimos",
                "Com autoridades judiciais ou reguladoras, quando legalmente obrigados",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-portugal-red rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Os Seus Direitos ao Abrigo do RGPD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
              {[
                { right: "Direito de Acesso", desc: "Obter confirmação sobre se os seus dados são tratados e aceder a eles." },
                { right: "Direito de Retificação", desc: "Solicitar a correção de dados pessoais inexatos ou incompletos." },
                { right: "Direito ao Apagamento", desc: "Requerer a eliminação dos seus dados quando já não forem necessários." },
                { right: "Direito à Portabilidade", desc: "Receber os seus dados em formato estruturado e legível por máquina." },
                { right: "Direito de Oposição", desc: "Opor-se ao tratamento para finalidades de marketing direto." },
                { right: "Direito de Limitação", desc: "Restringir o tratamento dos seus dados em determinadas circunstâncias." },
              ].map((item, i) => (
                <div key={i} className="p-5 border-b border-r border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.right}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Aplicamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra
              acesso não autorizado, perda acidental ou destruição. Utilizamos encriptação SSL/TLS em todas as
              comunicações, controlo de acessos interno e auditorias regulares de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para exercer os seus direitos ou esclarecer questões sobre privacidade, contacte:{" "}
              <a
                href="mailto:privacidade@bestptsitesdeapostas.com"
                className="text-portugal-green hover:underline font-medium"
              >
                privacidade@bestptsitesdeapostas.com
              </a>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
