"use client"

import Link from "next/link"

interface BrandLogoProps {
  compact?: boolean
  showWordmark?: boolean
  className?: string
  wordmark?: string
  subLabel?: string
}

export function BrandLogo({
  compact = false,
  showWordmark = true,
  className = "",
  wordmark = "Nexa",
  subLabel = "Automation",
}: BrandLogoProps) {
  const iconSize = compact ? "h-10 w-10" : "h-12 w-12"
  const textSize = compact ? "text-lg" : "text-xl"

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <span
        className={`${iconSize} inline-flex items-center justify-center rounded-2xl border border-white/20 bg-[linear-gradient(135deg,#ffffff_0%,#dbeafe_35%,#60a5fa_100%)] shadow-[0_10px_30px_rgba(96,165,250,0.35)]`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className="h-7 w-7 fill-slate-950">
          <path d="M24 6l3.6 9.3 10 0.7-7.8 6.2 2.6 9.7L24 26.4l-8.4 5.5 2.6-9.7-7.8-6.2 10-0.7L24 6z" />
        </svg>
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className={`font-semibold tracking-[0.14em] uppercase text-white/90 ${textSize}`}>{wordmark}</span>
          {subLabel ? <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{subLabel}</span> : null}
        </span>
      ) : null}
    </Link>
  )
}
