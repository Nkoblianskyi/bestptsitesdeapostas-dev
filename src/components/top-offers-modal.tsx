"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
      }
    }

    return starElements
  }

  // Get only the first site
  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[450px] p-0 border-2 border-portugal-green shadow-2xl rounded-2xl bg-white overflow-hidden">
        <DialogHeader className="bg-portugal-green text-white p-4">
          <DialogTitle className="text-center text-xl font-bold">Melhor Oferta de Apostas</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <div className="relative border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">


            <div className="bg-gray-50 p-6 text-center border-b border-gray-200">
              <div className="relative bg-black h-20 w-full max-w-[200px] mx-auto mb-4 p-4 rounded-lg shadow-sm border border-gray-200">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-2" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
                <span className="font-bold text-lg text-gray-900">{topSite.rating.toFixed(1)}</span>
                <span className="text-gray-600 text-sm">({topSite.reviews} avaliações)</span>
              </div>
            </div>

            <div className="p-6 text-center bg-portugal-green/5 border-b border-gray-200">
              <div className="text-sm text-gray-600 uppercase font-bold mb-2">BÓNUS EXCLUSIVO</div>
              <p className="font-bold text-portugal-green text-2xl mb-1">{topSite.bonus}</p>
            </div>

            <div className="p-6 text-center bg-white">
              <a
                href={topSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-portugal-green hover:bg-portugal-dark-green text-white text-base font-bold rounded-lg text-center mb-4 shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                OBTER BÓNUS AGORA
              </a>

              <div className="bg-portugal-red/5 rounded-lg p-3 border border-portugal-red/20">
                <p className="text-xs text-gray-700 font-medium">+18 | T&Cs Aplicam-se | Jogue com Responsabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
