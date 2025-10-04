import Image from "next/image"

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 120, className = "" }: LogoProps) {
  return (
    <Image
      src="/images/faith-vineyard-logo-navy.png"
      alt="Faith Vineyard Church Logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  )
}

// Simplified version for smaller sizes
export function LogoSimple({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/faith-vineyard-logo-navy.png"
      alt="Faith Vineyard Church"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  )
}

// Icon version for navigation
export function LogoIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/faith-vineyard-logo-navy.png"
      alt="Faith Vineyard Church"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ width: size, height: size }}
    />
  )
}
