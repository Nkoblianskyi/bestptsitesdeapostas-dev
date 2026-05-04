import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[1150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <Logo className="mb-4" size="md" variant="dark" />
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              bestptsitesdeapostas.com fornece comparações independentes de operadores de apostas desportivas
              licenciados em Portugal. Podemos receber comissões dos parceiros, o que pode influenciar a ordem de
              apresentação.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-wide">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-portugal-green transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-portugal-green transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-500 hover:text-portugal-green transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="text-gray-500 hover:text-portugal-green transition-colors">
                  Jogo Responsável
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-wide">Entidades de Apoio</h3>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">
              Colaboramos com entidades reconhecidas para garantir práticas de jogo seguras e disponibilizar recursos
              de apoio a quem precisa.
            </p>

            <div className="grid grid-cols-5 gap-2 md:gap-3">
              <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 p-2 md:p-3 flex items-center justify-center hover:border-portugal-green transition-colors">
                <div className="relative w-[56px] h-[24px] md:w-[72px] md:h-[28px]">
                  <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
                </div>
              </Link>

              <Link href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 p-2 md:p-3 flex items-center justify-center hover:border-portugal-green transition-colors">
                <div className="relative w-[56px] h-[24px] md:w-[72px] md:h-[28px]">
                  <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
                </div>
              </Link>

              <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 p-2 md:p-3 flex items-center justify-center hover:border-portugal-red transition-colors">
                <div className="relative w-[56px] h-[24px] md:w-[72px] md:h-[28px]">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>

              <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 p-2 md:p-3 flex items-center justify-center hover:border-portugal-red transition-colors">
                <div className="relative w-[56px] h-[24px] md:w-[72px] md:h-[28px]">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>

              <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 p-2 md:p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                <div className="relative w-[56px] h-[24px] md:w-[72px] md:h-[28px]">
                  <Image src="/jogo2.png" alt="Jogo Responsável" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5 text-center text-xs text-gray-400 space-y-1">
          <p>© {new Date().getFullYear()} bestptsitesdeapostas.com. Todos os direitos reservados.</p>
          <p>
            Jogue com moderação. Proibido a menores de 18 anos. Linha de Apoio:{" "}
            <Link href="tel:213950213" className="text-portugal-red hover:underline font-semibold">
              213 950 213
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
