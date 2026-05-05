"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-portugal-green shadow-lg z-50">
      <div className="max-w-[1150px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
          Utilizamos cookies para melhorar a sua experiência de navegação e personalizar os conteúdos apresentados.
          Ao continuar a usar o{" "}
          <span className="font-semibold text-portugal-green">topptsitesdeapostas.com</span>, aceita a nossa{" "}
          <a href="/cookie-policy" className="text-portugal-green underline hover:no-underline font-semibold">
            Política de Cookies
          </a>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button
            onClick={handleAccept}
            size="sm"
            className="bg-portugal-green hover:bg-portugal-dark-green text-white text-xs font-bold px-5 rounded-none"
          >
            Aceitar
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-600 hover:bg-gray-100 text-xs font-bold px-5 rounded-none"
          >
            Recusar
          </Button>
        </div>
      </div>
    </div>
  )
}

