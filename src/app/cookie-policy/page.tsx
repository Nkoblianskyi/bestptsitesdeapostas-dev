import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-white border-b-4 border-portugal-green py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[1150px] text-center">
          <p className="text-sm font-semibold text-portugal-green uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
          <p className="text-gray-500 text-sm">Última atualização: 1 de Maio de 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-[1150px]">
        <div className="bg-white border border-gray-200 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              O Que São Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies são pequenos ficheiros de texto que um website armazena no seu navegador ou dispositivo quando
              o visita. No <strong>bestptsitesdeapostas.com</strong>, utilizamos esta tecnologia para garantir o
              correto funcionamento do portal, personalizar a experiência de navegação e compreender como os
              visitantes interagem com os nossos conteúdos de análise de apostas desportivas em Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Como Utilizamos Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O nosso portal utiliza cookies para os seguintes fins:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Assegurar o funcionamento técnico correto de todas as funcionalidades do website",
                "Recordar as suas preferências e configurações entre visitas",
                "Melhorar a velocidade de carregamento através de cache inteligente",
                "Recolher dados estatísticos agregados sobre padrões de navegação",
                "Apresentar conteúdos e recomendações de operadores relevantes para o seu perfil",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 w-1.5 h-1.5 bg-portugal-green rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-6">
              Tipos de Cookies Utilizados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
              {[
                {
                  color: "border-portugal-green",
                  label: "Cookies Essenciais",
                  desc: "Indispensáveis para o funcionamento básico do bestptsitesdeapostas.com. Permitem navegação segura, gestão de sessões e acesso a funcionalidades protegidas. Não podem ser desativados.",
                },
                {
                  color: "border-portugal-red",
                  label: "Cookies de Desempenho",
                  desc: "Recolhem informação anónima sobre a utilização do website, como páginas mais visitadas e tempo de permanência. Ajudam-nos a otimizar a estrutura e conteúdos do portal.",
                },
                {
                  color: "border-portugal-green",
                  label: "Cookies Funcionais",
                  desc: "Permitem ao website memorizar as suas escolhas, como preferências de idioma ou região, proporcionando uma experiência mais personalizada.",
                },
                {
                  color: "border-portugal-red",
                  label: "Cookies de Marketing",
                  desc: "Utilizados para apresentar conteúdos e ofertas de operadores de apostas mais relevantes para o seu perfil de interesse, com base no seu comportamento de navegação.",
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 border-b border-r border-gray-200 border-l-4 ${item.color}`}>
                  <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Cookies de Terceiros
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Em determinadas situações, o bestptsitesdeapostas.com utiliza cookies de parceiros externos:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Google Analytics, para análise estatística anónima do comportamento dos visitantes",
                "Operadores de apostas parceiros, que podem usar cookies de rastreamento para identificar referências de afiliação",
                "Ferramentas de partilha social para facilitar a divulgação dos nossos artigos",
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
              Gestão das Suas Preferências
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Tem controlo total sobre os cookies armazenados no seu dispositivo. A generalidade dos navegadores
              modernos permite configurar preferências de cookies, incluindo bloqueio ou eliminação periódica.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para desativar o rastreamento do Google Analytics, pode instalar o complemento oficial disponível em{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-portugal-green hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-portugal-green pl-4 mb-4">
              Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para dúvidas sobre a nossa política de cookies, entre em contacto através de:{" "}
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
