import { Check } from "lucide-react"

export function GetHelp() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Obter Ajuda</h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">
                  Por que não consigo ver valores "Nulos" no resultado do gráfico?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Obter a Definição de Emplided no Segmento - Emplided?</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">
                  Atribuição de Contabilidade - Não é o Melhor Guia de Início!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">API de erro comum</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12 max-w-4xl">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Análise de Funil</h3>
            <p className="text-sm text-gray-600">Analise suas taxas de conversão</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Segmentação de Eventos</h3>
            <p className="text-sm text-gray-600">Segmente seus usuários por comportamento</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Coortes</h3>
            <p className="text-sm text-gray-600">Acompanhe grupos de usuários ao longo do tempo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
