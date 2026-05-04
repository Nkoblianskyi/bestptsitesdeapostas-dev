"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="w-full max-w-[1150px] mx-auto px-4">
        <div className="flex items-center justify-center h-12 md:h-16">
          <Logo size="sm" variant="dark" />
        </div>
      </div>
    </header>
  )
}
