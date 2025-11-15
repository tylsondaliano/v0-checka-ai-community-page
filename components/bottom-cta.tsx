export function BottomCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-emerald-50 py-20">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-20 h-16 w-16 rounded-full bg-orange-400 opacity-50" />
      <div className="absolute bottom-10 right-20 h-20 w-20 rounded-full bg-red-400 opacity-50" />

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Ainda tem dúvidas?</h2>
        <p className="text-gray-600 mb-8 text-pretty max-w-2xl mx-auto">
          Junte-se à conversa, navegue por atualizações de produtos e compartilhe feedback!
        </p>
        <button className="rounded-md bg-[#00c951] px-8 py-4 text-base font-semibold text-white shadow-lg">
          Criar uma Conta
        </button>
      </div>
    </section>
  )
}
