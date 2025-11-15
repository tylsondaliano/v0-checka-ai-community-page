export function Highlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Destaques</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100" />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-balance">
                  {i === 1 && "Crescimento de Produtos: Volume 1: O que é PLG?"}
                  {i === 2 && "Você está procurando por atenção ao mestre? Não procure mais"}
                  {i === 3 && "Seu Guia para Construir Experimentos Liderados por Produtos"}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-200" />
                    <span>1 semana atrás</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👁</span>
                    <span>{i === 1 ? "214" : i === 2 ? "190" : "450"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{i === 1 ? "6" : i === 2 ? "5" : "67"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
