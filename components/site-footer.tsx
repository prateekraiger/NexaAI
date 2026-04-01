"use client"

import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Globe, LayoutTemplate, LinkedinIcon, Rocket } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Platform",
    links: [
      { title: "Capabilities", href: "/#features" },
      { title: "AI Team", href: "/#ai-team" },
      { title: "ROI Calculator", href: "/#roi-calculator" },
      { title: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    label: "Launch",
    links: [
      { title: "Homepage", href: "/" },
      { title: "Dealership Demo", href: "/car-dealerships" },
      { title: "Fast Preview", href: "/#contact" },
      { title: "Get Started", href: "/#contact" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "Portfolio", href: "https://www.pratikdev.site/", icon: Globe },
      { title: "Build by Pratik", href: "https://www.pratikdev.site/", icon: LayoutTemplate },
      { title: "Project Support", href: "https://www.pratikdev.site/", icon: LinkedinIcon },
      { title: "Deploy Support", href: "https://www.pratikdev.site/", icon: Rocket },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-t-[2rem] border border-white/10 bg-[radial-gradient(60%_140%_at_50%_0%,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_55%,transparent)] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,2.05fr)] lg:items-start">
        <AnimatedContainer className="space-y-5">
          <BrandLogo className="w-fit" />
          <p className="max-w-sm text-sm leading-6 text-white/68">
            Smart automation demos, conversion-focused landing pages, and clean product storytelling.
          </p>
          <div className="space-y-2 text-sm text-white/55">
            <p>(c) {new Date().getFullYear()} Nexa. All rights reserved.</p>
            <a
              href="https://www.pratikdev.site/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
            >
              Build by Pratik
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedContainer>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{section.label}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 transition-all duration-300 hover:text-white"
                      >
                        {link.icon && <link.icon className="h-4 w-4 text-sky-300" />}
                        {link.title}
                        {link.href.startsWith("http") ? <ArrowUpRight className="h-3.5 w-3.5 text-white/40" /> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
