import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pratikdev.site"),
  title: "Nexa",
  description: "Nexa is a Next.js landing experience for AI automation demos, lead capture, and deployment-ready client showcases.",
  applicationName: "Nexa",
  generator: "v0.app",
  openGraph: {
    title: "Nexa",
    description: "AI automation landing pages and interactive demos, packaged for clean deployment.",
    siteName: "Nexa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa",
    description: "AI automation landing pages and interactive demos, packaged for clean deployment.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
