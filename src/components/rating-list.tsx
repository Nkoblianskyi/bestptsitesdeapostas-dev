import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types"
import { Badge } from "@/components/ui/badge"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const getBadgeForPosition = (index: number) => {
    switch (index) {
      case 0:
        return { text: "Mais Bem Avaliado", className: "bg-yellow-500 text-white" }
      case 1:
        return { text: "Oferta Exclusiva", className: "bg-portugal-green text-white" }
      case 2:
        return { text: "Em Tendência", className: "bg-portugal-green text-white" }
      default:
        return null
    }
  }

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <section className="py-4 md:py-8 bg-background">
      <div className="container mx-auto px-3 md:px-4 max-w-[1150px]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
          Ranking de Sites de Apostas 2025
        </h2>
        <div className="flex flex-col gap-0 border border-gray-200">
          {sites.map((site, index) => {
            const badge = getBadgeForPosition(index)
            const isFirstPlace = index === 0

            return (
              <div key={site.id} className={`${isFirstPlace ? "border-l-4 border-l-yellow-500" : "border-l-4 border-l-portugal-green"} border-b border-gray-200 last:border-b-0`}>
                {badge && (
                  <div className={`${badge.className} text-[11px] md:text-xs font-bold px-3 py-1 text-center tracking-wide uppercase`}>
                    {badge.text}
                  </div>
                )}

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-portugal-green focus:ring-inset"
                >
                  {/* Desktop */}
                  <div className="hidden md:grid grid-cols-12 gap-4 items-center p-4">
                    <div className="col-span-1 flex items-center justify-center">
                      <span className={`text-2xl font-black ${isFirstPlace ? "text-yellow-500" : "text-gray-300"}`}>
                        #{index + 1}
                      </span>
                    </div>

                    <div className="col-span-3 flex items-center justify-center">
                      <div className="bg-gray-900 p-3 w-full max-w-[180px] flex items-center justify-center h-16">
                        <div className="relative h-10 w-full">
                          <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-4 flex flex-col items-center justify-center text-center">
                      <div className="text-[10px] text-portugal-red uppercase font-bold tracking-widest mb-1">Bónus</div>
                      <p className="font-black text-portugal-green text-2xl leading-tight">{site.bonus}</p>
                      {site.dopbonus && (
                        <p className="text-xs text-gray-500 mt-0.5">{site.dopbonus}</p>
                      )}
                    </div>

                    <div className="col-span-2 flex flex-col items-center justify-center text-center">
                      <span className={`font-black text-2xl mb-1 ${isFirstPlace ? "text-yellow-500" : "text-gray-800"}`}>
                        {site.rating.toFixed(1)}
                      </span>
                      <div className="flex items-center gap-0.5 mb-1">{renderStars(site.stars)}</div>
                      <span className="text-xs text-gray-400">({site.reviews})</span>
                    </div>

                    <div className="col-span-2 flex flex-col items-center">
                      <div className={`w-full text-center font-bold py-3 px-4 text-sm text-white ${isFirstPlace ? "bg-yellow-500 hover:bg-yellow-600" : "bg-portugal-green hover:bg-portugal-dark-green"} transition-colors`}>
                        Obter Bónus
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">+18 | T&Cs Aplicam-se</p>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden p-3">
                    <div className="grid grid-cols-2 gap-3 items-center mb-3">
                      <div className="bg-gray-900 p-3 flex items-center justify-center h-20">
                        <div className="relative h-12 w-full">
                          <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-portugal-red uppercase font-bold tracking-widest mb-1">Bónus</div>
                        <div className="text-lg font-black text-portugal-green leading-tight">{site.bonus}</div>
                        {site.dopbonus && <div className="text-[10px] text-gray-500 mt-0.5">{site.dopbonus}</div>}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-gray-100">
                      <div className="text-center">
                        <div className={`text-xl font-black ${isFirstPlace ? "text-yellow-500" : "text-portugal-red"}`}>
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="text-[8px] text-gray-500 font-bold uppercase">Score</div>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center gap-0.5 mb-0.5">{renderStars(site.stars)}</div>
                        <div className="text-[8px] text-gray-400">({site.reviews})</div>
                      </div>
                      <div className="flex justify-center">
                        <div className={`w-full text-center font-bold py-2 px-2 text-xs text-white ${isFirstPlace ? "bg-yellow-500" : "bg-portugal-green"}`}>
                          BÓNUS
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
