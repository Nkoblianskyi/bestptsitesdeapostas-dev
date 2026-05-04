import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
  heroImage?: string
  heroAlt?: string
}

export function PolicyPageLayout({
  children,
  title,
  lastUpdated,
  heroImage = "/stadium-background.png",
  heroAlt = "Stadium background",
}: PolicyPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="text-gray-900">
        {/* Hero Section */}
        <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-portugal-green to-portugal-dark-green">
          <div className="absolute inset-0 bg-white/10 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2">{title}</h1>
            {lastUpdated && <p className="text-sm text-white/90 text-center">Última atualização: {lastUpdated}</p>}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative min-h-screen bg-gray-50">
          <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 text-gray-900">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
