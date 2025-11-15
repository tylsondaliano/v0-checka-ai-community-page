import { MOCK_FEED } from "@/lib/mocks"
import { ThumbsUp, MessageCircle } from "lucide-react"

export function RecentFeed() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Atividade recente</h2>

        <div className="space-y-0 max-w-4xl border border-gray-200 rounded-2xl bg-white divide-y divide-gray-200">
          {MOCK_FEED.map((item) => (
            <div
              key={item.id}
              className="px-6 py-6 hover:bg-gray-50 transition-colors cursor-pointer first:rounded-t-2xl last:rounded-b-2xl"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{item.initials}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Metadata line with bullet separators */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-900">{item.author}</span>
                    <span className="text-gray-400">•</span>
                    <span>Asked in {item.category}</span>
                    <span className="text-gray-400">•</span>
                    <span>{item.timestamp}</span>
                  </div>

                  {/* Large, bold title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{item.title}</h3>

                  {/* Gray description text */}
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>

                  {/* Engagement metrics at bottom */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-full bg-brand px-8 py-3 font-semibold text-background hover:bg-brand-dark transition-colors">
            Ver mais atividade
          </button>
        </div>
      </div>
    </section>
  )
}
