import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "dark" | "light"
}

export function Logo({ className = "", size = "md", variant = "dark" }: LogoProps) {
  const baseSize =
    size === "sm" ? "text-2xl" : size === "lg" ? "text-4xl" : "text-3xl"

  const dotColor = variant === "light" ? "text-white" : "text-portugal-gold"

  return (
    <Link href="/" className={`inline-flex items-baseline gap-1 select-none ${className}`} aria-label="top pt sites de apostas home">
      {/* wordmark uses Bebas Neue via font-display */}
      <span className={`font-display tracking-wide leading-none ${baseSize} text-portugal-green`}>
        top
      </span>
      <span className={`font-display tracking-wide leading-none ${baseSize} text-portugal-gold`}>
        pt
      </span>
      <span className={`font-display tracking-wide leading-none ${baseSize} text-portugal-gold`}>
        sites
      </span>
      <span className={`font-display tracking-wide leading-none ${baseSize} text-portugal-red`}>
        de
      </span>
      <span className={`font-display tracking-wide leading-none ${baseSize} text-gray-900`}>
        apostas
      </span>
      {/* accent dot */}
      <span className={`font-display leading-none ml-0.5 ${dotColor} ${baseSize}`}>.</span>
    </Link>
  )
}

