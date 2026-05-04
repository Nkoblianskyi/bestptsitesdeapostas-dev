import { Shield, Phone, Lock, AlertTriangle, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SafeGambling() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="mb-12">
          <div className="border-l-4 border-portugal-red pl-6 mb-8">
            <p className="text-sm font-semibold text-portugal-red uppercase tracking-wider mb-2">Jogo Responsável</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Aposte com Segurança e Consciência
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              As apostas desportivas devem ser uma forma de entretenimento, nunca uma fonte de problemas. Conheça os
              sinais de alerta, estabeleça limites e saiba onde procurar ajuda quando necessário.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-red/10 rounded-lg">
                  <Lock className="h-6 w-6 text-portugal-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Defina Limites</h3>
                  <p className="text-sm text-portugal-red font-medium">Controlo Financeiro</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Estabeleça limites de depósito diários, semanais e mensais. Nunca aposte dinheiro que não pode perder.
                Utilize as ferramentas de autoexclusão disponíveis nas plataformas licenciadas.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-green/10 rounded-lg">
                  <Clock className="h-6 w-6 text-portugal-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Gestão de Tempo</h3>
                  <p className="text-sm text-portugal-green font-medium">Equilíbrio Saudável</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Apostar não deve interferir com responsabilidades pessoais, profissionais ou familiares. Faça pausas
                regulares e mantenha outras atividades de lazer na sua rotina.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-red/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-portugal-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Sinais de Alerta</h3>
                  <p className="text-sm text-portugal-red font-medium">Reconheça os Riscos</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Apostar para recuperar perdas, mentir sobre apostas, negligenciar obrigações ou pedir dinheiro
                emprestado são sinais de que pode estar a desenvolver um problema.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-green/10 rounded-lg">
                  <Shield className="h-6 w-6 text-portugal-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Proteção de Menores</h3>
                  <p className="text-sm text-portugal-green font-medium">Proibido -18 Anos</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                É ilegal apostar com menos de 18 anos em Portugal. Mantenha dados de acesso seguros e longe de menores.
                Todas as casas licenciadas verificam a idade dos utilizadores.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-red/10 rounded-lg">
                  <Phone className="h-6 w-6 text-portugal-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Linha de Apoio</h3>
                  <p className="text-sm text-portugal-red font-medium">Ajuda Disponível</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Linha de Apoio ao Jogador:{" "}
                <Link href="tel:213950213" className="text-portugal-red font-bold hover:underline">
                  213 950 213
                </Link>
                . Serviço confidencial e gratuito disponível para apoio especializado.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-portugal-green/10 rounded-lg">
                  <Users className="h-6 w-6 text-portugal-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Apoio Profissional</h3>
                  <p className="text-sm text-portugal-green font-medium">Não Está Sozinho</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Procure ajuda de psicólogos especializados em dependências. O SICAD e outras organizações oferecem
                programas de tratamento e grupos de apoio gratuitos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 border-t-4 border-portugal-red">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Organizações de Apoio em Portugal</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center border border-white/20">
                <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[80px] h-[32px] mb-2">
                    <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
                  </div>
                </Link>
                <span className="text-xs text-center text-gray-300">Regulador Nacional</span>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center border border-white/20">
                <Link href="https://www.sicad.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[80px] h-[32px] mb-2">
                    <Image src="/icad.png" alt="SICAD" fill className="object-contain" />
                  </div>
                </Link>
                <span className="text-xs text-center text-gray-300">Dependências</span>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center border border-white/20">
                <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[80px] h-[32px] mb-2">
                    <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                  </div>
                </Link>
                <span className="text-xs text-center text-gray-300">Suporte 24/7</span>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center border border-white/20">
                <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[80px] h-[32px] mb-2">
                    <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                  </div>
                </Link>
                <span className="text-xs text-center text-gray-300">Prevenção</span>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center border border-white/20">
                <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[80px] h-[32px] mb-2">
                    <Image src="/jogo-responsavel-new.png" alt="Jogo Responsável" fill className="object-contain" />
                  </div>
                </Link>
                <span className="text-xs text-center text-gray-300">Apoio Nacional</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Se você ou alguém que conhece está a enfrentar problemas com o jogo, não hesite em procurar ajuda. O
                apoio profissional pode fazer toda a diferença na recuperação.
              </p>
              <div className="inline-block bg-portugal-red px-6 py-3 rounded-lg">
                <p className="text-white font-bold text-lg">
                  Linha de Apoio:{" "}
                  <Link href="tel:213950213" className="hover:underline">
                    213 950 213
                  </Link>
                </p>
                <p className="text-white/80 text-sm">Confidencial e Gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
