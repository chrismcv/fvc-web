"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { LogoIcon } from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about#story" },
        { name: "Our Vision", href: "/about#vision" },
        { name: "What we Believe", href: "https://vineyardchurches.org.uk/about/what-we-believe/", external: true },
      ],
    },
 /*   {
      name: "Get Involved",
      href: "/get-involved",
      dropdown: [
        { name: "Sundays", href: "/gatherings" },
        { name: "Life Groups", href: "/life-groups" },
      ],
    },*/
    { name: "Get Involved", href: "/gatherings" },
    { name: "Contact Us", href: "/contact" },
    { name: "Give", href: "/give" },
  ]

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50 border-b-2 border-accent">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <LogoIcon size={155} className="group-hover:scale-105 transition-transform" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-white/90 hover:text-white hover:bg-white/10 font-medium transition-colors relative group font-body flex items-center space-x-1 px-4 py-3 text-lg"
                      >
                        {item.name}
                        <ChevronDown className="w-5 h-5" />
                        <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-accent transition-all group-hover:w-[calc(100%-32px)]"></span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-56 bg-white border border-light-gray/50 shadow-xl rounded-lg"
                    >
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-3 text-text-light hover:text-primary hover:bg-secondary/10 transition-colors font-body cursor-pointer text-base"
                            >
                              {subItem.name}
                              {subItem.name === "What we Believe" && (
                                <span className="ml-2 text-xs text-text-muted">(VCUK)</span>
                              )}
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="flex items-center px-4 py-3 text-text-light hover:text-primary hover:bg-secondary/10 transition-colors font-body text-base"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white hover:bg-white/10 font-medium transition-colors relative group font-body px-4 py-3 rounded-lg text-lg"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-accent transition-all group-hover:w-[calc(100%-32px)]"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg border border-light-gray/50 mb-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-4 py-3 text-text-light font-medium font-body border-b border-light-gray/30">
                        {item.name}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-2 text-text-light hover:text-primary hover:bg-secondary/10 font-body transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                              {subItem.name === "What we Believe" && (
                                <span className="ml-2 text-xs text-text-muted">(VCUK)</span>
                              )}
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-6 py-2 text-text-light hover:text-primary hover:bg-secondary/10 font-medium rounded-lg transition-colors font-body"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-text-light hover:text-primary hover:bg-secondary/10 font-medium rounded-lg transition-colors font-body"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
