"use client"

import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Dock, DockIcon } from "../registry/magicui/dock"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Linkedin, Mail, Home, Download, Sun, Moon } from "lucide-react"

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
  github: (props: IconProps) => <Github {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  email: (props: IconProps) => <Mail {...props} />,
  home: (props: IconProps) => <Home {...props} />,
  resume: (props: IconProps) => <Download {...props} />,
  sun: (props: IconProps) => <Sun {...props} />,
  moon: (props: IconProps) => <Moon {...props} />,
}

const DATA = {
  items: [
    { href: "#home", icon: Icons.home, label: "Home" },
    { href: "https://github.com/Pratyush038", icon: Icons.github, label: "GitHub", external: true },
    { href: "https://linkedin.com/in/pratyushbidare", icon: Icons.linkedin, label: "LinkedIn", external: true },
    { href: "mailto:pratyush.bidare@gmail.com", icon: Icons.email, label: "Email" },
    { href: "https://drive.google.com/file/d/14Id8hKx7uu2xMpE6vaQ4_vWLsiCxLXli/view?usp=sharing", icon: Icons.resume, label: "Resume", external: true },
  ],
}

export function PortfolioDock() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.items.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    )}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  )}
                >
                  {theme === "dark" ? <Icons.sun className="size-4" /> : <Icons.moon className="size-4" />}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  )
}
