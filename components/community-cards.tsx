import { FileText, MessageCircle, Bell } from "lucide-react"

export function CommunityCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-16">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 h-16 w-16 rounded-full bg-yellow-400 opacity-60" />
      <div className="absolute top-32 right-20 h-12 w-12 rounded-full bg-pink-400 opacity-60" />
      <div className="absolute bottom-20 left-1/4 h-20 w-20 rounded-full bg-blue-400 opacity-40" />
      <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-purple-400 opacity-40" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-balance">
            Junte-se à Nossa Comunidade para Compartilhar e Fazer Perguntas
          </h2>
          <p className="text-gray-600 text-pretty">
            Conecte-se com outros usuários, compartilhe suas experiências e obtenha ajuda da nossa comunidade ativa
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
              <FileText className="h-7 w-7 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore nossos fóruns de suporte</h3>
            <p className="text-sm text-gray-600">Navegue por tópicos e encontre respostas</p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <MessageCircle className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Novo na comunidade?</h3>
            <p className="text-sm text-gray-600">Comece aqui e conheça outros membros</p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
              <Bell className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Inscreva-se para atualizações</h3>
            <p className="text-sm text-gray-600">Receba as últimas notícias e alertas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
