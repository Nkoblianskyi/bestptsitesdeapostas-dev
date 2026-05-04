"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center max-h-[250px] md:max-h-[350px] overflow-hidden"
      style={{ backgroundImage: "url('/sports-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 w-full py-6 md:py-8">
        <div className="mx-auto px-4 max-w-[1150px]">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] md:text-xs font-semibold text-portugal-gold uppercase tracking-widest mb-1 md:mb-2">
              Portal Independente de Apostas Desportivas
            </p>
            <h1 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-3 text-balance leading-tight">
              Melhores Sites de Apostas Desportivas em Portugal 2025
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 leading-relaxed max-w-2xl mx-auto">
              Rankings atualizados, bónus verificados e análises independentes para apostadores portugueses. Todos os
              operadores avaliados possuem licença válida do SRIJ.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-3 md:mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-portugal-green rounded-full" />
                <span className="text-[10px] md:text-xs font-medium text-gray-200">Licenciados SRIJ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-portugal-gold rounded-full" />
                <span className="text-[10px] md:text-xs font-medium text-gray-200">Bónus Exclusivos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-portugal-red rounded-full" />
                <span className="text-[10px] md:text-xs font-medium text-gray-200">Jogo Seguro</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
