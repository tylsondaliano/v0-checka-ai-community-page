import { Check } from "lucide-react"

export function StatPills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="font-semibold text-gray-900">+1,200</span>
        <span className="text-gray-600">Tópicos</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="font-semibold text-gray-900">+3,000</span>
        <span className="text-gray-600">Respostas</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="font-semibold text-gray-900">+2,000</span>
        <span className="text-gray-600">Membros</span>
      </div>
    </div>
  )
}
