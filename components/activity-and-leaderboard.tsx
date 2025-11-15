import { MOCK_FEED } from "@/lib/mocks"
import { ThumbsUp, MessageCircle } from "lucide-react"

const LEADERBOARD = [
  { name: "Sarah Walker", points: 1200, rank: 1 },
  { name: "Ian Somerhalder", points: 980, rank: 2 },
  { name: "Stephanie Jo", points: 875, rank: 3 },
  { name: "Alexander Jo", points: 750, rank: 4 },
  { name: "Timothy Perm", points: 680, rank: 5 },
  { name: "Marcus Chen", points: 620, rank: 6 },
  { name: "Elena Rodriguez", points: 580, rank: 7 },
  { name: "David Kim", points: 540, rank: 8 },
  { name: "Sofia Martinez", points: 500, rank: 9 },
  { name: "James Wilson", points: 470, rank: 10 },
]

const EXTENDED_FEED = [
  ...MOCK_FEED,
  {
    id: "4",
    author: "Carlos Mendes",
    initials: "CM",
    category: "Payment Gateways",
    timestamp: "5 hours ago",
    title: "PayX Pro gateway showing errors",
    description:
      "Has anyone experienced issues with PayX Pro lately? I'm getting timeout errors when trying to process payments through their API.",
    likes: 18,
    comments: 7,
  },
  {
    id: "5",
    author: "Julia Ferreira",
    initials: "JF",
    category: "Community Guidelines",
    timestamp: "8 hours ago",
    title: "Best practices for verifying influencer profiles",
    description:
      "What are the key indicators you look for when checking if an influencer profile is legitimate? I want to make sure I'm doing thorough checks.",
    likes: 34,
    comments: 22,
  },
  {
    id: "6",
    author: "Pedro Costa",
    initials: "PC",
    category: "Site Verification",
    timestamp: "12 hours ago",
    title: "New e-commerce site verification tool",
    description:
      "I've been working on a tool to help verify e-commerce sites. Would love to get feedback from the community on what features would be most useful.",
    likes: 45,
    comments: 19,
  },
  {
    id: "7",
    author: "Ana Silva",
    initials: "AS",
    category: "Fraud Reports",
    timestamp: "1 day ago",
    title: "Multiple reports on same Pix key",
    description:
      "I noticed the same Pix key appearing in multiple fraud reports. Should we have a system to automatically flag these patterns?",
    likes: 67,
    comments: 31,
  },
  {
    id: "8",
    author: "Lucas Oliveira",
    initials: "LO",
    category: "Feature Requests",
    timestamp: "1 day ago",
    title: "Mobile app for quick verification",
    description:
      "Would be great to have a mobile app where we can quickly scan QR codes or check Pix keys on the go. Is this in the roadmap?",
    likes: 89,
    comments: 42,
  },
  {
    id: "9",
    author: "Beatriz Lima",
    initials: "BL",
    category: "Success Stories",
    timestamp: "2 days ago",
    title: "Avoided a scam thanks to this community",
    description:
      "Just wanted to share that I almost fell for a fake store, but found warnings here just in time. Thank you all for keeping this community active!",
    likes: 156,
    comments: 38,
  },
  {
    id: "10",
    author: "Rafael Souza",
    initials: "RS",
    category: "Technical Support",
    timestamp: "2 days ago",
    title: "API rate limits and best practices",
    description:
      "What are the current API rate limits for the verification endpoints? I'm building an integration and want to make sure I'm following best practices.",
    likes: 23,
    comments: 11,
  },
]

export function ActivityAndLeaderboard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[65%_35%] items-start">
          {/* Left Column - Recent Activity */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900">Atividade Recente</h2>

            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm md:h-[720px] overflow-hidden">
              <div
                className="auto-scroll animate-[scroll-vert_20s_linear_infinite] hover:[animation-play-state:paused] focus:[animation-play-state:paused]"
                aria-label="Lista de atividade rolando automaticamente"
                tabIndex={0}
              >
                {/* Lista A - Original 10 items */}
                {EXTENDED_FEED.slice(0, 10).map((item, i) => (
                  <ActivityRow key={`A-${i}`} item={item} />
                ))}
                {/* Lista B - Duplicated for seamless loop */}
                {EXTENDED_FEED.slice(0, 10).map((item, i) => (
                  <ActivityRow key={`B-${i}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Leaderboard */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900">Ranking desta semana</h2>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm md:h-[720px] flex flex-col">
              <ol className="flex-1 overflow-auto p-4">
                {LEADERBOARD.map((user, i) => (
                  <li key={user.rank} className="flex items-center justify-between py-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-8 shrink-0 text-right font-semibold text-gray-700 text-lg">{i + 1}</span>
                      <span className="h-10 w-10 shrink-0 rounded-full bg-indigo-100" />
                      <span className="truncate font-medium text-gray-900 text-base">{user.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base text-gray-600">
                      <span className="whitespace-nowrap">{user.points} pontos</span>
                      {i === 0 && (
                        <span aria-label="ouro" className="text-xl">
                          🥇
                        </span>
                      )}
                      {i === 1 && (
                        <span aria-label="prata" className="text-xl">
                          🥈
                        </span>
                      )}
                      {i === 2 && (
                        <span aria-label="bronze" className="text-xl">
                          🥉
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ActivityRow({ item }: { item: (typeof EXTENDED_FEED)[0] }) {
  return (
    <div className="px-6 py-6 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{item.initials}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Metadata line */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span className="font-medium text-gray-900">{item.author}</span>
            <span className="text-gray-400">•</span>
            <span>Asked in {item.category}</span>
            <span className="text-gray-400">•</span>
            <span>{item.timestamp}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{item.title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>

          {/* Engagement metrics */}
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
  )
}
