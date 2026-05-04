"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "@/data/casinos"
import Link from "next/link"

/** Рендер однієї частково заповненої зірки */
function PartialStar({
  fillPercent,
  size = "h-4 w-4",
}: {
  /** 0..100 — скільки % зірки залито */
  fillPercent: number
  size?: string
}) {
  const clamped = Math.max(0, Math.min(100, fillPercent))
  return (
    <div className={`relative inline-block ${size}`} aria-hidden="true">
      {/* Базовий контур (порожня зірка з обведенням) */}
      <Star className={`absolute inset-0 text-gray-600 ${size}`} />
      {/* Заповнена частина */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${clamped}%` }}>
        <Star className={`text-yellow-500 fill-current ${size}`} />
      </div>
    </div>
  )
}

/** Рейтинг у зірках 0..5 із кроком 0.2 (на основі rating 0..10) */
function StarRating({
  rating10, // 0..10
  size = "h-4 w-4",
  gapClass = "gap-2",
}: {
  rating10: number
  size?: string
  gapClass?: string
}) {
  const rating5 = Math.max(0, Math.min(10, rating10)) / 2 // 0..5
  // Для кожної з 5 зірок рахуємо, яку частку (0..1) треба залити
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fill = Math.max(0, Math.min(1, rating5 - i)) // 1 = повна, 0.5 = половина, 0 = порожня
    return <PartialStar key={i} fillPercent={fill * 100} size={size} />
  })

  return <div className={`flex items-center ${gapClass}`}>{stars}</div>
}

export function CasinoRankings() {
  return (
    <section id="rankings" className="py-4 bg-black">
      <div className="container mx-auto px-4">
        <div className="space-y-3 md:space-y-4 max-w-[calc(72rem+50px)] mx-auto">
          {casinos.map((casino) => (
            <Link key={casino.rank} href={casino.url} className="block" target="_blank" rel="noopener referrer">
              <Card
                className={`bg-gray-900 border-gray-800 cursor-pointer transition-all duration-200 relative overflow-hidden min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ${
                  casino.isTopChoice
                    ? "ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
                    : "hover:border-red-900/50 hover:shadow-lg hover:shadow-red-500/10"
                }`}
              >
                <CardContent className="p-4 md:p-2 lg:p-4 h-full flex items-center">
                  {casino.isTopChoice && (
                    <Badge className="absolute -top-1 -left-1 bg-yellow-400 text-black font-black text-xs px-3 py-1 z-10 rounded-sm">
                      MELHOR CASINO
                    </Badge>
                  )}
                  {casino.rank === 2 && (
                    <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-black text-xs px-3 py-1 z-10 rounded-sm">
                      RECOMENDADO
                    </Badge>
                  )}
                  {casino.rank === 3 && (
                    <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-black text-xs px-3 py-1 z-10 rounded-sm">
                      TENDÊNCIAS
                    </Badge>
                  )}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "80px 80px",
                        backgroundRepeat: "repeat",
                      }}
                    />
                  </div>

                  {/* Mobile Layout (up to md) */}
                  <div className="md:hidden w-full">
                    <div className="flex items-center justify-between mb-3">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="bg-transparent rounded shadow-sm relative z-10 p-1">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-14 object-contain max-w-[140px] w-auto"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <StarRating rating10={casino.rating} size="h-3 w-3" gapClass="gap-1" />
                          <span className="text-white font-semibold text-2xl">{casino.rating.toFixed(1)}</span>
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="text-center flex-1 ml-6">
                        <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                          <span className="text-sm font-medium">Bónus de Boas-Vindas</span>
                        </div>
                        <div className="text-white font-bold text-lg leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                          {casino.bonus}
                        </div>
                      </div>
                    </div>

                    {/* Button - Center */}
                    <div className="text-center">
                      <Button
                        style={{
                          backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                          color: casino.isTopChoice ? "#000000" : "#ffffff",
                        }}
                        className={`font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg hover:opacity-90 transition-opacity`}
                      >
                        JOGAR AGORA
                      </Button>
                    </div>
                  </div>

                  {/* Tablet Layout (md to lg) */}
                  <div className="hidden md:block lg:hidden w-full overflow-hidden">
                    <div className="flex items-center gap-1 px-1">
                      {/* Left Column: Rank + Casino Info - 18% */}
                      <div className="flex items-center gap-1 flex-shrink-0 w-[18%] min-w-[100px]">
                        {/* Rank */}
                        <div
                          className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs flex-shrink-0 ${
                            casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"
                          } relative z-10`}
                        >
                          {casino.rank}
                        </div>

                        {/* Casino Info Column */}
                        <div className="text-center flex-1 min-w-0">
                          <div className="bg-transparent rounded shadow-sm mb-0.5 mx-auto w-fit relative z-10">
                            <img
                              src={casino.logo || "/placeholder.svg"}
                              alt={`${casino.name} logo`}
                              className="h-8 object-contain max-w-[65px] w-auto"
                            />
                          </div>

                          {/* Rating under logo */}
                          <div className="flex items-center justify-center gap-0.5">
                            <StarRating rating10={casino.rating} size="h-2 w-2" gapClass="gap-0.5" />
                            <span className="text-white font-semibold text-xs">{casino.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Center Column: Bonus - 28% */}
                      <div className="text-center w-[28%] min-w-0 px-0.5">
                        <div className="text-red-500 mb-0.5">
                          <span className="text-[8px] font-medium">Bónus</span>
                        </div>
                        <div className="text-white font-bold text-[10px] leading-tight break-words px-1">{casino.bonus}</div>
                      </div>

                      {/* Features Column - 32% */}
                      <div className="flex flex-col gap-0.5 w-[32%] min-h-[60px] justify-center min-w-0">
                        {casino.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-red-900/70 text-gray-300 bg-red-950 text-[7px] px-0.5 py-0.5 text-center justify-center w-full relative z-10 font-bold truncate"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Right Column: Button - 22% */}
                      <div className="flex-shrink-0 w-[22%] min-w-[75px] max-w-[95px]">
                        <Button
                          style={{
                            backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                            color: casino.isTopChoice ? "#000000" : "#ffffff",
                          }}
                          className="font-semibold px-1 py-1.5 text-[8px] w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity leading-tight"
                        >
                          JOGAR<br/>AGORA
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout (lg and up) */}
                  <div className="hidden lg:block w-full">
                    <div className="flex items-center gap-3 xl:gap-6">
                      {/* Left Column: Rank + Casino Info */}
                      <div className="flex items-center gap-3 xl:gap-6 flex-shrink-0 w-[20%] min-w-[160px] max-w-[240px]">
                        {/* Rank */}
                        <div
                          className={`flex items-center justify-center w-10 h-10 xl:w-14 xl:h-14 rounded-full font-bold text-lg xl:text-xl flex-shrink-0 ${
                            casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"
                          } relative z-10`}
                        >
                          {casino.rank}
                        </div>

                        {/* Casino Info Column */}
                        <div className="text-center flex-1 min-w-0">
                          <div className="bg-transparent rounded shadow-sm mb-2 mx-auto w-fit relative z-10 p-1">
                            <img
                              src={casino.logo || "/placeholder.svg"}
                              alt={`${casino.name} logo`}
                              className="h-16 xl:h-24 object-contain max-w-[120px] xl:max-w-[200px] w-auto"
                            />
                          </div>

                          {/* Rating under logo */}
                          <div className="flex items-center justify-center gap-2 xl:gap-3">
                            <StarRating rating10={casino.rating} size="h-4 w-4 xl:h-5 xl:w-5" />
                            <span className="text-white font-semibold text-2xl xl:text-4xl">{casino.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Center Column: Bonus */}
                      <div className="text-center flex-1 min-w-0 px-2">
                        <div className="flex items-center justify-center gap-2 text-red-500 mb-2 xl:mb-3">
                          <span className="text-base xl:text-xl font-medium">Bónus de Boas-Vindas</span>
                        </div>
                        <div className="text-white font-bold shadow-xl leading-tight text-lg xl:text-2xl break-words">{casino.bonus}</div>
                      </div>

                      {/* Features Column */}
                      <div className="flex flex-col gap-2 xl:gap-3 w-[18%] min-w-[140px] max-w-[180px] min-h-[100px] justify-center">
                        {casino.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-red-900/70 text-gray-300 bg-red-950 text-xs xl:text-sm px-2 py-1 text-center justify-center w-full relative z-10 font-bold"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Right Column: Button */}
                      <div className="flex-shrink-0 w-[15%] min-w-[110px] max-w-[140px]">
                        <Button
                          style={{
                            backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                            color: casino.isTopChoice ? "#000000" : "#ffffff",
                          }}
                          className="font-semibold px-2 xl:px-3 py-3 xl:py-4 text-xs xl:text-sm w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                        >
                          JOGAR AGORA
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Aplicam-se os Termos e Condições. O jogo pode causar dependência. +18
          </p>
        </div>
      </div>
    </section>
  )
}
