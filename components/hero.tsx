"use client"

import Link from "next/link"
import { StatPills } from "./stat-pills"

export function Hero() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-balance text-gray-900 md:text-5xl lg:text-6xl">
            Antes de pagar, checa aí....
          </h1>
          <p className="mb-4 text-lg font-light text-gray-700 md:text-xl">
            Verifique se o Pix é confiável antes de enviar.
          </p>

          <div className="mb-8">
            <Link
              href="/pix"
              className="inline-flex items-center gap-2 rounded bg-[#00c951] px-8 py-4 text-lg font-semibold text-white"
            >
              Verificar Pix agora
            </Link>
          </div>

          <StatPills />
        </div>
      </div>
    </section>
  )
}
