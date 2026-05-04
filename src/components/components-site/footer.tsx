import { Crown } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Site Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Melhores Casinos Portugal
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              O seu guia confiável para os melhores casinos online em Portugal. Avaliamos e classificamos apenas
              operadores licenciados e seguros.
            </p>
          </div>

          {/* Navigation
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Avaliações de Casinos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>  */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Organization Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105 group"
            >
              <img
                src="/srij.svg"
                alt="SRIJ"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/10 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105 group"
            >
              <img
                src="/icad.png"
                alt="SICAD"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105 group"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            {/* 18+ Badge */}
            <div className="flex justify-center">
              <div className="bg-red-600 text-white px-2 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
                18+
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © 2025 Melhores Casinos Portugal. Todos os direitos reservados. | Jogo Responsável
          </p>
        </div>
      </div>
    </footer>
  )
}
