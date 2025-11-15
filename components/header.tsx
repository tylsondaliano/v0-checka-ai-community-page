"use client"

import Link from "next/link"
import { LogoSVG } from "./logo-svg"
import { UniversalSearch } from "./universal-search"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 transition-transform hover:scale-105">
          <LogoSVG className="h-8 w-8" />
          <span className="text-xl font-semibold text-gray-900">CheckaAi</span>
        </Link>

        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <UniversalSearch />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Entrar</button>
          <button className="rounded-md bg-[#00c951] px-5 py-2 text-sm font-semibold text-white">Criar Conta</button>
        </div>
      </div>

      <nav className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto flex items-center justify-center gap-8 px-4 py-3">
          <Link href="/comunidade" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Comunidade
          </Link>
          <Link
            href="/verificar-pix"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Verificar Pix Confiável
          </Link>
          <Link
            href="/verificar-site"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Verificar Site Confiável
          </Link>
        </div>
      </nav>
    </header>
  )
}
