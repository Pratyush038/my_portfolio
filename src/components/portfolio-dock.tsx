"use client"

import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Home, Download, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/registry/magicui/dock"

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
  navbar: [
    { href: "#home", icon: Icons.home, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Pratyush038",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pratyushbidare",
        icon: Icons.linkedin,
      },
      email: {
        name: "Email",
        url: "mailto:pratyush.bidare@gmail.com",
        icon: Icons.email,
      },
    },
  },
  resume: {
    name: "Resume",
    url: "https://drive.google.com/file/d/14Id8hKx7uu2xMpE6vaQ4_vWLsiCxLXli/view?usp=sharing",
    icon: Icons.resume,
  },
}

export function PortfolioDock() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
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

          <Separator orientation="vertical" className="h-full bg-border/50" />

          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    )}
                    {...(social.url.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full bg-border/50" />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={DATA.resume.url}
                  aria-label={DATA.resume.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DATA.resume.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{DATA.resume.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-full bg-border/50" />

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
