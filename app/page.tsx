import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CommunityCards } from "@/components/community-cards"
import { Highlights } from "@/components/highlights"
import { GetHelp } from "@/components/get-help"
import { ActivityAndLeaderboard } from "@/components/activity-and-leaderboard"
import { BottomCTA } from "@/components/bottom-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CommunityCards />
        <Highlights />
        <GetHelp />
        <ActivityAndLeaderboard />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
