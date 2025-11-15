"use client"

import { MOCK_RESULTS, MOCK_SEARCH_RESULTS } from "@/lib/mocks"
import { AlertTriangle, CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

interface SearchResultsProps {
  query: string
  isPixDetected: boolean
  resultType: "seguro" | "atencao" | "golpe" | null
}

const STATUS_CONFIG = {
  confiavel: {
    label: "Confiável",
    emoji: "😊",
    color: "text-emerald-600",
  },
  observacao: {
    label: "Em observação",
    emoji: "😐",
    color: "text-amber-600",
  },
  suspeito: {
    label: "Suspeito",
    emoji: "😠",
    color: "text-red-600",
  },
  "sem-dados": {
    label: "Sem dados",
    emoji: "❓",
    color: "text-gray-600",
  },
}

export function SearchResults({ query, isPixDetected, resultType }: SearchResultsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [query])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  if (isPixDetected && resultType) {
    const result = MOCK_RESULTS[resultType]
    const Icon = resultType === "seguro" ? CheckCircle : resultType === "atencao" ? AlertTriangle : XCircle

    return (
      <div className="rounded-2xl border-2 border-border bg-surface p-6">
        <div className="flex items-start gap-4">
          <div
            className={`rounded-full p-3 ${
              resultType === "seguro" ? "bg-success/20" : resultType === "atencao" ? "bg-warning/20" : "bg-danger/20"
            }`}
          >
            <Icon
              className={`h-6 w-6 ${
                resultType === "seguro" ? "text-success" : resultType === "atencao" ? "text-warning" : "text-danger"
              }`}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold">{result.label}</h3>
              <span
                className={`text-3xl font-bold ${
                  resultType === "seguro" ? "text-success" : resultType === "atencao" ? "text-warning" : "text-danger"
                }`}
              >
                {result.score}%
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <p className="font-medium text-sm text-muted-foreground">Razões identificadas:</p>
              <ul className="space-y-2">
                {result.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-brand mt-0.5">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-background p-4 border border-border">
              <p className="font-semibold mb-2 text-sm">O que fazer agora:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Registre no Ministério da Economia (MED)</li>
                <li>• Faça um Boletim de Ocorrência (BO)</li>
                <li>• Entre em contato com seu banco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const allResults = [
    ...MOCK_SEARCH_RESULTS.companies.filter((item) => !item.isAd).map((item) => ({ ...item, category: "company" })),
    ...MOCK_SEARCH_RESULTS.profiles.map((item) => ({ ...item, category: "profile" })),
    ...MOCK_SEARCH_RESULTS.gateways.map((item) => ({ ...item, category: "gateway" })),
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">
        Principais resultados para <span className="text-gray-900">"{query}"</span>
      </h3>

      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Rolar para esquerda"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-8 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[200px] rounded-2xl border border-gray-200 bg-white flex flex-col text-center overflow-hidden animate-pulse"
                >
                  <div className="pt-4 pb-3 px-4">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200"></div>
                    <div className="h-5 bg-gray-200 rounded mx-auto w-3/4"></div>
                  </div>

                  <div className="border-t border-gray-200"></div>

                  <div className="py-3 px-4">
                    <div className="h-4 bg-gray-200 rounded mx-auto w-2/3"></div>
                  </div>

                  <div className="border-t border-gray-200"></div>

                  <div className="py-3 px-4 flex items-center justify-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {allResults.map((result: any) => {
                const statusConfig = STATUS_CONFIG[result.status as keyof typeof STATUS_CONFIG]

                return (
                  <button
                    key={result.id}
                    onClick={() => console.log("[v0] Card clicked:", result.name)}
                    className="flex-shrink-0 w-[200px] rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col text-center cursor-pointer overflow-hidden"
                  >
                    <div className="pt-4 pb-3 px-4">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                          <span className="text-xl font-bold text-white">{result.initials}</span>
                        </div>
                        {result.status === "confiavel" && (
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-base truncate">{result.name}</h4>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    <div className="py-3 px-4">
                      <p className="text-sm text-gray-600">{result.type}</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    <div className="py-3 px-4 flex items-center justify-center gap-2">
                      <span className="text-3xl">{statusConfig.emoji}</span>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-bold ${statusConfig.color}`}>
                          {(result.score / 10).toFixed(1)}
                        </span>
                        <span className="text-lg text-gray-500">/10</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </>
          )}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Rolar para direita"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
