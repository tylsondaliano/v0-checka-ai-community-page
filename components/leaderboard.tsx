"use client"

import { useState } from "react"
import { MOCK_RANK } from "@/lib/mocks"
import { TrendingUp, TrendingDown, HelpCircle } from "lucide-react"

type Tab = "gateways" | "influencers"

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<Tab>("gateways")

  const data = MOCK_RANK[activeTab]

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ranking dos Piores</h2>
            <p className="text-sm text-muted-foreground">Últimos 7 dias</p>
          </div>

          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircle className="h-4 w-4" />
            Como calculamos
          </button>
        </div>

        <div className="flex gap-2 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("gateways")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === "gateways" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Gateways
            {activeTab === "gateways" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />}
          </button>
          <button
            onClick={() => setActiveTab("influencers")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === "influencers" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Influencers
            {activeTab === "influencers" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />}
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Nome</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Categoria</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Score de risco</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Denúncias</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tendência</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => {
                  const isPositiveTrend = item.trend.startsWith("+")
                  return (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors"
                    >
                      <td className="px-6 py-4 text-muted-foreground">{i + 1}</td>
                      <td className="px-6 py-4 font-medium">{item.name}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-background px-3 py-1 text-xs font-medium border border-border">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-bold ${
                            item.risk >= 80 ? "text-danger" : item.risk >= 70 ? "text-warning" : "text-success"
                          }`}
                        >
                          {item.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{item.reports}</td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-1 ${isPositiveTrend ? "text-danger" : "text-success"}`}>
                          {isPositiveTrend ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          <span className="text-sm font-medium">{item.trend}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Scores são estimativas de risco baseadas em metadados e relatos anônimos (mock).
        </p>
      </div>
    </section>
  )
}
