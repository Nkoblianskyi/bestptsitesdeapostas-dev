export function AboutSection() {
  return (
    <section className="py-10 md:py-14 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-[1150px]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-balance">
            Sobre o bestptsitesdeapostas
          </h2>
          <div className="w-16 h-1 bg-portugal-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 border-l-4 border-portugal-green shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-2">A Nossa Missão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O bestptsitesdeapostas.com é o portal de referência para apostadores portugueses que procuram informação
              fiável sobre sites de apostas legais em Portugal. Avaliamos criteriosamente cada operador licenciado
              pelo SRIJ, garantindo recomendações de plataformas seguras e de confiança.
            </p>
          </div>

          <div className="bg-white p-6 border-l-4 border-portugal-red shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-2">Metodologia Rigorosa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A nossa equipa avalia cada site através de critérios objetivos: variedade de mercados, competitividade
              de odds, serviço ao cliente, métodos de pagamento e experiência do utilizador. Todas as classificações
              são baseadas em testes reais e análises imparciais.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-portugal-green mb-1">100%</div>
              <div className="text-xs text-gray-500 font-medium">Operadores Licenciados SRIJ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portugal-red mb-1">24/7</div>
              <div className="text-xs text-gray-500 font-medium">Monitorização de Ofertas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">+50</div>
              <div className="text-xs text-gray-500 font-medium">Sites de Apostas Analisados</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Promovemos o jogo responsável. Todos os sites recomendados possuem licença válida do Serviço de
            Regulação e Inspeção de Jogos (SRIJ) e cumprem a legislação portuguesa em vigor.
          </p>
        </div>
      </div>
    </section>
  )
}
